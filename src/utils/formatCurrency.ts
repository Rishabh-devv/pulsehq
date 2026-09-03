export function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`;
}

export function formatCompactCurrency(value: number) {
  return `$${value / 1000}K`;
}