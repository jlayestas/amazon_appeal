import { Bell, Store, History, Paperclip } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ICON_MAP: Record<string, React.ElementType> = {
  Bell,
  Store,
  History,
  Paperclip,
};

interface ProvideCategory {
  icon: string;
  label: string;
  items: readonly string[];
}

interface ProcessClientProvidesProps {
  clientProvides: {
    headline: string;
    subheadline: string;
    categories: readonly ProvideCategory[];
    note: string;
  };
  sectionLabel?: string;
}

export function ProcessClientProvides({ clientProvides, sectionLabel = "What to Prepare" }: ProcessClientProvidesProps) {
  return (
    <SectionWrapper className="bg-white">
      <div className="mb-12 text-center">
        <SectionLabel>{sectionLabel}</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight text-[#1a2e4a] md:text-4xl">
          {clientProvides.headline}
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-slate-500">
          {clientProvides.subheadline}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {clientProvides.categories.map((cat) => {
          const Icon = ICON_MAP[cat.icon] ?? Bell;
          return (
            <div
              key={cat.label}
              className="rounded-xl border border-slate-200 bg-[#f9f7f4] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
                  <Icon size={18} className="text-[#1a2e4a]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-[#1a2e4a]">{cat.label}</h3>
              </div>
              <ul className="space-y-2" role="list">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]"
                    />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-slate-400">{clientProvides.note}</p>
    </SectionWrapper>
  );
}
