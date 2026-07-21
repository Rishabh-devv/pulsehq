interface StatusBadgeProps {
  status:
    | "Active"
    | "Inactive"
    | "Completed"
    | "Pending"
    | "Failed";
}

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-gray-100 text-gray-700",
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;