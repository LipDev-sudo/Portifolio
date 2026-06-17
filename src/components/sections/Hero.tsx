"use client";

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

const stackTags = ["React", "Next.js", "TypeScript", "Node.js", "ChatGPT API", "n8n"];

export function Hero() {
  const t = useT();
  const pipeline = t.hero.commandCenter.pipeline;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
        <div className="hero-noise" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-14 lg:gap-20 items-center">
          <div className="max-w-[calc(100vw-3rem)] sm:max-w-none">
            <div className="hero-reveal mb-8">
              <span className="badge badge-cyan w-full max-w-full flex-wrap leading-relaxed sm:w-auto sm:flex-nowrap">
                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
                <span className="min-w-0 break-words">{t.hero.badge}</span>
                <span className="w-full min-w-0 break-words sm:w-auto">
                  {t.hero.available}
                </span>
              </span>
            </div>

            <h1
              className="hero-reveal hero-delay-1 max-w-full text-[2.1rem] sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.08] lg:leading-[1.03] tracking-tight text-white [overflow-wrap:break-word]"
            >
              <span>{t.hero.titleStart}</span>
              <span className="gradient-text">{t.hero.titleHighlight}</span>
              <span className="block sm:inline">{t.hero.titleEnd}</span>
            </h1>

            <p
              className="hero-reveal hero-delay-2 mt-7 max-w-full text-base sm:text-lg text-white/50 sm:max-w-xl leading-relaxed [overflow-wrap:anywhere]"
            >
              {t.hero.description}
            </p>

            <div
              className="hero-reveal hero-delay-3 flex gap-4 mt-10 flex-wrap"
            >
              <a href="#services" className="btn-primary">
                {t.hero.primaryCta}
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.secondaryCta}
              </a>
            </div>

            <div
              className="hero-reveal hero-delay-4 flex items-center gap-5 mt-10"
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/30 hover:text-primary-light transition-colors duration-300"
                >
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <span className="text-white/10 text-xs">|</span>
              <a
                href="mailto:hamiltonfelipe019@gmail.com"
                className="text-[0.7rem] text-white/30 hover:text-primary-light transition-colors duration-300"
              >
                hamiltonfelipe019@gmail.com
              </a>
            </div>
          </div>

          <div
            className="hero-reveal hero-delay-2 relative max-w-[calc(100vw-3rem)] sm:max-w-none"
          >
            <div className="command-panel rounded-[1.75rem] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-5 mb-6">
                <div>
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-primary-light/70 font-mono">
                    {t.hero.commandCenter.label}
                  </span>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-black gradient-text">
                    {t.hero.statCard.title}
                  </h2>
                </div>
                <div className="relative shrink-0 w-16 h-16 rounded-full border border-primary/25 bg-primary/[0.055]">
                  <span className="hero-pulse-ring absolute inset-2 rounded-full border border-primary/35" />
                  <span className="absolute inset-0 flex items-center justify-center text-[0.72rem] font-black text-primary-light">
                    AI
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {[t.hero.commandCenter.build, t.hero.commandCenter.automate, t.hero.commandCenter.measure].map((item, i) => (
                  <div
                    key={item}
                    className={`hero-reveal hero-card-delay-${i + 1} rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4`}
                  >
                    <span className="text-[0.58rem] text-white/25 font-mono">0{i + 1}</span>
                    <p className="mt-2 text-sm font-semibold text-white/75 leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent-coral" />
                  <span className="w-2 h-2 rounded-full bg-accent-orange" />
                  <span className="w-2 h-2 rounded-full bg-primary-light" />
                  <span className="ml-auto text-[0.6rem] uppercase tracking-[0.18em] text-white/20 font-mono">
                    {t.hero.commandCenter.pipelineLabel}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {pipeline.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span
                        className="rounded-full border px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em]"
                        style={{
                          color: i % 2 === 0 ? "#f0dfbd" : "#d4b98d",
                          borderColor: i % 2 === 0 ? "rgba(240,223,189,0.25)" : "rgba(212,185,141,0.25)",
                          background: i % 2 === 0 ? "rgba(240,223,189,0.06)" : "rgba(212,185,141,0.07)",
                        }}
                      >
                        {step}
                      </span>
                      {i < pipeline.length - 1 && <span className="text-white/15">&gt;</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="rounded-2xl border border-primary/20 bg-primary/[0.065] p-5">
                  <span className="text-3xl font-black text-primary-light">9+</span>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.16em] text-white/35 font-bold">
                    {t.hero.dedicationLabel}
                  </p>
                </div>
                <div className="rounded-2xl border border-accent-coral/20 bg-accent-coral/[0.065] p-5">
                  <span className="text-3xl font-black text-accent-coral">3+</span>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.16em] text-white/35 font-bold">
                    {t.hero.learningLabel}
                  </p>
                </div>
              </div>

              <div className="mt-5 hidden flex-wrap gap-2 sm:flex">
                {stackTags.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/55 font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 hidden grid-cols-2 gap-3 text-xs font-mono sm:grid">
                <div className="rounded-xl bg-black/20 border border-white/[0.06] p-3 text-primary-light">
                  {t.hero.commandCenter.metricOne}
                </div>
                <div className="rounded-xl bg-black/20 border border-white/[0.06] p-3 text-accent-coral">
                  {t.hero.commandCenter.metricTwo}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-reveal hero-delay-5 flex justify-center mt-16 lg:mt-20"
        >
          <a
            href="#about"
            aria-label={t.hero.scrollAria}
            className="flex flex-col items-center gap-2.5 text-white/25 hover:text-white/55 transition-colors"
          >
            <span className="text-[0.6rem] font-mono uppercase tracking-[0.25em]">
              {t.hero.scrollLabel}
            </span>
            <div className="scroll-bounce">
              <ArrowDown size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
