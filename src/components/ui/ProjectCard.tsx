"use client";

import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, Lock } from "lucide-react";
import type { Project } from "@/types";
import { useLanguage } from "@/lib/i18n";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  displayIndex: number;
  onPlay?: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function ProjectCard({ project, displayIndex, onPlay }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const isAi = project.category === "ai";
  const categoryLabel = isAi ? t.projects.categoryBadgeAi : t.projects.categoryBadgeWeb;
  const title = lang === "en" && project.title_en ? project.title_en : project.title;
  const description =
    lang === "en" && project.description_en ? project.description_en : project.description;

  return (
    <motion.article
      variants={cardVariants}
      className="group flex min-h-[310px] flex-col border border-white/20 bg-[#111115] p-5 text-white transition-colors hover:border-white/55 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-5xl font-black leading-none text-white/10">
            {String(displayIndex).padStart(2, "0")}
          </span>
          <span className="ml-3 inline-flex border border-white/25 px-2 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-white/65">
            {categoryLabel}
          </span>
        </div>

        <div className="flex items-center gap-3 text-white/55">
          {project.isPrivate ? (
            <span title={t.projects.privateLabel}>
              <Lock size={16} />
            </span>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label={t.projects.viewCode}
            >
              <GithubIcon size={17} />
            </a>
          )}
          {project.gameUrl && onPlay ? (
            <button
              type="button"
              onClick={onPlay}
              className="transition-colors hover:text-white"
              aria-label={`${t.projects.playAria}: ${title}`}
              title={t.projects.playTitle}
            >
              <Gamepad2 size={17} />
            </button>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label={`${t.projects.viewLive}: ${title}`}
            >
              <ExternalLink size={17} />
            </a>
          ) : null}
        </div>
      </div>

      <h3 className="mt-6 text-xl font-black leading-snug text-white">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-white/58">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techs.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="border border-white/15 px-2.5 py-1 font-mono text-[0.65rem] text-white/55"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
        {project.isPrivate ? (
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-white/35">
            <Lock size={13} />
            {t.projects.privateNote}
          </span>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 border border-white/25 px-3 text-xs font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-black sm:min-h-0 sm:py-2"
          >
            <GithubIcon size={13} />
            {t.projects.viewCode}
          </a>
        )}

        {project.gameUrl && onPlay ? (
          <button
            type="button"
            onClick={onPlay}
            className="inline-flex min-h-10 items-center justify-center gap-2 bg-white px-3 text-xs font-black uppercase tracking-[0.08em] text-black transition-opacity hover:opacity-80 sm:min-h-0 sm:py-2"
          >
            <Gamepad2 size={13} />
            {t.projects.playNow}
          </button>
        ) : project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 bg-white px-3 text-xs font-black uppercase tracking-[0.08em] text-black transition-opacity hover:opacity-80 sm:min-h-0 sm:py-2"
            aria-label={`${t.projects.viewLive}: ${title}`}
          >
            <ExternalLink size={13} />
            {t.projects.viewLive}
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
