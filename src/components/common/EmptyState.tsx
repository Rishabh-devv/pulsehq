import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 py-12 text-center">
      <Icon size={48} className="mb-4 text-gray-400" />
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
}

export default EmptyState;
