import { clsx } from "clsx";
import { inputBase, inputNormal, inputError } from "./FormField";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ error, className, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={clsx(
        inputBase,
        error ? inputError : inputNormal,
        "resize-none leading-relaxed",
        className
      )}
    />
  );
}
