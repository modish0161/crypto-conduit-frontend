// Format number to a fixed decimal places
export const formatNumber = (num: number, decimalPlaces = 2) => {
    return num.toFixed(decimalPlaces);
};

// Format date to a readable string
export const formatDate = (date: string | Date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
};

// Format large numbers with suffixes (K, M, B, T)
export const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toString();
};

// Check if an email is valid
export const isValidEmail = (email: string) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
};

// Convert cryptocurrency amount to fiat value
export const cryptoToFiat = (amount: number, rate: number) => {
    return formatNumber(amount * rate);
};

// Generate a unique identifier (for mock purposes, replace with real ids from your backend or database in production)
export const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// Add more helper functions as needed for your application
