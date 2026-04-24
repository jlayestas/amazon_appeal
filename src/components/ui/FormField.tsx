import { clsx } from "clsx";

// ─── Label ────────────────────────────────────────────────────
interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  optional?: boolean;
}

export function Label({ htmlFor, children, required, optional }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-[#1a2e4a]"
    >
      {children}
      {required && (
        <span className="ml-1 text-[#c9a96e]" aria-hidden="true">*</span>
      )}
      {optional && (
        <span className="ml-2 text-xs font-normal text-slate-400">(optional)</span>
      )}
    </label>
  );
}

// ─── FieldError ───────────────────────────────────────────────
interface FieldErrorProps {
  id?: string;
  message?: string;
}

export function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-500">
      {message}
    </p>
  );
}

// ─── FieldHint ────────────────────────────────────────────────
interface FieldHintProps {
  id?: string;
  children: React.ReactNode;
}

export function FieldHint({ id, children }: FieldHintProps) {
  return (
    <p id={id} className="mt-1.5 text-xs text-slate-400">
      {children}
    </p>
  );
}

// ─── Shared input styles ──────────────────────────────────────
export const inputBase = clsx(
  "block w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#1a2e4a] placeholder:text-slate-400",
  "transition-colors duration-150",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a2e4a]/25 focus-visible:border-[#1a2e4a]",
  "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
);

export const inputError = "border-red-400 focus-visible:ring-red-200 focus-visible:border-red-400";
export const inputNormal = "border-slate-200 hover:border-slate-300";
