"use client";

import { motion } from "framer-motion";
import { Bot, Target, Cog } from "lucide-react";
import { useT } from "@/lib/i18n";

const cardIcons = [Bot, Target, Cog];
const cardAccents = ["text-accent-cyan", "text-accent-purple", "text-accent-lime"];
const cardBgs = ["bg-accent-cyan/10", "bg-accent-purple/10", "bg-accent-lime/10"];

export function AiSolutions() {
  const t = useT();

  return (
    <section id="ai-solutions" className="border-t border-border bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-lime">{t.aiSolutions.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 max-w-2xl leading-tight">
            {t.aiSolutions.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
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
                className="card-bold p-6 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl ${cardBgs[index]} flex items-center justify-center mb-5`}
                  >
                    <Icon size={20} className={cardAccents[index]} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="text-primary-light mt-0.5 text-xs">&#9679;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 pt-4 border-t border-border">
                  <span className="text-lg font-bold text-primary-light">
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
