export interface RevenueStat {
  value: string;
  change: string;
}

export interface RevenueCardsProps {
  revenue: RevenueStat;
  customers: RevenueStat;
  growth: RevenueStat;
}

export interface RevenueChartData {
  month: string;
  revenue: number;
}

export interface RevenueChartProps {
  data: RevenueChartData[];
}
