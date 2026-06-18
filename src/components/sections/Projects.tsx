"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GameModal } from "@/components/ui/GameModal";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/types";

type Filter = "all" | "ai" | "web";

const filterConfig: { key: Filter }[] = [
  { key: "all" },
  { key: "ai" },
  { key: "web" },
];

export function Projects() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [gameProject, setGameProject] = useState<Project | null>(null);
  const gameTitle =
    gameProject && lang === "en" && gameProject.title_en
      ? gameProject.title_en
      : gameProject?.title ?? "";

  const filterLabels: Record<Filter, string> = {
    all: t.projects.filterAll,
    ai: t.projects.filterAi,
    web: t.projects.filterWeb,
  };

  const filtered = [...projects]
    .sort((a, b) => a.order - b.order)
    .filter((p) => filter === "all" || p.category === filter);

  return (
    <>
      <section id="projects" className="relative bg-black py-24 text-white sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5">
          <motion.div transition={{ duration: 0.5 }} className="mx-auto max-w-[690px] text-center">
            <h2 className="text-[2.35rem] font-normal tracking-[-0.045em] sm:text-5xl">
              {t.projects.headingStart}{" "}
              <span className="font-black">{t.projects.headingBold}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-sm leading-6 text-white/55">
              {t.projects.description}
            </p>
          </motion.div>

          <motion.div
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-2"
          >
            {filterConfig.map(({ key }) => {
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`rounded-full border px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] transition-colors ${
                    active
                      ? "border-white bg-white text-black"
                      : "border-white/25 bg-transparent text-white/55 hover:border-white hover:text-white"
                  }`}
                >
                  {filterLabels[key]}
                </button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  displayIndex={index + 1}
                  onPlay={project.gameUrl ? () => setGameProject(project) : undefined}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <GameModal
        open={gameProject !== null}
        onClose={() => setGameProject(null)}
        gameUrl={gameProject?.gameUrl}
        title={gameTitle}
      />
    </>
  );
}
