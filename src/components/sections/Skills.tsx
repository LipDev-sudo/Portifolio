"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

export function Skills() {
  const t = useT();

  const skillGroups = [
    {
      title: t.skills.groups.frontend,
      color: "bg-accent-lime",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML/CSS",
        "Framer Motion",
      ],
    },
    {
      title: t.skills.groups.backend,
      color: "bg-accent-purple",
      skills: ["Firebase", "Node.js", "REST APIs", "Git/GitHub", "Vercel", "Figma"],
    },
    {
      title: t.skills.groups.soft,
      color: "bg-accent-cyan",
      skills: t.skills.softSkills,
    },
  ];

  return (
    <section id="skills" className="border-t-[2.5px] border-border bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-purple">{t.skills.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 max-w-2xl leading-tight">
            {t.skills.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            {t.skills.description}
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
