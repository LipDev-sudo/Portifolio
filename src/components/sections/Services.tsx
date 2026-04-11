"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/i18n";

export function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-lime">{t.services.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 max-w-2xl leading-tight">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((service, index) => {
            const title =
              lang === "en" && service.titulo_en ? service.titulo_en : service.titulo;
            const description =
              lang === "en" && service.descricao_en
                ? service.descricao_en
                : service.descricao;
            const price =
              lang === "en" && service.preco_en ? service.preco_en : service.preco;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="card-bold p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-border">
                  <span className="text-lg font-bold text-primary-light">
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
