import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SwapState {
    fromToken: string;
    toToken: string;
    amount: number;
    setFromToken: (token: string) => void;
    setToToken: (token: string) => void;
    setAmount: (amount: number) => void;
    executeSwap: () => Promise<void>;
}

const SwapContext = createContext<SwapState | undefined>(undefined);

interface SwapProviderProps {
    children: ReactNode;
}

export const SwapProvider = ({ children }: SwapProviderProps) => {
    const [fromToken, setFromToken] = useState<string>('');
    const [toToken, setToToken] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    // Simulate a swap execution
    const executeSwap = async () => {
        console.log(`Swapping ${amount} of ${fromToken} to ${toToken}`);
        // Here, you would integrate with a swap service or smart contract
        try {
            // Simulate API call or blockchain transaction
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Swap executed successfully');
        } catch (error) {
            console.error('Failed to execute swap', error);
        }
    };

    return (
        <SwapContext.Provider value={{ fromToken, toToken, amount, setFromToken, setToToken, setAmount, executeSwap }}>
            {children}
        </SwapContext.Provider>
    );
};

export const useSwap = () => {
    const context = useContext(SwapContext);
    if (context === undefined) {
        throw new Error('useSwap must be used within a SwapProvider');
    }
    return context;
};
