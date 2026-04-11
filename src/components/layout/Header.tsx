"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <Image
            src="/images/capybara.png"
            alt="LipDev mascot"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-base font-semibold tracking-tight text-foreground">
            LipDev<span className="text-primary-light">.BR</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all duration-300"
          >
            <Languages size={13} />
            <span aria-hidden="true">{lang === "pt" ? "EN" : "PT"}</span>
          </button>

          <a href="#contact" className="btn-primary text-xs py-2 px-5">
            {t.header.cta} <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
                  className="inline-flex w-full justify-center items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-card transition-colors"
                >
                  <Languages size={15} />
                  {lang === "pt" ? "Translate to English" : "Traduzir para Portugues"}
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary inline-flex w-full justify-center text-sm"
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
