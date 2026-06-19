"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useT } from "@/lib/i18n";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/LipDev-sudo",
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lip.devbr/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hamilton-felipe-875054383/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
  {
    label: "Email",
    href: "mailto:hamiltonfelipe019@gmail.com",
    path: "M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 20.25 21H3.75a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.523-.75 7.348 6.123a1 1 0 0 0 1.258 0L19.977 4.5H4.023Zm16.977 2.197-7.09 5.908a2.5 2.5 0 0 1-3.82 0L3 6.697V18.75c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V6.697Z",
  },
];

function useTypewriter(lines: string[], speed = 34, linePause = 180, startDelay = 80) {
  const [visibleLines, setVisibleLines] = useState(() => lines.map(() => ""));
  const textKey = useMemo(() => lines.join("\n"), [lines]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    const timers: number[] = [];

    const schedule = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(callback, delay);
      timers.push(timer);
    };

    if (reduceMotion) {
      schedule(() => setVisibleLines(lines), 0);
      return () => {
        cancelled = true;
        timers.forEach(window.clearTimeout);
      };
    }

    schedule(() => setVisibleLines(lines.map(() => "")), 0);

    const typeLine = (lineIndex: number, charIndex: number) => {
      if (cancelled) return;

      if (lineIndex >= lines.length) return;

      if (charIndex <= lines[lineIndex].length) {
        setVisibleLines((current) => {
          const next = [...current];
          next[lineIndex] = lines[lineIndex].slice(0, charIndex);
          return next;
        });

        schedule(() => typeLine(lineIndex, charIndex + 1), speed);
        return;
      }

      schedule(() => typeLine(lineIndex + 1, 1), linePause);
    };

    schedule(() => typeLine(0, 1), startDelay);

    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
    };
  }, [textKey, lines, speed, linePause, startDelay]);

  return visibleLines;
}

export function Hero() {
  const t = useT();
  const nameWithoutPeriod = t.hero.name.replace(".", "");
  const titleLines = useMemo(
    () => [`${t.hero.hello} ${nameWithoutPeriod}`],
    [nameWithoutPeriod, t.hero.hello]
  );
  const roleLine = useMemo(
    () => [`${t.hero.roleMain} ${t.hero.roleOutline}`],
    [t.hero.roleMain, t.hero.roleOutline]
  );
  const roleDelay = 240 + titleLines[0].length * 30;
  const [typedTitle] = useTypewriter(titleLines, 30, 120);
  const [typedRole] = useTypewriter(roleLine, 34, 120, roleDelay);
  const titleDone = typedTitle === titleLines[0];

  return (
    <section id="hero" className="bg-white pt-24 text-black">
      <div className="mx-auto grid min-h-[590px] max-w-[1180px] grid-cols-1 items-center gap-8 px-5 py-8 md:grid-cols-[0.86fr_1.14fr] md:py-4">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-[0.68rem] font-semibold text-black/70">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            {t.hero.available}
          </span>

          <h1
            className="mt-7 min-h-[9rem] max-w-[560px] text-[3rem] font-black leading-[0.98] tracking-[-0.055em] text-black sm:min-h-[8.2rem] sm:text-[4.15rem]"
            aria-label={`${t.hero.hello} ${nameWithoutPeriod}`}
          >
            <span aria-hidden="true">
              {typedTitle || "\u00a0"}
              {!titleDone && (
                <span className="ml-1 inline-block h-[0.82em] w-[3px] translate-y-1 bg-black align-baseline hero-type-cursor" />
              )}
            </span>
          </h1>

          <h2
            className="mt-5 min-h-[2.35rem] font-serif text-[1.95rem] font-black leading-none tracking-[-0.035em] text-black sm:min-h-[2.85rem] sm:text-[2.35rem]"
            aria-label={`${t.hero.roleMain} ${t.hero.roleOutline}`}
          >
            <span aria-hidden="true">
              {typedRole || "\u00a0"}
              {titleDone && (
                <span className="ml-1 inline-block h-[1.9rem] w-[2px] translate-y-1 bg-black hero-type-cursor" />
              )}
            </span>
          </h2>

          <p className="mt-4 max-w-[520px] text-[0.83rem] font-medium leading-[1.55] text-black/68">
            {t.hero.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-[0.72rem] font-semibold text-black/65">
            <span className="inline-flex items-center gap-1.5">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
              {t.hero.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              {t.hero.availableNow}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-9 items-center rounded-full bg-black px-4 text-[0.72rem] font-black text-white transition-opacity hover:opacity-75"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-black px-4 text-[0.72rem] font-black text-black transition-colors hover:bg-black hover:text-white"
            >
              {t.header.resume}
            </a>
          </div>

          <div className="mt-8 h-px w-full max-w-[540px] bg-black/35" />

          <div className="mt-5 flex items-center gap-4">
            <span className="text-[0.78rem] font-semibold text-black/70">Follow me:</span>
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-black hover:text-white ${
                  index === 0 ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <svg width={12} height={12} viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="hero-anime-portrait">
            <Image
              src="/images/felipe-anime-coding.png"
              alt="Ilustração de Hamilton Felipe programando no computador"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 768px) 96vw, 56vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
