"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/i18n";

const accentColors = [
  { text: "text-accent-cyan",   border: "border-accent-cyan/20",   num: "text-accent-cyan/30"   },
  { text: "text-accent-purple", border: "border-accent-purple/20", num: "text-accent-purple/30" },
  { text: "text-accent-lime",   border: "border-accent-lime/20",   num: "text-accent-lime/30"   },
  { text: "text-accent-coral",  border: "border-accent-coral/20",  num: "text-accent-coral/30"  },
  { text: "text-accent-orange", border: "border-accent-orange/20", num: "text-accent-orange/30" },
  { text: "text-primary-light", border: "border-primary/20",       num: "text-primary/30"       },
];

export function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="border-t border-white/[0.06]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge badge-lime">{t.services.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 max-w-2xl leading-tight text-white">
            O que posso{" "}
            <span className="gradient-text">fazer por você.</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl text-base">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((service, index) => {
            const title = lang === "en" && service.titulo_en ? service.titulo_en : service.titulo;
            const description = lang === "en" && service.descricao_en ? service.descricao_en : service.descricao;
            const price = lang === "en" && service.preco_en ? service.preco_en : service.preco;
            const accent = accentColors[index % accentColors.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="card-bold p-6 flex flex-col justify-between group"
              >
                <div>
                  <span className={`text-5xl font-black font-mono leading-none mb-4 block select-none ${accent.num}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-extrabold text-lg mb-3 text-white">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{description}</p>
                </div>

                <div className={`mt-6 pt-5 border-t ${accent.border}`}>
                  <span className={`text-lg font-extrabold font-mono ${accent.text}`}>
                    {price}
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
