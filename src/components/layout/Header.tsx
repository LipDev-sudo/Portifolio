"use client";

import { useState } from "react";
import {
  Code2,
  Download,
  FolderOpen,
  Home,
  Languages,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const navLinks = [
    { label: t.header.nav.hero, href: "#hero", icon: Home },
    { label: t.header.nav.about, href: "#about", icon: User },
    { label: t.header.nav.projects, href: "#projects", icon: FolderOpen },
    { label: t.header.nav.services, href: "#services", icon: Code2 },
    { label: t.header.nav.contact, href: "#contact", icon: Mail },
  ];

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3">
        <a
          href="#hero"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-xs font-black text-black shadow-[0_10px_30px_rgba(0,0,0,0.06)] lg:hidden"
          aria-label="LipDev"
        >
          L
        </a>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1 rounded-full border border-black/10 bg-white/92 px-2 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-md">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[0.72rem] font-bold transition-colors ${
                      index === 0
                        ? "bg-black text-white"
                        : "text-black/75 hover:bg-black hover:text-white"
                    }`}
                  >
                    <Icon size={12} strokeWidth={2.4} />
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggle}
            translate="no"
            aria-label={t.header.toggleLabel}
            title={t.header.toggleLabel}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 text-[0.72rem] font-black text-black shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-colors hover:bg-black hover:text-white"
          >
            <Languages size={12} />
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <a
            href="#contact"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-black bg-black px-4 text-[0.72rem] font-black text-white transition-opacity hover:opacity-75"
          >
            {t.header.resume}
            <Download size={12} />
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.06)] lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 max-w-[360px] rounded-3xl border border-black/10 bg-white p-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)] lg:hidden"
          >
            <ul className="grid gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-black hover:bg-black hover:text-white"
                    >
                      <Icon size={14} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
