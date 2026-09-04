import type { DashboardStats, Transaction } from "@/types/dashboard";
import type { RevenueData } from "@/types/revenue";

const DEMO_DASHBOARD_STATS: DashboardStats = {
  revenue: 245000,
  customers: 1240,
  orders: 845,
  growth: 15,
};

const DEMO_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    customer: "John Doe",
    amount: 250,
    date: "2023-08-01",
    status: "Completed",
  },
  {
    id: "2",
    customer: "Jane Smith",
    amount: 150,
    date: "2023-08-02",
    status: "Pending",
  },
  {
    id: "3",
    customer: "Alice Johnson",
    amount: 300,
    date: "2023-08-03",
    status: "Failed",
  },
  {
    id: "4",
    customer: "Michael Brown",
    amount: 450,
    date: "2023-08-04",
    status: "Completed",
  },
  {
    id: "5",
    customer: "Michael Jackson",
    amount: 500,
    date: "2023-08-08",
    status: "Failed",
  },
];

const DEMO_REVENUE_DATA: RevenueData[] = [
  { month: "Jan", revenue: 18000 },
  { month: "Feb", revenue: 50000 },
  { month: "Mar", revenue: 20000 },
  { month: "Apr", revenue: 60000 },
  { month: "May", revenue: 25000 },
  { month: "Jun", revenue: 72000 },
];

export const dashboardService = {
  async getDashboardStats(): Promise<DashboardStats> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return DEMO_DASHBOARD_STATS;
  },

  async getRecentTransactions(): Promise<Transaction[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return DEMO_TRANSACTIONS;
  },

  async getRevenueChart(): Promise<RevenueData[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return DEMO_REVENUE_DATA;
  },
};