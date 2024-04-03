import React, { useState, useEffect } from 'react';
import { fetchExchangeRate } from '../../utils/api'; // Assume this is your utility function to fetch rates

interface Props {
    fromCurrency: string;
    toCurrency: string;
}

export const RateCalculator: React.FC<Props> = ({ fromCurrency, toCurrency }) => {
    const [exchangeRate, setExchangeRate] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (fromCurrency && toCurrency) {
            setLoading(true);
            fetchExchangeRate(fromCurrency, toCurrency)
                .then(rate => {
                    setExchangeRate(rate);
                    setError(null);
                })
                .catch(err => {
                    console.error("Failed to fetch exchange rate:", err);
                    setError("Failed to fetch exchange rate. Please try again.");
                })
                .finally(() => setLoading(false));
        }
    }, [fromCurrency, toCurrency]);

    return (
        <div className="rate-calculator">
            <h2 className="text-lg font-semibold mb-4">Exchange Rate</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {exchangeRate && (
                <p>
                    1 {fromCurrency} = {exchangeRate} {toCurrency}
                </p>
            )}
            {!fromCurrency || !toCurrency ? (
                <p>Select both currencies to see the exchange rate.</p>
            ) : null}
        </div>
    );
};
