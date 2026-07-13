import StatusBadge from "@/components/common/StatusBadge";
import type { Customer } from "../types/customer";


interface CustomerTableProps {
  customers: Customer[];
}

function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Customers</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Total Spend</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">{customer.name}</td>
                <td className="px-4 py-3">{customer.email}</td>
                <td className="px-4 py-3">{customer.plan}</td>
                <td className="px-4 py-3">
                    <StatusBadge status={customer.status} />
                </td>       
                <td className="px-4 py-3">{customer.country}</td>
                <td className="px-4 py-3">
                  ${customer.totalSpend.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTable;