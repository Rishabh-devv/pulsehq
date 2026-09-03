export type RevenueData = {
  month: string;
  revenue: number;
};

export type RevenueOverview = {
  totalRevenue: number;
  monthlyRevenue: number;
  averageOrderValue: number;
  growth: number;
  customers: number;
  customerGrowth: number;
};
