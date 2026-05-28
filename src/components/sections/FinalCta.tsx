"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

export function FinalCta() {
  const t = useT();

  return (
    <section className="border-t border-white/[0.06]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-lg">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan/50 mb-3 font-mono">
              {t.finalCta.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {t.finalCta.title}
            </h2>
            <p className="text-white/40 mt-4 text-base leading-relaxed">
              {t.finalCta.description}
            </p>
          </div>

          <a
            href="#contact"
            className="group relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, var(--color-accent-cyan), var(--color-primary))",
              boxShadow: "0 0 40px rgba(0, 212, 255, 0.25)",
            }}
          >
            <div className="absolute inset-0 rounded-full border border-accent-cyan/30 scale-110 group-hover:scale-125 transition-transform duration-500" />
            <ArrowRight
              size={28}
              className="text-[#06060d] transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
