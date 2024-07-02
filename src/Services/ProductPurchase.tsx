import React from 'react';
import { Navigate } from 'react-router-dom';

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
      {/* Aquí va tu lógica y UI para la compra de productos */}
    </div>
  );
};

export default ProductPurchase;
