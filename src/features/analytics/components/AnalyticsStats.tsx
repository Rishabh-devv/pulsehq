import { analyticsMetrics } from "../data/analyticsStats";
import StatCard from "@/components/common/StatCard";

function AnalyticsStats() {
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
  )
}

export default AnalyticsStats