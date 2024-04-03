import React, { useState, useEffect } from 'react';
// Assuming fetchBalanceSummary is a function you've defined to fetch balance data from your backend
import { fetchBalanceSummary } from '../../utils/api';

interface BalanceSummaryData {
    totalBalance: number;
    currency: string;
}

export const BalanceSummary: React.FC = () => {
    const [balanceSummary, setBalanceSummary] = useState<BalanceSummaryData | null>(null);

    useEffect(() => {
        // Fetch balance summary data and set it to state
        fetchBalanceSummary()
            .then(setBalanceSummary)
            .catch(console.error); // Make sure to handle errors properly
    }, []);

    if (!balanceSummary) {
        return <p>Loading balance...</p>;
    }

    return (
        <div className="balance-summary">
            <h2 className="text-lg font-semibold mb-2">Total Balance</h2>
            <p className="text-xl font-bold">
                {balanceSummary.currency} {balanceSummary.totalBalance.toLocaleString()}
            </p>
        </div>
    );
};
