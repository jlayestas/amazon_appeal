import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: readonly LegalSection[];
  /** Label for "Effective date:" — pass translated string if needed */
  effectiveDateLabel?: string;
  /** Back link href */
  backHref?: string;
  /** Back link label */
  backLabel?: string;
}

export function LegalLayout({
  title,
  effectiveDate,
  intro,
  sections,
  effectiveDateLabel = "Effective date:",
  backHref = "/",
  backLabel = "Back to home",
}: LegalLayoutProps) {
  return (
    <>
      {/* Page hero */}
      <section
        aria-label="Page introduction"
        className="bg-[#0f1e35] px-5 pb-14 pt-36"
      >
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-white">
            {title}
          </h1>
          <p className="text-sm text-slate-500">
            {effectiveDateLabel} {effectiveDate}
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="bg-[#f9f7f4] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Back nav */}
          <Link
            href={backHref}
            className="mb-10 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#1a2e4a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a2e4a]"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            {backLabel}
          </Link>

          {/* Intro */}
          <div className="mb-10 rounded-xl border border-slate-200 bg-white px-7 py-6 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-600">{intro}</p>
          </div>

          {/* Sections */}
          <div className="space-y-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {sections.map((section, i) => (
              <article
                key={i}
                className="border-b border-slate-100 px-7 py-6 last:border-0"
              >
                <h2 className="mb-2 text-base font-semibold text-[#1a2e4a]">
                  {section.heading}
                </h2>
                <p className="text-sm leading-relaxed text-slate-500">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          {/* Placeholder reminder visible only in dev */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="text-xs font-semibold text-amber-700">
                Dev note: Replace all [PLACEHOLDER] values and have this page reviewed by a qualified attorney before publishing.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
