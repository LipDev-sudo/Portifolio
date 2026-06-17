"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.header.nav.hero, href: "#hero" },
    { label: t.header.nav.about, href: "#about" },
    { label: t.header.nav.skills, href: "#skills" },
    { label: t.header.nav.services, href: "#services" },
    { label: t.header.nav.projects, href: "#projects" },
    { label: t.header.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <nav className="max-w-[1200px] mx-auto px-4">
        <div
          className={`flex items-center justify-between h-14 px-6 rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-[#e8ddca]/[0.14] bg-[#10100f]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.42)]"
              : "border-[#e8ddca]/[0.09] bg-[#10100f]/70 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#f0dfbd] to-[#b99d73] flex items-center justify-center text-[#12100d] font-black text-xs shadow-[0_12px_24px_rgba(0,0,0,0.28)] transition-shadow">
              L
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              LipDev<span className="text-primary">.BR</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.7rem] font-medium tracking-wide text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              translate="no"
              aria-label={t.header.toggleLabel}
              title={t.header.toggleLabel}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#e8ddca]/[0.12] text-[0.65rem] font-medium text-white/55 hover:text-primary-light hover:border-primary/35 transition-all duration-300"
            >
              <Languages size={12} />
              <span aria-hidden="true">{lang === "pt" ? "EN" : "PT"}</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f0dfbd] to-[#d4b98d] text-[#12100d] text-[0.7rem] font-bold hover:shadow-[0_16px_28px_rgba(0,0,0,0.35)] transition-all duration-300"
            >
              {t.header.cta} <ArrowRight size={12} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 rounded-2xl border border-[#e8ddca]/[0.1] bg-[#10100f]/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col p-5 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => { setMenuOpen(false); toggle(); }}
                  translate="no"
                  className="flex-1 inline-flex justify-center items-center gap-2 py-2.5 rounded-full border border-[#e8ddca]/[0.12] text-sm font-medium text-white/60 hover:text-primary-light transition-colors"
                >
                  <Languages size={14} />
                  {lang === "pt" ? "EN" : "PT"}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 btn-primary justify-center text-sm py-2.5"
                >
                  {t.header.cta}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
