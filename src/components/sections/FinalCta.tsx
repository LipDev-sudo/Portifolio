"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

export function FinalCta() {
  const t = useT();

  return (
    <section className="border-t-[2.5px] border-border bg-primary">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {t.finalCta.title}
          </h2>
          <p className="text-white/70 mt-6 text-base sm:text-lg leading-relaxed">
            {t.finalCta.description}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg bg-white text-foreground font-extrabold text-sm border-[2.5px] border-border shadow-[3px_3px_0px_var(--color-border)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_var(--color-border)] transition-all"
          >
            {t.finalCta.cta} <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
