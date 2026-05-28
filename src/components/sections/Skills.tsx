"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

const frontendSkills = [
  "React", "TypeScript", "Next.js", "Tailwind CSS",
  "Framer Motion", "HTML5 / CSS3", "Vite", "Radix UI",
  "React Hook Form", "Zod",
];

const backendSkills = [
  "Firebase", "Node.js", "REST APIs", "Git / GitHub",
  "Vercel", "Figma", "Supabase", "PostgreSQL",
  "Express.js", "Prisma",
];

const frontendDouble = [...frontendSkills, ...frontendSkills];
const backendDouble  = [...backendSkills,  ...backendSkills];

function SkillPill({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold whitespace-nowrap border transition-colors ${
        accent
          ? "bg-accent-cyan/8 border-accent-cyan/18 text-accent-cyan"
          : "bg-white/[0.04] border-white/[0.07] text-white/50"
      }`}
    >
      {label}
    </span>
  );
}

export function Skills() {
  const t = useT();

  return (
    <section id="skills" className="border-t border-white/[0.06] bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge badge-purple">{t.skills.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 max-w-2xl leading-tight text-white">
            {t.skills.title}
          </h2>
          <p className="text-white/40 mt-4 max-w-xl text-base">
            {t.skills.description}
          </p>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-14 flex flex-col gap-4"
        >
          {/* Row 1 — Frontend → */}
          <div className="marquee-container">
            <div className="marquee-track gap-3">
              {frontendDouble.map((skill, i) => (
                <div key={`${skill}-${i}`} className="px-1.5">
                  <SkillPill label={skill} accent={i < frontendSkills.length} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — Backend ← */}
          <div className="marquee-container">
            <div className="marquee-track marquee-track-reverse gap-3">
              {backendDouble.map((skill, i) => (
                <div key={`${skill}-${i}`} className="px-1.5">
                  <SkillPill label={skill} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/25 mb-5 font-mono">
            {t.skills.groups.soft}
          </p>
          <div className="flex flex-wrap gap-3">
            {t.skills.softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="px-4 py-2 rounded-full text-xs font-semibold border border-accent-lime/15 bg-accent-lime/[0.05] text-accent-lime/70"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
