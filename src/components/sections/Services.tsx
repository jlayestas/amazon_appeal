import { ShieldCheck, Package, Landmark, Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Package,
  Landmark,
};

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  summary: string;
  items: readonly string[];
}

interface ServicesSectionProps {
  section: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    viewAll: string;
    viewAllHref: string;
    items: readonly ServiceItem[];
  };
}

export function Services({ section }: ServicesSectionProps) {
  return (
    <SectionWrapper id="services" className="bg-[#f9f7f4]">
      <div className="mb-12 text-center">
        <SectionLabel>{section.sectionLabel}</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight text-[#1a2e4a] md:text-4xl">
          {section.headline}
        </h2>
        <p className="mt-3 text-slate-500">{section.subheadline}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {section.items.map((service) => {
          const Icon = ICON_MAP[service.icon];
          return (
            <div
              key={service.id}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
                <Icon size={22} className="text-[#1a2e4a]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a2e4a]">{service.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-500">{service.summary}</p>
              <ul className="mt-auto space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={14} className="mt-0.5 shrink-0 text-[#c9a96e]" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Button href={section.viewAllHref} variant="outline">
          {section.viewAll}
        </Button>
      </div>
    </SectionWrapper>
  );
}
