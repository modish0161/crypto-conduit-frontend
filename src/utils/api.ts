import axios from 'axios';

// Define the base URL for your backend API
const backendApi = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// Define the base URL for the CoinGecko API or any other external APIs you're using
const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
});

// Function to fetch cryptocurrencies list
export const fetchCryptocurrencies = async () => {
    try {
        const response = await coinGeckoApi.get('/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 100,
                page: 1,
                sparkline: false,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
        throw error;
    }
};

// Function to authenticate a user
export const authenticateUser = async (email: string, password: string) => {
    try {
        const response = await backendApi.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw error;
    }
};

// Function to fetch user transaction history
export const fetchTransactionHistory = async (userId: string) => {
    try {
        const response = await backendApi.get(`/transactions/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        throw error;
    }
};

// Add more API interaction functions as needed for your project
