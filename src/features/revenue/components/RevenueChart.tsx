import RevenueChartTooltip from "./RevenueChartTooltip";

import { formatCompactCurrency } from "@/utils/formatCurrency";
import type { RevenueData } from "@/types/revenue";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface RevenueChartProps {
  data?: RevenueData[];
  isLoading: boolean;
  error?: unknown;
}

function RevenueChart({
  data = [],
  isLoading,
  error,
}: RevenueChartProps) {
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
      <div className="h-full rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Revenue Overview
        </h2>

        <div className="flex min-h-87.5 items-center justify-center">
          <p className="text-sm text-red-600 dark:text-red-400">
            {error instanceof Error
              ? error.message
              : "Something went wrong while loading revenue data."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Monthly Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Track your revenue performance over time.
          </p>
        </div>

        <div className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
          Last 6 months
        </div>
      </header>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="revenueGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#2563EB"
                stopOpacity={0.16}
              />

              <stop
                offset="100%"
                stopColor="#2563EB"
                stopOpacity={0}
              />
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
            tick={{ fill: "#6B7280", fontSize: 14 }}
          />

          <YAxis
            tickFormatter={formatCompactCurrency}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#6B7280", fontSize: 14 }}
          />

          <Tooltip content={<RevenueChartTooltip />} />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563EB"
            strokeWidth={3}
            fill="url(#revenueGradient)"
            isAnimationActive
            animationDuration={1200}
            dot={{
              r: 4,
              fill: "#ffffff",
              stroke: "#2563EB",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 6,
              fill: "#2563EB",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;