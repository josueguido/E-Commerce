import Carrito from '../assets/Icons/shopping-cart.svg';
import { useId, useState } from 'react';
import "./Cart.css"

export function Cart() {

    const [isChecked, setIsChecked] = useState(false);
    const cartCheckboxId = useId();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
                <img src={Carrito} alt="Shopping Cart" />
            </label>
            <input
                type="checkbox"
                id={cartCheckboxId}
                className="hidden peer"
                   checked={isChecked}
                onChange={handleCheckboxChange}
            />
            
            <aside className={`cart ${isChecked ? 'block' : 'hidden'}`}>
                <ul>
                    <li className="border-b border-gray-400 pb-4 mb-4">
                        <img src={Carrito} alt="Nike Air Force" className="aspect-w-16 aspect-h-9 w-full" />
                        <div className="flex flex-col justify-center items center text-center text-white mt-2">
                            <strong className="block">Nike Air Force</strong>
                            <span className="block text-gray-600">-$1499</span>
                        </div>
                        <footer className="flex items-center justify-center mt-2">
                            <small className="text-gray-600">Qty: 2</small>
                            <button className="ml-2 px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none">+</button>
                        </footer>
                    </li>
                </ul>

                <button className="flex  mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded focus:outline-none">Clear cart</button>
            </aside>
        </>
    );
}

export default Cart;