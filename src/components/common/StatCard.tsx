import { type LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
};

function StatCard({ title, value, change, icon: Icon }: StatCardProps) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 transition-colors group-hover:bg-blue-100 dark:bg-blue-950 dark:group-hover:bg-blue-900">
          <Icon
            size={20}
            strokeWidth={2}
            className="text-blue-600 dark:text-blue-400"
          />
        </div>
      </header>

      <footer className="mt-4 flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400">
        <span>↑</span>
        <span>{change}</span>
        <span className="font-normal text-gray-500 dark:text-gray-400">
          from last month
        </span>
      </footer>
    </div>
  );
}

export default StatCard;