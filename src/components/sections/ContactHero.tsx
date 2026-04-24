import { CheckCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface ContactHeroProps {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    trustPoints: readonly string[];
  };
}

export function ContactHero({ hero }: ContactHeroProps) {
  return (
    <section className="bg-[#0f1e35] px-5 pb-16 pt-36">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>{hero.eyebrow}</SectionLabel>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {hero.headline}
        </h1>
        <p className="mb-8 text-base leading-relaxed text-slate-400 md:text-lg">
          {hero.subheadline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {hero.trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2 text-slate-400">
              <CheckCircle size={14} className="text-[#c9a96e]" />
              <span className="text-xs font-medium tracking-wide">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
