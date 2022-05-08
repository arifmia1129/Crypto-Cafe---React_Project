import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
const Footer = () => {
    return (
        <div className='bg-white'>
            <div className='flex justify-center gap-4 md:gap-20 py-10'>
                <GrFacebookOption className='text-xl text-gray-500 hover:text-black' />
                <FiTwitter className='text-xl text-gray-400 hover:text-black' />
                <FiGithub className='text-xl text-gray-400 hover:text-black' />
                <FiLinkedin className='text-xl text-gray-400 hover:text-black' />
            </div>
            <div className='flex justify-center pb-5 font-bold font-serif'>
                Crypto Cafe &copy; 2022.
            </div>
        </div>
    );
};

export default Footer;