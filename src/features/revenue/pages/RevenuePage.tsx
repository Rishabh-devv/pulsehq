import { useQuery } from "@tanstack/react-query";
import RecentTransactions from "@/components/common/RecentTransactions";
import RevenueCards from "../components/RevenueCards";
import RevenueChart from "../components/RevenueChart";
import { revenueService } from "@/services/revenueService";
import { formatCurrency } from "@/utils/formatCurrency";

function RevenuePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["revenue"],
    queryFn: revenueService.getRevenueData,
  });

  if (error) {
    return (
      <p className="text-red-500">
        {error instanceof Error ? error.message : "Something went wrong"}
      </p>
    );
  }

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Revenue</h1>

        <p className="mt-2 text-gray-500">
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
            change: `+${data?.overview.growth}%`,
          }}
          isLoading={isLoading}
        />
        {data && <RevenueChart data={data.chartData} />}
        <RecentTransactions />
      </div>
    </>
  );
}

export default RevenuePage;
