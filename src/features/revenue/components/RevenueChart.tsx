import type { RevenueChartProps } from "../types/revenue";
import RevenueChartTooltip from "./RevenueChartTooltip";
import { formatCurrency } from "@/utils/formatCurrency";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function RevenueChart({ data }: RevenueChartProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Monthly Revenue</h2>
        <p className="mt-1 text-sm text-gray-500">
          Revenue generated over the last six months.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
  stroke="#E5E7EB"
  strokeDasharray="3 3"
  vertical={false}
/>

          <XAxis
  dataKey="month"
  tickLine={false}
  axisLine={false}
  tick={{ fill: "#6B7280", fontSize: 14 }}
/>

          <YAxis
  tickFormatter={formatCurrency}
  tickLine={false}
  axisLine={false}
  tick={{ fill: "#6B7280", fontSize: 14 }}
/>

          <Tooltip content={<RevenueChartTooltip />} />

          <Area
  type="monotone"
  dataKey="revenue"
  stroke="#2563eb"
  strokeWidth={3}
  fill="url(#revenueGradient)"
  isAnimationActive={true}
  animationDuration={1200}
  dot={{
    r: 4,
    fill: "#ffffff",
    stroke: "#2563eb",
    strokeWidth: 2,
  }}
  activeDot={{
    r: 6,
    fill: "#2563eb",
  }}
/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;
