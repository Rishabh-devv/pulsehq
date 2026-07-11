import { trafficSources } from "@/features/analytics/data/topTrafficSources";

function TrafficSources() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Top Traffic Sources
      </h2>

      <div className="space-y-4">
        {trafficSources.map((source, index) => {
          const colors = [
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-red-500",
            "bg-purple-500",
          ];

          return (
            <div
              key={source.sourceName}
              className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0"
            >
              {/* Left Section */}
              <div className="flex items-center gap-3">
                <div
                  className={`h-3 w-3 rounded-full ${colors[index]}`}
                ></div>

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
          );
        })}
      </div>
    </div>
  );
}

export default TrafficSources;