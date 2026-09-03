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
  return (
    <div className="flex gap-3">
      {/* Plan */}
      <select
        value={plan}
        onChange={(event) =>
          onPlanChange(event.target.value as Customer["plan"] | "All")
        }
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500"
      >
        <option value="All">All Plans</option>
        <option value="Free">Free</option>
        <option value="Pro">Pro</option>
        <option value="Enterprise">Enterprise</option>
      </select>

      {/* Status */}
      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value as Customer["status"] | "All")
        }
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500"
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}

export default CustomerFilters;
