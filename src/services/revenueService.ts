import type {
  RevenueChartData,
  RevenueStat,
} from "@/features/revenue/types/revenue";

const DEMO_REVENUE: RevenueStat = {
  value: "$52,430",
  change: "+12%",
};

const DEMO_CUSTOMERS: RevenueStat = {
  value: "1,245",
  change: "+8%",
};

const DEMO_GROWTH: RevenueStat = {
  value: "18%",
  change: "+2%",
};

const DEMO_REVENUE_DATA: RevenueChartData[] = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 17000 },
  { month: "May", revenue: 22000 },
  { month: "Jun", revenue: 26000 },
];

export const revenueService = {
  async getRevenueData(): Promise<{
    revenue: RevenueStat;
    customers: RevenueStat;
    growth: RevenueStat;
    chartData: RevenueChartData[];
  }> {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return {
      revenue: DEMO_REVENUE,
      customers: DEMO_CUSTOMERS,
      growth: DEMO_GROWTH,
      chartData: DEMO_REVENUE_DATA,
    };
  },
};