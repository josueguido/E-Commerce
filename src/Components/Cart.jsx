'use client'
import { toast } from 'keep-react'
import Carrito from '../assets/Icons/shopping-cart.svg';
import { useId, useState } from 'react';
import { useCart } from '../Hooks/useCart';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import X from '../assets/Icons/x.svg'
import { createCheckoutSession } from '../Services/api';

function CartItem({ image, price, title, quantity, addToCart }) {


    return (
        <>

            <li className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center">
                <img
                    src={image}
                    alt='Product Image'
                    className="w-24 h-24 mb-4 object-cover rounded-full"
                />
                <div className="text-center">
                    <strong className="text-gray-800 block text-lg mb-2">{title}</strong>
                    <span className="text-gray-500">${price}</span>
                </div>
                <footer className="flex flex-col items-center mt-4 gap-6">
                    <small className="text-gray-600 mb-2">Qty: {quantity}</small>
                    <button
                        onClick={addToCart}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        +
                    </button>
                </footer>
            </li>
        </>
    )
}

export function Cart() {

    const [isChecked, setIsChecked] = useState(false);
    const cartCheckboxId = useId();
    const { cart, addToCart, clearCart } = useCart();
    const cartRef = useRef();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleCloseClick = () => {
        setIsChecked(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsChecked(false);
            }
        };


        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const totalPrice = cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    const handleCheckout = async () => {
        try {
            console.log('Carrito enviado:', cart);
            const session = await createCheckoutSession(cart); // Pasa el carrito completo
            window.location.href = session.url; // Redirige a la URL de Stripe Checkout
        } catch (error) {
            console.error('Error during checkout', error);
        }
    };


    return (
        <>
            <label htmlFor={cartCheckboxId} className="absolute flex justify-center items-center top-10 right-16 md:top-8 md:right-20 hover:bg-gray-200 hover:rounded-xl">
                <img src={Carrito} alt="Shopping Cart" className="w-6 h-6 " />
            </label>
            <input
                type="checkbox"
                id={cartCheckboxId}
                className="hidden peer"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />

            <aside
                ref={cartRef}
                className={`fixed top-0 right-0 w-72 bg-gray-300 text-white p-4 transition-transform transform h-full shadow-lg z-10 overflow-y-auto ${isChecked ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <img
                    src={X}
                    alt='Close Icon'
                    className='cursor-pointer ml-auto'
                    onClick={handleCloseClick}
                />
                {cart && cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((product) => (
                            <CartItem
                                key={product.id}
                                addToCart={() => addToCart(product)}
                                {...product}
                            />
                        ))}
                    </ul>
                ) : (
                    <p className="text-center mt-4 text-black">Your cart is empty.</p>
                )}
                <div className="mt-4 text-center">
                    <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
                </div>
                <button
                    className='flex justify-center items-center mt-4 py-2 px-2 rounded focus:outline-none focus:ring-2 bg-yellow-500 hover:bg-yellow-400'
                    onClick={handleCheckout}
                >
                    Buy Now
                </button>
                <button
                    onClick={() => { clearCart(); toast('Removed Products!'); }}
                    className="mt-4 w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded focus:outline-none"
                >
                    Clear cart
                </button>


            </aside>
        </>
    );
}

CartItem.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default Cart;