import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div className='sticky top-0 flex font-sans px-12 py-8 bg-white text-xl font-semibold justify-center md:justify-between'>
            <div className='hidden md:block font-bold text-1xl text-gray-600'>
                <CustomLink to="/">Crypto Cafe</CustomLink>
            </div>
            <div className='gap-4 flex'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/coins">Coins</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </div>
    );
};

export default Header;