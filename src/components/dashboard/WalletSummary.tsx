import React, { useState, useEffect } from 'react';
// Assuming you have a service that fetches wallet summary data
import { fetchWalletSummary } from '../../utils/api';

interface WalletSummaryData {
    totalBalance: number;
    currency: string;
    assets: { name: string; amount: number; valueInCurrency: number }[];
}

export const WalletSummary: React.FC = () => {
    const [walletSummary, setWalletSummary] = useState<WalletSummaryData | null>(null);

    useEffect(() => {
        // Fetch wallet summary data and set it to state
        fetchWalletSummary()
            .then(setWalletSummary)
            .catch(console.error); // Properly handle the error scenario
    }, []);

    return (
        <div className="wallet-summary">
            <h2 className="text-lg font-semibold mb-4">Wallet Summary</h2>
            {walletSummary ? (
                <>
                    <div className="total-balance mb-4">
                        <span>Total Balance: </span>
                        <strong>{walletSummary.currency} {walletSummary.totalBalance.toLocaleString()}</strong>
                    </div>
                    <div className="assets">
                        <h3 className="text-md font-semibold mb-2">Assets</h3>
                        <ul>
                            {walletSummary.assets.map(asset => (
                                <li key={asset.name}>
                                    {asset.name}: {asset.amount} (Value: {walletSummary.currency} {asset.valueInCurrency.toLocaleString()})
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <p>Loading wallet summary...</p>
            )}
        </div>
    );
};
