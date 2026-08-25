"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Container,
  Database,
  GitBranch,
  Globe2,
  MousePointer2,
  Network,
  Server,
  TestTube2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const skills = [
  { label: "Python", level: { pt: "Intermediário", en: "Intermediate" }, icon: Braces },
  { label: "Flask", level: { pt: "Principal framework", en: "Main framework" }, icon: Server },
  { label: "REST APIs", level: { pt: "Integração e estudo", en: "Integration and study" }, icon: Network },
  { label: "SQLite", level: { pt: "CRUD pessoal", en: "Personal CRUD" }, icon: Database },
  { label: "MySQL", level: { pt: "Prática em evolução", en: "Evolving practice" }, icon: Database },
  { label: "Requests", level: { pt: "Integração com APIs", en: "API integration" }, icon: Globe2 },
  { label: "Selenium", level: { pt: "Automação local", en: "Local automation" }, icon: MousePointer2 },
  { label: "pytest", level: { pt: "Exercícios básicos", en: "Basic exercises" }, icon: TestTube2 },
  { label: "Docker", level: { pt: "Exercícios básicos", en: "Basic exercises" }, icon: Container },
  { label: "Git & GitHub", level: { pt: "Versão e publicação", en: "Versioning and publishing" }, icon: GitBranch },
];

export function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="border-t border-black/10 bg-white py-24 text-black transition-colors dark:border-white/10 dark:bg-[#161719] dark:text-[#f4f4f2] sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5">
        <motion.h2
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-[2.45rem] font-normal tracking-[-0.045em] sm:text-5xl"
        >
          {t.skills.headingStart}{" "}
          <span className="font-black">{t.skills.headingBold}</span>
        </motion.h2>

        <p className="mx-auto mt-4 max-w-[540px] text-center text-sm leading-6 text-black/55 dark:text-[#afb1b5]">
          {t.skills.description}
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="group flex aspect-square flex-col items-center justify-center border border-black bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white dark:border-white/20 dark:bg-[#202225] dark:text-[#f4f4f2] dark:hover:border-white/45 dark:hover:bg-[#292b2f]"
              >
                <Icon size={34} strokeWidth={2.5} />
                <span className="mt-5 text-sm font-black tracking-[-0.02em]">{skill.label}</span>
                <span className="mt-1 px-2 text-center text-[0.62rem] font-semibold opacity-60">
                  {skill.level[lang]}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
