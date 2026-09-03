import type {
  AnalyticsOverview,
  TrafficSource,
  TrafficData,
} from "@/types/analytics";

const DEMO_ANALYTICS_OVERVIEW: AnalyticsOverview = {
  revenue: 245000,
  visitors: 8200,
  conversionRate: 12.5,
  bounceRate: 32,
};

const DEMO_TRAFFIC_SOURCES: TrafficSource[] = [
  {
    sourceName: "Google",
    visitors: 1000,
    percentage: 12,
    country: "USA",
  },
  {
    sourceName: "Direct",
    visitors: 1011,
    percentage: 10,
    country: "USA",
  },
  {
    sourceName: "Social",
    visitors: 1200,
    percentage: 16,
    country: "USA",
  },
  {
    sourceName: "Email",
    visitors: 1800,
    percentage: 30,
    country: "USA",
  },
  {
    sourceName: "Referral",
    visitors: 2200,
    percentage: 20,
    country: "USA",
  },
  {
    sourceName: "Other",
    visitors: 800,
    percentage: 12,
    country: "USA",
  },
];

const DEMO_TRAFFIC_DATA: TrafficData[] = [
  { month: "Jan", visitors: 4000 },
  { month: "Feb", visitors: 4500 },
  { month: "Mar", visitors: 5200 },
  { month: "Apr", visitors: 4800 },
  { month: "May", visitors: 6100 },
  { month: "Jun", visitors: 6800 },
];

export const analyticsService = {
  async getOverview(): Promise<AnalyticsOverview> {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return DEMO_ANALYTICS_OVERVIEW;
  },

  async getTrafficSources(): Promise<TrafficSource[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return DEMO_TRAFFIC_SOURCES;
  },

  async getTrafficData(): Promise<TrafficData[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return DEMO_TRAFFIC_DATA;
  },
};