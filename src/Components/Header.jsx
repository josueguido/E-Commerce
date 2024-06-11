import Cart from '../assets/Icons/shopping-cart.svg'
import Search from '../assets/Icons/search.svg'
import axios from 'axios';
import { useState } from 'react';

function Header() {

    const [products, setProducts] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const options = {
                method: 'GET',
                url: 'https://real-time-amazon-data.p.rapidapi.com/search',
                params: {
                    query: products,
                    page: '1',
                    country: 'US',
                    sort_by: 'RELEVANCE',
                    product_condition: 'ALL'
                },
                headers: {
                    'x-rapidapi-key': '59c4bf489dmsh068ed231235424ap1695cfjsna2971bd258c2',
                    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                }
            };

            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <header className='flex justify-around items-center py-6 bg-gray-100 font-serif text-base'>
                <h1>Store</h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative">
                        <img src={Search} className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <input
                            type="search"
                            id="products"
                            value={products}
                            onChange={(e) => setProducts(e.target.value)}
                            placeholder="Search products..."
                            className="w-full h-10 bg-white shadow-none appearance-none pl-8 rounded-lg"
                        />
                    </div>
                </form>
                <div className='flex gap-6'>
                    <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>Home</button>
                    <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>Shop</button>
                    <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>About</button>
                    <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>Contact</button>
                </div>
                <img src={Cart} alt='Shopping Card' className='hover:bg-gray-200 rounded-lg py-2 px-4' />
            </header>
        </>
    );
}

export default Header;