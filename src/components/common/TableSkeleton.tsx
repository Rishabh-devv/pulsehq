interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

function TableSkeleton({ rows = 5, columns = 7 }: TableSkeletonProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="animate-pulse">
        <div className="flex items-start justify-between">
          <div>
            <div className="h-5 w-32 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mt-2 h-4 w-52 rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="h-9 w-20 rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-225">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                {Array.from({ length: columns }).map((_, index) => (
                  <th key={index} className="px-4 py-3">
                    <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-gray-100 dark:border-gray-700/70"
                >
                  {Array.from({ length: columns }).map((_, columnIndex) => (
                    <td key={columnIndex} className="px-4 py-4">
                      <div
                        className={`h-4 rounded bg-gray-200 dark:bg-gray-700 ${
                          columnIndex === 0 ? "w-32" : "w-24"
                        }`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableSkeleton;
