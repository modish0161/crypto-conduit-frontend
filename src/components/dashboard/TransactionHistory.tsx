import React, { useEffect, useState } from 'react';
// Assuming you have a service to fetch transaction data
import { fetchTransactionHistory } from '../../utils/api';

interface Transaction {
    id: string;
    date: string;
    type: string;
    amount: number;
    currency: string;
}

export const TransactionHistory: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        // Fetch transaction history and set it to state
        fetchTransactionHistory()
            .then(setTransactions)
            .catch(console.error); // Handle error appropriately
    }, []);

    return (
        <div className="transaction-history">
            <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
            {transactions.length > 0 ? (
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Currency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(({ id, date, type, amount, currency }) => (
                            <tr key={id}>
                                <td>{date}</td>
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No transaction history available.</p>
            )}
        </div>
    );
};
