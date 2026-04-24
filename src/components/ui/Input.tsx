import { clsx } from "clsx";
import { inputBase, inputNormal, inputError } from "./FormField";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error, className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={clsx(inputBase, error ? inputError : inputNormal, className)}
    />
  );
}
