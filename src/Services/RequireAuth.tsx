import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
    isAuthenticated: boolean;
    children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ isAuthenticated, children }) => {
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <>{children}</>;
};

export default RequireAuth;
