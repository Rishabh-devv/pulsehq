export interface Customer{

    id: number;
    name: string ;
    email: string;
    plan: "Free" | "Pro" | "Enterprise";
    status:"Active" | "Inactive";
    joinedDate: string;
    country: string;
    totalSpend: number;

}