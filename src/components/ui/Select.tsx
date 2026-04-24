import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { inputBase, inputNormal, inputError } from "./FormField";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  error?: boolean;
}

export function Select({ options, error, className, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        {...props}
        className={clsx(
          inputBase,
          error ? inputError : inputNormal,
          "appearance-none pr-10",
          className
        )}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}
