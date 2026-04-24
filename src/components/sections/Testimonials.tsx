import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface TestimonialItem {
  quote: string;
  name: string;
  detail: string;
}

interface TestimonialsSectionProps {
  section: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    placeholderNote: string;
    items: readonly TestimonialItem[];
  };
}

export function Testimonials({ section }: TestimonialsSectionProps) {
  return (
    <SectionWrapper id="testimonials" className="bg-[#f9f7f4]">
      <div className="mb-12 text-center">
        <SectionLabel>{section.sectionLabel}</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight text-[#1a2e4a] md:text-4xl">
          {section.headline}
        </h2>
        <p className="mt-3 text-slate-500">{section.subheadline}</p>
      </div>

      <ul
        aria-label="Client testimonials"
        className="grid gap-6 md:grid-cols-3"
        role="list"
      >
        {section.items.map((t, i) => (
          <li key={i}>
            <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
              <Quote size={20} className="mb-4 text-[#c9a96e]" aria-hidden="true" />
              <blockquote className="mb-5 flex-1">
                <p className="text-sm leading-relaxed text-slate-600 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-[#1a2e4a]">{t.name}</p>
                <p className="mt-0.5 text-xs text-slate-400">{t.detail}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-xs text-slate-400" role="note">
        {section.placeholderNote}
      </p>
    </SectionWrapper>
  );
}
