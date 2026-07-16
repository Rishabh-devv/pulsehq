interface EmptyStateProps {
  title: string;
  description: string;
}

function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 py-12 text-center">
      <h2 className="text-xl font-semibold text-gray-800">
        {title}
      </h2>

      <p className="mt-2 text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;