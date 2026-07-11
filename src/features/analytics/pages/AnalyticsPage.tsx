import AnalyticsStats from "../components/AnalyticsStats";
import TrafficChart from "../components/TrafficChart";
import TrafficSources from "../components/TrafficSources";


function AnalyticsPage() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="mt-2 text-gray-500">
          Analyze your business performance and key metrics.
        </p>
      </header>

      <div className="space-y-6">
    <AnalyticsStats />

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <TrafficChart />
      <TrafficSources />
    </div>
  </div>
    </>
  );
}

export default AnalyticsPage;