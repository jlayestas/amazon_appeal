import Link from "next/link";
import { Mail, Phone, ShieldOff } from "lucide-react";

interface FooterNavLink {
  label: string;
  href: string;
}

interface FooterNavCol {
  heading: string;
  links: readonly FooterNavLink[];
}

interface FooterProps {
  siteName: string;
  siteTagline: string;
  disclaimer: string;
  email: string;
  phone: string;
  footerNav: readonly FooterNavCol[];
  independentService: string;
  allRightsReserved: string;
  notAffiliated: string;
}

const PLACEHOLDER_EMAIL = "hello@amazonappealpro.com";
const PLACEHOLDER_PHONE = "+1 (000) 000-0000";

export function Footer({ siteName, siteTagline, disclaimer, email, phone, footerNav, independentService, allRightsReserved, notAffiliated }: FooterProps) {
  const year = new Date().getFullYear();
  const hasEmail = email !== PLACEHOLDER_EMAIL;
  const hasPhone = phone !== PLACEHOLDER_PHONE;

  return (
    <footer className="bg-[#0a1628]" aria-label="Site footer">
      {/* Disclaimer bar */}
      <div className="border-b border-white/5 bg-[#0c1f36] px-5 py-4">
        <div className="mx-auto flex max-w-5xl items-start gap-3 md:items-center">
          <ShieldOff size={14} className="mt-0.5 shrink-0 text-[#8a7560] md:mt-0" aria-hidden="true" />
          <p className="text-xs leading-relaxed text-slate-500">
            <strong className="font-semibold text-slate-400">{independentService}</strong>{" "}
            {disclaimer}
          </p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-5 pb-10 pt-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
            {/* Brand column */}
            <div>
              <p className="mb-1 text-base font-bold text-white">{siteName}</p>
              <p className="mb-5 text-xs font-medium uppercase tracking-widest text-slate-500">
                {siteTagline}
              </p>
              <div className="space-y-2.5">
                {hasEmail ? (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-white focus-visible:text-white"
                  >
                    <Mail size={13} aria-hidden="true" />
                    {email}
                  </a>
                ) : (
                  <p className="flex items-center gap-2 text-xs text-slate-600">
                    <Mail size={13} aria-hidden="true" />
                    {email}
                  </p>
                )}
                {hasPhone ? (
                  <a
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-white focus-visible:text-white"
                  >
                    <Phone size={13} aria-hidden="true" />
                    {phone}
                  </a>
                ) : (
                  <p className="flex items-center gap-2 text-xs text-slate-600">
                    <Phone size={13} aria-hidden="true" />
                    {phone}
                  </p>
                )}
              </div>
            </div>

            {/* Nav columns */}
            {footerNav.map((col) => (
              <nav key={col.heading} aria-label={`${col.heading} links`}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {col.heading}
                </p>
                <ul className="space-y-2.5" role="list">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 transition-colors hover:text-white focus-visible:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-slate-600">
              &copy; {year} {siteName}. {allRightsReserved}
            </p>
            <p className="text-xs text-slate-700">
              {notAffiliated}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
