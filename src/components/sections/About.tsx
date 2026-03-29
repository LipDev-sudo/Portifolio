"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description:
      "Foco em boas práticas, legibilidade e manutenibilidade. Cada linha de código é pensada para escalar.",
    color: "bg-accent-cyan",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Aplicações rápidas e otimizadas. Core Web Vitals, lazy loading e tudo que o usuário merece.",
    color: "bg-accent-purple",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Comunicação clara, entregas no prazo e trabalho em equipe. Sem enrolação, só resultado.",
    color: "bg-accent-lime",
  },
];

export function About() {
  return (
    <section id="about" className="border-t-[2.5px] border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-cyan">Sobre Mim</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 max-w-2xl leading-tight">
            Hamilton Felipe Soares da Silva.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base sm:text-lg leading-relaxed">
            Sou desenvolvedor frontend apaixonado por tecnologia e design. Trabalho
            com o ecossistema moderno do JavaScript — React, TypeScript, Next.js e
            Firebase — para criar interfaces que geram impacto real. Meu objetivo é
            transformar cada projeto em uma experiência única para o usuário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className="card-bold p-6"
            >
              <div
                className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-5`}
              >
                <item.icon
                  size={22}
                  className={
                    item.color === "bg-accent-lime"
                      ? "text-foreground"
                      : "text-white"
                  }
                />
              </div>
              <h3 className="font-extrabold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
