"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

interface LanguageSwitcherProps {
  /** Whether the header background is light (scrolled/open) */
  isLight: boolean;
}

const LANGS = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
] as const;

export function LanguageSwitcher({ isLight }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const isEs = pathname.startsWith("/es");
  const activeLang = isEs ? "es" : "en";

  function hrefFor(code: "en" | "es"): string {
    if (code === "es") {
      return `/es${pathname === "/" ? "" : pathname.startsWith("/es") ? pathname.replace(/^\/es/, "") : pathname}`;
    } else {
      return pathname.startsWith("/es") ? pathname.replace(/^\/es/, "") || "/" : pathname;
    }
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
      {LANGS.map(({ code, label, flag }) => {
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
            <span aria-hidden="true" className="text-sm leading-none">{flag}</span>
            <span className="leading-none tracking-wide">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
