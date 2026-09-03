import type { RevenueOverview, RevenueData } from "@/types/revenue";

const DEMO_REVENUE_OVERVIEW: RevenueOverview = {
  totalRevenue: 52430,
  monthlyRevenue: 26000,
  averageOrderValue: 125,
  growth: 12,
  customers: 1245,
  customerGrowth: 8,
};
const DEMO_REVENUE_DATA: RevenueData[] = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 17000 },
  { month: "May", revenue: 22000 },
  { month: "Jun", revenue: 26000 },
];

export const revenueService = {
  async getRevenueData(): Promise<{
    overview: RevenueOverview;
    chartData: RevenueData[];
  }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      overview: DEMO_REVENUE_OVERVIEW,
      chartData: DEMO_REVENUE_DATA,
    };
  },
};
