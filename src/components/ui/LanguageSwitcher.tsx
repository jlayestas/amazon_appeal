"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  /** Whether the header background is light (scrolled/open) */
  isLight: boolean;
}

const LANGS = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
] as const;

const BLOG_SLUG_TRANSLATIONS: Record<string, { en: string; es: string }> = {
  "account-suspension-first-steps": {
    en: "what-to-do-after-amazon-account-suspension",
    es: "que-hacer-despues-suspension-cuenta-amazon",
  },
  "poa-rejection-reasons": {
    en: "why-amazon-rejects-plan-of-action",
    es: "por-que-amazon-rechaza-plan-de-accion",
  },
  "asin-vs-account-suspension": {
    en: "asin-removal-vs-account-suspension",
    es: "diferencia-asin-eliminado-suspension-cuenta",
  },
};

function translatedBlogPath(pathWithoutLocale: string, code: "en" | "es") {
  const match = pathWithoutLocale.match(/^\/blog\/([^/]+)$/);
  if (!match) return null;

  const translation = Object.values(BLOG_SLUG_TRANSLATIONS).find(
    (item) => item.en === match[1] || item.es === match[1]
  );

  return translation ? `/blog/${translation[code]}` : null;
}

export function LanguageSwitcher({ isLight }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const isEs = pathname.startsWith("/es");
  const activeLang = isEs ? "es" : "en";

  function hrefFor(code: "en" | "es"): string {
    const pathWithoutLocale = pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "";
    return `/${code}${translatedBlogPath(pathWithoutLocale, code) ?? pathWithoutLocale}`;
  }

  return (
    <div
      className={clsx(
        "flex items-center gap-0.5 rounded-lg border p-0.5 transition-colors",
        isLight ? "border-slate-200 bg-slate-50" : "border-white/15 bg-white/8"
      )}
      role="group"
      aria-label="Language selection"
    >
      <Globe
        size={14}
        aria-hidden="true"
        className={clsx("ml-1.5", isLight ? "text-slate-400" : "text-white/50")}
      />
      {LANGS.map(({ code, label }) => {
        const isActive = activeLang === code;
        const href = hrefFor(code);

        return (
          <Link
            key={code}
            href={href}
            aria-label={code === "en" ? "Switch to English" : "Cambiar a Español"}
            aria-current={isActive ? true : undefined}
            className={clsx(
              "flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold transition-all duration-200",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#c9a96e]",
              isActive
                ? isLight
                  ? "bg-white text-[#1a2e4a] shadow-sm"
                  : "bg-white/15 text-white shadow-sm"
                : isLight
                ? "text-slate-400 hover:text-slate-600"
                : "text-white/40 hover:text-white/70"
            )}
          >
            <span className="leading-none tracking-wide">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
