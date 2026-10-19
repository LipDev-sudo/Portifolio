"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GameModal } from "@/components/ui/GameModal";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/types";

type Filter = "featured" | "all";

// Espaço reservado para um projeto futuro. Defina como false para ocultá-lo.
const SHOW_NEXT_PROJECT_SLOT = true;

export function Projects() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("featured");
  const [gameProject, setGameProject] = useState<Project | null>(null);
  const gameTitle =
    gameProject && lang === "en" && gameProject.title_en
      ? gameProject.title_en
      : gameProject?.title ?? "";

  const filtered = [...projects]
    .sort((a, b) => a.order - b.order)
    .filter((project) => filter === "all" || project.featured);

  return (
    <>
      <section id="projects" className="relative bg-black py-24 text-white transition-colors dark:bg-[#101113] sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[2.35rem] font-normal tracking-[-0.045em] sm:text-5xl">
              {t.projects.headingStart}{" "}
              <span className="font-black">{t.projects.headingBold}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-sm leading-6 text-white/65">
              {t.projects.description}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-2" role="group" aria-label={t.projects.filterLabel}>
            {(["featured", "all"] as const).map((key) => {
              const active = filter === key;
              const label = key === "featured" ? t.projects.filterFeatured : t.projects.filterAll;

              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(key)}
                  className={`inline-flex min-h-11 items-center rounded-full border px-5 text-xs font-black uppercase tracking-[0.12em] transition-colors ${
                    active
                      ? "border-white bg-white text-black"
                      : "border-white/30 bg-transparent text-white/70 hover:border-white hover:text-white"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  displayIndex={index + 1}
                  onPlay={project.playable ? () => setGameProject(project) : undefined}
                />
              ))}
              {SHOW_NEXT_PROJECT_SLOT && filter === "featured" ? (
                <motion.article
                  className="flex min-h-[18rem] flex-col items-center justify-center border border-dashed border-white/25 p-7 text-center"
                  aria-label={t.projects.nextProjectTitle}
                >
                  <h3 className="text-xl font-black tracking-[-0.03em] text-white/75">
                    {t.projects.nextProjectTitle}
                  </h3>
                  <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/65">
                    {t.projects.nextProjectText}
                  </p>
                </motion.article>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <GameModal
        open={gameProject !== null}
        onClose={() => setGameProject(null)}
        title={gameTitle}
      />
    </>
  );
}
