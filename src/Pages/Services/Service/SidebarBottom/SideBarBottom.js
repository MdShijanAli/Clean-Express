import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import sidebar from '../../../../images/sidebar.png';

const SideBarBottom = () => {
    return (
        <div className='flex pt-20  bg-blue-600 mt-10 rounded-r-2xl rounded-bl-2xl rounded-tl-md'>
            <img className='rounded-bl-2xl' src={sidebar} alt="" />
            <div className='text-white '>
                <h1 className='text-2xl font-semibold'>Get</h1>
                <h2 className='text-3xl font-semibold'>25% off</h2>
                <h3 className='text-xl font-semibold mt-5 mb-10'>on All Services</h3>

                <div className='flex gap-2 my-3 font-semibold'>
                    <CheckIcon className='h-6 w-6  text-red-700'></CheckIcon>
                    <p>Electrician</p>
                </div>
                <div className='flex gap-2 my-3 font-semibold'>
                    <CheckIcon className='h-6 w-6 text-red-700'></CheckIcon>
                    <p>Plumber</p>
                </div>
                <div className='flex gap-2 my-3 font-semibold'>
                    <CheckIcon className='h-6 w-6 text-red-700'></CheckIcon>
                    <p>Carpenter</p>
                </div>
                <div className='flex gap-2 my-3 font-semibold'>
                    <CheckIcon className='h-6 w-6 text-red-700'></CheckIcon>
                    <p>Painter</p>
                </div>
                <Link to='/services'>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-red-700 text-white  uppercase rounded shadow-md mb-10 text-sm hover:bg-white hover:shadow-lg hover:text-blue-600 font-bold  transition duration-150 ease-in-out">Get Now</button>
                </Link>
            </div>
        </div>
    );
};

export default SideBarBottom;