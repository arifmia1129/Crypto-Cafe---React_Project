import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 flex font-sans px-12 py-8 bg-white text-xl font-semibold justify-center md:justify-between'>
            <div className='hidden md:block font-bold text-1xl text-gray-600'>
                <Link to="/">Crypto Cafe</Link>
            </div>
            <div className='gap-4 flex'>
                <Link to="/">Home</Link>
                <Link to="/const">Coins</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default Header;