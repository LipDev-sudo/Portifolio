"use client";

import { motion } from "framer-motion";
import { Code2, Cog, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/i18n";

const focusIcons = {
  code: Code2,
  cog: Cog,
  shield: ShieldCheck,
};

export function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="border-t border-black/10 bg-white py-24 text-black transition-colors dark:border-white/10 dark:bg-[#161719] dark:text-[#f4f4f2] sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[760px] text-center"
        >
          <span className="inline-flex rounded-full border border-black/15 px-3 py-1 text-[0.7rem] font-black uppercase tracking-[0.14em] dark:border-white/20">
            {t.services.badge}
          </span>
          <h2 className="mt-6 text-[2.35rem] font-normal tracking-[-0.055em] sm:text-5xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-sm leading-6 text-black/55 dark:text-[#afb1b5]">
            {t.services.description}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const title = lang === "en" ? service.titulo_en : service.titulo;
            const description = lang === "en" ? service.descricao_en : service.descricao;
            const status = lang === "en" ? service.status_en : service.status;
            const Icon = focusIcons[service.icone as keyof typeof focusIcons] ?? Code2;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="flex min-h-[360px] flex-col border border-black bg-white p-6 transition-all duration-300 hover:-translate-y-1 dark:border-white/20 dark:bg-[#202225] dark:hover:border-white/45 dark:hover:bg-[#292b2f]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-black">0{index + 1}</span>
                  <span className="flex h-11 w-11 items-center justify-center border border-black bg-black text-white dark:border-[#f4f4f2] dark:bg-[#f4f4f2] dark:text-[#161719]">
                    <Icon size={20} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60 dark:text-[#afb1b5]">{description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-black/15 px-2.5 py-1 font-mono text-[0.62rem] dark:border-white/15">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto border-t border-black/10 pt-5 dark:border-white/10">
                  <span className="font-mono text-xs font-black">{status}</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
