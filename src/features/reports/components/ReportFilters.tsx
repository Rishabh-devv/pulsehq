import SearchBar from "@/components/common/SearchBar";

interface ReportFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  dateRange: string;
  onDateRangeChange: (value: string) => void;
}

function ReportFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
  dateRange,
  onDateRangeChange,
}: ReportFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="min-w-0 flex-1">
        <SearchBar
          value={search}
          onChange={onSearchChange}
          placeholder="Search reports..."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          aria-label="Filter by status"
          className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 outline-none transition-colors hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        <select
          value={dateRange}
          onChange={(e) => onDateRangeChange(e.target.value)}
          aria-label="Filter by date range"
          className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 outline-none transition-colors hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
        >
          <option value="Last 7 Days">Last 7 Days</option>
          <option value="Last 30 Days">Last 30 Days</option>
          <option value="Last 90 Days">Last 90 Days</option>
          <option value="This Year">This Year</option>
        </select>
      </div>
    </div>
  );
}

export default ReportFilters;
