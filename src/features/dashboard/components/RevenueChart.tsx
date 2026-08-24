import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboardService";

function RevenueChart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard", "revenue"],
    queryFn: dashboardService.getRevenueChart,
  });

  if (isLoading) {
     return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Revenue Overview
        </h2>

        <div className="mt-4 flex h-80 items-center justify-center animate-pulse rounded-lg bg-gray-100">
          <p className="text-gray-500">Loading revenue...</p>
        </div>
      </div>
    );
    
  }

  if (error) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Revenue Overview</h2>
        <div className="mt-4 flex h-80 items-center justify-center">
          <p className="text-red-500">
            {error instanceof Error
              ? error.message
              : "Something went wrong"}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 transition hover:shadow-md">
        <header>
            <h2 className="text-xl font-semibold">Revenue Overview</h2>
        </header>
        <section className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#2563eb"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>

        </section>
    </div>
  )
}

export default RevenueChart