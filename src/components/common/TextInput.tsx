import type {InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function TextInput({ label, error,className, ...inputProps }: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <input
        {...inputProps}
        className={`w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:border-blue-500 focus:outline-none`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default TextInput;
