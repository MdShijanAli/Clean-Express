import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';
import SideBarBottom from './Service/SidebarBottom/SideBarBottom';
import SideBar from './SideBar/SideBar';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='grid md:grid-cols-4 md:mx-10 gap-10 items-center'>
            <div>
                <div className='bg-gray-100 rounded-tr-3xl rounded-l-xl rounded-b-xl pb-10'>
                    <h2 className='text-2xl mb-10 font-semibold bg-red-700 text-white p-3 text-center rounded-tl-xl rounded-tr-3xl'>Our Services</h2>

                    {
                        services.map(service => <SideBar key={service._id} service={service}></SideBar>)
                    }

                </div>
                <div>
                    <SideBarBottom></SideBarBottom>
                </div>
            </div>
            <div className='col-span-3'>
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;