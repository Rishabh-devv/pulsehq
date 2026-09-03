export type AnalyticsOverview = {
  revenue: number;
  visitors: number;
  conversionRate: number;
  bounceRate: number;
};

export type TrafficSource = {
  sourceName: string;
  visitors: number;
  percentage: number;
  country: string;
};
export type TrafficData = {
  month: string;
  visitors: number;
};