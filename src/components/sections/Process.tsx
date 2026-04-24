import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  section: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    steps: readonly ProcessStep[];
  };
  ctaPrimary: string;
  contactHref: string;
}

export function Process({ section, ctaPrimary, contactHref }: ProcessSectionProps) {
  return (
    <SectionWrapper id="process" className="bg-[#0f1e35]">
      <div className="mb-12 text-center">
        <SectionLabel>{section.sectionLabel}</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {section.headline}
        </h2>
        <p className="mt-3 text-slate-400">{section.subheadline}</p>
      </div>

      <ol aria-label="Process steps" className="relative grid gap-8 md:grid-cols-3" role="list">
        {/* Connector line on desktop */}
        <div
          aria-hidden="true"
          className="absolute left-[16.67%] right-[16.67%] top-[2rem] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block"
        />

        {section.steps.map((step) => (
          <li key={step.number} className="relative flex flex-col items-center text-center">
            <div
              aria-hidden="true"
              className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-[#1a2e4a]"
            >
              <span className="text-lg font-bold text-[#c9a96e]">{step.number}</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 text-center">
        <Button variant="gold" href={contactHref}>
          {ctaPrimary}
        </Button>
      </div>
    </SectionWrapper>
  );
}
