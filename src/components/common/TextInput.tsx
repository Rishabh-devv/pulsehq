import type { InputHTMLAttributes } from "react";

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function TextInput({
  label,
  error,
  className,
  ...inputProps
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <input
        {...inputProps}
        className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 ${className ?? ""}`}
      />

      {error && (
        <p className="text-sm text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextInput;