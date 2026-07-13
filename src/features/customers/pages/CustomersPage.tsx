import CustomerTable from "../components/CustomerTable";
import { customers } from "../data/customers";

function CustomersPage() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Customers</h1>
        <p className="mt-2 text-gray-500">
          View and manage your customers.
        </p>
      </header>

      <CustomerTable customers={customers} />
    </>
  );
}

export default CustomersPage;