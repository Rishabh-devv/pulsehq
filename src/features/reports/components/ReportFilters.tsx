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
      <div className="flex-1">
        <SearchBar
          value={search}
          onChange={onSearchChange}
        />
      </div>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Failed">Failed</option>
      </select>

      <select
        value={dateRange}
        onChange={(e) => onDateRangeChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
      >
        <option value="Last 7 Days">Last 7 Days</option>
        <option value="Last 30 Days">Last 30 Days</option>
        <option value="Last 90 Days">Last 90 Days</option>
        <option value="This Year">This Year</option>
      </select>
      
    </div>
  );
}

export default ReportFilters;