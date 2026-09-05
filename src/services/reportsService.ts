import type { Report } from "@/types/report";

const DEMO_REPORTS: Report[] = [
  {
    id: 1,
    name: "Sales Q1",
    type: "PDF",
    createdBy: "Pratigya",
    date: "2026-08-02",
    status: "Completed",
  },
  {
    id: 2,
    name: "Sales Q2",
    type: "PDF",
    createdBy: "Sharma",
    date: "2026-08-06",
    status: "Completed",
  },
  {
    id: 3,
    name: "Sales Q3",
    type: "PDF",
    createdBy: "Ashish",
    date: "2026-08-10",
    status: "Completed",
  },
  {
    id: 4,
    name: "Sales Q4",
    type: "PDF",
    createdBy: "Rishabh",
    date: "2026-08-15",
    status: "Completed",
  },
  {
    id: 5,
    name: "Sales Q5",
    type: "PDF",
    createdBy: "User",
    date: "2026-08-19",
    status: "Failed",
  },
  {
    id: 6,
    name: "Sales Q6",
    type: "PDF",
    createdBy: "Pratigya",
    date: "2026-08-22",
    status: "Pending",
  },
];

export const reportsService = {
  async getReports(): Promise<Report[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return DEMO_REPORTS;
  },
};