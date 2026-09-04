import StatCard from "@/components/common/StatCard";
import RevenueChart from "../components/RevenueChart";
import RecentTransactions from "@/components/common/RecentTransactions";
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
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard", "stats"],
    queryFn: dashboardService.getDashboardStats,
  });

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
        <h2 className="text-lg font-semibold text-red-700 dark:text-red-400">
          Unable to load dashboard
        </h2>

        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error instanceof Error
            ? error.message
            : "Something went wrong while loading your dashboard."}
        </p>
      </div>
    );
  }

  const stats = data
    ? [
        {
          title: "Revenue",
          value: `$${data.revenue.toLocaleString()}`,
          change: "+5%",
          icon: Coins,
        },
        {
          title: "Customers",
          value: data.customers.toLocaleString(),
          change: "+8%",
          icon: Users,
        },
        {
          title: "Orders",
          value: data.orders.toLocaleString(),
          change: "+15%",
          icon: ShoppingCart,
        },
        {
          title: "Growth",
          value: `${data.growth}%`,
          change: "+3%",
          icon: TrendingUp,
        },
      ]
    : [];

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Welcome back, Rishabh. Here&apos;s what&apos;s happening with your
            business today.
          </p>
        </div>
      </header>
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {isLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
            />
          ))
        )}
      </section>
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
        <div className="min-w-0 lg:col-span-2">
          <RevenueChart />
        </div>

        <div className="min-w-0 lg:col-span-1">
          <RecentTransactions />
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;