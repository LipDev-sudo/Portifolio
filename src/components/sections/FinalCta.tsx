"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

export function FinalCta() {
  const t = useT();

  return (
    <section className="relative">
      {/* Cinematic green glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-lg">
            <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-3">
              {t.caseStudies.badge === "Cases de IA"
                ? "e ai, bora?"
                : "that's all for now..."}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {t.finalCta.title}
            </h2>
            <p className="text-white/40 mt-4 text-base leading-relaxed">
              {t.finalCta.description}
            </p>
          </div>

          <a
            href="#contact"
            className="group relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary hover:bg-primary transition-all duration-500 flex-shrink-0 shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:shadow-[0_0_60px_rgba(74,222,128,0.4)]"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border border-primary/30 scale-110 group-hover:scale-125 transition-transform duration-500" />
            <ArrowRight
              size={28}
              className="text-[#050505] transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
