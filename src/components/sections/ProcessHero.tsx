import { SectionLabel } from "@/components/ui/SectionLabel";

interface ProcessHeroProps {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
}

export function ProcessHero({ hero }: ProcessHeroProps) {
  return (
    <section aria-label="Page introduction" className="bg-[#0f1e35] px-5 pb-16 pt-36">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>{hero.eyebrow}</SectionLabel>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {hero.headline}
        </h1>
        <p className="text-base leading-relaxed text-slate-400 md:text-lg">
          {hero.subheadline}
        </p>
      </div>
    </section>
  );
}
