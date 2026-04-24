import { clsx } from "clsx";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
  error?: boolean;
}

export function Checkbox({ id, checked, onChange, children, error }: CheckboxProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
      <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 bg-white transition-colors checked:border-[#1a2e4a] checked:bg-[#1a2e4a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a2e4a]/30"
        />
        {/* Checkmark */}
        <svg
          className="pointer-events-none absolute hidden h-3 w-3 text-white peer-checked:block"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span
        className={clsx(
          "text-sm leading-relaxed text-slate-600",
          error && "text-red-500"
        )}
      >
        {children}
      </span>
    </label>
  );
}
