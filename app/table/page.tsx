"use client";
// Import necessary React hooks
import React, { useEffect, useState } from "react";
import { SOTable, SOSortButton, SOButton } from "../../src";
import { Payment } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fetchPayments } from "@/data/paymentData"; // Adjust the import path as necessary


// Define columns with simplified cell rendering
const dfColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <SOSortButton<Payment> column={column} label="Amount" />
    ),
    sortingFn: 'basic',
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
    header: ({ column }) => {
      return (
       <SOSortButton<Payment> column={column} label="Email" />
      );
    },
    sortingFn: 'basic',
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SOButton variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </SOButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

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
        <SOTable<Payment> columns={dfColumns} data={data}  filterInput={[{
          column: "email",
          placeholder: "Filter by email...",
        }, {
          column: "status",
          placeholder: "Filter by status...",
        }
        ]}/>
      </div>
    </div>
  );
};

export default TablePage;
