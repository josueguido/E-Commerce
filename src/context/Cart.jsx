import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productInCartIndex = cart.findIndex((item) => item.id === product.id);

        if (productInCartIndex !== -1) {
            const newCart = [...cart];
            newCart[productInCartIndex].quantity += 1;
            setCart(newCart);
        } else {
            setCart((prevCart) => [
                ...prevCart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };

    const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
