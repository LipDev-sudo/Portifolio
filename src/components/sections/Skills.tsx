"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

export function Skills() {
  const t = useT();

  const skillGroups = [
    {
      title: t.skills.groups.frontend,
      accent: "bg-accent-lime/10 text-accent-lime border-accent-lime/20",
      dot: "bg-accent-lime",
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
      accent: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
      dot: "bg-accent-purple",
      skills: ["Firebase", "Node.js", "REST APIs", "Git/GitHub", "Vercel", "Figma"],
    },
    {
      title: t.skills.groups.soft,
      accent: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
      dot: "bg-accent-cyan",
      skills: t.skills.softSkills,
    },
  ];

  return (
    <section id="skills" className="border-t border-border bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-purple">{t.skills.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 max-w-2xl leading-tight">
            {t.skills.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
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
              {/* Header */}
              <div className="px-6 py-4 border-b border-border">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${group.accent}`}
                >
                  {group.title}
                </span>
              </div>

              {/* Skills list */}
              <div className="p-6">
                <ul className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${group.dot} flex-shrink-0`}
                      />
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
