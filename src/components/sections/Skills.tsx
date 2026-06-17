"use client";

import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Network, Palette, Sparkles, Workflow, Zap } from "lucide-react";
import { useT } from "@/lib/i18n";

const skills = [
  { label: "Git", icon: GitBranch },
  { label: "JavaScript", icon: Code2, active: true },
  { label: "React", icon: Sparkles },
  { label: "Next.js", icon: Zap },
  { label: "TypeScript", icon: Code2 },
  { label: "Node.js", icon: Network },
  { label: "n8n", icon: Workflow },
  { label: "IA APIs", icon: Sparkles },
  { label: "Prisma", icon: Database },
  { label: "Figma", icon: Palette },
];

export function Skills() {
  const t = useT();

  return (
    <section id="skills" className="bg-white py-20 text-black">
      <div className="mx-auto max-w-[1080px] px-5">
        <motion.h2
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center text-[2.35rem] font-normal tracking-[-0.04em]"
        >
          {t.skills.headingStart}{" "}
          <span className="font-black">{t.skills.headingBold}</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className={`flex aspect-square flex-col items-center justify-center border-2 border-black transition-transform hover:-translate-y-1 ${
                  skill.active ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <Icon size={36} strokeWidth={2.6} />
                <span className="mt-5 text-sm font-black">{skill.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
