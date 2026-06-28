"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

function AboutIllustration() {
  return (
    <div
      className="about-anime-image relative aspect-[3/2] w-full overflow-hidden bg-white dark:bg-[#161719]"
      role="img"
      aria-label="Anime illustration of Hamilton Felipe"
    />
  );
}

function useScrollTypewriter(text: string, active: boolean, speed = 18, startDelay = 120) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    const timers: number[] = [];

    const schedule = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(callback, delay);
      timers.push(timer);
    };

    if (!active) {
      schedule(() => setVisibleText(""), 0);
      return () => {
        cancelled = true;
        timers.forEach(window.clearTimeout);
      };
    }

    if (reduceMotion) {
      schedule(() => setVisibleText(text), 0);
      return () => {
        cancelled = true;
        timers.forEach(window.clearTimeout);
      };
    }

    schedule(() => setVisibleText(""), 0);

    const typeNext = (charIndex: number) => {
      if (cancelled) return;

      if (charIndex <= text.length) {
        setVisibleText(text.slice(0, charIndex));
        schedule(() => typeNext(charIndex + 1), speed);
      }
    };

    schedule(() => typeNext(1), startDelay);

    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
    };
  }, [active, text, speed, startDelay]);

  return visibleText;
}

export function About() {
  const t = useT();
  const textBlockRef = useRef<HTMLDivElement>(null);
  const [shouldType, setShouldType] = useState(false);
  const headingFirst = t.about.badge.split(" ")[0];
  const headingBold = t.about.badge.split(" ").slice(1).join(" ") || "Me";
  const headingText = useMemo(
    () => `${headingFirst} ${headingBold}`,
    [headingBold, headingFirst]
  );
  const typedHeading = useScrollTypewriter(headingText, shouldType, 32, 120);
  const headingDone = typedHeading === headingText;
  const typedDescription = useScrollTypewriter(
    t.about.description,
    headingDone,
    12,
    160
  );

  useEffect(() => {
    const target = textBlockRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldType(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -22% 0px", threshold: 0.32 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="border-t border-black/10 bg-white py-24 text-black transition-colors dark:border-white/10 dark:bg-[#161719] dark:text-[#f4f4f2] sm:py-28">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-12 px-5 md:grid-cols-[0.78fr_1.22fr]">
        <motion.div
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-[420px] border border-black p-3 dark:border-white/25 dark:bg-[#202225]"
        >
          <AboutIllustration />
        </motion.div>

        <motion.div
          ref={textBlockRef}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <h2
            className="min-h-[3.5rem] text-[2.35rem] font-normal tracking-[-0.045em] sm:text-5xl"
            aria-label={headingText}
          >
            <span aria-hidden="true">
              {typedHeading.slice(0, headingFirst.length)}
              {typedHeading.length > headingFirst.length ? " " : ""}
              <span className="font-black">
                {typedHeading.slice(headingFirst.length + 1)}
              </span>
              {!headingDone && shouldType ? (
                <span className="ml-1 inline-block h-[0.82em] w-[2px] translate-y-1 bg-black align-baseline hero-type-cursor dark:bg-[#f4f4f2]" />
              ) : null}
            </span>
          </h2>
          <p
            className="mt-7 min-h-[9.75rem] max-w-[660px] text-sm leading-7 text-black/62 dark:text-[#afb1b5] sm:min-h-[8rem] sm:text-base sm:leading-8"
            aria-label={t.about.description}
          >
            <span aria-hidden="true">
              {typedDescription || "\u00a0"}
              {headingDone && typedDescription !== t.about.description ? (
                <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-0.5 bg-black/60 align-baseline hero-type-cursor dark:bg-[#afb1b5]" />
              ) : null}
            </span>
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {t.about.highlights.map((item, index) => (
              <motion.article
                key={item.title}
                transition={{ duration: 0.35, delay: 0.12 + index * 0.05 }}
                className="border border-black bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white dark:border-white/20 dark:bg-[#202225] dark:hover:border-white/45 dark:hover:bg-[#292b2f]"
              >
                <span className="font-mono text-xs font-black">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-sm font-black">{item.title}</h3>
                <p className="mt-3 text-xs leading-5 opacity-70">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
