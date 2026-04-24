import { Eye, FileText, MessageSquare, Lock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ICON_MAP: Record<string, React.ElementType> = {
  Eye,
  FileText,
  MessageSquare,
  Lock,
};

interface WhyUsPoint {
  icon: string;
  title: string;
  description: string;
}

interface WhyUsSectionProps {
  section: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    points: readonly WhyUsPoint[];
  };
}

export function WhyUs({ section }: WhyUsSectionProps) {
  return (
    <SectionWrapper id="why-us" className="bg-white">
      <div className="mb-12 text-center">
        <SectionLabel>{section.sectionLabel}</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight text-[#1a2e4a] md:text-4xl">
          {section.headline}
        </h2>
        <p className="mt-3 text-slate-500">{section.subheadline}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {section.points.map((point) => {
          const Icon = ICON_MAP[point.icon];
          return (
            <div
              key={point.title}
              className="flex gap-5 rounded-xl border border-slate-100 bg-[#f9f7f4] p-7"
            >
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
                  <Icon size={20} className="text-[#1a2e4a]" />
                </div>
              </div>
              <div>
                <h3 className="mb-1.5 font-semibold text-[#1a2e4a]">{point.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{point.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
