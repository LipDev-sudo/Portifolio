"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

function AboutIllustration() {
  return (
    <svg viewBox="0 0 360 280" className="h-auto w-full" role="img" aria-label="Developer illustration">
      <rect x="54" y="12" width="252" height="188" rx="3" fill="#fff" stroke="#000" strokeWidth="4" />
      <path d="M122 199c15-38 34-58 58-58s43 20 58 58" fill="#000" />
      <path d="M130 165c-20 12-40 34-54 72 49 30 161 31 209 0-15-38-34-60-55-72" fill="#000" />
      <path d="M139 201c34 33 83 33 117 0" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
      <path d="M122 113c18-24 42-36 72-36 31 0 53 14 67 39-9-40-31-62-66-66-38-5-64 17-73 63Z" fill="#000" />
      <path d="M137 115c8-36 31-52 65-49 33 3 52 22 58 57-1 38-26 63-63 63-36 0-60-26-60-71Z" fill="#fff" stroke="#000" strokeWidth="4" />
      <path d="M143 104c25 1 49-7 72-24 9 20 23 32 42 37" fill="none" stroke="#000" strokeWidth="8" strokeLinecap="round" />
      <circle cx="176" cy="128" r="4" fill="#000" />
      <circle cx="222" cy="128" r="4" fill="#000" />
      <path d="M186 156c10 7 22 7 34 0" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      <path d="M65 242c50-28 103-40 161-34" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
      <path d="M224 207c28 2 53 10 75 24" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
      <path d="M93 241c50 20 111 20 182 0" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function About() {
  const t = useT();

  return (
    <section id="about" className="bg-white py-20 text-black">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-start gap-12 px-5 md:grid-cols-[0.75fr_1.25fr]">
        <motion.div
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-[360px]"
        >
          <AboutIllustration />
        </motion.div>

        <motion.div
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <h2 className="text-3xl font-normal tracking-tight sm:text-4xl">
            {t.about.badge.split(" ")[0]}{" "}
            <span className="font-black">{t.about.badge.split(" ").slice(1).join(" ") || "Me"}</span>
          </h2>
          <p className="mt-7 max-w-[620px] text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
            {t.about.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.about.highlights.map((item, index) => (
              <motion.article
                key={item.title}
                transition={{ duration: 0.35, delay: 0.12 + index * 0.05 }}
                className="border border-black p-4 transition-colors hover:bg-black hover:text-white"
              >
                <span className="text-xs font-black">{String(index + 1).padStart(2, "0")}</span>
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
