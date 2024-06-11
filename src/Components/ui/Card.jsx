import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function CardComponent({ productTitle }) {
    const [productData,] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://real-time-amazon-data.p.rapidapi.com/search',
                    params: {
                        query: 'Phone',
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

        fetchData(); // Llama a la función fetchData aquí
    }, [productTitle]);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {productData && (
                <>
                    <img className="w-full" src={productData.product_photo} alt={productData.product_title} style={{ width: 600, height: 400 }} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{productData.product_title}</div>
                        <p className="text-gray-700 text-base">{productData.product_description}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        // onClick={onButtonClick}
                        >
                            {/* {buttonText} */}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

CardComponent.propTypes = {
    productTitle: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    productPhoto: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
};

export default CardComponent;
