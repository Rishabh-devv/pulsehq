import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboardService";
import { formatCompactCurrency, formatCurrency } from "@/utils/formatCurrency";

function RevenueChart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard", "revenue"],
    queryFn: dashboardService.getRevenueChart,
  });

  if (isLoading) {
    return (
      <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <div>
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mt-2 h-4 w-64 animate-pulse rounded bg-gray-100 dark:bg-gray-700" />
          </div>

          <div className="h-9 w-28 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-700" />
        </div>

        <div className="mt-8 h-80 animate-pulse rounded-xl bg-gray-50 dark:bg-gray-900" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Revenue Overview
        </h2>

        <div className="mt-6 flex h-80 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900">
          <p className="text-sm text-red-500">
            {error instanceof Error ? error.message : "Something went wrong"}
          </p>
        </div>
      </div>
    );
  }

  const latestRevenue = data?.[data.length - 1]?.revenue ?? 0;

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <header className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Revenue Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Track your revenue performance over time.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
          Last 6 months
        </div>
      </header>
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Latest revenue
        </p>

        <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {formatCurrency(latestRevenue)}
        </p>
      </div>
      <section className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="dashboardRevenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 5"
              strokeOpacity={0.5}
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 13,
              }}
              dy={10}
            />

            <YAxis
              tickFormatter={formatCompactCurrency}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 13,
              }}
              width={55}
            />

            <Tooltip
              formatter={(value) => [formatCurrency(Number(value)), "Revenue"]}
              labelStyle={{
                color: "#6B7280",
                fontSize: "12px",
              }}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                backgroundColor: "#FFFFFF",
                padding: "10px 14px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              }}
              cursor={{
                stroke: "#2563EB",
                strokeDasharray: "4 4",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={3}
              fill="url(#dashboardRevenueGradient)"
              fillOpacity={1}
              dot={{
                r: 4,
                fill: "#FFFFFF",
                stroke: "#2563EB",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: "#2563EB",
                stroke: "#FFFFFF",
                strokeWidth: 3,
              }}
              isAnimationActive
              animationDuration={1200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}

export default RevenueChart;
