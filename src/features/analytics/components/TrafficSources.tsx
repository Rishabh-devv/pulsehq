import { useQuery } from "@tanstack/react-query";

import { analyticsService } from "@/services/analyticsService";

function TrafficSources() {
  const {
    data: trafficSources = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["analytics", "traffic-sources"],
    queryFn: analyticsService.getTrafficSources,
  });

  if (isLoading) {
    return (
      <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 dark:border-gray-700 dark:bg-gray-800">
        <div className="animate-pulse">
          <div className="h-5 w-44 rounded bg-gray-200 dark:bg-gray-700" />

          <div className="mt-2 h-4 w-52 rounded bg-gray-200 dark:bg-gray-700" />

          <div className="mt-6 space-y-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item}>
                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                </div>

                <div className="mt-3 h-2 rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="h-2 w-1/2 rounded-full bg-gray-200 dark:bg-gray-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-900 dark:bg-red-950/30">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Top Traffic Sources
        </h2>

        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error instanceof Error
            ? error.message
            : "Something went wrong while loading traffic sources."}
        </p>
      </div>
    );
  }

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      {/* Header */}
      <header>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Top Traffic Sources
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Where your visitors are coming from.
            </p>
          </div>

          <div className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
            {trafficSources.length} sources
          </div>
        </div>
      </header>

      {/* Sources */}
      <div className="mt-6 space-y-5">
        {trafficSources.map((source) => (
          <div key={source.sourceName}>
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />

                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  {source.sourceName}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {source.visitors.toLocaleString()}
                </p>

                <p className="w-10 text-right text-sm text-gray-500 dark:text-gray-400">
                  {source.percentage}%
                </p>
              </div>
            </div>

            <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-500"
                style={{
                  width: `${Math.min(source.percentage, 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrafficSources;
