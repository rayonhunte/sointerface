"use client"

import React from 'react';
import { DataTable } from './dataTable';
import { ColumnDef } from '@tanstack/react-table';

interface SOTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  filterInput?: {column: string, placeholder: string}[] | undefined;
}

const SOTable = <T,>({ columns, data, filterInput }: SOTableProps<T>) => {
  return (
    <div>
      <DataTable columns={columns} data={data} filterInput={filterInput} />
    </div>
  );
  };

export default SOTable;