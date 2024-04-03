import React, { useState } from 'react';
import { initiateSwap } from '../../utils/api'; // Adjust based on your API utility functions

const SwapForm: React.FC = () => {
    const [fromCurrency, setFromCurrency] = useState<string>('');
    const [toCurrency, setToCurrency] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Replace with your actual API call
            await initiateSwap(fromCurrency, toCurrency, amount);
            alert('Swap initiated successfully');
            // Reset form or navigate to success page
        } catch (err) {
            console.error("Error initiating swap:", err);
            setError('Failed to initiate swap. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="swap-form" onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold mb-4">Initiate a Swap</h2>
            <div className="form-group">
                <label htmlFor="fromCurrency">From:</label>
                <input
                    type="text"
                    id="fromCurrency"
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="toCurrency">To:</label>
                <input
                    type="text"
                    id="toCurrency"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? 'Submitting...' : 'Initiate Swap'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default SwapForm;
