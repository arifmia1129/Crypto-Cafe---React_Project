import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetail = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState({});
    console.log(coin);
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(data => setCoin(data));
    }, [id]);
    const { image, name, market_cap_rank, country_origin, hashing_algorithm, genesis_date, last_updated, coingecko_score, community_score, developer_score, liquidity_score, public_interest_score } = coin;
    return (
        <div className='bg-gray-100 md:px-80 py-10 px-[8%] md:flex'>
            <div className='py-5 md:order-2 flex justify-center items-center md:px-40'>
                <img src={image?.large} alt="" />
            </div>
            <div className='md:order-1'>
                <div className='mb-20'>
                    <h3 className='text-3xl font-bold'>General Info</h3>
                    <div className='text-xl'>
                        <p>Name: {name}</p>
                        <p>Market Cap Rank: {market_cap_rank}</p>
                        <p>Country Origin: {country_origin ? country_origin : "Not available"}</p>
                        <p>Hashing Algorithm: {hashing_algorithm}</p>
                        <p>Genesis Data: {genesis_date}</p>
                        <p>Last Update: {last_updated}</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>Scores Info</h3>
                    <div className='text-xl'>
                        <p>Coingecko Score: {coingecko_score}</p>
                        <p>Community Score: {community_score}</p>
                        <p>Developer Score: {developer_score}</p>
                        <p>Liquidity Score: {liquidity_score}</p>
                        <p>Public Interest Score: {public_interest_score}</p>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default CoinDetail;