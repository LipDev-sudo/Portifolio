"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, Star } from "lucide-react";
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function ProjectCard({ project, displayIndex, onPlay }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const title = lang === "en" && project.title_en ? project.title_en : project.title;
  const description = lang === "en" && project.description_en ? project.description_en : project.description;
  const problem = lang === "en" && project.problem_en ? project.problem_en : project.problem;
  const solution = lang === "en" && project.solution_en ? project.solution_en : project.solution;
  const statusLabels: Record<Project["status"], string> = {
    complete: t.projects.statuses.complete,
    "functional-demo": t.projects.statuses.functionalDemo,
    prototype: t.projects.statuses.prototype,
    "in-development": t.projects.statuses.inDevelopment,
  };

  return (
    <motion.article
      variants={cardVariants}
      className="group flex min-h-full flex-col overflow-hidden border border-white/20 bg-[#080808] text-white transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/60 dark:bg-[#161719]"
    >
      {project.imageUrl ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-white/15 bg-white/5">
          <Image
            src={project.imageUrl}
            alt={`${title} — ${t.projects.previewLabel}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-black text-white/45">
              {String(displayIndex).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-white/25 px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.12em] text-white/75">
              {statusLabels[project.status]}
            </span>
            {project.featured ? (
              <span className="inline-flex items-center gap-1 text-[0.6rem] font-black uppercase tracking-[0.12em] text-white/65">
                <Star size={11} aria-hidden="true" />
                {t.projects.featuredLabel}
              </span>
            ) : null}
          </div>
          <span className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-white/45">
            {t.projects.categoryBadgeWeb}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-[1.7rem]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/65">{description}</p>

        <dl className="mt-6 grid gap-4 border-y border-white/15 py-5 sm:grid-cols-2">
          <div>
            <dt className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-white/45">
              {t.projects.problemLabel}
            </dt>
            <dd className="mt-2 text-xs leading-5 text-white/70">{problem}</dd>
          </div>
          <div>
            <dt className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-white/45">
              {t.projects.solutionLabel}
            </dt>
            <dd className="mt-2 text-xs leading-5 text-white/70">{solution}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techs.slice(0, 6).map((tech) => (
            <span key={tech} className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[0.62rem] text-white/60">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/30 px-4 text-xs font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-black"
          >
            <GithubIcon size={13} />
            {t.projects.viewCode}
          </a>

          {onPlay ? (
            <button
              type="button"
              onClick={onPlay}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 text-xs font-black uppercase tracking-[0.08em] text-black transition-opacity hover:opacity-80"
            >
              <Gamepad2 size={14} />
              {t.projects.playNow}
            </button>
          ) : project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 text-xs font-black uppercase tracking-[0.08em] text-black transition-opacity hover:opacity-80"
              aria-label={`${t.projects.viewLive}: ${title}`}
            >
              <ExternalLink size={14} />
              {t.projects.viewLive}
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
