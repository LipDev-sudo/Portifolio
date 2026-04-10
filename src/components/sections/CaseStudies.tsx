"use client";

import { motion } from "framer-motion";
import { AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { useT } from "@/lib/i18n";

export function CaseStudies() {
  const t = useT();

  return (
    <section
      id="cases"
      className="border-t-[2.5px] border-border"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-purple">{t.caseStudies.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 max-w-2xl leading-tight">
            {t.caseStudies.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            {t.caseStudies.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {t.caseStudies.cases.map((cs, index) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className="card-bold p-6 flex flex-col gap-5"
            >
              <h3 className="font-extrabold text-lg">{cs.title}</h3>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-coral flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={16} className="text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {t.caseStudies.badge === "Cases de IA" ? "Problema" : "Problem"}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {cs.problem}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={16} className="text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {t.caseStudies.badge === "Cases de IA" ? "Solução" : "Solution"}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-lime flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={16} className="text-foreground" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {t.caseStudies.badge === "Cases de IA" ? "Resultado" : "Result"}
                  </span>
                  <p className="text-sm font-semibold text-foreground mt-1 leading-relaxed">
                    {cs.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
