"use client";

import { useState, useEffect } from "react";
import { Download, Languages, Menu, X } from "lucide-react";
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
    { label: t.header.nav.about, href: "#about" },
    { label: t.header.nav.skills, href: "#skills" },
    { label: t.header.nav.projects, href: "#projects" },
    { label: t.header.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="max-w-[1080px] mx-auto px-5">
        <div
          className={`flex h-16 items-center justify-between transition-all duration-300 ${
            scrolled
              ? "border-b border-black/10"
              : "border-b border-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-black text-white">
              P
            </div>
            <span className="text-sm font-black tracking-tight text-black">
              Personal
            </span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-black text-black transition-opacity duration-200 hover:opacity-55"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              translate="no"
              aria-label={t.header.toggleLabel}
              title={t.header.toggleLabel}
              className="inline-flex items-center gap-1.5 border border-black px-3 py-2 text-xs font-black text-black transition-colors hover:bg-black hover:text-white"
            >
              <Languages size={12} />
              <span aria-hidden="true">{lang === "pt" ? "EN" : "PT"}</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black px-4 py-2 text-xs font-black text-white transition-opacity hover:opacity-75"
            >
              {t.header.resume} <Download size={13} />
            </a>
          </div>

          <button
            className="p-2 text-black transition-opacity hover:opacity-60 lg:hidden"
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
            className="mx-5 border border-black bg-white lg:hidden"
          >
            <ul className="flex flex-col p-5 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-black text-black transition-opacity hover:opacity-60"
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
                  className="flex-1 inline-flex justify-center items-center gap-2 border border-black py-2.5 text-sm font-black text-black"
                >
                  <Languages size={14} />
                  {lang === "pt" ? "EN" : "PT"}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 justify-center bg-black px-4 py-2.5 text-center text-sm font-black text-white"
                >
                  {t.header.resume}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
