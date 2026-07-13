interface StatusBadgeProps {
  status: "Active" | "Inactive";
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
        status === "Active"
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
