"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/types";
import { useT } from "@/lib/i18n";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

const neonColors = {
  web: ["#00d4ff", "#a855f7", "#bef264", "#ff4d6d", "#fb923c", "#60a5fa"],
  ai:  ["#00d4ff", "#a855f7", "#bef264"],
};

interface ProjectCardProps {
  project: Project;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useT();
  const palette = neonColors[project.category];
  const color = palette[project.order % palette.length];
  const isAi = project.category === "ai";
  const categoryLabel = isAi ? t.projects.categoryBadgeAi : t.projects.categoryBadgeWeb;

  return (
    <motion.article
      variants={cardVariants}
      className="card-bold overflow-hidden group flex flex-col"
    >
      {/* Neon top accent line */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span
              className="text-4xl font-black font-mono leading-none select-none"
              style={{ color: `${color}22` }}
            >
              {String(project.order + 1).padStart(2, "0")}
            </span>
            {/* Category badge */}
            <span
              className="text-[0.6rem] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border"
              style={{
                color,
                borderColor: `${color}30`,
                background: `${color}0d`,
              }}
            >
              {categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.isPrivate ? (
              <span className="text-white/20" title={t.projects.privateLabel}>
                <Lock size={15} />
              </span>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/25 hover:text-white/70 transition-colors"
                aria-label={t.projects.viewCode}
              >
                <GithubIcon size={17} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/25 hover:text-white/70 transition-colors"
                aria-label={t.projects.viewLive}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Title & description */}
        <h3 className="font-extrabold text-lg text-white mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="text-[0.68rem] px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.06]">
          {project.isPrivate ? (
            <span className="flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white/20 font-mono">
              <Lock size={11} />
              {t.projects.privateNote}
            </span>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white/30 hover:text-white/70 transition-colors font-mono"
            >
              <GithubIcon size={13} />
              {t.projects.viewCode}
            </a>
          )}
          {project.liveUrl && (
            <span
              className="text-[0.7rem] font-bold uppercase tracking-wider font-mono"
              style={{ color }}
            >
              {t.projects.viewLive}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
