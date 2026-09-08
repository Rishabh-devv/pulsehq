import type { RevenueOverview, RevenueData } from "@/types/revenue";

const DEMO_REVENUE_OVERVIEW: RevenueOverview = {
  totalRevenue: 284650,
  monthlyRevenue: 52380,
  averageOrderValue: 134,
  growth: 14.6,
  customers: 8429,
  customerGrowth: 9.8,
};

const DEMO_REVENUE_DATA: RevenueData[] = [
  { month: "Jan", revenue: 36420 },
  { month: "Feb", revenue: 39180 },
  { month: "Mar", revenue: 42850 },
  { month: "Apr", revenue: 45120 },
  { month: "May", revenue: 48800 },
  { month: "Jun", revenue: 52380 },
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