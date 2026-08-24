import { useQuery } from "@tanstack/react-query";
import {
  Coins,
  Users,
  TrendingUp,
  Activity,
} from "lucide-react";

import StatCard from "@/components/common/StatCard";
import { analyticsService } from "@/services/analyticsService";
import SkeletonCard from "@/components/common/SkeletonCard";


function AnalyticsStats() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["analytics", "overview"],
    queryFn: analyticsService.getOverview,
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
      <p className="text-red-500">
        {error instanceof Error
          ? error.message
          : "Something went wrong"}
      </p>
    );
  }

  const analyticsMetrics = [
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
      change: "-2%",
      icon: Activity,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {analyticsMetrics.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}

export default AnalyticsStats;