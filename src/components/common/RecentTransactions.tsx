import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, Clock3, XCircle } from "lucide-react";

import { dashboardService } from "@/services/dashboardService";
import type { Transaction } from "@/types/dashboard";
import { formatDate } from "@/utils/date";

function RecentTransactions() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dashboard", "transactions"],
    queryFn: dashboardService.getRecentTransactions,
  });

  if (isLoading) {
    return (
      <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <div>
            <div className="h-5 w-44 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

            <div className="mt-2 h-4 w-36 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="mt-6 space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl px-2 py-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />

                <div className="min-w-0">
                  <div className="h-4 w-28 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

                  <div className="mt-2 h-3 w-32 animate-pulse rounded bg-gray-100 dark:bg-gray-700" />
                </div>
              </div>

              <div className="ml-4 h-4 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Transactions
        </h2>

        <div className="mt-6 flex min-h-64 items-center justify-center">
          <p className="text-sm text-red-600 dark:text-red-400">
            {error instanceof Error
              ? error.message
              : "Something went wrong while loading transactions."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Transactions
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Latest customer activity
          </p>
        </div>

        <div className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300">
          {data.length} transactions
        </div>
      </header>

      <div className="space-y-1">
        {data.map((transaction: Transaction) => {
          const statusConfig = {
            Completed: {
              icon: CheckCircle2,
              classes:
                "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400",
            },
            Pending: {
              icon: Clock3,
              classes:
                "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400",
            },
            Failed: {
              icon: XCircle,
              classes:
                "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400",
            },
          };

          const status = statusConfig[transaction.status];
          const StatusIcon = status.icon;

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-xl px-2 py-3 transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  {transaction.customer.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {transaction.customer}
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${status.classes}`}
                    >
                      <StatusIcon size={12} />
                      {transaction.status}
                    </span>

                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {formatDate(transaction.date)}
                    </span>
                  </div>
                </div>
              </div>

              <p className="ml-4 shrink-0 text-sm font-semibold text-gray-900 dark:text-white">
                ${transaction.amount.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentTransactions;