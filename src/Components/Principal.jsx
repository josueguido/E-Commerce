import { useEffect, useState } from 'react';

const Products = () => {

    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useEffect('')


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className=" container mx-auto p-4 py-10 my-10">
            <h1 className="text-3xl font-bold text-center mb-8">Fake Store Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="flex flex-col justify-center items-center border rounded-lg overflow-hidden shadow-md py-4 px-4 gap-6">
                        <img src={product.image} alt={product.title} className="w-40 h-30" />
                        <div className="p-4">
                            <h2 className="text-base font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-700 mb-2">${product.price}</p>
                            <p className="text-gray-600">{product.description.slice(0, 100)}...</p>
                            <button className="mt-4 bg-red-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
                                Add Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
