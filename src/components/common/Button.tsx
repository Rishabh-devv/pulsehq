import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 disabled:hover:bg-blue-600",
  secondary:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
  danger: "bg-red-600 text-white hover:bg-red-700 disabled:hover:bg-red-600",
};

function Button({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      {...buttonProps}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-lg
        px-4
        py-2.5
        text-sm
        font-medium
        transition-colors
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
        dark:focus:ring-offset-gray-900
        ${variants[variant]}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
