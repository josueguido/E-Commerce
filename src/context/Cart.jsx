import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {

    const [cart, setCart] = useState([])

    const addToCart = product => {
        // setCart([...cart, product])
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex > 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
        }

setCart(prevState => ([
    ...prevState,
    {
        ...product,
        quantity: 1
    }
]))



    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            // removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}