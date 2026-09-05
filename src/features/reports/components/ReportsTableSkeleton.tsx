function ReportsTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/40">
            <tr>
              {[
                "Report Name",
                "Type",
                "Created By",
                "Date",
                "Status",
                "Action",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-6 py-4 text-left"
                >
                  <div className="h-3 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />

                    <div className="h-4 w-28 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                </td>

                <td className="px-6 py-4">
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                </td>

                <td className="px-6 py-4">
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                </td>

                <td className="px-6 py-4">
                  <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
                </td>

                <td className="px-6 py-4">
                  <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsTableSkeleton;