"use client";

import { motion } from "framer-motion";
import { Bot, Target, Cog } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/i18n";

// ── AI cards config ──────────────────────────────────────────
const aiCardStyles = [
  {
    bgStyle: { background: "rgba(212, 185, 141, 0.1)", border: "1px solid rgba(212, 185, 141, 0.22)" },
    iconColor: "text-primary-light",
    priceColor: "text-primary-light",
  },
  {
    bgStyle: { background: "rgba(143, 136, 124, 0.12)", border: "1px solid rgba(143, 136, 124, 0.24)" },
    iconColor: "text-accent-purple",
    priceColor: "text-accent-purple",
  },
  {
    bgStyle: { background: "rgba(183, 143, 107, 0.1)", border: "1px solid rgba(183, 143, 107, 0.22)" },
    iconColor: "text-accent-lime",
    priceColor: "text-accent-lime",
  },
];
const aiCardIcons = [Bot, Target, Cog];

// ── Web cards accent colors ───────────────────────────────────
const webAccents = [
  { text: "text-primary-light", border: "border-primary/20",       num: "text-primary/30"       },
  { text: "text-accent-lime",   border: "border-accent-lime/20",   num: "text-accent-lime/25"   },
  { text: "text-accent-coral",  border: "border-accent-coral/20",  num: "text-accent-coral/28"  },
  { text: "text-accent-orange", border: "border-accent-orange/20", num: "text-accent-orange/28" },
  { text: "text-accent-purple", border: "border-accent-purple/20", num: "text-accent-purple/28" },
  { text: "text-primary",       border: "border-primary/20",       num: "text-primary/25"       },
];

export function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="border-t border-white/[0.06]">
      <div className="section-container">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge badge-cyan">{t.services.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 max-w-2xl leading-tight text-white">
            {t.services.title}
          </h2>
          <p className="text-white/40 mt-4 max-w-xl text-base">
            {t.services.description}
          </p>
        </motion.div>

        {/* ══ AI & Automation group ══════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border border-primary/25 text-primary-light bg-primary/[0.07]">
              <Bot size={12} />
              {t.services.aiGroup.label}
            </span>
            <p className="text-white/30 text-sm hidden sm:block">
              {t.services.aiGroup.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.aiSolutions.items.map((item, index) => {
              const Icon = aiCardIcons[index];
              const style = aiCardStyles[index];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="card-bold p-6 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                      style={style.bgStyle}
                    >
                      <Icon size={18} className={style.iconColor} />
                    </div>
                    <h3 className="font-extrabold text-base mb-2.5 text-white">{item.title}</h3>
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
                    <span className={`text-base font-extrabold font-mono ${style.priceColor}`}>
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="my-14 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/20">+</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* ══ Web Development group ══════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border border-accent-lime/25 text-accent-lime bg-accent-lime/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
              {t.services.webGroup.label}
            </span>
            <p className="text-white/30 text-sm hidden sm:block">
              {t.services.webGroup.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const title = lang === "en" && service.titulo_en ? service.titulo_en : service.titulo;
              const description = lang === "en" && service.descricao_en ? service.descricao_en : service.descricao;
              const price = lang === "en" && service.preco_en ? service.preco_en : service.preco;
              const accent = webAccents[index % webAccents.length];

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="card-bold p-6 flex flex-col justify-between group"
                >
                  <div>
                    <span className={`text-4xl font-black font-mono leading-none mb-4 block select-none ${accent.num}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-extrabold text-base mb-2.5 text-white">{title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{description}</p>
                  </div>

                  <div className={`mt-6 pt-4 border-t ${accent.border}`}>
                    <span className={`text-base font-extrabold font-mono ${accent.text}`}>
                      {price}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
