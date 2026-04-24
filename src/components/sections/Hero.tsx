import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    trustSignals: readonly string[];
  };
  ctaPrimary: string;
  ctaSecondary: string;
  contactHref: string;
  processHref: string;
}

export function Hero({ hero, ctaPrimary, ctaSecondary, contactHref, processHref }: HeroProps) {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#0f1e35] px-5 pb-24 pt-32"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.8) 39px,rgba(255,255,255,.8) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.8) 39px,rgba(255,255,255,.8) 40px)",
        }}
      />
      {/* Soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a4a8a] opacity-10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="mb-5 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#b8a98a]">
          {hero.eyebrow}
        </p>

        {/* H1 — one per page */}
        <h1 className="mb-6 text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
          {hero.headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-md bg-[#c9a96e] px-8 py-4 text-sm font-bold text-[#0f1e35] transition-colors hover:bg-[#dbbf88] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a96e]"
          >
            {ctaPrimary}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href={processHref}
            className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            {ctaSecondary}
          </Link>
        </div>

        {/* Trust signals */}
        <ul
          aria-label="Trust signals"
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
          role="list"
        >
          {hero.trustSignals.map((signal) => (
            <li key={signal} className="flex items-center gap-2 text-slate-400">
              <CheckCircle size={14} className="text-[#c9a96e]" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wide">{signal}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
