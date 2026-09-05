import { Download, FileText } from "lucide-react";

import type { Report } from "@/types/report";

import StatusBadge from "@/components/common/StatusBadge";
import EmptyState from "@/components/common/EmptyState";

import { downloadReport } from "@/utils/downloadReport";
import { formatReportDate } from "@/utils/date";

interface ReportsTableProps {
  reports: Report[];
}

function ReportsTable({ reports }: ReportsTableProps) {
  if (reports.length === 0) {
    return (
      <EmptyState
        icon={FileText}
        title="No reports found"
        description="Try adjusting your search or filters."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/40">
            <tr>
              <th className="whitespace-nowrap px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Report Name
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Type
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Created By
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Date
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Status
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {reports.map((report) => (
              <tr
                key={report.id}
                className="transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-700/40"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      <FileText size={17} />
                    </div>

                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {report.name}
                    </span>
                  </div>
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {report.type}
                  </span>
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {report.createdBy}
                  </span>
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formatReportDate(report.date)}
                  </span>
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <StatusBadge status={report.status} />
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    type="button"
                    onClick={() => downloadReport(report)}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-blue-600 transition-colors duration-150 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-950 dark:hover:text-blue-300"
                  >
                    <Download size={16} />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsTable;
