"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

function AboutIllustration() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="h-auto w-full"
      role="img"
      aria-label="Anime illustration of Hamilton Felipe in a different pose"
    >
      <rect x="38" y="18" width="344" height="252" rx="3" fill="#fff" stroke="#000" strokeWidth="3" />
      <path d="M76 274h268" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M84 61h62" stroke="#000" strokeWidth="3" strokeLinecap="round" opacity=".75" />
      <path d="M84 78h38" stroke="#000" strokeWidth="3" strokeLinecap="round" opacity=".75" />
      <path d="M324 63h27" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M337.5 49.5v27" stroke="#000" strokeWidth="3" strokeLinecap="round" />

      <path
        d="M129 258c14-55 48-89 101-99 54 10 89 44 105 99-62 22-131 22-206 0Z"
        fill="#161616"
        stroke="#000"
        strokeWidth="3"
      />
      <path d="M171 181c30 27 66 34 108 0" stroke="#2d2d2d" strokeWidth="6" strokeLinecap="round" />
      <path d="M168 213c42 28 85 28 128 0" stroke="#303030" strokeWidth="4" strokeLinecap="round" />

      <path
        d="M141 250c35-25 74-44 117-57"
        fill="none"
        stroke="#f3d3c0"
        strokeWidth="28"
        strokeLinecap="round"
      />
      <path
        d="M141 250c35-25 74-44 117-57"
        fill="none"
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M322 251c-38-27-78-47-120-60"
        fill="none"
        stroke="#f3d3c0"
        strokeWidth="28"
        strokeLinecap="round"
      />
      <path
        d="M322 251c-38-27-78-47-120-60"
        fill="none"
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M155 244c49 24 101 24 156 0" stroke="#f8f8f8" strokeWidth="6" strokeLinecap="round" />
      <path d="M168 250c44 14 87 14 131 0" stroke="#000" strokeWidth="3" strokeLinecap="round" opacity=".55" />

      <path
        d="M179 124c1 43 22 72 55 72 32 0 52-29 52-72 0-39-21-61-54-61-32 0-51 22-53 61Z"
        fill="#f3d3c0"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M178 116c9-38 31-59 66-63 34 3 53 22 58 53-17 2-36-2-58-10-18 14-40 21-66 20Z"
        fill="#121212"
      />
      <path d="M190 85c30-15 62-18 96-7" stroke="#303030" strokeWidth="2.3" strokeLinecap="round" opacity=".7" />
      <path d="M199 76c28-9 57-9 84 2" stroke="#303030" strokeWidth="2.3" strokeLinecap="round" opacity=".55" />
      <path d="M207 68c24-5 47-3 70 6" stroke="#303030" strokeWidth="2" strokeLinecap="round" opacity=".45" />
      <path d="M188 111c22-6 42-16 60-31" stroke="#000" strokeWidth="4.2" strokeLinecap="round" />
      <path d="M243 88c17 12 36 18 57 18" stroke="#000" strokeWidth="4.2" strokeLinecap="round" />

      <path
        d="M283 123c10-8 23-6 31 6 8 13 3 28-11 35-9 4-18 3-25-3"
        fill="#f3d3c0"
        stroke="#000"
        strokeWidth="3"
      />
      <path d="M293 143c5-7 10-8 16-2" stroke="#000" strokeWidth="2" strokeLinecap="round" opacity=".55" />
      <path d="M198 139c11-7 23-7 36 0" stroke="#000" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M252 138c11-6 22-5 33 2" stroke="#000" strokeWidth="3.2" strokeLinecap="round" />
      <ellipse cx="214" cy="151" rx="4.6" ry="6.6" fill="#111" />
      <ellipse cx="267" cy="151" rx="4.6" ry="6.6" fill="#111" />
      <path d="M231 163c4 4 9 4 14 0" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M229 176c14 8 30 8 46 0" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M193 170c10 15 25 25 43 30" stroke="#000" strokeWidth="2.5" strokeLinecap="round" opacity=".42" />
      <path d="M277 169c-10 16-23 27-40 32" stroke="#000" strokeWidth="2.5" strokeLinecap="round" opacity=".42" />
      <path d="M198 181c23 20 49 22 78 4" stroke="#000" strokeWidth="2" strokeLinecap="round" opacity=".22" />
      <path d="M190 196c10 12 25 18 45 18 21 0 38-7 50-20" stroke="#000" strokeWidth="2.5" strokeLinecap="round" opacity=".18" />

      <path d="M157 252h48" stroke="#000" strokeWidth="4" strokeLinecap="round" opacity=".2" />
      <path d="M258 252h52" stroke="#000" strokeWidth="4" strokeLinecap="round" opacity=".2" />
      <path d="M123 106l18 18 25-35" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="301" y="194" width="41" height="28" rx="3" fill="#fff" stroke="#000" strokeWidth="3" />
      <path d="M310 207h20" stroke="#000" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function About() {
  const t = useT();

  return (
    <section id="about" className="border-t border-black/10 bg-white py-24 text-black sm:py-28">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-12 px-5 md:grid-cols-[0.78fr_1.22fr]">
        <motion.div
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-[360px] border border-black p-3"
        >
          <AboutIllustration />
        </motion.div>

        <motion.div
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <h2 className="text-[2.35rem] font-normal tracking-[-0.045em] sm:text-5xl">
            {t.about.badge.split(" ")[0]}{" "}
            <span className="font-black">{t.about.badge.split(" ").slice(1).join(" ") || "Me"}</span>
          </h2>
          <p className="mt-7 max-w-[660px] text-sm leading-7 text-black/62 sm:text-base sm:leading-8">
            {t.about.description}
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {t.about.highlights.map((item, index) => (
              <motion.article
                key={item.title}
                transition={{ duration: 0.35, delay: 0.12 + index * 0.05 }}
                className="border border-black p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
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
