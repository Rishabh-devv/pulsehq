export type Customer = {
  id: string;
  name: string;
  email: string;
  plan: "Free" | "Pro" | "Enterprise";
  status: "Active" | "Inactive";
  joinedDate: string;
  country: string;
  totalSpend: number;
};
