// src/components/ProtectedComponent.tsx
import React from 'react';
import { useAuth } from '../app/context/AuthContext';
import { useRouter } from 'next/router';

const ProtectedComponent: React.FC = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Assuming useAuth() returns { isAuthenticated }
    const router = useRouter();

    React.useEffect(() => {
        if (!isAuthenticated) {
            // Redirect them to the login page, but save the current location they were
            // trying to go to when they were redirected. This allows us to send them
            // along to that page after they login, which is a nicer user experience
            // than dropping them off on the home page.
            router.push(`/login?redirect=${router.pathname}`);
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        // Optionally, render a loading indicator or null while waiting to redirect
        return null;
    }

    // User is authenticated, render the protected content
    return <>{children}</>;
};

export default ProtectedComponent;
