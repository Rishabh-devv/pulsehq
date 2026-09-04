import type { Customer } from "@/types/customer";
import StatusBadge from "@/components/common/StatusBadge";

interface CustomerTableProps {
  customers: Customer[];
  totalCustomers: number;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CustomerTable({ customers, totalCustomers }: CustomerTableProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      {/* Header */}
      <header className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Customers
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage and review your customer base.
          </p>
        </div>

        <span className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
          {totalCustomers} {totalCustomers === 1 ? "customer" : "customers"}
        </span>
      </header>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Customer
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Email
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Plan
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Status
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Country
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Joined
              </th>

              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Total Spend
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-gray-100 transition-colors duration-150 last:border-b-0 hover:bg-gray-50 dark:border-gray-700/70 dark:hover:bg-gray-700/40"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      {getInitials(customer.name)}
                    </div>

                    <span className="font-medium text-gray-900 dark:text-white">
                      {customer.name}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {customer.email}
                </td>

                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {customer.plan}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <StatusBadge status={customer.status} />
                </td>

                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {customer.country}
                </td>

                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {customer.joinedDate}
                </td>

                <td className="px-4 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  ${customer.totalSpend.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTable;
