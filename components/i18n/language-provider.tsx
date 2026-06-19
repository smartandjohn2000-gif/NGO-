"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AutoTranslator } from "@/components/i18n/auto-translator";
import { LANGUAGE_OPTIONS, type SupportedLanguage } from "@/lib/constants";

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_COOKIE_KEY = "wii-language";
const LANGUAGE_STORAGE_KEY = "wii-language";

function normalizeLanguage(value: string | null | undefined): SupportedLanguage {
  const fallback: SupportedLanguage = "en";
  if (!value) return fallback;
  const supported = LANGUAGE_OPTIONS.some((option) => option.code === value);
  return supported ? (value as SupportedLanguage) : fallback;
}

function getDocumentLang(language: SupportedLanguage) {
  if (language === "zh") return "zh-CN";
  return language;
}

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage: SupportedLanguage;
};

export function LanguageProvider({ children, defaultLanguage }: LanguageProviderProps) {
  const pathname = usePathname();
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    if (typeof window === "undefined") return defaultLanguage;
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
  });

  useEffect(() => {
    document.documentElement.lang = getDocumentLang(language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.cookie = `${LANGUAGE_COOKIE_KEY}=${language};path=/;max-age=31536000;samesite=lax`;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language, pathname]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      <AutoTranslator language={language} />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
