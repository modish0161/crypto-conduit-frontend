import React from 'react';
import { Layout } from '../app/layout';
import SwapForm from '../components/swap/SwapForm'; // Adjust path as necessary
import RateCalculator from '../components/swap/RateCalculator'; // Optional, for showing live conversion rates

const SwapPage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-center mb-6">Swap Cryptocurrencies</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <SwapForm />
                    </div>
                    <div>
                        <RateCalculator />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SwapPage;
