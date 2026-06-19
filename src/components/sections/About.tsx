"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

function AboutIllustration() {
  return (
    <div
      className="relative aspect-[3/2] w-full overflow-hidden bg-white"
      role="img"
      aria-label="Anime illustration of Hamilton Felipe"
    >
      <Image
        src="/images/felipe-anime-coding.png"
        alt=""
        fill
        sizes="(max-width: 768px) 90vw, 360px"
        className="object-contain"
      />
    </div>
  );
}

export function About() {
  const t = useT();

  return (
    <section id="about" className="border-t border-black/10 bg-white py-24 text-black sm:py-28">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-12 px-5 md:grid-cols-[0.78fr_1.22fr]">
        <motion.div
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-[420px] border border-black p-3"
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
