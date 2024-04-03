// pages/dashboardPage.tsx
import React from 'react';
import Layout from '../app/layout';
import { DashboardOverview } from '../components/dashboard/DashboardOverview';
import { TransactionHistory } from '../components/dashboard/TransactionHistory';
import { WalletSummary } from '../components/dashboard/WalletSummary';
import { GetServerSideProps } from 'next';

const DashboardPage = () => {
    return (
        <Layout title="Dashboard">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>
                <DashboardOverview />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <WalletSummary />
                    </div>
                    <div>
                        <TransactionHistory />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Example check - implement according to your auth method
    const isAuthenticated = false; // Replace with actual auth check
    if (!isAuthenticated) {
        return {
            redirect: {
                destination: '/login', // Adjust the destination as needed
                permanent: false,
            },
        };
    }

    return { props: {} };
};
