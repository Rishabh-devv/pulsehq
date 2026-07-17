import StatCard from "@/components/common/StatCard";
import type { RevenueCardsProps } from "../types/revenue";
import { DollarSign, Users, TrendingUp } from "lucide-react";

function RevenueCards({
  revenue,
  customers,
  growth,
}: RevenueCardsProps) {
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
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {revenueCards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          change={card.change}
          icon= {card.icon}
        />
      ))}
    </div>
  );
}

export default RevenueCards;