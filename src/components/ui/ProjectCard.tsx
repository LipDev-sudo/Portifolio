"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { useLanguage } from "@/lib/i18n";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
}

const cardColors = [
  "bg-accent-lime",
  "bg-accent-cyan",
  "bg-accent-purple",
  "bg-accent-coral",
  "bg-accent-orange",
  "bg-primary",
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const colorClass = cardColors[project.order % cardColors.length];
  const isLightBg = colorClass === "bg-accent-lime";
  const title =
    lang === "en" && project.title_en ? project.title_en : project.title;
  const description =
    lang === "en" && project.description_en
      ? project.description_en
      : project.description;

  return (
    <motion.article variants={cardVariants} className="card-bold overflow-hidden">
      {/* Colored header area */}
      <div className={`${colorClass} p-5 pb-4`}>
        <div className="flex items-start justify-between">
          <h3
            className={`font-extrabold text-lg ${isLightBg ? "text-foreground" : "text-white"}`}
          >
            {title}
          </h3>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${isLightBg ? "text-foreground/60" : "text-white/60"} hover:${isLightBg ? "text-foreground" : "text-white"} transition-colors`}
              aria-label={t.projects.viewLive}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        <p
          className={`text-sm mt-2 leading-relaxed ${isLightBg ? "text-foreground/70" : "text-white/80"}`}
        >
          {description}
        </p>
      </div>

      {/* Bottom area */}
      <div className="p-5 pt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-secondary font-bold text-foreground border border-border-light"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon size={16} />
            {t.projects.viewCode}
          </a>
          {project.liveUrl && (
            <span className="text-xs font-bold text-accent-cyan uppercase tracking-wider">
              {t.projects.viewLive}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
