"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useT } from "@/lib/i18n";

export function Projects() {
  const t = useT();

  return (
    <section id="projects" className="border-t border-border bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-coral">{t.projects.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 max-w-2xl leading-tight">
            {t.projects.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            {t.projects.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
