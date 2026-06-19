"use client";

import { Languages } from "lucide-react";
import { LANGUAGE_OPTIONS, type SupportedLanguage } from "@/lib/constants";
import { useLanguage } from "@/components/i18n/language-provider";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
};

export function LanguageSwitcher({ className, compact = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <label
      data-no-translate="true"
      className={[
        "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Languages size={16} aria-hidden />
      <span className={compact ? "sr-only" : "font-medium"}>Language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as SupportedLanguage)}
        className="min-h-8 rounded-md bg-transparent text-sm text-current outline-none"
        aria-label="Select language"
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.code} value={option.code} className="text-slate-900">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
