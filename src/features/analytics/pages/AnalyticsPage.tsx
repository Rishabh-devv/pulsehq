import AnalyticsStats from "../components/AnalyticsStats";
import TrafficChart from "../components/TrafficChart";
import TrafficSources from "../components/TrafficSources";

function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Analytics
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Analyze your business performance and key metrics.
        </p>
      </header>

      <AnalyticsStats />
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
        <div className="min-w-0 lg:col-span-2">
          <TrafficChart />
        </div>

        <div className="min-w-0 lg:col-span-1">
          <TrafficSources />
        </div>
      </section>
    </div>
  );
}

export default AnalyticsPage;
