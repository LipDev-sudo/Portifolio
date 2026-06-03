"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useT } from "@/lib/i18n";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/LipDev-sudo",
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hamilton-felipe-875054383/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lip.devbr/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z",
  },
];

export function Hero() {
  const t = useT();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Text */}
          <div className="max-w-[calc(100vw-3rem)] sm:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="badge badge-cyan w-full max-w-full flex-wrap leading-relaxed sm:w-auto sm:flex-nowrap">
                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-accent-cyan animate-pulse" />
                <span className="min-w-0 break-words">
                  {t.hero.badge}
                </span>
                <span className="w-full min-w-0 break-words sm:w-auto">
                  {t.hero.available}
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-full text-[2.28rem] sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] tracking-tight text-white [overflow-wrap:break-word]"
            >
              <span>{t.hero.titleStart}</span>
              <span className="gradient-text">{t.hero.titleHighlight}</span>
              <span className="block sm:inline">{t.hero.titleEnd.trim()}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-7 max-w-full text-base sm:text-lg text-white/45 sm:max-w-lg leading-relaxed [overflow-wrap:anywhere]"
              style={{ overflowWrap: "anywhere" }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex gap-4 mt-10 flex-wrap"
            >
              <a href="#services" className="btn-primary">
                {t.hero.primaryCta}
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.secondaryCta}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-5 mt-10"
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/30 hover:text-accent-cyan transition-colors duration-300"
                >
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <span className="text-white/10 text-xs">|</span>
              <a
                href="mailto:hamiltonfelipe019@gmail.com"
                className="text-[0.7rem] text-white/30 hover:text-accent-cyan transition-colors duration-300"
              >
                hamiltonfelipe019@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Right — Stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="glass-card rounded-2xl p-8">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent-cyan/70 mb-4 block font-mono">
                {t.hero.statCard.badge}
              </span>
              <span className="text-5xl sm:text-6xl font-extrabold gradient-text leading-none">
                {t.hero.statCard.title}
              </span>
              <span className="text-xs font-mono text-white/30 mt-4 block tracking-wider">
                {t.hero.statCard.stack}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-extrabold text-accent-lime">
                  9+
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/35 mt-2">
                  {t.hero.dedicationLabel}
                </span>
              </div>
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-extrabold text-accent-cyan">
                  3+
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/35 mt-2">
                  {t.hero.learningLabel}
                </span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "ChatGPT API", "n8n"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/55 font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-20"
        >
          <a
            href="#about"
            aria-label={t.hero.scrollAria}
            className="flex flex-col items-center gap-2.5 text-white/25 hover:text-white/55 transition-colors"
          >
            <span className="text-[0.6rem] font-mono uppercase tracking-[0.25em]">
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
