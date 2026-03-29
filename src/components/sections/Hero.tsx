"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge badge-lime"
            >
              LipDev.BR · Frontend Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-6"
            >
              Transformo ideias em{" "}
              <span className="text-primary">interfaces</span> que
              impressionam.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground mt-6 max-w-lg leading-relaxed"
            >
              Desenvolvedor Frontend especializado em{" "}
              <strong className="text-foreground">React</strong>,{" "}
              <strong className="text-foreground">TypeScript</strong> e{" "}
              <strong className="text-foreground">Next.js</strong>. Construo
              aplicações modernas, rápidas e com código limpo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-8 flex-wrap"
            >
              <a href="#projects" className="btn-primary">
                Ver Projetos <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-secondary">
                Agendar Conversa
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Stat cards (Gypsi style) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Main card */}
            <div className="stat-card bg-primary text-white">
              <span className="badge badge-dark mb-3">Foco Principal</span>
              <span className="text-5xl sm:text-6xl font-extrabold">
                Frontend
              </span>
              <span className="text-sm font-semibold mt-2 opacity-90">
                React · TypeScript · Next.js · Tailwind
              </span>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-card bg-accent-lime">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                  100%
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/70 mt-1">
                  Dedicação
                </span>
              </div>
              <div className="stat-card bg-accent-coral text-white">
                <span className="text-3xl sm:text-4xl font-extrabold">
                  24/7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider opacity-80 mt-1">
                  Aprendizado
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#about"
            aria-label="Rolar para baixo"
            className="w-10 h-10 rounded-full border-[2.5px] border-border flex items-center justify-center animate-bounce hover:bg-secondary transition-colors"
          >
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
