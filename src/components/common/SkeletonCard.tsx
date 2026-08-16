function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 h-4 w-24 rounded bg-gray-200"></div>

      <div className="mb-3 h-8 w-32 rounded bg-gray-300"></div>

      <div className="h-4 w-16 rounded bg-gray-200"></div>
    </div>
  );
}

export default SkeletonCard;