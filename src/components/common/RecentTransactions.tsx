import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboardService";
import type { Transaction } from "@/types/dashboard";
import { formatDate } from "@/utils/date";

function RecentTransactions() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard", "transactions"],
    queryFn: dashboardService.getRecentTransactions,
  });

  if (isLoading) {
     return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Revenue Transactions
        </h2>
        <div className="mt-4 flex h-80 items-center justify-center animate-pulse rounded-lg bg-gray-100">
          <p className="text-gray-500">Loading transactions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <p>{error instanceof Error ? error.message : "Something went wrong"}</p>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <header className="mb-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
      </header>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-3 text-sm font-medium text-gray-500">Customer</th>
            <th className="pb-3 text-sm font-medium text-gray-500">Status</th>

            <th className="pb-3 text-sm font-medium text-gray-500">Amount</th>

            <th className="pb-3 text-sm font-medium text-gray-500">Date</th>
          </tr>
        </thead>

        <tbody>
          {(data ?? []).map((transaction: Transaction) => (
            <tr key={transaction.id} className="border-b last:border-none">
              <td className="py-4">{transaction.customer}</td>
              <td className="py-4">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    transaction.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : transaction.status === "Failed"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>

              <td className="py-4 font-medium">
                ${transaction.amount.toLocaleString()}
              </td>

              <td className="py-4 text-gray-500">
                {formatDate(transaction.date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTransactions;
