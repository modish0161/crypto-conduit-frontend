// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../app/context/AuthContext'; // Make sure this hook provides isAuthenticated status.

interface ProtectedRouteProps extends Omit<RouteProps, 'element'> {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth(); // Assuming useAuth returns an object with isAuthenticated boolean

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
