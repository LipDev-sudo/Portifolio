"use client";

import { motion } from "framer-motion";
import { Bot, Target, Cog } from "lucide-react";
import { useT } from "@/lib/i18n";

const cardStyles = [
  { bgStyle: { background: "rgba(212, 185, 141, 0.1)", border: "1px solid rgba(212, 185, 141, 0.22)" }, iconColor: "text-primary-light" },
  { bgStyle: { background: "rgba(143, 136, 124, 0.12)", border: "1px solid rgba(143, 136, 124, 0.24)" }, iconColor: "text-accent-purple" },
  { bgStyle: { background: "rgba(183, 143, 107, 0.1)", border: "1px solid rgba(183, 143, 107, 0.22)" }, iconColor: "text-accent-coral" },
];
const cardIcons = [Bot, Target, Cog];

const priceColors = ["text-primary-light", "text-accent-purple", "text-accent-coral"];

export function AiSolutions() {
  const t = useT();

  return (
    <section id="ai-solutions" className="border-t border-white/[0.06] bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge badge-cyan">{t.aiSolutions.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 max-w-2xl leading-tight text-white">
            {t.aiSolutions.title}
          </h2>
          <p className="text-white/40 mt-4 max-w-xl text-base">
            {t.aiSolutions.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {t.aiSolutions.items.map((item, index) => {
            const Icon = cardIcons[index];
            const style = cardStyles[index];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="card-bold p-6 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={style.bgStyle}
                  >
                    <Icon size={20} className={style.iconColor} />
                  </div>
                  <h3 className="font-extrabold text-lg mb-3 text-white">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-white/40"
                      >
                        <span className={`mt-1 text-[0.45rem] ${style.iconColor}`}>&#9679;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <span className={`text-lg font-extrabold font-mono ${priceColors[index]}`}>
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
