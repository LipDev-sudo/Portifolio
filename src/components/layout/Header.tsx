"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

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
        <div className="flex items-center justify-between h-14 px-6 rounded-full border border-white/[0.06] bg-black/60 backdrop-blur-xl">
          {/* Logo */}
          <a href="#hero" className="text-sm font-semibold tracking-tight text-white">
            LipDev<span className="text-primary">.BR</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.7rem] font-medium tracking-wide text-white/50 hover:text-primary transition-colors duration-300"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] text-[0.65rem] font-medium text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <Languages size={12} />
              <span aria-hidden="true">{lang === "pt" ? "EN" : "PT"}</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-dark text-[#050505] text-[0.7rem] font-semibold hover:bg-primary hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all duration-300"
            >
              {t.header.cta} <ArrowRight size={12} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/70"
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
            className="lg:hidden mx-4 mt-2 rounded-2xl border border-white/[0.06] bg-black/80 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col p-5 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-white/60 hover:text-primary transition-colors"
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
                  className="flex-1 inline-flex justify-center items-center gap-2 py-2.5 rounded-full border border-white/[0.08] text-sm font-medium text-white/60 hover:text-primary transition-colors"
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
