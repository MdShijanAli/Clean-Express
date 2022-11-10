import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hoocks/useTitle';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import BlogSection from './BlogSection/BlogSection';
import Newsletter from './Newsletter/Newsletter';
import ServiceSection from './ServiceSection/ServiceSection';
import ServicesSection from './ServicesSection/ServicesSection';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Slider></Slider>
            <ServiceSection></ServiceSection>


            <section className="py-10 bg-gray-50 mt-10">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl">Our Services</h2>
                        </div>


                    </div>

                    <div>

                        <ServicesSection></ServicesSection>

                    </div>

                    <div className='mx-auto text-center my-10'>
                        <Link to='/services' className="inline-flex mx-auto items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 hover:bg-cyan-800 focus:bg-orange-600" role="button">View All</Link>
                    </div>
                </div>
            </section>

            <AboutUsSection></AboutUsSection>


            <section className="py-10 bg-gray-50 ">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                        </div>


                    </div>

                    <div>

                        <BlogSection></BlogSection>

                    </div>

                    <div className='mx-auto text-center my-10'>
                        <Link to='/blogs' className="inline-flex mx-auto items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 hover:bg-cyan-800 focus:bg-orange-600" role="button">View All</Link>
                    </div>
                </div>
            </section>

            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;