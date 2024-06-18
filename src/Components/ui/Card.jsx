import { PropTypes } from 'prop-types';

function Card({ image, Title, description, color, size, price }) {
    return (
        <>
            <article className='flex px-10'>
                <div className='flex flex-col  bg-gray-200 rounded-lg w-full  shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                    <img src={image} alt="Shoes" className='w-full h-auto rounded-lg' />
                    <div className='flex flex-col justify-center items-start gap-2 px-10 py-10'>
                        <h1 className='font-semibold'>{Title}</h1>
                        <h2 className='text-gray-500'>{description}</h2>
                        <p className='text-gray-500'>{color}</p>
                        <p className='text-green-700'>{size}</p>
                        <p className='font-semibold'>${price}</p>
                        <button className='bg-gray-300 rounded-lg w-36 h-10 hover:bg-gray-500'>Add Cart</button>
                    </div>
                </div>
            </article>

        </>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};


export default Card;