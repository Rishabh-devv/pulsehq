export function formatCurrency(value: number) {
  return `$${value / 1000}K`;
}