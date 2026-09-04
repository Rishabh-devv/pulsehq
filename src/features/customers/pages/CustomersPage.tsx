import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";

import CustomerFilters from "../components/CustomerFilters";
import CustomerTable from "../components/CustomerTable";

import EmptyState from "@/components/common/EmptyState";
import Pagination from "@/components/common/Pagination";
import SearchBar from "@/components/common/SearchBar";
import TableSkeleton from "@/components/common/TableSkeleton";

import { customerService } from "@/services/customerService";
import type { Customer } from "@/types/customer";

function CustomersPage() {
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

  const handleClearFilters = () => {
    setSearch("");
    setPlan("All");
    setStatus("All");
  };

  const CUSTOMERS_PER_PAGE = 5;

  const filteredCustomers = customers.filter((customer) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      customer.name.toLowerCase().includes(searchValue) ||
      customer.email.toLowerCase().includes(searchValue);

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
    <div className="space-y-8">
      {/* Page Header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Customers
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          View and manage your customers.
        </p>
      </header>

      {/* Search & Filters */}
      <section className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <SearchBar value={search} onChange={setSearch} />

        <CustomerFilters
          plan={plan}
          status={status}
          hasActiveFilters={hasActiveFilters}
          onPlanChange={setPlan}
          onStatusChange={setStatus}
          onClear={handleClearFilters}
        />
      </section>

      {/* Content */}
      {isLoading ? (
        <TableSkeleton rows={5} columns={7} />
      ) : error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm text-red-600 dark:text-red-400">
            {error instanceof Error
              ? error.message
              : "Something went wrong while loading customers."}
          </p>
        </div>
      ) : filteredCustomers.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No customers found"
          description="Try adjusting your search or filters."
        />
      ) : (
        <>
          <CustomerTable
            customers={currentCustomers}
            totalCustomers={filteredCustomers.length}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default CustomersPage;
