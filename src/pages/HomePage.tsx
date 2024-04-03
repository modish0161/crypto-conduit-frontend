import React from 'react';
import { Layout } from '../app/layout';
import { Link } from 'react-router-dom'; // Adjust based on your routing solution

const HomePage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-white mb-8">Welcome to CryptoConduit</h1>
                <p className="text-xl text-center text-white mb-8">
                    The premier platform for efficient and secure cryptocurrency swapping.
                </p>
                <div className="flex justify-center">
                    <Link to="/swap">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Start a Swap
                        </button>
                    </Link>
                    <Link to="/dashboard">
                        <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            View Dashboard
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
