import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceSection.css';
import leak from '../../../images/leak.png';
import plumber from '../../../images/plumber.png';
import pipe from '../../../images/pipeline.png';
import { CheckIcon } from '@heroicons/react/24/solid';

const ServiceSection = () => {
    return (
        <div className='grid grid-cols-4 mx-32 gap-5  my-20'>
            <div className='bg-gray-800 text-white  pt-16 rounded-t-3xl rounded-br-3xl'>
                <h1 className='text-2xl font-semibold px-10 mb-5'>
                    Professional <br />
                    Handy Services
                </h1>
                <p className='px-10 mb-10'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
                <div className='mt-5 w-1/2 sv '>
                    <h3 className='text-2xl font-semibold'>25% Off</h3>
                    <h4 className='text-sm mb-5 font-semibold'>on All Services</h4>
                    <Link className='underline' to='/services'>Get It Now</Link>
                </div>
            </div>




            <div className='shadow-slate-300 shadow-2xl rounded-t-3xl'>
                <div className='bg-slate-200 px-10 rounded-br-full'>
                    <h1 className='text-2xl py-10  font-semibold'>
                        Management Tenants
                    </h1>
                    <div className='flex justify-between items-center pb-10'>
                        <img className='w-16 h-16' src={leak} alt="" />
                        <h1 className='text-6xl font-semibold'>01</h1>
                    </div>

                </div>

                <div className='px-10  my-5'>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-semibold'></CheckIcon>
                        <p className='font-semibold'>
                            Repairs & Installation.</p>
                    </div>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-bold'></CheckIcon>
                        <p className='font-semibold'>

                            Root infested pipes</p>
                    </div>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-bold'></CheckIcon>
                        <p className='font-semibold'>

                            Drain & Sewer Cleaning</p>
                    </div>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-bold'></CheckIcon>
                        <p className='font-semibold'>
                            Water Heaters</p>
                    </div>
                </div>

            </div>


            <div className='shadow-slate-300 shadow-2xl rounded-t-3xl'>
                <div className='bg-slate-200 px-10 rounded-t-3xl rounded-br-full'>
                    <h1 className='text-2xl py-10 font-semibold'>
                        Leakage Detection
                    </h1>
                    <div className='flex justify-between items-center pb-10'>
                        <img className='w-16 h-16' src={plumber} alt="" />
                        <h1 className='text-6xl font-semibold'>02</h1>
                    </div>

                </div>

                <div className='px-10  my-5'>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-semibold'></CheckIcon>
                        <p className='font-semibold'>
                            Faucet installation.</p>
                    </div>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-bold'></CheckIcon>
                        <p className='font-semibold'>


                            Drain cleaning</p>
                    </div>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-bold'></CheckIcon>
                        <p className='font-semibold'>

                            Water filter cleaning</p>
                    </div>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-bold'></CheckIcon>
                        <p className='font-semibold'>
                            Toilet Leaking</p>
                    </div>
                </div>

            </div>


            <div className='shadow-slate-300 shadow-2xl rounded-t-3xl'>
                <div className='bg-slate-200 px-10 rounded-t-3xl rounded-br-full'>
                    <h1 className='text-2xl py-10 font-semibold'>
                        Residential Services
                    </h1>
                    <div className='flex justify-between items-center pb-10'>
                        <img className='w-16 h-16' src={pipe} alt="" />
                        <h1 className='text-6xl font-semibold'>03</h1>
                    </div>

                </div>

                <div className='px-10  my-5'>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-semibold'></CheckIcon>
                        <p className='font-semibold'>

                            Bathtub Installation.</p>
                    </div>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-bold'></CheckIcon>
                        <p className='font-semibold'>


                            Rebum munere ex mea</p>
                    </div>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-bold'></CheckIcon>
                        <p className='font-semibold'>


                            Sewer Cleaning</p>
                    </div>
                    <div className='flex gap-3'>
                        <CheckIcon className='w-6 h-6 text-red-700 font-bold'></CheckIcon>
                        <p className='font-semibold'>

                            Drain & Water Heaters</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ServiceSection;