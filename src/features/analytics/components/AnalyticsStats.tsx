import { useQuery } from "@tanstack/react-query";
import { Activity, Coins, TrendingUp, Users } from "lucide-react";

import SkeletonCard from "@/components/common/SkeletonCard";
import StatCard from "@/components/common/StatCard";
import { analyticsService } from "@/services/analyticsService";

function AnalyticsStats() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["analytics", "overview"],
    queryFn: analyticsService.getOverview,
  });

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </section>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
        <p className="text-sm text-red-600 dark:text-red-400">
          {error instanceof Error
            ? error.message
            : "Something went wrong while loading analytics."}
        </p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const analyticsMetrics: {
    title: string;
    value: string;
    change: string;
    changeDirection?: "up" | "down";
    icon: typeof Coins;
  }[] = [
    {
      title: "Revenue",
      value: `$${data.revenue.toLocaleString()}`,
      change: "+5%",
      icon: Coins,
    },
    {
      title: "Visitors",
      value: data.visitors.toLocaleString(),
      change: "+8%",
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: `${data.conversionRate}%`,
      change: "+3%",
      icon: TrendingUp,
    },
    {
      title: "Bounce Rate",
      value: `${data.bounceRate}%`,
      change: "2%",
      changeDirection: "down",
      icon: Activity,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {analyticsMetrics.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          changeDirection={stat.changeDirection}
          icon={stat.icon}
        />
      ))}
    </section>
  );
}

export default AnalyticsStats;
