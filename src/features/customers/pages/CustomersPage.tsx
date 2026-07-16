import { useEffect, useState } from "react";
import CustomerTable from "../components/CustomerTable";
import { customers } from "../data/customers";
import SearchBar from "@/components/common/SearchBar";
import Pagination from "@/components/common/Pagination";
import EmptyState from "@/components/common/EmptyState";

function CustomersPage() {
  // State
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Constants
  const CUSTOMERS_PER_PAGE = 5;

  // Derived State
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / CUSTOMERS_PER_PAGE);

  const indexOfLastCustomer = currentPage * CUSTOMERS_PER_PAGE;
  const indexOfFirstCustomer = indexOfLastCustomer - CUSTOMERS_PER_PAGE;

  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Customers</h1>
        <p className="mt-2 text-gray-500">View and manage your customers.</p>
      </header>
      <div className="space-y-6">
        <SearchBar value={search} onChange={setSearch} />
        {filteredCustomers.length === 0 ? (
          <EmptyState
            title="No customers found"
            description="Try a different search."
          />
        ) : (
          <>
            <CustomerTable customers={currentCustomers} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default CustomersPage;
