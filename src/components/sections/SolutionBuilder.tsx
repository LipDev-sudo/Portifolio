"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  LayoutDashboard,
  ShoppingBag,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useT } from "@/lib/i18n";

const accents = [
  {
    icon: Building2,
    color: "#d4b98d",
    glow: "rgba(212, 185, 141, 0.2)",
  },
  {
    icon: ShoppingBag,
    color: "#e8ddca",
    glow: "rgba(232, 221, 202, 0.14)",
  },
  {
    icon: LayoutDashboard,
    color: "#8f887c",
    glow: "rgba(143, 136, 124, 0.2)",
  },
  {
    icon: UserRound,
    color: "#b78f6b",
    glow: "rgba(183, 143, 107, 0.18)",
  },
];

export function SolutionBuilder() {
  const t = useT();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = t.solutionBuilder.items[activeIndex];
  const accent = accents[activeIndex];
  const Icon = accent.icon;

  return (
    <section className="relative border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-12%] top-24 h-80 w-80 rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-16 h-72 w-72 rounded-full bg-accent-coral/8 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="badge badge-purple">{t.solutionBuilder.badge}</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {t.solutionBuilder.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/45 leading-relaxed">
              {t.solutionBuilder.description}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {t.solutionBuilder.items.map((item, index) => {
                const itemAccent = accents[index];
                const ItemIcon = itemAccent.icon;
                const selected = activeIndex === index;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300"
                    style={{
                      borderColor: selected ? `${itemAccent.color}55` : "rgba(255,255,255,0.08)",
                      background: selected ? `${itemAccent.color}12` : "rgba(255,255,255,0.025)",
                      boxShadow: selected ? `0 0 32px ${itemAccent.glow}` : "none",
                    }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        color: itemAccent.color,
                        borderColor: `${itemAccent.color}35`,
                        background: `${itemAccent.color}10`,
                      }}
                    >
                      <ItemIcon size={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-extrabold text-white">
                        {item.label}
                      </span>
                      <span className="mt-1 block truncate text-xs text-white/35">
                        {item.audience}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-primary/25 via-white/5 to-accent-coral/20 blur-sm" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-[#11100e]/90 p-5 sm:p-7 shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
              <div
                className="absolute right-[-4rem] top-[-4rem] h-44 w-44 rounded-full blur-[70px]"
                style={{ background: accent.glow }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span
                        className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em]"
                        style={{
                          color: accent.color,
                          borderColor: `${accent.color}35`,
                          background: `${accent.color}10`,
                        }}
                      >
                        <Sparkles size={13} />
                        {t.solutionBuilder.labels.bestFor}
                      </span>
                      <h3 className="mt-5 text-2xl sm:text-3xl font-black text-white">
                        {active.label}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/42">
                        {active.audience}
                      </p>
                    </div>

                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border"
                      style={{
                        color: accent.color,
                        borderColor: `${accent.color}35`,
                        background: `${accent.color}10`,
                        boxShadow: `0 0 34px ${accent.glow}`,
                      }}
                    >
                      <Icon size={25} />
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
                      <div className="flex items-center gap-2 text-primary-light">
                        <LayoutDashboard size={16} />
                        <span className="text-xs font-bold uppercase tracking-[0.16em]">
                          {t.solutionBuilder.labels.web}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-white/50">
                        {active.web}
                      </p>
                    </article>

                    <article className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
                      <div className="flex items-center gap-2 text-accent-coral">
                        <Bot size={16} />
                        <span className="text-xs font-bold uppercase tracking-[0.16em]">
                          {t.solutionBuilder.labels.ai}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-white/50">
                        {active.ai}
                      </p>
                    </article>
                  </div>

                  <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/[0.06] p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-primary-light" size={18} />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary-light">
                          {t.solutionBuilder.labels.outcome}
                        </span>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-white/70">
                          {active.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="btn-primary mt-6 w-full justify-center sm:w-fit"
                  >
                    {t.solutionBuilder.cta}
                    <ArrowRight size={15} />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
