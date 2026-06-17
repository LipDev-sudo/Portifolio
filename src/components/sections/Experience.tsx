"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Layers3 } from "lucide-react";
import { useT } from "@/lib/i18n";

const icons = [Code2, Layers3, Cpu];

export function Experience() {
  const t = useT();

  return (
    <section className="bg-black py-20 text-white" id="experience">
      <div className="mx-auto max-w-[1080px] px-5">
        <motion.h2
          transition={{ duration: 0.45 }}
          className="text-center text-3xl font-normal tracking-tight sm:text-4xl"
        >
          {t.experience.headingStart}{" "}
          <span className="font-black">{t.experience.headingBold}</span>
        </motion.h2>

        <div className="mx-auto mt-14 flex max-w-[920px] flex-col gap-6">
          {t.experience.items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={`${item.company}-${item.role}`}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border border-white/20 bg-[#101014] px-5 py-5 transition-colors hover:border-white/45 sm:px-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center bg-white text-black">
                      <Icon size={16} strokeWidth={2.7} />
                    </span>
                    <div>
                      <h3 className="text-sm font-black text-white sm:text-base">
                        {item.role} <span className="font-semibold text-white/70">— {item.company}</span>
                      </h3>
                    </div>
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.08em] text-white/55 sm:pt-1">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 max-w-[760px] text-xs leading-6 text-white/60 sm:text-sm">
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
