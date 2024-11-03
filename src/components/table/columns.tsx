import {TableColumns, Payment } from "../../lib/types";


export const defColumns: TableColumns<Payment> = [
    {
        accessorKey: "amount",
        header: "Amount",
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
        accessorKey: "id",
        header: "ID",
      }
];

