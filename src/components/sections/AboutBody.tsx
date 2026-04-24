import {
  ShieldAlert,
  Package,
  Scale,
  BarChart2,
  PenLine,
  ClipboardList,
  ScanSearch,
  FolderSearch,
  FileCheck,
  Compass,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldAlert,
  Package,
  Scale,
  BarChart2,
  PenLine,
  ClipboardList,
  ScanSearch,
  FolderSearch,
  FileCheck,
  Compass,
};

interface AboutBodyProps {
  whoFor: {
    headline: string;
    subheadline: string;
    groups: readonly {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  whatSupport: {
    headline: string;
    subheadline: string;
    items: readonly {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  approach: {
    headline: string;
    subheadline: string;
    points: readonly string[];
    closing: string;
  };
  sectionLabels?: {
    whoFor?: string;
    scopeOfWork?: string;
  };
}

export function AboutBody({ whoFor, whatSupport, approach, sectionLabels }: AboutBodyProps) {
  return (
    <>
      {/* Who This Is For */}
      <SectionWrapper className="bg-[#f9f7f4]">
        <div className="mb-12 text-center">
          <SectionLabel>{sectionLabels?.whoFor ?? "Who This Is For"}</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a2e4a] md:text-4xl">
            {whoFor.headline}
          </h2>
          <p className="mt-3 text-slate-500">{whoFor.subheadline}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {whoFor.groups.map((group) => {
            const Icon = ICON_MAP[group.icon] ?? ShieldAlert;
            return (
              <div
                key={group.title}
                className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
                    <Icon size={20} className="text-[#1a2e4a]" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1.5 font-semibold text-[#1a2e4a]">{group.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{group.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* What Support Includes */}
      <SectionWrapper className="bg-white">
        <div className="mb-12 text-center">
          <SectionLabel>{sectionLabels?.scopeOfWork ?? "Scope of Work"}</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a2e4a] md:text-4xl">
            {whatSupport.headline}
          </h2>
          <p className="mt-3 text-slate-500">{whatSupport.subheadline}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatSupport.items.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Compass;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-100 bg-[#f9f7f4] p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
                  <Icon size={18} className="text-[#1a2e4a]" aria-hidden="true" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-[#1a2e4a]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Working Approach */}
      <SectionWrapper className="bg-[#0f1e35]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <SectionLabel>{approach.headline}</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              {approach.headline}
            </h2>
            <p className="mt-3 text-slate-400">{approach.subheadline}</p>
          </div>

          <ul className="space-y-4" role="list">
            {approach.points.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#c9a96e]"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-slate-300">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
            <AlertCircle
              size={16}
              className="mt-0.5 shrink-0 text-[#8a7560]"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-slate-400">{approach.closing}</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
