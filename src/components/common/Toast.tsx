import { CheckCircle, XCircle } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
}

function Toast({ message, type, isVisible }: ToastProps) {
  if (!isVisible) return null;

  return (
   <div
  className={`fixed right-6 top-6 z-50 flex items-center gap-3 rounded-lg px-5 py-3 text-white shadow-xl transition-all duration-300 ${
    type === "success"
      ? "bg-green-600"
      : "bg-red-600"
  } ${
    isVisible
      ? "translate-x-0 opacity-100"
      : "translate-x-10 opacity-0"
  }`}
>
      {type === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />}

      <span>{message}</span>
    </div>
  );
}

export default Toast;
