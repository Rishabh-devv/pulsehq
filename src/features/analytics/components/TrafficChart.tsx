import { useQuery } from "@tanstack/react-query";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { analyticsService } from "@/services/analyticsService";

function formatVisitors(value: number) {
  if (value >= 1000) {
    const thousands = value / 1000;

    return `${Number.isInteger(thousands) ? thousands : thousands.toFixed(1)}k`;
  }

  return value.toString();
}
function formatTooltipValue(value: number) {
  return value.toLocaleString();
}

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
      <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 dark:border-gray-700 dark:bg-gray-800">
        <div className="animate-pulse">
          <div className="h-5 w-40 rounded bg-gray-200 dark:bg-gray-700" />

          <div className="mt-2 h-4 w-64 rounded bg-gray-200 dark:bg-gray-700" />

          <div className="mt-6 h-80 rounded-lg bg-gray-100 dark:bg-gray-700/50" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-900 dark:bg-red-950/30">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Traffic Overview
        </h2>

        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error instanceof Error
            ? error.message
            : "Something went wrong while loading traffic data."}
        </p>
      </div>
    );
  }

  const latestVisitors =
    trafficData.length > 0 ? trafficData[trafficData.length - 1].visitors : 0;

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      {/* Header */}
      <header className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Traffic Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Track visitor activity over time.
          </p>
        </div>

        <div className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
          Last 6 months
        </div>
      </header>

      {/* Latest metric */}
      <div className="mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Latest visitors
        </p>

        <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {latestVisitors.toLocaleString()}
        </p>
      </div>

      {/* Chart */}
      <div className="mt-5 h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={trafficData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="analyticsTrafficGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.16} />
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#334155"
              strokeDasharray="3 5"
              strokeOpacity={0.5}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 13,
                fill: "#94A3B8",
              }}
              dy={8}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 13,
                fill: "#94A3B8",
              }}
              tickFormatter={formatVisitors}
              width={45}
            />

            <Tooltip
              cursor={{
                stroke: "#CBD5E1",
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
                backgroundColor: "#FFFFFF",
              }}
              labelStyle={{
                color: "#475569",
                fontWeight: 600,
                marginBottom: "4px",
              }}
              formatter={(value) => [
                formatTooltipValue(Number(value)),
                "Visitors",
              ]}
            />

            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#2563EB"
              strokeWidth={3}
              fill="url(#analyticsTrafficGradient)"
              dot={{
                r: 3,
                strokeWidth: 2,
                fill: "#FFFFFF",
              }}
              activeDot={{
                r: 5,
                strokeWidth: 2,
              }}
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrafficChart;
