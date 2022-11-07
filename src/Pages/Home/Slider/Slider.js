import React from 'react';
import { Link } from 'react-router-dom';
import slider1 from '../../../images/slider1.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider3.jpg';
import slider4 from '../../../images/slider4.jpg';


const Slider = () => {
    return (
        <div className="carousel w-full h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} alt='slider1' className="w-full brightness-50" />

                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-7xl font-bold text-white'>
                        We are expert <br /> in Cleaning
                    </h1>

                </div>
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                    <p className='text-white text-xl'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>

                </div>
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                    <Link to='/services'>
                        <button class="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-8 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            See Services
                        </button>
                    </Link>

                    <Link to='/blog'>
                        <button class="text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white active:bg-sky-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            Know More
                        </button>
                    </Link>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} alt='slider2' className="w-full brightness-50" />

                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-7xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>

                </div>
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                    <p className='text-white text-xl'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>

                </div>
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                    <Link to='/services'>
                        <button class="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-8 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            See Services
                        </button>
                    </Link>

                    <Link to='/blog'>
                        <button class="text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white active:bg-sky-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            Know More
                        </button>
                    </Link>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} alt='slider3' className="w-full brightness-50" />
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-7xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>

                </div>
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                    <p className='text-white text-xl'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>

                </div>
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                    <Link to='/services'>
                        <button class="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-8 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            See Services
                        </button>
                    </Link>

                    <Link to='/blog'>
                        <button class="text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white active:bg-sky-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            Know More
                        </button>
                    </Link>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} alt='slider4' className="w-full brightness-50" />
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-7xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>

                </div>
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                    <p className='text-white text-xl'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>

                </div>
                <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                    <Link to='/services'>
                        <button class="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-8 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            See Services
                        </button>
                    </Link>

                    <Link to='/blog'>
                        <button class="text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white active:bg-sky-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            Know More
                        </button>
                    </Link>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;