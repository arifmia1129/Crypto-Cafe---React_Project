import React from 'react';
import { FiCoffee } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='bg-gray-200'>
            <div className='h-[80vh] flex flex-col justify-center items-center'>
                <div className='flex gap-4 mb-5'>
                    <h1 className='font-mono font-bold text-6xl'>Welcome to CRYPTO CAFE</h1>
                    <FiCoffee className='font-bold text-6xl' />
                </div>
                <button className='bg-cyan-700 text-xl font-mono px-5 py-3 rounded-lg font-bold text-white'><Link to="/coins">Explore Coins</Link></button>
            </div>
        </div>
    );
};

export default Homepage;