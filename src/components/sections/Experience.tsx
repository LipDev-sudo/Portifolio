"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Layers3 } from "lucide-react";
import { useT } from "@/lib/i18n";

const icons = [Code2, Layers3, Cpu];

export function Experience() {
  const t = useT();

  return (
    <section className="bg-black py-24 text-white transition-colors dark:bg-[#101113] sm:py-28" id="experience">
      <div className="mx-auto max-w-[1120px] px-5">
        <motion.h2
          transition={{ duration: 0.45 }}
          className="text-center text-[2.35rem] font-normal tracking-[-0.045em] sm:text-5xl"
        >
          {t.experience.headingStart}{" "}
          <span className="font-black">{t.experience.headingBold}</span>
        </motion.h2>

        <div className="mx-auto mt-14 flex max-w-[980px] flex-col gap-6">
          {t.experience.items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={`${item.company}-${item.role}`}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`border border-white/20 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/55 sm:px-6 ${
                  index === 1 ? "bg-white/[0.11]" : "bg-[#080808] dark:bg-[#161719]"
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-black">
                      <Icon size={16} strokeWidth={2.7} />
                    </span>
                    <div>
                      <h3 className="text-sm font-black leading-snug text-white sm:text-base">
                        {item.role}{" "}
                        <span className="font-semibold text-white/65">- {item.company}</span>
                      </h3>
                    </div>
                  </div>
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-white/45 sm:pt-1">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 max-w-[790px] text-xs leading-6 text-white/58 sm:text-sm">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
