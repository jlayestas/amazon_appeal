import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

interface FinalCTAProps {
  finalCta: {
    headline: string;
    subheadline: string;
  };
  ctaPrimary: string;
  contactHref: string;
}

export function FinalCTA({ finalCta, ctaPrimary, contactHref }: FinalCTAProps) {
  return (
    <SectionWrapper className="bg-[#0f1e35]">
      <div className="flex flex-col items-center text-center">
        <h2 className="mb-4 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-white md:text-4xl">
          {finalCta.headline}
        </h2>
        <p className="mb-10 max-w-lg text-slate-400">{finalCta.subheadline}</p>
        <Button variant="gold" href={contactHref}>
          {ctaPrimary}
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
