import { useEffect, useState } from 'react';
import { useCart } from '../Hooks/useCart';
import AddIcon from '../assets/Icons/shopping-cart-plus.svg'
import RemoveIcon from '../assets/Icons/shopping-cart-x.svg'


const Products = () => {

    const [products, setProducts] = useState([]);
    const { addToCart, removeFromCart, cart } = useCart();


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching products:', error));
    }, []);


    const checkProductInCart = product => {
        return cart && cart.some(item => item.id === product.id);
    };

    return (
        <div className="container mx-auto p-4 py-10 my-10">
            <h1 className="text-3xl font-bold text-center mb-8">Fake Store Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product);
                    return (
                        <div key={product.id} className="flex flex-col justify-center items-center border rounded-lg overflow-hidden shadow-md py-4 px-4 gap-6">
                            <img src={product.image} alt={product.title} className="w-40 h-30" />
                            <div className="p-4">
                                <h2 className="text-base font-semibold mb-2">{product.title}</h2>
                                <p className="text-gray-700 mb-2">${product.price}</p>
                                <p className="text-gray-600">{product.description.slice(0, 100)}...</p>
                                <button
                                    onClick={() => 
                                        isProductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)}
                                    className="flex mt-4 py-2 px-4 rounded focus:outline-none focus:ring-2 bg-gray-200 hover:bg-gray-500"
                                >
                                    {isProductInCart
                                        ? <img src={RemoveIcon} alt="Remove from cart" className="w-6 h-6 mr-2" />
                                        : <img src={AddIcon} alt="Add to cart" className="w-6 h-6 mr-2" />
                                    }
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
