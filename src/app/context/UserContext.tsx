// src/context/UserContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserType {
    id: string;
    name: string;
    email: string;
}

interface UserContextType {
    user: UserType | null;
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const defaultState: UserContextType = {
    user: null,
    setUser: () => { },
    login: async () => { },
    logout: () => { },
};

const UserContext = createContext<UserContextType>(defaultState);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserType | null>(null);

    // You may include useEffect here if you plan to fetch user data on component mount,
    // or perform other side effects related to the user context.

    const login = async (email: string, password: string) => {
        // Implement login logic here
        // This is a placeholder, replace with actual logic to authenticate the user
        // and set the user state
    };

    const logout = () => {
        // Implement logout logic here
        // This is a placeholder, replace with actual logic to sign out the user
        // and clear the user state
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook for easy access to context
export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

interface UserProviderProps {
    children: ReactNode;
}

export default UserContext;