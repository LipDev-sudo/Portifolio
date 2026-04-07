"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";
import { useT } from "@/lib/i18n";

const highlightStyles = [
  { icon: Code2, color: "bg-accent-cyan" },
  { icon: Rocket, color: "bg-accent-purple" },
  { icon: Users, color: "bg-accent-lime" },
];

export function About() {
  const t = useT();

  return (
    <section id="about" className="border-t-[2.5px] border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-cyan">{t.about.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 max-w-2xl leading-tight">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base sm:text-lg leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {t.about.highlights.map((item, index) => {
            const style = highlightStyles[index];
            const Icon = style.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className="card-bold p-6"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${style.color} flex items-center justify-center mb-5`}
                >
                  <Icon
                    size={22}
                    className={
                      style.color === "bg-accent-lime"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
