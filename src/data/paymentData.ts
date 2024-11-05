import { Payment } from "@/lib/types"; // Adjust the import path as necessary

export const fetchPayments = async (): Promise<Payment[]> => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: (index + 1).toString(),
    amount: Math.floor(Math.random() * 10000) + 1000, // Store as a number
    status: ["Pending", "Success", "Failed", "Processing"][Math.floor(Math.random() * 4)] as "Pending" | "Success" | "Failed" | "Processing", // Ensure status matches the Payment type
    email: `user${index + 1}@example.com`,
  }));
}; 