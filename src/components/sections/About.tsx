"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";
import { useT } from "@/lib/i18n";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description:
      "Foco em boas práticas, legibilidade e manutenibilidade. Cada linha de código é pensada para escalar.",
    bgStyle: { background: "rgba(0, 212, 255, 0.08)", border: "1px solid rgba(0, 212, 255, 0.18)" },
    iconColor: "text-accent-cyan",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Aplicações rápidas e otimizadas. Core Web Vitals, lazy loading e tudo que o usuário merece.",
    bgStyle: { background: "rgba(168, 85, 247, 0.08)", border: "1px solid rgba(168, 85, 247, 0.18)" },
    iconColor: "text-accent-purple",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Comunicação clara, entregas no prazo e trabalho em equipe. Sem enrolação, só resultado.",
    bgStyle: { background: "rgba(190, 242, 100, 0.08)", border: "1px solid rgba(190, 242, 100, 0.18)" },
    iconColor: "text-accent-lime",
  },
];

export function About() {
  const t = useT();

  return (
    <section id="about" className="border-t border-white/[0.06]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge badge-cyan">{t.about.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 max-w-2xl leading-tight text-white">
            Hamilton Felipe{" "}
            <span className="gradient-text">Soares da Silva.</span>
          </h2>
          <p className="text-white/45 mt-6 max-w-2xl text-base sm:text-lg leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="card-bold p-6 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={item.bgStyle}
              >
                <item.icon size={20} className={item.iconColor} />
              </div>
              <h3 className="font-extrabold text-lg mb-2 text-white">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
