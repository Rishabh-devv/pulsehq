export type RevenueOverview = {
  totalRevenue: number;
  monthlyRevenue: number;
  averageOrderValue: number;
  growth: number;
};

export type RevenueData = {
  month: string;
  revenue: number;
};