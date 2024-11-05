import { Column } from "@tanstack/react-table";
import  Button  from "../ui/button";
import { ArrowUpDown } from "lucide-react";

interface SOSortButtonProps<T> {
  column: Column<T>;
  label: string;
}

export function SOSortButton<T>({ column, label }: SOSortButtonProps<T>) {
  return (
    <Button
      variant="ghost"
      onClick={() => {
        column.toggleSorting(column.getIsSorted() === "asc");
      }}
    >
      {label}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
