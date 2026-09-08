import type {
  AnalyticsOverview,
  TrafficSource,
  TrafficData,
} from "@/types/analytics";

const DEMO_ANALYTICS_OVERVIEW: AnalyticsOverview = {
  revenue: 284650,
  visitors: 27400,
  conversionRate: 7.9,
  bounceRate: 38,
};

const DEMO_TRAFFIC_SOURCES: TrafficSource[] = [
  {
    sourceName: "Google",
    visitors: 9864,
    percentage: 36,
    country: "United States",
  },
  {
    sourceName: "Direct",
    visitors: 5480,
    percentage: 20,
    country: "United States",
  },
  {
    sourceName: "Social",
    visitors: 3836,
    percentage: 14,
    country: "India",
  },
  {
    sourceName: "Email",
    visitors: 3288,
    percentage: 12,
    country: "United Kingdom",
  },
  {
    sourceName: "Referral",
    visitors: 3014,
    percentage: 11,
    country: "Canada",
  },
  {
    sourceName: "Other",
    visitors: 1918,
    percentage: 7,
    country: "Australia",
  },
];

const DEMO_TRAFFIC_DATA: TrafficData[] = [
  { month: "Jan", visitors: 19800 },
  { month: "Feb", visitors: 21100 },
  { month: "Mar", visitors: 22400 },
  { month: "Apr", visitors: 23100 },
  { month: "May", visitors: 25600 },
  { month: "Jun", visitors: 27400 },
];

export const analyticsService = {
  async getOverview(): Promise<AnalyticsOverview> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return DEMO_ANALYTICS_OVERVIEW;
  },

  async getTrafficSources(): Promise<TrafficSource[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return DEMO_TRAFFIC_SOURCES;
  },

  async getTrafficData(): Promise<TrafficData[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return DEMO_TRAFFIC_DATA;
  },
};
