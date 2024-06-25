import Cart from './Cart';
import User from '../assets/Icons/user.svg'
import { Link } from 'react-router-dom'
import { Tooltip, TooltipAction, TooltipContent } from 'keep-react'

function Header() {

    return (
        <>
            <header className='flex justify-around items-center py-6  font-serif text-base'>
                <h1>Store</h1>
                <nav className='flex gap-6' aria-label="Main Navigation">
                    <Link to="/">
                        <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>Home</button>
                    </Link>
                    <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>About</button>
                    <button className='hover:bg-gray-200 rounded-lg py-2 px-4'>Contact</button>
                </nav>

                <div className='hover:bg-gray-200 rounded-lg py-2 px-4 gap-4'>
                    <Cart />
                    {['bottom'].map((position) => (
                        <Tooltip placement={position} key={position}>
                            <TooltipAction>  
                                <Link to="/LogIn">
                                <img src={User} alt="User Icon" />
                            </Link>
                            </TooltipAction>
                            <TooltipContent>
                                <p className="text-body-5 font-medium text-white dark:text-metal-900 px-4">LogIn</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </header>
        </>
    );
}

export default Header;