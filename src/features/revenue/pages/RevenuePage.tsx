import { useQuery } from "@tanstack/react-query";
import RecentTransactions from "@/components/common/RecentTransactions";
import RevenueCards from "../components/RevenueCards";
import RevenueChart from "../components/RevenueChart";
import { revenueService } from "@/services/revenueService";

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
          revenue={data?.revenue ?? { value: "", change: "" }}
          customers={data?.customers ?? { value: "", change: "" }}
          growth={data?.growth ?? { value: "", change: "" }}
          isLoading={isLoading}
        />
        {data && <RevenueChart data={data.chartData} />}
        <RecentTransactions />
      </div>
    </>
  );
}

export default RevenuePage;
