import type { Report } from "@/types/report";

const DEMO_REPORTS: Report[] = [
  {
    id: 1,
    name: "Monthly Revenue Report",
    type: "PDF",
    createdBy: "Pratigya Sharma",
    date: "2026-09-08",
    status: "Completed",
  },
  {
    id: 2,
    name: "Customer Growth Analysis",
    type: "PDF",
    createdBy: "Daniel Kim",
    date: "2026-09-07",
    status: "Completed",
  },
  {
    id: 3,
    name: "Traffic & Acquisition Report",
    type: "PDF",
    createdBy: "Sophia Bennett",
    date: "2026-09-05",
    status: "Completed",
  },
  {
    id: 4,
    name: "Product Performance Report",
    type: "PDF",
    createdBy: "Emma Rodriguez",
    date: "2026-09-03",
    status: "Completed",
  },
  {
    id: 5,
    name: "Customer Retention Analysis",
    type: "PDF",
    createdBy: "Aarav Mehta",
    date: "2026-08-31",
    status: "Pending",
  },
  {
    id: 6,
    name: "Quarterly Business Review",
    type: "PDF",
    createdBy: "Priya Sharma",
    date: "2026-08-28",
    status: "Completed",
  },
  {
    id: 7,
    name: "Conversion Funnel Report",
    type: "PDF",
    createdBy: "Mia Anderson",
    date: "2026-08-25",
    status: "Completed",
  },
  {
    id: 8,
    name: "Customer Segmentation Report",
    type: "PDF",
    createdBy: "Ethan Brown",
    date: "2026-08-22",
    status: "Failed",
  },
  {
    id: 9,
    name: "Revenue Forecast",
    type: "PDF",
    createdBy: "Arjun Kapoor",
    date: "2026-08-18",
    status: "Completed",
  },
  {
    id: 10,
    name: "Marketing Performance Report",
    type: "PDF",
    createdBy: "Isabella Rossi",
    date: "2026-08-14",
    status: "Completed",
  },
  {
    id: 11,
    name: "Enterprise Customer Analysis",
    type: "PDF",
    createdBy: "Noah Thompson",
    date: "2026-08-10",
    status: "Pending",
  },
  {
    id: 12,
    name: "Monthly Operations Summary",
    type: "PDF",
    createdBy: "Ananya Verma",
    date: "2026-08-04",
    status: "Completed",
  },
];

export const reportsService = {
  async getReports(): Promise<Report[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return DEMO_REPORTS;
  },
};