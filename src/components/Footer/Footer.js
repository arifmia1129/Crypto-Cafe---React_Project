import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
const Footer = () => {
    return (
        <div>
            <div className='flex justify-center gap-20 py-10'>
                <GrFacebookOption className='text-xl text-gray-400 hover:text-black' />
                <FiTwitter className='text-xl text-gray-400 hover:text-black' />
                <FiGithub className='text-xl text-gray-400 hover:text-black' />
                <FiLinkedin className='text-xl text-gray-400 hover:text-black' />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Footer;