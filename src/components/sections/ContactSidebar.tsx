import { Clock } from "lucide-react";
import { WhatsAppBlock } from "./WhatsAppBlock";

interface WhatsAppConfig {
  show: boolean;
  headline: string;
  body: string;
  number: string;
  label: string;
}

interface ContactSidebarProps {
  afterSubmit: {
    headline: string;
    steps: readonly string[];
  };
  whatsapp: WhatsAppConfig;
  labels: {
    responseTime: string;
  };
}

export function ContactSidebar({ afterSubmit, whatsapp, labels }: ContactSidebarProps) {
  return (
    <aside className="flex flex-col gap-5">
      {/* Response time card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
            <Clock size={17} className="text-[#1a2e4a]" />
          </div>
          <h3 className="text-sm font-semibold text-[#1a2e4a]">{labels.responseTime}</h3>
        </div>
        <ol className="space-y-3">
          {afterSubmit.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a2e4a] text-[10px] font-bold text-white">
                {i + 1}
              </span>
              <span className="text-xs leading-relaxed text-slate-600">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* WhatsApp */}
      <WhatsAppBlock whatsapp={whatsapp} />
    </aside>
  );
}
