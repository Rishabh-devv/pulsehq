import type { Report } from "@/types/report";

export function downloadReport(report: Report) {
  const content = `
Report Name: ${report.name}
Type: ${report.type}
Created By: ${report.createdBy}
Date: ${report.date}
Status: ${report.status}
`.trim();

  const blob = new Blob([content], {
    type: report.type === "CSV" ? "text/csv" : "application/pdf",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${report.name}.${report.type.toLowerCase()}`;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
