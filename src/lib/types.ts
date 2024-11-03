import { ColumnDef } from "@tanstack/react-table";

export type BaseColum<T = void> = {
  id: string
} & (T extends void ? object : T);

// T represents any type that will be passed to the columns
export type TableColumns<T> = ColumnDef<T>[];


export type Payment = BaseColum<{
    status: "Pending" | "Processing" | "Success" | "Failed"
    amount: string,
    email: string,
}>