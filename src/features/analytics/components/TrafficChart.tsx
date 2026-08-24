import { useQuery } from "@tanstack/react-query";
import { analyticsService } from "@/services/analyticsService";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TrafficChart() {
  const {
    data: trafficData = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["analytics", "traffic"],
    queryFn: analyticsService.getTrafficData,
  });

  if (isLoading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Traffic Overview
        </h2>

        <div className="mt-4 flex h-80 items-center justify-center animate-pulse rounded-lg bg-gray-100">
          <p className="text-gray-500">Loading Traffic Overview...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Traffic Overview
        </h2>

        <p className="text-red-500">
          {error instanceof Error
            ? error.message
            : "Something went wrong"}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Traffic Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrafficChart;