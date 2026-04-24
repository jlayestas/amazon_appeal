import {
  ClipboardList,
  ScanSearch,
  PenLine,
  FolderSearch,
  Send,
  CheckCircle,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ICON_MAP: Record<string, React.ElementType> = {
  ClipboardList,
  ScanSearch,
  PenLine,
  FolderSearch,
  Send,
};

interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  summary: string;
  details: readonly string[];
}

interface ProcessStepsProps {
  steps: readonly ProcessStep[];
  sectionLabel: string;
  headline: string;
  subheadline: string;
}

export function ProcessSteps({ steps, sectionLabel, headline, subheadline }: ProcessStepsProps) {
  return (
    <SectionWrapper className="bg-[#f9f7f4]">
      <div className="mb-12 text-center">
        <SectionLabel>{sectionLabel}</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight text-[#1a2e4a] md:text-4xl">
          {headline}
        </h2>
        <p className="mt-3 text-slate-500">{subheadline}</p>
      </div>

      <ol aria-label="Process steps" className="relative space-y-0" role="list">
        {steps.map((step, i) => {
          const Icon = ICON_MAP[step.icon] ?? ClipboardList;
          const isLast = i === steps.length - 1;

          return (
            <li key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="absolute left-[1.9rem] top-14 bottom-0 w-px bg-slate-200"
                />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-sm">
                  <Icon size={22} className="text-[#1a2e4a]" aria-hidden="true" />
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1.5 text-[11px] font-bold tracking-widest text-[#c9a96e]"
                >
                  {step.number}
                </span>
              </div>
              <div className="flex-1 pt-3">
                <div className="mb-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-1 text-lg font-bold text-[#1a2e4a]">{step.title}</h3>
                  <p className="mb-4 text-sm text-slate-500">{step.summary}</p>
                  <ul className="space-y-2" role="list">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <CheckCircle
                          size={14}
                          className="mt-0.5 shrink-0 text-[#1a2e4a]/40"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </SectionWrapper>
  );
}
