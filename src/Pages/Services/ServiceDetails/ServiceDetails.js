import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hoocks/useTitle';
import SideBarBottom from '../Service/SidebarBottom/SideBarBottom';
import SideBar from '../SideBar/SideBar';
import SingleServiceDetails from './SingleServiceDetails/SingleServiceDetails';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-phi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const singleService = useLoaderData();
    useTitle(`${singleService?.name}`)
    return (
        <div className='md:grid md:grid-cols-4 md:mx-10 gap-10 '>
            <div>
                <div className='bg-gray-100 rounded-tr-3xl rounded-l-xl rounded-b-xl pb-10 my-10 lg:my-16 mx-5 md:mx-0'>
                    <h2 className='text-2xl mb-10 font-semibold bg-red-700 text-white p-3 text-center rounded-tl-xl rounded-tr-3xl'>Our Services</h2>

                    {
                        services.map(service => <SideBar key={service._id} service={service}></SideBar>)
                    }

                </div>
                <div className='mx-5 md:mx-0'>
                    <SideBarBottom></SideBarBottom>
                </div>
            </div>
            <div className='md:col-span-3 my-20 md:my-0 mx-5 md:mx-0'>
                <SingleServiceDetails singleService={singleService}></SingleServiceDetails>
            </div>
        </div>
    );
};

export default ServiceDetails;