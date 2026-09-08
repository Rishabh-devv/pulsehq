import type { DashboardStats, Transaction } from "@/types/dashboard";
import type { RevenueData } from "@/types/revenue";

const DEMO_DASHBOARD_STATS: DashboardStats = {
  revenue: 284650,
  customers: 8429,
  orders: 2124,
  growth: 14.6,
};

const DEMO_TRANSACTIONS: Transaction[] = [
  {
    id: "txn_001",
    customer: "Aarav Mehta",
    amount: 1240,
    date: "2025-11-28",
    status: "Completed",
  },
  {
    id: "txn_002",
    customer: "Sophia Bennett",
    amount: 680,
    date: "2025-11-27",
    status: "Completed",
  },
  {
    id: "txn_003",
    customer: "Daniel Kim",
    amount: 450,
    date: "2025-11-26",
    status: "Pending",
  },
  {
    id: "txn_004",
    customer: "Pratigya Sharma",
    amount: 4000,
    date: "2025-11-24",
    status: "Completed",
  },
  {
    id: "txn_005",
    customer: "Arjun Kapoor",
    amount: 1680,
    date: "2025-11-23",
    status: "Pending",
  },
  
];

const DEMO_REVENUE_DATA: RevenueData[] = [
  { month: "Jan", revenue: 36420 },
  { month: "Feb", revenue: 39180 },
  { month: "Mar", revenue: 42850 },
  { month: "Apr", revenue: 45120 },
  { month: "May", revenue: 48800 },
  { month: "Jun", revenue: 52380 },
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
