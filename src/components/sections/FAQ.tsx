"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  section: {
    sectionLabel: string;
    headline: string;
    seeAll: string;
    seeAllHref: string;
    previewCount: number;
  };
  items: readonly FaqItem[];
}

export function FAQ({ section, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const preview = items.slice(0, section.previewCount);

  return (
    <SectionWrapper id="faq" className="bg-white">
      <div className="mb-12 text-center">
        <SectionLabel>{section.sectionLabel}</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight text-[#1a2e4a] md:text-4xl">
          {section.headline}
        </h2>
      </div>

      <dl className="mx-auto max-w-2xl divide-y divide-slate-100">
        {preview.map((item, i) => {
          const isOpen = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const triggerId = `faq-trigger-${i}`;

          return (
            <div key={i}>
              <dt>
                <button
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1a2e4a]/30"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-sm font-semibold text-[#1a2e4a]">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={clsx(
                      "mt-0.5 shrink-0 text-[#8a7560] transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
              </dt>
              <dd
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                hidden={!isOpen}
                className="pb-5 text-sm leading-relaxed text-slate-500"
              >
                {item.answer}
              </dd>
            </div>
          );
        })}
      </dl>

      <div className="mt-10 text-center">
        <Button href={section.seeAllHref} variant="outline">
          {section.seeAll}
        </Button>
      </div>
    </SectionWrapper>
  );
}
