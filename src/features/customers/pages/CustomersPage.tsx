import { useEffect, useState } from "react";
import CustomerTable from "../components/CustomerTable";
import SearchBar from "@/components/common/SearchBar";
import Pagination from "@/components/common/Pagination";
import EmptyState from "@/components/common/EmptyState";
import { Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { customerService } from "@/services/customerService";
import TableSkeleton from "@/components/common/TableSkeleton";
import CustomerFilters from "../components/CustomerFilters";
import type { Customer } from "@/types/customer";

function CustomersPage() {
  // State
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [plan, setPlan] = useState<Customer["plan"] | "All">("All");
  const [status, setStatus] = useState<Customer["status"] | "All">("All");
  const {
    data: customers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: customerService.getCustomers,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [search, plan, status]);

  if (error) {
    return (
      <p>{error instanceof Error ? error.message : "Something went wrong"}</p>
    );
  }
  const handleClearFilters = () => {
    setSearch("");
    setPlan("All");
    setStatus("All");
  };
  const CUSTOMERS_PER_PAGE = 5;

  // Derived State
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPlan = plan === "All" || customer.plan === plan;

    const matchesStatus = status === "All" || customer.status === status;

    return matchesSearch && matchesPlan && matchesStatus;
  });

  const totalPages = Math.ceil(filteredCustomers.length / CUSTOMERS_PER_PAGE);

  const indexOfLastCustomer = currentPage * CUSTOMERS_PER_PAGE;
  const indexOfFirstCustomer = indexOfLastCustomer - CUSTOMERS_PER_PAGE;

  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  const hasActiveFilters = search !== "" || plan !== "All" || status !== "All";
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Customers</h1>
        <p className="mt-2 text-gray-500">View and manage your customers.</p>
      </header>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <SearchBar value={search} onChange={setSearch} />
          <CustomerFilters
            plan={plan}
            status={status}
            hasActiveFilters={hasActiveFilters}
            onPlanChange={setPlan}
            onStatusChange={setStatus}
            onClear={handleClearFilters}
          />
        </div>
        {isLoading ? (
          <TableSkeleton rows={5} columns={7} />
        ) : filteredCustomers.length === 0 ? (
          <EmptyState
            icon={Users}
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
