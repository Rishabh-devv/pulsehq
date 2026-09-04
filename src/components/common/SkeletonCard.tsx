function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div>
          <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mt-3 h-9 w-32 rounded bg-gray-300 dark:bg-gray-600" />
        </div>
        <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950" />
      </div>
      <div className="mt-4 h-4 w-32 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

export default SkeletonCard;