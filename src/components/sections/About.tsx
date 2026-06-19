"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

function AboutIllustration() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="h-auto w-full"
      role="img"
      aria-label="Ilustração anime de Hamilton Felipe em uma pose diferente"
    >
      <rect x="38" y="18" width="344" height="252" rx="3" fill="#fff" stroke="#000" strokeWidth="3" />
      <path d="M78 274h264" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M84 62h63" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M84 79h38" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M323 60h26" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M336 47v26" stroke="#000" strokeWidth="3" strokeLinecap="round" />

      <path
        d="M134 258c8-54 37-89 88-103 50 12 82 47 96 103-57 20-118 20-184 0Z"
        fill="#111"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M171 176c17 19 34 29 51 30 20-3 37-13 51-30"
        fill="none"
        stroke="#2b2b2b"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M172 254c34-27 66-50 96-68"
        fill="none"
        stroke="#f3d7c7"
        strokeWidth="27"
        strokeLinecap="round"
      />
      <path
        d="M172 254c34-27 66-50 96-68"
        fill="none"
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M286 255c-37-26-72-48-105-66"
        fill="none"
        stroke="#f3d7c7"
        strokeWidth="27"
        strokeLinecap="round"
      />
      <path
        d="M286 255c-37-26-72-48-105-66"
        fill="none"
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M157 248c45 24 92 25 140 1"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M179 126c-1 41 21 70 53 70 32 0 53-28 52-70-1-38-21-59-53-59-31 0-50 21-52 59Z"
        fill="#f3d7c7"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M178 117c10-34 30-53 61-57 32 2 51 18 58 47-18 2-37-1-56-9-18 16-39 22-63 19Z"
        fill="#111"
      />
      <path d="M193 86c28-13 57-14 88-3" stroke="#303030" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      <path d="M204 76c25-7 49-6 72 3" stroke="#303030" strokeWidth="2" strokeLinecap="round" opacity=".55" />
      <path d="M189 113c18-8 36-17 53-28" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      <path d="M242 91c15 11 32 16 51 16" stroke="#000" strokeWidth="4" strokeLinecap="round" />

      <path
        d="M281 124c10-8 23-6 31 5 8 12 4 27-9 34-8 4-17 3-24-2"
        fill="#f3d7c7"
        stroke="#000"
        strokeWidth="3"
      />
      <path d="M198 139c11-6 22-6 33 0" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M252 138c10-5 20-4 30 2" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="213" cy="151" rx="4.5" ry="6" fill="#111" />
      <ellipse cx="265" cy="151" rx="4.5" ry="6" fill="#111" />
      <path d="M229 174c15 8 30 8 45 0" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M231 163c4 4 8 4 13 0" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M193 170c10 14 24 24 41 30" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" opacity=".45" />
      <path d="M275 169c-9 16-22 26-39 31" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" opacity=".45" />

      <path d="M154 244h45" stroke="#000" strokeWidth="4" strokeLinecap="round" opacity=".22" />
      <path d="M258 244h48" stroke="#000" strokeWidth="4" strokeLinecap="round" opacity=".22" />
      <path d="M123 105l18 18 24-34" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="300" y="193" width="40" height="28" rx="3" fill="#fff" stroke="#000" strokeWidth="3" />
      <path d="M309 206h20" stroke="#000" strokeWidth="3" strokeLinecap="round" />
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
