import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
];

function RevenueChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 transition hover:shadow-md">
        <header>
            <h2 className="text-xl font-semibold">Revenue Overview</h2>
        </header>
        <section className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
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