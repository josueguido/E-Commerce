import  { useState, useEffect } from 'react';
import axios from 'axios';

function Principal() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://real-time-amazon-data.p.rapidapi.com/product-category-list',
                    params: { country: 'US' },
                    headers: {
                        'x-rapidapi-key': '59c4bf489dmsh068ed231235424ap1695cfjsna2971bd258c2',
                        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                    }
                };
                const response = await axios.request(options);
                setCategories(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Product Categories</h2>
            <ul className='grid grid-cols-3'>
                {Array.isArray(categories) && categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Principal;
