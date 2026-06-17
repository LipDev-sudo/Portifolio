"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

const accents = [
  { color: "#d4b98d", label: "01" },
  { color: "#e8ddca", label: "02" },
  { color: "#b78f6b", label: "03" },
  { color: "#8f887c", label: "04" },
];

export function DeliverySystem() {
  const t = useT();

  return (
    <section className="relative border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -right-28 top-16 h-72 w-72 rounded-full bg-primary/8 blur-[90px]" />
      <div className="absolute -left-24 bottom-8 h-64 w-64 rounded-full bg-accent-coral/8 blur-[90px]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="badge badge-lime">{t.system.badge}</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            {t.system.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/45 leading-relaxed max-w-2xl">
            {t.system.description}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {t.system.items.map((item, index) => {
            const accent = accents[index];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
                className="system-card rounded-2xl p-6 min-h-[220px]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[0.72rem] font-bold tracking-[0.2em]"
                    style={{ color: accent.color }}
                  >
                    {accent.label}
                  </span>
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      background: accent.color,
                      boxShadow: `0 0 18px ${accent.color}55`,
                    }}
                  />
                </div>

                <h3 className="mt-8 text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/42">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
