import React from 'react';
import { Navigate } from 'react-router-dom';
import Principal from '../Components/Principal'
interface ProductPurchaseProps {
    isAuthenticated: boolean;
}

const ProductPurchase: React.FC<ProductPurchaseProps> = ({ isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h2>Compra de Productos</h2>
            <Principal />
        </div>
    );
};

export default ProductPurchase;
