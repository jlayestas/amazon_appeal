import { clsx } from "clsx";
import Link from "next/link";

type Variant = "primary" | "ghost" | "outline" | "gold";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#1a2e4a] text-white px-7 py-3.5 text-sm hover:bg-[#243d60] focus-visible:ring-[#1a2e4a] shadow-sm",
  gold:
    "bg-[#c9a96e] text-[#0f1e35] px-8 py-4 text-sm font-bold hover:bg-[#dbbf88] focus-visible:ring-[#c9a96e] shadow-sm",
  ghost:
    "text-[#1a2e4a] px-5 py-3 text-sm hover:text-[#243d60] focus-visible:ring-[#1a2e4a]",
  outline:
    "border border-[#1a2e4a] text-[#1a2e4a] px-7 py-3.5 text-sm hover:bg-[#1a2e4a] hover:text-white focus-visible:ring-[#1a2e4a]",
};

export function Button({ variant = "primary", href, children, className, onClick }: ButtonProps) {
  const cls = clsx(base, variants[variant], className);
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
