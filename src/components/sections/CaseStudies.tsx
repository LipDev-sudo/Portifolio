"use client";

import { motion } from "framer-motion";
import { AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { useT } from "@/lib/i18n";

export function CaseStudies() {
  const t = useT();

  return (
    <section id="cases" className="border-t border-white/[0.06]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge badge-purple">{t.caseStudies.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 max-w-2xl leading-tight text-white">
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="card-bold p-6 flex flex-col gap-5"
            >
              <h3 className="font-extrabold text-lg text-white">{cs.title}</h3>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-coral/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={14} className="text-accent-coral" />
                </div>
                <div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/30">
                    {t.caseStudies.labels.problem}
                  </span>
                  <p className="text-sm text-white/40 mt-1 leading-relaxed">{cs.problem}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={14} className="text-accent-cyan" />
                </div>
                <div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/30">
                    {t.caseStudies.labels.solution}
                  </span>
                  <p className="text-sm text-white/40 mt-1 leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-lime/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={14} className="text-accent-lime" />
                </div>
                <div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/30">
                    {t.caseStudies.labels.result}
                  </span>
                  <p className="text-sm font-semibold text-accent-lime/80 mt-1 leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
