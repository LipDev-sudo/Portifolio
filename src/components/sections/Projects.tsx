"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="border-t-[2.5px] border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-coral">Portfólio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 max-w-2xl leading-tight">
            Projetos que falam por si.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            Cada projeto é uma oportunidade de aprender, resolver problemas e
            entregar valor real.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14"
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
