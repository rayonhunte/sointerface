"use client";
// Import necessary React hooks
import React, { useEffect, useState } from "react";
import { SOTable } from "../../src";
import { Payment } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import Button from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define columns with simplified cell rendering
const dfColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    cell: ({  }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      );
    },
  },
];

// Define fetch function
async function fetchPayments(): Promise<Payment[]> {
  return [
    {
      id: "1",
      amount: "5000",
      status: "Pending",
      email: "home@home.com",
    },
    {
      id: "2",
      amount: "7500",
      status: "Success",
      email: "john@example.com",
    },
    {
      id: "3",
      amount: "3200",
      status: "Failed",
      email: "sarah@example.com",
    },
    {
      id: "4",
      amount: "9800",
      status: "Processing",
      email: "mike@business.com",
    },
    {
      id: "5",
      amount: "4500",
      status: "Success",
      email: "lisa@company.com",
    },
  ];
}

// Client component
const TablePage = () => {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    const loadPayments = async () => {
      try {
        const payments = await fetchPayments();
        setData(payments);
      } catch (error) {
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPayments();
  }, []);

  if (loading) return <div>Loading payments...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-[80%] max-w-4xl">
        <SOTable<Payment> columns={dfColumns} data={data} />
      </div>
    </div>
  );
};

export default TablePage;
