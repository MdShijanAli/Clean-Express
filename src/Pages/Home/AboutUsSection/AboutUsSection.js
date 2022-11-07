import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import aboutImg from '../../../images/about0us.jpg';
import wrench from '../../../images/repairing-service.png';
import toolBox from '../../../images/tool-box.png';

const AboutUsSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img src={aboutImg} className=" shadow-2xl rounded-3xl" alt='hero' />
                <div>
                    <h5 className='font-bold text-red-700'>ABOUT US</h5>
                    <h1 className="text-5xl font-bold text-sky-900">Nobody Wows Clients Like We Do</h1>
                    <p className="py-6">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>

                    <div className='flex gap-5 mb-3 mt-5'>
                        <ArrowLongRightIcon className='h-6 w-6 text-sky-900'></ArrowLongRightIcon>
                        <p className='font-semibold text-sky-900'>
                            First Class Quality Service at Affordable Prices</p>
                    </div>
                    <div className='flex gap-5'>
                        <ArrowLongRightIcon className='h-6 w-6 text-sky-900'></ArrowLongRightIcon>
                        <p className='font-semibold text-sky-900'>

                            Immediate 24/ 7 Emergency Service</p>
                    </div>


                    <div className='flex justify-between my-10'>
                        <div className='flex gap-3'>
                            <img className='w-16 h-16' src={wrench} alt="" />
                            <div>
                                <h1 className='text-3xl font-bold text-sky-900'>1300+</h1>
                                <p className='font-semibold'>Boilers Installed</p>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <img className='w-16 h-16' src={toolBox} alt="" />
                            <div>
                                <h1 className='text-3xl font-bold text-sky-900'>2300+</h1>
                                <p className='font-semibold '>24X7 Services</p>
                            </div>
                        </div>

                    </div>

                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;