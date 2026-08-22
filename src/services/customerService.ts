import type { Customer } from "@/types/Customer";

const DEMO_CUSTOMERS: Customer[] = [ {
        id: "cust_001",
        name: "Rishabh",
        email: "xyz@gmail.com",
        plan: "Free",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    },
    {
        id: "cust_002",
        name: "Ashish",
        email: "xyz@gmail.com",
        plan: "Pro",
        status: "Inactive",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    },
    {
        id: "cust_003",
        name: "Vishal",
        email: "xyz@gmail.com",
        plan: "Enterprise",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    },
    {
        id: "cust_004",
        name: "Tapas",
        email: "xyz@gmail.com",
        plan: "Free",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    },
    {
        id: "cust_005",
        name: "Mayank",
        email: "xyz@gmail.com",
        plan: "Free",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    }
    ,{
        id: "cust_006",
        name: "Chitransh",
        email: "xyz@gmail.com",
        plan: "Free",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    },
    {
        id: "cust_007",
        name: "Yograj",
        email: "xyz@gmail.com",
        plan: "Free",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    }
    ,
    {
        id: "cust_008",
        name: "Akhil",
        email: "xyz@gmail.com",
        plan: "Free",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    },
    {
        id: "cust_009",
        name: "Richa",
        email: "xyz@gmail.com",
        plan: "Free",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    }
    ,
    {
        id: "cust_010",
        name: "Avi",
        email: "xyz@gmail.com",
        plan: "Free",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    }
    ,
    {
        id: "cust_011",
        name: "Manoj",
        email: "xyz@gmail.com",
        plan: "Free",
        status: "Active",
        joinedDate: "01 Apr 2025",
        country: "India",
        totalSpend: 2000,
    }
];

export const customerService = {
  async getCustomers(): Promise<Customer[]> {
    await new Promise((resolve)=>setTimeout(resolve,1000));
    return DEMO_CUSTOMERS

  },
};