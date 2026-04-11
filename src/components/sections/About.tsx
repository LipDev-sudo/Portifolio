"use client";

import { motion } from "framer-motion";
import { Zap, DollarSign, Link2 } from "lucide-react";
import { useT } from "@/lib/i18n";

const highlightStyles = [
  { icon: Zap, glow: "shadow-[0_0_20px_rgba(74,222,128,0.15)]" },
  { icon: DollarSign, glow: "shadow-[0_0_20px_rgba(74,222,128,0.15)]" },
  { icon: Link2, glow: "shadow-[0_0_20px_rgba(74,222,128,0.15)]" },
];

export function About() {
  const t = useT();

  return (
    <section id="about" className="relative">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="badge">{t.about.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-6 leading-tight">
            {t.about.title}
          </h2>
          <p className="text-white/40 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {t.about.highlights.map((item, index) => {
            const Icon = highlightStyles[index].icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="card-bold p-7"
              >
                <div className={`w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 ${highlightStyles[index].glow}`}>
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
