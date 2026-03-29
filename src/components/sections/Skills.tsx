"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    badge: "badge-lime",
    color: "bg-accent-lime",
    textColor: "text-foreground",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    title: "Backend & Tools",
    badge: "badge-purple",
    color: "bg-accent-purple",
    textColor: "text-white",
    skills: ["Firebase", "Node.js", "REST APIs", "Git/GitHub", "Vercel", "Figma"],
  },
  {
    title: "Soft Skills",
    badge: "badge-cyan",
    color: "bg-accent-cyan",
    textColor: "text-white",
    skills: ["Resolução de Problemas", "Comunicação", "Trabalho em Equipe", "Aprendizado Rápido", "Organização", "Proatividade"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t-[2.5px] border-border bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-purple">Habilidades</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 max-w-2xl leading-tight">
            Stack moderna. Resultado real.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            Tecnologias e ferramentas que domino para entregar projetos de alto
            nível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.15, duration: 0.4 }}
              className={`card-bold overflow-hidden`}
            >
              {/* Colored header */}
              <div className={`${group.color} px-6 py-5`}>
                <span className={`badge badge-dark`}>{group.title}</span>
              </div>

              {/* Skills list */}
              <div className="p-6">
                <ul className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
