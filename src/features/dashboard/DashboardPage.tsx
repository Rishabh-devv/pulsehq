import StatCard from "@/components/common/StatCard";
import RevenueChart from "./components/RevenueChart";
import RecentTransactions from "./components/RecentTransactions";
import SkeletonCard from "@/components/common/SkeletonCard";
import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboardService";
import {
  Coins,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

function DashboardPage() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dashboard","stats"],
    queryFn: dashboardService.getDashboardStats,
  });

  if (isLoading) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </section>
  );
}

  if (error) {
    return (
      <p>
        {error instanceof Error
          ? error.message
          : "Something went wrong"}
      </p>
    );
  }

  const stats = [
    {
      title: "Revenue",
      value: `$${data.revenue.toLocaleString()}`,
      change: "+5%",
      icon: Coins,
    },
    {
      title: "Customers",
      value: data.customers.toString(),
      change: "+8%",
      icon: Users,
    },
    {
      title: "Orders",
      value: data.orders.toString(),
      change: "+15%",
      icon: ShoppingCart,
    },
    {
      title: "Growth",
      value: `${data.growth}%`,
      change: "+3%",
      icon: TrendingUp,
    },
  ];

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-500">
          Welcome back, Rishabh! Here's what's happening today.
        </p>
      </header>
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