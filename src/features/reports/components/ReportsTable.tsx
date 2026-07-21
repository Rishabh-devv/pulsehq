import type { Report } from "../types/reports";
import StatusBadge from "@/components/common/StatusBadge";
import { Download } from "lucide-react";
import EmptyState from "@/components/common/EmptyState";
import { FileText } from "lucide-react";

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
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Report Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Type
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Created By
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr
              key={report.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="px-6 py-4">{report.name}</td>

              <td className="px-6 py-4">{report.type}</td>

              <td className="px-6 py-4">{report.createdBy}</td>

              <td className="px-6 py-4">{report.date}</td>

              <td className="px-6 py-4">
                <StatusBadge status={report.status} />
              </td>

              <td className="px-6 py-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
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
  );
}

export default ReportsTable;
