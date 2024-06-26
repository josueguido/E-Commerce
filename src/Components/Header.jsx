import Cart from './Cart';
import User from '../assets/Icons/user.svg'
import { Link } from 'react-router-dom'
import { Tooltip, TooltipAction, TooltipContent } from 'keep-react'

function Header() {

    return (
        <>
            <header className='flex flex-col sm:flex-row justify-between items-center py-6 px-4 sm:px-8 bg-white shadow-md font-serif text-base'>
                <h1>Store</h1>
                <nav className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0' aria-label="Main Navigation">
                    <Link to="/">
                        <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>Home</button>
                    </Link>
                    <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>About</button>
                    <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>Contact</button>
                </nav>

                <div className='hover:bg-gray-200 rounded-lg py-2 px-2 gap-4'>
                    <Cart />
                    {['bottom'].map((position) => (
                        <Tooltip placement={position} key={position}>
                            <TooltipAction>
                                <Link to="/SignUp">
                                    <img src={User} alt="User Icon" />
                                </Link>
                            </TooltipAction>
                            <TooltipContent>
                                <p className="text-body-5 font-medium text-white dark:text-metal-900 px-4">SignUp</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </header>
        </>
    );
}

export default Header;