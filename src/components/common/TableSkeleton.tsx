interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

function TableSkeleton({ rows = 5, columns = 7 }: TableSkeletonProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 h-6 w-32 animate-pulse rounded bg-gray-200" />

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              {Array.from({ length: columns }).map((_, index) => (
                <th key={index} className="px-4 py-3">
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {Array.from({ length: columns }).map((_, columnIndex) => (
                  <td key={columnIndex} className="px-4 py-4">
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableSkeleton;
