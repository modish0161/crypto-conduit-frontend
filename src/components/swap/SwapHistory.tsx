import React, { useEffect, useState } from 'react';
// Assuming you have a function to fetch swap history from your API
import { fetchSwapHistory } from '../../utils/api';

interface SwapTransaction {
    id: string;
    fromCurrency: string;
    toCurrency: string;
    fromAmount: number;
    toAmount: number;
    timestamp: string; // Assuming ISO 8601 format
}

const SwapHistory: React.FC = () => {
    const [swapHistory, setSwapHistory] = useState<SwapTransaction[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSwapHistory = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const history = await fetchSwapHistory(); // Implement this based on your API
                setSwapHistory(history);
            } catch (err) {
                console.error('Failed to fetch swap history:', err);
                setError('Could not load swap history. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        loadSwapHistory();
    }, []);

    return (
        <div className="swap-history">
            <h2 className="text-lg font-semibold mb-4">Swap History</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th>From (Currency)</th>
                            <th>To (Currency)</th>
                            <th>Amount Sent</th>
                            <th>Amount Received</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {swapHistory.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.fromCurrency}</td>
                                <td>{transaction.toCurrency}</td>
                                <td>{transaction.fromAmount}</td>
                                <td>{transaction.toAmount}</td>
                                <td>{new Date(transaction.timestamp).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SwapHistory;
