type Transaction = {
  customer: string;
  status: "Paid" | "Pending" | "Failed";
  amount: string;
  date: string;
};

const transactions: Transaction[] = [
  {
    customer: "John Doe",
    status: "Paid",
    amount: "$2,500",
    date: "21 Jul",
  },
  {
    customer: "Sarah",
    status: "Pending",
    amount: "$1,800",
    date: "22 Jul",
  },
  {
    customer: "Mike",
    status: "Failed",
    amount: "$900",
    date: "23 Jul",
  },
];

function RecentTransactions() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <header className="mb-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
      </header>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-3 text-sm font-medium text-gray-500">
              Customer
            </th>
            <th className="pb-3 text-sm font-medium text-gray-500">
              Status
            </th>
            <th className="pb-3 text-sm font-medium text-gray-500">
              Amount
            </th>
            <th className="pb-3 text-sm font-medium text-gray-500">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.customer}
              className="border-b last:border-none"
            >
              <td className="py-4">{transaction.customer}</td>

              <td className="py-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    transaction.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : transaction.status === "Failed"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>

              <td className="py-4 font-medium">
                {transaction.amount}
              </td>

              <td className="py-4 text-gray-500">
                {transaction.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTransactions;