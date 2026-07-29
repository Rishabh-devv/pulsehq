import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps {
  children: ReactNode;

  variant?: "primary" | "secondary" | "danger";

  onClick?: () => void;

  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];

  disabled?: boolean;
}
const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",

  secondary: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",

  danger: "bg-red-600 text-white hover:bg-red-700",
};

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg
        px-4
        py-2
        font-medium
        transition
        ${variants[variant]}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
