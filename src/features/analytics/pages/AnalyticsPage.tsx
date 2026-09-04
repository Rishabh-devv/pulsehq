import AnalyticsStats from "../components/AnalyticsStats";
import TrafficChart from "../components/TrafficChart";
import TrafficSources from "../components/TrafficSources";

function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Analytics
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Analyze your business performance and key metrics.
        </p>
      </header>

      {/* Analytics Stats */}
      <AnalyticsStats />

      {/* Traffic Analytics */}
      <section className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        <div className="min-w-0">
          <TrafficChart />
        </div>

        <div className="min-w-0">
          <TrafficSources />
        </div>
      </section>
    </div>
  );
}

export default AnalyticsPage;