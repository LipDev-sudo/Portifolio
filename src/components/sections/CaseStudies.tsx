"use client";

import { motion } from "framer-motion";
import { AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { useT } from "@/lib/i18n";

export function CaseStudies() {
  const t = useT();

  return (
    <section id="cases" className="relative">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge">{t.caseStudies.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 max-w-2xl leading-tight">
            {t.caseStudies.title}
          </h2>
          <p className="text-white/40 mt-4 max-w-xl text-base">
            {t.caseStudies.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
          {t.caseStudies.cases.map((cs, index) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className="card-bold p-6 flex flex-col gap-5"
            >
              <h3 className="font-semibold text-lg text-white">{cs.title}</h3>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={14} className="text-red-400" />
                </div>
                <div>
                  <span className="text-[0.6rem] font-medium uppercase tracking-wider text-white/30">
                    {t.caseStudies.badge === "Cases de IA" ? "Problema" : "Problem"}
                  </span>
                  <p className="text-sm text-white/40 mt-1 leading-relaxed">{cs.problem}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={14} className="text-primary" />
                </div>
                <div>
                  <span className="text-[0.6rem] font-medium uppercase tracking-wider text-white/30">
                    {t.caseStudies.badge === "Cases de IA" ? "Solucao" : "Solution"}
                  </span>
                  <p className="text-sm text-white/40 mt-1 leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={14} className="text-primary" />
                </div>
                <div>
                  <span className="text-[0.6rem] font-medium uppercase tracking-wider text-white/30">
                    {t.caseStudies.badge === "Cases de IA" ? "Resultado" : "Result"}
                  </span>
                  <p className="text-sm font-medium text-primary mt-1 leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
