import { formatCurrency } from "@/utils/formatCurrency";

interface RevenueChartTooltipProps {
  active?: boolean;
  payload?: {
    value: number;
  }[];
  label?: string;
}

function RevenueChartTooltip({
  active,
  payload,
  label,
}: RevenueChartTooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg dark:border-gray-600 dark:bg-gray-800">
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
        {formatCurrency(payload[0].value)}
      </p>
    </div>
  );
}

export default RevenueChartTooltip;