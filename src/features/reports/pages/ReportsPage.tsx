import ReportFilters from "../components/ReportFilters";
import ReportsTable from "../components/ReportsTable";
import { reports } from "../data/reports";
import { useState } from "react";
import EmptyState from "@/components/common/EmptyState";

function ReportsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [dateRange, setDateRange] = useState("Last 30 Days");

  const filteredReports = reports.filter((report) => {
  const searchTerm = search.toLowerCase();

  const matchesSearch =
    report.name.toLowerCase().includes(searchTerm) ||
    report.createdBy.toLowerCase().includes(searchTerm) ||
    report.type.toLowerCase().includes(searchTerm) ||
    report.status.toLowerCase().includes(searchTerm);

  const matchesStatus =
    status === "All" || report.status === status;

  return matchesSearch && matchesStatus;
});
  return (
    <>
      <header className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>

          <p className="mt-2 text-gray-500">
            Generate, filter and download reports.
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
          Export Report
        </button>
      </header>
      <ReportFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
      />
      <ReportsTable reports={filteredReports} />
      
    </>
  );
}

export default ReportsPage;
