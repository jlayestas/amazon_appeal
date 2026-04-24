"use client";

import {
  ShieldCheck,
  Package,
  Landmark,
  FileText,
  BarChart2,
  Search,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Package,
  Landmark,
  FileText,
  BarChart2,
  Search,
};

interface ServiceCategory {
  id: string;
  icon: string;
  tag: string;
  title: string;
  description: string;
  situations: readonly string[];
  includes: readonly string[];
}

interface ServiceCategoriesProps {
  categories: readonly ServiceCategory[];
  contactHref: string;
  situationsLabel?: string;
  includesLabel?: string;
  ctaLabel?: string;
}

export function ServiceCategories({
  categories,
  contactHref,
  situationsLabel = "Common Situations",
  includesLabel = "What Support Includes",
  ctaLabel = "Discuss This Case Type",
}: ServiceCategoriesProps) {
  const items: AccordionItem[] = categories.map((cat) => {
    const Icon = ICON_MAP[cat.icon] ?? FileText;

    return {
      id: cat.id,
      trigger: (
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
            <Icon size={20} className="text-[#1a2e4a]" />
          </div>
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.13em] text-[#8a7560]">
              {cat.tag}
            </span>
            <span className="text-base font-semibold text-[#1a2e4a]">{cat.title}</span>
          </div>
        </div>
      ),
      content: (
        <div className="grid gap-8 md:grid-cols-2">
          <div className="md:col-span-2">
            <p className="text-sm leading-relaxed text-slate-600">{cat.description}</p>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2">
              <AlertCircle size={14} className="text-[#c9a96e]" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {situationsLabel}
              </h4>
            </div>
            <ul className="space-y-2">
              {cat.situations.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <span className="mt-[5px] block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                  <span className="text-sm text-slate-600">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle size={14} className="text-[#1a2e4a]" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {includesLabel}
              </h4>
            </div>
            <ul className="space-y-2">
              {cat.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="mt-0.5 shrink-0 text-[#1a2e4a]/50" />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 border-t border-slate-100 pt-5">
            <Button href={contactHref} variant="primary" className="!text-xs !px-5 !py-2.5">
              {ctaLabel}
            </Button>
          </div>
        </div>
      ),
    };
  });

  return (
    <SectionWrapper className="bg-[#f9f7f4]">
      <Accordion items={items} defaultOpen="account-reinstatement" />
    </SectionWrapper>
  );
}
