import { clsx } from "clsx";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export function SectionWrapper({ children, className, id, as: Tag = "section" }: SectionWrapperProps) {
  return (
    <Tag id={id} className={clsx("w-full px-5 py-20 md:py-28", className)}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </Tag>
  );
}
