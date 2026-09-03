import type { Report } from "@/types/report";

export function exportReports(reports: Report[]) {
  if (reports.length === 0) {
    return;
  }

  const headers = [
    "Report Name",
    "Type",
    "Created By",
    "Date",
    "Status",
  ];

  const rows = reports.map((report) => [
    report.name,
    report.type,
    report.createdBy,
    report.date,
    report.status,
  ]);

  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) =>
      row
        .map((value) => `"${value}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "reports.csv";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}