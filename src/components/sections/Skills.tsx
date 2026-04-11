"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

export function Skills() {
  const t = useT();

  const skillGroups = [
    {
      title: t.skills.groups.frontend,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
    },
    {
      title: t.skills.groups.backend,
      skills: ["Firebase", "Node.js", "REST APIs", "Git/GitHub", "Vercel", "Figma"],
    },
    {
      title: t.skills.groups.soft,
      skills: t.skills.softSkills,
    },
  ];

  return (
    <section id="skills" className="relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge">{t.skills.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 max-w-2xl leading-tight">
            {t.skills.title}
          </h2>
          <p className="text-white/40 mt-4 max-w-xl text-base">
            {t.skills.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.15, duration: 0.4 }}
              className="card-bold overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-white/[0.04]">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {group.title}
                </span>
              </div>
              <div className="p-6">
                <ul className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-white/50"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
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
