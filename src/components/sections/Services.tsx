"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Cog, Target } from "lucide-react";
import type { ReactNode } from "react";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/i18n";

const aiIcons = [Bot, Target, Cog];

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

        <div className="mt-16 grid gap-10">
          <ServiceGroup
            index="01"
            label={t.services.aiGroup.label}
            description={t.services.aiGroup.description}
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {t.aiSolutions.items.map((item, index) => {
                const Icon = aiIcons[index] ?? Bot;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                    className="flex min-h-[360px] flex-col border border-black bg-white p-6 transition-all duration-300 hover:-translate-y-1 dark:border-white/20 dark:bg-[#202225] dark:hover:border-white/45 dark:hover:bg-[#292b2f]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs font-black">0{index + 1}</span>
                      <span className="flex h-11 w-11 items-center justify-center border border-black bg-black text-white dark:border-[#f4f4f2] dark:bg-[#f4f4f2] dark:text-[#161719]">
                        <Icon size={20} strokeWidth={2.4} />
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-black tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/60 dark:text-[#afb1b5]">{item.description}</p>

                    <ul className="mt-6 grid gap-2 text-sm text-black/65 dark:text-[#afb1b5]">
                      {item.bullets.slice(0, 3).map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-black dark:bg-[#f4f4f2]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto border-t border-black/10 pt-5 dark:border-white/10">
                      <span className="font-mono text-sm font-black">{item.price}</span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </ServiceGroup>

          <ServiceGroup
            index="02"
            label={t.services.webGroup.label}
            description={t.services.webGroup.description}
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const title = lang === "en" && service.titulo_en ? service.titulo_en : service.titulo;
                const description =
                  lang === "en" && service.descricao_en ? service.descricao_en : service.descricao;
                const price = lang === "en" && service.preco_en ? service.preco_en : service.preco;

                return (
                  <motion.article
                    key={service.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: index * 0.035, duration: 0.35 }}
                    className="group flex min-h-[260px] flex-col border border-black bg-white p-5 transition-all duration-300 hover:-translate-y-1 dark:border-white/20 dark:bg-[#202225] dark:hover:border-white/45 dark:hover:bg-[#292b2f]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs font-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center border border-black bg-white text-black group-hover:bg-black group-hover:text-white dark:border-white/25 dark:bg-[#202225] dark:text-[#f4f4f2] dark:group-hover:bg-[#f4f4f2] dark:group-hover:text-[#161719]">
                        <Code2 size={16} strokeWidth={2.4} />
                      </span>
                    </div>

                    <h3 className="mt-7 text-base font-black tracking-[-0.03em]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/60 dark:text-[#afb1b5]">{description}</p>

                    <div className="mt-auto border-t border-black/10 pt-4 dark:border-white/10">
                      <span className="font-mono text-xs font-black">{price}</span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </ServiceGroup>
        </div>
      </div>
    </section>
  );
}

function ServiceGroup({
  index,
  label,
  description,
  children,
}: {
  index: string;
  label: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 border-b border-black pb-4 dark:border-white/25 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-xs font-black">{index}</span>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.045em]">{label}</h3>
        </div>
        <p className="max-w-[470px] text-sm leading-6 text-black/55 dark:text-[#afb1b5]">{description}</p>
      </div>
      {children}
    </div>
  );
}
