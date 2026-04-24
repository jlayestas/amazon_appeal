"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

export interface AccordionItem {
  id: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
}

export function Accordion({ items, defaultOpen }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? null);

  return (
    <div className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200 bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `accordion-trigger-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} id={item.id}>
            <h3>
              <button
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={clsx(
                  "flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors",
                  "hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1a2e4a]/25",
                  isOpen && "bg-slate-50/50"
                )}
              >
                <span className="flex-1">{item.trigger}</span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={clsx(
                    "shrink-0 text-[#8a7560] transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className="border-t border-slate-100 px-6 pb-6 pt-5"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
