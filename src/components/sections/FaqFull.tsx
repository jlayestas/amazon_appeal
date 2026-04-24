"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqFullProps {
  items: readonly FaqItem[];
  contactPrompt: {
    headline: string;
    body: string;
    cta: string;
  };
  contactHref: string;
}

export function FaqFull({ items, contactPrompt, contactHref }: FaqFullProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper className="bg-[#f9f7f4]">
      {/* Accordion */}
      <dl className="mx-auto max-w-2xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          const triggerId = `faq-page-trigger-${i}`;
          const panelId = `faq-page-panel-${i}`;

          return (
            <div key={i}>
              <dt>
                <button
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={clsx(
                    "flex w-full cursor-pointer items-start justify-between gap-4 px-6 py-5 text-left transition-colors",
                    "hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1a2e4a]/25",
                    isOpen && "bg-slate-50/60"
                  )}
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
                className="border-t border-slate-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-slate-500"
              >
                {item.answer}
              </dd>
            </div>
          );
        })}
      </dl>

      {/* "Don't see your question?" prompt */}
      <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-slate-200 bg-white px-7 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 font-semibold text-[#1a2e4a]">{contactPrompt.headline}</p>
            <p className="text-sm text-slate-500">{contactPrompt.body}</p>
          </div>
          <Button href={contactHref} variant="primary" className="shrink-0">
            {contactPrompt.cta}
            <ArrowRight size={15} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
