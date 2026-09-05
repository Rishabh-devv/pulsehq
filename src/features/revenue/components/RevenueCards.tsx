import { DollarSign, TrendingUp, Users } from "lucide-react";

import SkeletonCard from "@/components/common/SkeletonCard";
import StatCard from "@/components/common/StatCard";

interface RevenueCardsProps {
  revenue: RevenueStat;
  customers: RevenueStat;
  growth: RevenueStat;
  isLoading: boolean;
}

interface RevenueStat {
  value: string;
  change: string;
}

function RevenueCards({
  revenue,
  customers,
  growth,
  isLoading,
}: RevenueCardsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  const revenueCards = [
    {
      title: "Revenue",
      icon: DollarSign,
      ...revenue,
    },
    {
      title: "Customers",
      icon: Users,
      ...customers,
    },
    {
      title: "Growth",
      icon: TrendingUp,
      ...growth,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {revenueCards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          change={card.change}
          icon={card.icon}
        />
      ))}
    </div>
  );
}

export default RevenueCards;