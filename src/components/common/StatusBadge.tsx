interface StatusBadgeProps {
  status: "Active" | "Inactive" | "Completed" | "Pending" | "Failed";
}

const statusStyles = {
  Active:
    "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400",
  Inactive: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
  Completed:
    "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400",
  Pending:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400",
  Failed: "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400",
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
