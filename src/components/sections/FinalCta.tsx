"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

export function FinalCta() {
  const t = useT();

  return (
    <section className="border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-lg">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              {t.caseStudies.badge === "Cases de IA"
                ? "e ai, bora?"
                : "that's all for now..."}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {t.finalCta.title}
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
              {t.finalCta.description}
            </p>
          </div>

          <a
            href="#contact"
            className="group flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary hover:bg-primary-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] flex-shrink-0"
          >
            <ArrowRight
              size={28}
              className="text-white transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
