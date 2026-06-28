"use client";

import { useEffect, useState } from "react";
import {
  Code2,
  Download,
  FolderOpen,
  Home,
  Languages,
  Mail,
  Menu,
  Moon,
  Sun,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const sectionIds = ["hero", "about", "projects", "services", "contact"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");
  const { lang, toggle, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const themeLabel = theme === "dark"
    ? (lang === "pt" ? "Ativar modo claro" : "Switch to light mode")
    : (lang === "pt" ? "Ativar modo escuro" : "Switch to dark mode");

  const navLinks = [
    { label: t.header.nav.hero, href: "#hero", icon: Home },
    { label: t.header.nav.about, href: "#about", icon: User },
    { label: t.header.nav.projects, href: "#projects", icon: FolderOpen },
    { label: t.header.nav.services, href: "#services", icon: Code2 },
    { label: t.header.nav.contact, href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const setHash = () => {
      const hash = window.location.hash;
      if (sectionIds.some((id) => hash === `#${id}`)) {
        setActiveHref(hash);
      }
    };

    setHash();
    window.addEventListener("hashchange", setHash);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);
        if (activeEntry) {
          setActiveHref(`#${activeEntry.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", setHash);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3">
        <a
          href="#hero"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-xs font-black text-black shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-colors dark:border-white/10 dark:bg-[#202225] dark:text-[#f4f4f2] lg:hidden"
          aria-label="LipDev"
        >
          L
        </a>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1 rounded-full border border-black/10 bg-white/92 px-2 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[#202225]/92 dark:shadow-[0_10px_35px_rgba(0,0,0,0.3)]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setActiveHref(link.href)}
                    className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[0.72rem] font-bold transition-colors ${
                      activeHref === link.href
                        ? "bg-black text-white dark:bg-[#f4f4f2] dark:text-[#161719]"
                        : "text-black/75 hover:bg-black hover:text-white dark:text-[#afb1b5] dark:hover:bg-[#f4f4f2] dark:hover:text-[#161719]"
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
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:bg-[#202225] dark:text-[#f4f4f2] dark:hover:bg-[#f4f4f2] dark:hover:text-[#161719]"
          >
            <Moon size={14} className="dark:hidden" />
            <Sun size={14} className="hidden dark:block" />
          </button>

          <button
            type="button"
            onClick={toggle}
            translate="no"
            aria-label={t.header.toggleLabel}
            title={t.header.toggleLabel}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 text-[0.72rem] font-black text-black shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:bg-[#202225] dark:text-[#f4f4f2] dark:hover:bg-[#f4f4f2] dark:hover:text-[#161719]"
          >
            <Languages size={12} />
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <a
            href="/documents/curriculo-hamilton-felipe.pdf"
            download
            className="inline-flex h-9 items-center gap-2 rounded-full border border-black bg-black px-4 text-[0.72rem] font-black text-white transition-opacity hover:opacity-75 dark:border-[#f4f4f2] dark:bg-[#f4f4f2] dark:text-[#161719]"
          >
            {t.header.resume}
            <Download size={12} />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-colors dark:border-white/10 dark:bg-[#202225] dark:text-[#f4f4f2]"
          >
            <Moon size={16} className="dark:hidden" />
            <Sun size={16} className="hidden dark:block" />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-colors dark:border-white/10 dark:bg-[#202225] dark:text-[#f4f4f2]"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 max-w-[360px] rounded-3xl border border-black/10 bg-white p-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-colors dark:border-white/10 dark:bg-[#202225] dark:shadow-[0_18px_45px_rgba(0,0,0,0.36)] lg:hidden"
          >
            <ul className="grid gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => {
                        setActiveHref(link.href);
                        setMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                        activeHref === link.href
                          ? "bg-black text-white dark:bg-[#f4f4f2] dark:text-[#161719]"
                          : "text-black hover:bg-black hover:text-white dark:text-[#afb1b5] dark:hover:bg-[#f4f4f2] dark:hover:text-[#161719]"
                      }`}
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
