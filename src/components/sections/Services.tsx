"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="border-t-[2.5px] border-border bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-lime">Serviços</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 max-w-2xl leading-tight">
            O que eu posso fazer por você.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            Soluções digitais sob medida para pequenos e médios negócios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card-bold p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-extrabold text-lg mb-3">
                  {service.titulo}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.descricao}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-border-light">
                <span className="text-xl font-extrabold text-primary">
                  {service.preco}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
