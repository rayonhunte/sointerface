"use client"

import React from 'react'
import { Input } from "@/components/ui/input" // Add the correct import path for useReactTable

interface FilterInputProps {
  column: string
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: any
}

const FilterInput: React.FC<FilterInputProps> = ({
  column,
  table,
  placeholder = "Filter...",
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={(table?.getColumn(column)?.getFilterValue() as string) ?? ""}
      onChange={(event) => table?.getColumn(column)?.setFilterValue(event.target.value)}
      className="max-w-sm"
    />
  )
}

export default FilterInput
