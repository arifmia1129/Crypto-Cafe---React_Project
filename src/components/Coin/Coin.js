import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({ coin }) => {
    const { id, image, name, symbol } = coin;
    return (
        <Link to={`/coins/${id}`}>
            <div className='flex justify-between w-[250px] shadow-xl p-5 rounded-xl mb-10 bg-white'>
                <div className='w-16 h-16'>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h3 className='text-gray-600 font-medium'>{name}</h3>
                    <p>{symbol}</p>
                </div>
            </div>
        </Link>
    );
};

export default Coin;