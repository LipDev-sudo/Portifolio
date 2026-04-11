"use client";

import { motion } from "framer-motion";
import { Bot, Target, Cog } from "lucide-react";
import { useT } from "@/lib/i18n";

const cardIcons = [Bot, Target, Cog];

export function AiSolutions() {
  const t = useT();

  return (
    <section id="ai-solutions" className="relative">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="badge">{t.aiSolutions.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            {t.aiSolutions.title}
          </h2>
          <p className="text-white/40 mt-4 text-base">
            {t.aiSolutions.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {t.aiSolutions.items.map((item, index) => {
            const Icon = cardIcons[index];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className="card-bold p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-white">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-white/40"
                      >
                        <span className="text-primary mt-1 text-[0.5rem]">&#9679;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.04]">
                  <span className="text-lg font-bold text-primary">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
