export interface Report {
  id: number;
  name: string;
  type: "PDF" | "CSV";
  createdBy: string;
  date: string;
  status: "Completed" | "Pending" | "Failed";
}
