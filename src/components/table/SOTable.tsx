"use client"

import React from 'react';
import { DataTable } from './dataTable';
import { ColumnDef } from '@tanstack/react-table';

interface SOTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
}

const SOTable = <T,>({ columns, data }: SOTableProps<T>) => {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SOTable;