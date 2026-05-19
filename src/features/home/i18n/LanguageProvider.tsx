"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import {
  defaultLocale,
  portfolioContent,
  type Locale,
  type PortfolioContent,
} from "@/features/home/data/portfolio";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: PortfolioContent;
};

const STORAGE_KEY = "franpor-portfolio-locale";
const LOCALE_EVENT = "franpor-portfolio-locale-change";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en";
}

function getStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  try {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(savedLocale) ? savedLocale : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

function subscribeToLocale(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(LOCALE_EVENT, listener);

  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(LOCALE_EVENT, listener);
  };
}

function setStoredLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Keep the language switch usable even when storage is blocked.
  }

  window.dispatchEvent(new Event(LOCALE_EVENT));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, getStoredLocale, () => defaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale: setStoredLocale,
      copy: portfolioContent[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function usePortfolioContent() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("usePortfolioContent must be used inside LanguageProvider");
  }

  return context;
}
