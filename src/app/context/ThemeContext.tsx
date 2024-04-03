// Adding 'use client' to indicate this is intended for client-side execution in Next.js 13+
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => { } });

interface ThemeProviderProps {
    children: ReactNode; // Explicitly typing 'children' to resolve the 'any' type issue
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

// Removed the aggregate export statement to resolve the duplicate export issue

export default ThemeContext;