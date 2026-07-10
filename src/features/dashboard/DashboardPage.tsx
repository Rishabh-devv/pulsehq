import StatCard from "@/features/dashboard/components/StatCard";
import RevenueChart from "./components/RevenueChart";
import RecentTransactions from "./components/RecentTransactions";

import {
  Coins,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "$12,345",
    change: "+5%",
    icon: Coins,
  },
  {
    title: "Customers",
    value: "1202",
    change: "+8%",
    icon: Users,
  },
  {
    title: "Orders",
    value: "356",
    change: "+15%",
    icon: ShoppingCart,
  },
  {
    title: "Growth",
    value: "+18%",
    change: "+3%",
    icon: TrendingUp,
  },
];

function DashboardPage() {
  return (
    <>
      {/* Dashboard Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-500">
          Welcome back, Rishabh! Here's what's happening today.
        </p>
      </header>

      {/* Statistics Cards */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </section>

      {/* Dashboard Content */}
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        <div className="lg:col-span-1">
          <RecentTransactions />
        </div>
      </section>
    </>
  );
}

export default DashboardPage;