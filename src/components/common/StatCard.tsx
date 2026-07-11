import {type LucideIcon } from "lucide-react";

type StatCardProps = {
    title: string;
    value: string;
    change: string;
    icon: LucideIcon;
};

function StatCard({ title, value, change, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
        <header className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-500">{title}</h2>    
            <Icon size={22} className="text-blue-600"/>
        </header>
        <section className="mt-4">
            <p className="text-3xl font-bold text-gray-900">{value}</p>
        </section>
        <footer className="mt-2 text-sm font-medium text-green-600">↑{change} from last month</footer>
    </div>
  )
}

export default StatCard