import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='h-[80vh] py-8'>
            <div>
                <h1 className='md:text-4xl font-mono text-center'>Contact Us, Our Office Address Down Below</h1>
                <div className='md:text-center my-10'>
                    <Link className='bg-cyan-700 text-xl font-mono md:px-5 py-3 rounded-lg font-bold text-white md:mx-5 mx-2 px-2' to="/contact/bdaddress">BD Address</Link>
                    <Link className='bg-cyan-700 text-xl font-mono md:px-5 py-3 rounded-lg font-bold text-white md:mx-5 mx-2 px-2' to="/contact/usaddress">US Address</Link>
                </div>
            </div>
            <div className='mt-36'>
                <Outlet />
            </div>
        </div>
    );
};

export default Contact;