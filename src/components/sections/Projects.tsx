"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GameModal } from "@/components/ui/GameModal";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/types";

type Filter = "all" | "ai" | "web";

const filterConfig: { key: Filter; color: string; activeBg: string; activeBorder: string }[] = [
  { key: "all",  color: "#ffffff",  activeBg: "rgba(255,255,255,0.08)", activeBorder: "rgba(255,255,255,0.2)" },
  { key: "ai",   color: "#00d4ff",  activeBg: "rgba(0,212,255,0.08)",   activeBorder: "rgba(0,212,255,0.3)"   },
  { key: "web",  color: "#bef264",  activeBg: "rgba(190,242,100,0.08)", activeBorder: "rgba(190,242,100,0.3)" },
];

export function Projects() {
  const { lang, t } = useLanguage();
  const [filter, setFilter]     = useState<Filter>("all");
  const [gameProject, setGameProject] = useState<Project | null>(null);
  const gameTitle =
    gameProject && lang === "en" && gameProject.title_en
      ? gameProject.title_en
      : gameProject?.title ?? "";

  const filterLabels: Record<Filter, string> = {
    all: t.projects.filterAll,
    ai:  t.projects.filterAi,
    web: t.projects.filterWeb,
  };

  const filtered = [...projects]
    .sort((a, b) => a.order - b.order)
    .filter((p) => filter === "all" || p.category === filter);

  return (
    <>
      <section id="projects" className="relative border-t border-white/[0.06]">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge">{t.projects.badge}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 max-w-2xl leading-tight">
              {t.projects.title}
            </h2>
            <p className="text-white/40 mt-4 max-w-xl text-base">
              {t.projects.description}
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center gap-2 mt-8 flex-wrap"
          >
            {filterConfig.map(({ key, color, activeBg, activeBorder }) => {
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.12em] border transition-all duration-200"
                  style={
                    active
                      ? { color, background: activeBg, borderColor: activeBorder }
                      : { color: "rgba(255,255,255,0.35)", background: "transparent", borderColor: "rgba(255,255,255,0.08)" }
                  }
                >
                  {filterLabels[key]}
                </button>
              );
            })}
          </motion.div>

          {/* Cards grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8"
            >
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  displayIndex={index + 1}
                  onPlay={
                    project.gameUrl
                      ? () => setGameProject(project)
                      : undefined
                  }
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Game modal — rendered outside section to avoid z-index issues */}
      <GameModal
        open={gameProject !== null}
        onClose={() => setGameProject(null)}
        gameUrl={gameProject?.gameUrl}
        title={gameTitle}
      />
    </>
  );
}
