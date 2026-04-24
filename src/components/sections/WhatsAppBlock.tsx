import { MessageCircle } from "lucide-react";

const PLACEHOLDER_NUMBER = "+1 (000) 000-0000";

interface WhatsAppConfig {
  show: boolean;
  headline: string;
  body: string;
  number: string;
  label: string;
}

interface WhatsAppBlockProps {
  whatsapp: WhatsAppConfig;
}

export function WhatsAppBlock({ whatsapp }: WhatsAppBlockProps) {
  if (!whatsapp.show || whatsapp.number === PLACEHOLDER_NUMBER) return null;

  const href = `https://wa.me/${whatsapp.number.replace(/\D/g, "")}`;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25d366]/10">
          <MessageCircle size={18} className="text-[#25d366]" />
        </div>
        <h3 className="text-sm font-semibold text-[#1a2e4a]">{whatsapp.headline}</h3>
      </div>
      <p className="mb-4 text-xs leading-relaxed text-slate-500">{whatsapp.body}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-[#25d366]/40 bg-[#25d366]/5 px-4 py-2.5 text-xs font-semibold text-[#1a8040] transition-colors hover:bg-[#25d366]/10"
      >
        <MessageCircle size={14} />
        {whatsapp.label}
      </a>
    </div>
  );
}
