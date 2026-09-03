export type DashboardStats = {
  revenue: number;
  customers: number;
  orders: number;
  growth: number;
};

export type Transaction = {
  id: string;
  customer: string;
  amount: number;
  date: string;
  status: "Completed" | "Pending" | "Failed";
};

