import { useQuery } from "@tanstack/react-query";

import RecentTransactions from "@/components/common/RecentTransactions";
import { revenueService } from "@/services/revenueService";
import { formatCurrency } from "@/utils/formatCurrency";
import RevenueCards from "../components/RevenueCards";
import RevenueChart from "../components/RevenueChart";

function RevenuePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["revenue"],
    queryFn: revenueService.getRevenueData,
  });

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Revenue
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Track your revenue performance and transactions.
        </p>
      </header>

      <div className="space-y-6">
        <RevenueCards
          revenue={{
            value: data ? formatCurrency(data.overview.totalRevenue) : "",
            change: data ? `+${data.overview.growth}%` : "",
          }}
          customers={{
            value: data ? data.overview.customers.toLocaleString() : "",
            change: data ? `+${data.overview.customerGrowth}%` : "",
          }}
          growth={{
            value: data ? `${data.overview.growth}%` : "",
            change: data ? `+${data.overview.growth}%` : "",
          }}
          isLoading={isLoading}
        />

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
          <div className="min-w-0 lg:col-span-2">
            <RevenueChart
              data={data?.chartData}
              isLoading={isLoading}
              error={error}
            />
          </div>

          <div className="min-w-0 lg:col-span-1">
            <RecentTransactions />
          </div>
        </section>
      </div>
    </>
  );
}

export default RevenuePage;
