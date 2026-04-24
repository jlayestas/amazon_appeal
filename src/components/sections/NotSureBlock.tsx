import { HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NotSureBlockProps {
  notSureBlock: {
    headline: string;
    body: string;
    cta: string;
  };
  contactHref: string;
}

export function NotSureBlock({ notSureBlock, contactHref }: NotSureBlockProps) {
  return (
    <div className="bg-white px-5 pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-[#1a2e4a]/10 bg-[#f0f4fa] p-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1a2e4a]/8">
              <HelpCircle size={22} className="text-[#1a2e4a]" />
            </div>
            <div>
              <h3 className="mb-1.5 text-lg font-semibold text-[#1a2e4a]">
                {notSureBlock.headline}
              </h3>
              <p className="max-w-lg text-sm leading-relaxed text-slate-600">
                {notSureBlock.body}
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <Button href={contactHref} variant="primary">
              {notSureBlock.cta}
              <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
