import { trafficData } from "@/features/analytics/data/trafficData";
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
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
            Traffic Overview
        </h2>
    <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month"/>
                    <YAxis/>
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
  )
}

export default TrafficChart