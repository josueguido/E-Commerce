import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface RequireAuthProps {
    isAuthenticated: boolean;
    children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default RequireAuth;
