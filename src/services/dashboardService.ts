import type { DashboardStats } from "@/types/Dashboard";

const DEMO_DASHBOARD_STATS: DashboardStats = {
  revenue: 245000,
  customers: 1240,
  orders: 845,
  growth: 15,
};

export const dashboardService = {
  async getDashboardStats(): Promise<DashboardStats> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return DEMO_DASHBOARD_STATS;
  },
};