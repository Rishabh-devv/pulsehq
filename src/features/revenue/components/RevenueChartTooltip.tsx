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
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      <p className="text-sm text-gray-500">{label}</p>

      <p className="mt-2 font-semibold text-gray-900">
        Revenue: {formatCurrency(payload[0].value)}
      </p>
    </div>
  );
}

export default RevenueChartTooltip;