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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[2.5px] border-border">
      <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
            L
          </span>
          <span className="text-lg font-bold tracking-tight">
            LipDev<span className="text-primary">.BR</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-bold tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            translate="no"
            aria-label={t.header.toggleLabel}
            title={t.header.toggleLabel}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border-[2.5px] border-border text-xs font-bold uppercase tracking-wider text-foreground hover:bg-secondary transition-colors"
          >
            <Languages size={14} />
            <span aria-hidden="true">{lang === "pt" ? "EN" : "PT"}</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-coral text-white text-xs font-bold uppercase tracking-wider border-[2.5px] border-border shadow-[3px_3px_0px_var(--color-border)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_var(--color-border)] transition-all"
          >
            {t.header.cta} <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t-[2.5px] border-border bg-background overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-bold tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    toggle();
                  }}
                  translate="no"
                  className="inline-flex w-full justify-center items-center gap-2 px-5 py-2.5 rounded-lg border-[2.5px] border-border text-sm font-bold uppercase tracking-wider hover:bg-secondary transition-colors"
                >
                  <Languages size={16} />
                  {lang === "pt" ? "Translate to English" : "Traduzir para Português"}
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary inline-flex w-full justify-center"
                >
                  {t.header.cta} <ArrowRight size={14} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
