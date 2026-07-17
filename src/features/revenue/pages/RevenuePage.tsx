import RecentTransactions from "@/features/dashboard/components/RecentTransactions";
import RevenueCards from "../components/RevenueCards";
import RevenueChart from "../components/RevenueChart";
import type { RevenueChartData } from "../types/revenue";

function RevenuePage() {
  const revenue = {
    value: "$52,430",
    change: "+12%",
  };

  const customers = {
    value: "1,245",
    change: "+8%",
  };

  const growth = {
    value: "18%",
    change: "+2%",
  };

  const revenueData: RevenueChartData[] = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 18000 },
    { month: "Apr", revenue: 17000 },
    { month: "May", revenue: 22000 },
    { month: "Jun", revenue: 26000 },
  ];

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
          revenue={revenue}
          customers={customers}
          growth={growth}
        />

        <RevenueChart data={revenueData} />

        <RecentTransactions />
      </div>
    </>
  );
}

export default RevenuePage;