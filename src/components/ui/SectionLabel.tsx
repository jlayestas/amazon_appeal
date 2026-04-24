interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#8a7560]">
      {children}
    </p>
  );
}
