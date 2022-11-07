import React from 'react';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import ServiceSection from './ServiceSection/ServiceSection';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ServiceSection></ServiceSection>
            <AboutUsSection></AboutUsSection>
        </div>
    );
};

export default Home;