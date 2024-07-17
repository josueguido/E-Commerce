// Header.js
import Cart from './Cart';
import User from '../assets/Icons/user.svg';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipAction, TooltipContent } from 'keep-react';

function Header() {
    return (
        <header className="flex justify-between items-center py-6 px-4 sm:px-8 bg-white shadow-md font-serif text-base">
            <h1 className="hidden md:block">Store</h1>
            <nav className="flex gap-2 sm:gap-4 mt-4 sm:mt-0">
                <Link to="/">
                    <button className="hover:bg-gray-200 rounded-lg py-2 px-4">Home</button>
                </Link>
                <Link to="/about">
                    <button className="hover:bg-gray-200 rounded-lg py-2 px-4">About</button>
                </Link>
                <Link to="/contact">
                    <button className="hover:bg-gray-200 rounded-lg py-2 px-4">Contact</button>
                </Link>
            </nav>
            <div className="flex items-center gap-4">
                <Cart />
                <Tooltip placement="bottom">
                    <TooltipAction>
                        <Link to="/SignUp">
                            <img src={User} alt="User Icon" className="hover:bg-gray-200 rounded-lg py-2 px-2" />
                        </Link>
                    </TooltipAction>
                    <TooltipContent>
                        <p className="text-body-5 font-medium text-white dark:text-metal-900 px-4">SignUp</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </header>
    );
}

export default Header;
