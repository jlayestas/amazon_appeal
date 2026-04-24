"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  locale: string;
  siteName: string;
  siteTagline: string;
  navLinks: readonly NavLink[];
  homeHref: string;
  ctaPrimary: string;
  contactHref: string;
}

export function Header({
  siteName,
  siteTagline,
  navLinks,
  homeHref,
  ctaPrimary,
  contactHref,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isLight = scrolled || open;

  return (
    <header
      role="banner"
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isLight
          ? "bg-white/97 backdrop-blur-sm shadow-sm border-b border-slate-100"
          : "bg-[#0c1a2e]/75 backdrop-blur-md border-b border-white/8"
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link
          href={homeHref}
          aria-label={`${siteName} — home`}
          className="flex flex-col leading-tight rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a2e4a]"
        >
          <span
            className={clsx(
              "text-base font-bold tracking-tight transition-colors duration-300",
              isLight ? "text-[#1a2e4a]" : "text-white"
            )}
          >
            {siteName}
          </span>
          <span
            className={clsx(
              "text-[10px] font-medium uppercase tracking-widest transition-colors duration-300",
              isLight ? "text-[#8a7560]" : "text-[#a8956e]"
            )}
          >
            {siteTagline}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const linkPath = link.href.split("#")[0];
            const active = pathname === linkPath;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "relative rounded-md px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a96e]",
                  active
                    ? isLight
                      ? "text-[#1a2e4a] bg-slate-100"
                      : "text-[#c9a96e]"
                    : isLight
                    ? "text-slate-600 hover:text-[#1a2e4a] hover:bg-slate-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
                {/* Active underline accent */}
                {active && (
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "absolute bottom-1 left-3 right-3 h-px rounded-full",
                      isLight ? "bg-[#1a2e4a]" : "bg-[#c9a96e]"
                    )}
                  />
                )}
              </Link>
            );
          })}

          <div className="ml-2">
            <LanguageSwitcher isLight={isLight} />
          </div>

          <div className="ml-1">
            <Button href={contactHref} variant="primary" className="!py-2.5 !px-5 !text-xs">
              {ctaPrimary}
            </Button>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className={clsx(
            "rounded-md p-2 transition-colors duration-200 md:hidden",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a96e]",
            isLight
              ? "text-[#1a2e4a] hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setOpen((p) => !p)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 md:hidden"
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col" role="list">
            {navLinks.map((link) => {
              const linkPath = link.href.split("#")[0];
              const active = pathname === linkPath;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "flex items-center rounded-md px-3 py-3 text-sm font-semibold transition-colors duration-200",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#1a2e4a]",
                      active
                        ? "bg-slate-50 text-[#1a2e4a]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#1a2e4a]"
                    )}
                  >
                    {active && (
                      <span
                        aria-hidden="true"
                        className="mr-2.5 h-4 w-0.5 rounded-full bg-[#c9a96e]"
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
            <LanguageSwitcher isLight={true} />
          </div>
          <div className="mt-3">
            <Button href={contactHref} variant="primary" className="w-full justify-center">
              {ctaPrimary}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
