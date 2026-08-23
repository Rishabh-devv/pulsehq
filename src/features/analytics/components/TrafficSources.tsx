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
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-lg font-semibold">
          Top Traffic Sources
        </h2>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex animate-pulse items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-gray-200" />

                <div className="h-4 w-24 rounded bg-gray-200" />
              </div>

              <div className="space-y-1 text-right">
                <div className="ml-auto h-4 w-12 rounded bg-gray-200" />
                <div className="ml-auto h-3 w-8 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Top Traffic Sources
        </h2>

        <p className="text-red-500">
          {error instanceof Error
            ? error.message
            : "Something went wrong"}
        </p>
      </div>
    );
  }

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Top Traffic Sources
      </h2>

      <div className="space-y-4">
        {trafficSources.map((source, index) => (
          <div
            key={source.sourceName}
            className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0"
          >
            {/* Left Section */}

            <div className="flex items-center gap-3">
              <div
                className={`h-3 w-3 rounded-full ${
                  colors[index % colors.length]
                }`}
              />

              <p className="font-medium text-gray-900">
                {source.sourceName}
              </p>
            </div>

            {/* Right Section */}

            <div className="text-right">
              <p className="font-semibold text-gray-900">
                {source.visitors.toLocaleString()}
              </p>

              <p className="text-sm text-gray-500">
                {source.percentage}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrafficSources;