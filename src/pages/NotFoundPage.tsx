import React from 'react';
import { Link } from 'react-router-dom'; // Adjust based on your routing solution
import { Layout } from '../app/layout';

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-xl text-white mb-8">Page Not Found</p>
                <p className="text-lg text-white mb-8">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link to="/">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go Home
                    </button>
                </Link>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
