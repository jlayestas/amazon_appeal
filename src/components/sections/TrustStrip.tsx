interface TrustItem {
  value: string;
  label: string;
}

interface TrustStripProps {
  items: readonly TrustItem[];
}

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <div className="border-y border-slate-200 bg-white px-5 py-10" role="region" aria-label="At a glance">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {items.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1 text-center">
            <dt className="order-2 text-xs font-medium uppercase tracking-widest text-[#8a7560]">
              {label}
            </dt>
            <dd className="order-1 text-3xl font-bold text-[#1a2e4a]">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
