"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const title =
    lang === "en" && project.title_en ? project.title_en : project.title;
  const description =
    lang === "en" && project.description_en
      ? project.description_en
      : project.description;

  return (
    <motion.article variants={cardVariants} className="card-bold overflow-hidden group">
      {/* Image */}
      {project.imageUrl && (
        <div className="relative h-48 overflow-hidden border-b border-border">
          <Image
            src={project.imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-base">{title}</h3>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t.projects.viewLive}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="text-[0.65rem] px-2 py-0.5 rounded-full bg-card border border-border font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon size={14} />
            {t.projects.viewCode}
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-primary-light hover:text-primary transition-colors"
            >
              {t.projects.viewLive}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
