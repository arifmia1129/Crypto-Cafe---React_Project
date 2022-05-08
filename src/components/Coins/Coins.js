import React, { useEffect, useState } from 'react';
import Coin from '../Coin/Coin';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
            .then(res => res.json())
            .then(data => setCoins(data));
    }, []);
    return (
        <div className='px-[8%] md:px-40 py-8'>
            <h1 className='font-sans font-bold text-4xl text-center'>Available Crypto Currencies</h1>
            <p className='text-center py-3 text-xl text-gray-600'>Total Coins: {coins.length}</p>
            <div className='md:grid grid-cols-4 gap-4'>
                {
                    coins.map(coin => <Coin
                        key={coin.id}
                        coin={coin}
                    ></Coin>)
                }
            </div>
        </div>
    );
};

export default Coins;