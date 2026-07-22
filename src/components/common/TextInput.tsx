import type { HTMLInputTypeAttribute } from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute;
}

function TextInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default TextInput;