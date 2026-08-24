import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ReportFilters from "../components/ReportFilters";
import ReportsTable from "../components/ReportsTable";
import Pagination from "@/components/common/Pagination";
import Button from "@/components/common/Button";
import { reportsService } from "@/services/reportsService";
import TableSkeleton from "@/components/common/TableSkeleton";

const REPORTS_PER_PAGE = 5;
function isWithinDateRange(
  reportDate: string,
  dateRange: string
): boolean {
  const reportDateObject = new Date(reportDate);
  const today = new Date();

  // Remove the time portion so we compare dates only
  today.setHours(0, 0, 0, 0);
  reportDateObject.setHours(0, 0, 0, 0);

  if (dateRange === "This Year") {
    return (
      reportDateObject.getFullYear() === today.getFullYear()
    );
  }

  const daysMap: Record<string, number> = {
    "Last 7 Days": 7,
    "Last 30 Days": 30,
    "Last 90 Days": 90,
  };

  const days = daysMap[dateRange];

  if (!days) {
    return true;
  }

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - days);

  return (
    reportDateObject >= startDate &&
    reportDateObject <= today
  );
}

function ReportsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: reports = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: reportsService.getReports,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [search, status, dateRange]);

  if (error) {
    return (
      <p className="text-red-500">
        {error instanceof Error ? error.message : "Something went wrong"}
      </p>
    );
  }

  const filteredReports = reports.filter((report) => {
  const searchTerm = search.toLowerCase();

  const matchesSearch =
    report.name.toLowerCase().includes(searchTerm) ||
    report.createdBy.toLowerCase().includes(searchTerm) ||
    report.type.toLowerCase().includes(searchTerm) ||
    report.status.toLowerCase().includes(searchTerm);

  const matchesStatus =
    status === "All" || report.status === status;

  const matchesDateRange = isWithinDateRange(
    report.date,
    dateRange
  );

  return (
    matchesSearch &&
    matchesStatus &&
    matchesDateRange
  );
});

  const totalPages = Math.ceil(filteredReports.length / REPORTS_PER_PAGE);

  const indexOfLastReport = currentPage * REPORTS_PER_PAGE;

  const indexOfFirstReport = indexOfLastReport - REPORTS_PER_PAGE;

  const currentReports = filteredReports.slice(
    indexOfFirstReport,
    indexOfLastReport
  );

  return (
    <>
      <header className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>

          <p className="mt-2 text-gray-500">
            Generate, filter and download reports.
          </p>
        </div>

        <Button>Export Report</Button>
      </header>

      <div className="space-y-6">
        <ReportFilters
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />

        {isLoading ? (
          <TableSkeleton rows={5} columns={6} />
        ) : (
          <>
            <ReportsTable reports={currentReports} />

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ReportsPage;
