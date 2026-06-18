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
    <section id="skills" className="border-t border-black/10 bg-white py-24 text-black sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5">
        <motion.h2
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-[2.45rem] font-normal tracking-[-0.045em] sm:text-5xl"
        >
          {t.skills.headingStart}{" "}
          <span className="font-black">{t.skills.headingBold}</span>
        </motion.h2>

        <p className="mx-auto mt-4 max-w-[540px] text-center text-sm leading-6 text-black/55">
          {t.skills.description}
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className={`group flex aspect-square flex-col items-center justify-center border border-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white ${
                  skill.active ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <Icon size={34} strokeWidth={2.5} />
                <span className="mt-5 text-sm font-black tracking-[-0.02em]">{skill.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
