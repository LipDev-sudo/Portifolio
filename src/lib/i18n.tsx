"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { messages, type Language, type Messages } from "./translations";

const STORAGE_KEY = "lipdev-lang";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
  t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored === "pt" || stored === "en") {
    return stored;
  }

  const navigatorLang = window.navigator.language?.toLowerCase() ?? "";

  if (navigatorLang.startsWith("pt")) {
    return "pt";
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "pt" on SSR to avoid hydration mismatch, then sync to
  // the user's preference (localStorage / navigator) right after mount.
  const [lang, setLangState] = useState<Language>("pt");

  useEffect(() => {
    const initial = detectInitialLanguage();

    if (initial !== "pt") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(initial);
    }
  }, []);

  // Keep <html lang> in sync so the browser auto-translate prompt updates
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    }
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "pt" ? "en" : "pt");
  }, [lang, setLang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: messages[lang],
    }),
    [lang, setLang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }

  return context;
}

export function useT() {
  return useLanguage().t;
}
