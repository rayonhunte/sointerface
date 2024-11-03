import React from 'react';
import {DataTable} from '../../src/components/table/dataTable';
import {defColumns} from '../../src/components/table/columns';
import { Payment } from '@/lib/types';



async function fetchPayments(): Promise<Payment[]> {
    return [
        {
            id: "1",
            amount: "5000",
            status: "Pending",
            email: "home@home.com"
        },
        {
            id: "2",
            amount: "7500",
            status: "Success",
            email: "john@example.com"
        },
        {
            id: "3",
            amount: "3200",
            status: "Failed",
            email: "sarah@example.com"
        },
        {
            id: "4",
            amount: "9800",
            status: "Processing",
            email: "mike@business.com"
        },
        {
            id: "5",
            amount: "4500",
            status: "Success",
            email: "lisa@company.com"
        }
    ];
}

// page.tsx
const TablePage = async () => {
    try {
        const data = await fetchPayments();
        
        return (
            <>
                <DataTable columns={defColumns} data={data} />
            </>
        );
    } catch (error) {
        console.error('Error fetching payments:', error);
        return <div>Error loading payments</div>;
    }
};

export default TablePage;