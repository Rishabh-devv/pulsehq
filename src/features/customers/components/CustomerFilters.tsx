import type { Customer } from "@/types/customer";

interface CustomerFiltersProps {
  plan: Customer["plan"] | "All";
  status: Customer["status"] | "All";
  hasActiveFilters: boolean;
  onPlanChange: (plan: Customer["plan"] | "All") => void;
  onStatusChange: (status: Customer["status"] | "All") => void;
  onClear: () => void;
}

function CustomerFilters({
  plan,
  status,
  hasActiveFilters,
  onPlanChange,
  onStatusChange,
  onClear,
}: CustomerFiltersProps) {
  const selectClassName =
    "rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-blue-400";

  return (
    <div className="flex flex-wrap gap-3">
      <select
        value={plan}
        onChange={(event) =>
          onPlanChange(event.target.value as Customer["plan"] | "All")
        }
        className={selectClassName}
      >
        <option value="All">All Plans</option>
        <option value="Free">Free</option>
        <option value="Pro">Pro</option>
        <option value="Enterprise">Enterprise</option>
      </select>

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value as Customer["status"] | "All")
        }
        className={selectClassName}
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}

export default CustomerFilters;
