import React, { useState, useEffect } from 'react';
// Assuming fetchRecentTransactions is a function defined to fetch transaction data
import { fetchRecentTransactions } from '../../utils/api';

interface Transaction {
    id: string;
    date: string; // Assuming date is a string for simplicity, but you might use Date objects
    type: string;
    amount: number;
    currency: string;
}

export const RecentTransactions: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        fetchRecentTransactions()
            .then(setTransactions)
            .catch(console.error); // Make sure to handle errors properly
    }, []);

    return (
        <div className="recent-transactions">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id} className="mb-2">
                        <div className="transaction-date text-sm">{transaction.date}</div>
                        <div className="transaction-detail">
                            {transaction.type} - {transaction.currency} {transaction.amount.toLocaleString()}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
