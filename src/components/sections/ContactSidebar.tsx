import { Clock, Lock, HelpCircle } from "lucide-react";
import { WhatsAppBlock } from "./WhatsAppBlock";

interface FaqItem {
  question: string;
  answer: string;
}

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
  faqItems: readonly FaqItem[];
  whatsapp: WhatsAppConfig;
  labels: {
    responseTime: string;
    confidentiality: string;
    commonQuestions: string;
    confidentialityNote: string;
  };
}

export function ContactSidebar({ afterSubmit, faqItems, whatsapp, labels }: ContactSidebarProps) {
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

      {/* Confidentiality note */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
            <Lock size={17} className="text-[#1a2e4a]" />
          </div>
          <h3 className="text-sm font-semibold text-[#1a2e4a]">{labels.confidentiality}</h3>
        </div>
        <p className="text-xs leading-relaxed text-slate-500">{labels.confidentialityNote}</p>
      </div>

      {/* Mini FAQ */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
            <HelpCircle size={17} className="text-[#1a2e4a]" />
          </div>
          <h3 className="text-sm font-semibold text-[#1a2e4a]">{labels.commonQuestions}</h3>
        </div>
        <div className="space-y-4">
          {faqItems.slice(0, 3).map((item) => (
            <div key={item.question}>
              <p className="mb-1 text-xs font-semibold text-[#1a2e4a]">{item.question}</p>
              <p className="text-xs leading-relaxed text-slate-500">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
