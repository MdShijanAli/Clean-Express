import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import useTitle from '../../hoocks/useTitle';
import { AuthContext } from '../../utilities/AuthProvider/AuthProvider';

const MyServices = () => {
    const { user } = useContext(AuthContext);
    useTitle('My Services');

    const [myServices, setMyServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-phi.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                const myService = data.filter(mys => mys.email === user.email)
                setMyServices(myService)
            })
    }, [user?.email])
    return (
        <PhotoProvider>
            <div className='my-10'>
                {
                    myServices.length > 0 ? <h1 className='text-3xl font-bold text-center my-10'>I have Total {myServices.length} Services</h1> : <h1 className='text-3xl font-bold text-center my-10'>You Don't have Any Services</h1>
                }
            </div>
            <div className='md:w-4/5 grid md:grid-cols-3 gap-5 md:mx-auto my-20 mx-5'>
                {
                    myServices.map(service => <div class="rounded-lg shadow-lg bg-white ">

                        <PhotoView src={service?.photo}>
                            <img class="rounded-t-lg w-full h-72" src={service?.photo} alt="" />
                        </PhotoView>

                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">{service?.name}</h5>
                            <p class="text-gray-700 text-base mb-4">
                                {service?.description.slice(0, 100)}
                            </p>
                            <div className='flex justify-between items-center'>
                                <Link to={`/services/${service._id}`}>
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Get This Service</button>
                                </Link>
                                <div>
                                    <h1 className='text-3xl font-semibold'>${service?.price}<span className='text-lg'>/mo</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </PhotoProvider>
    );
};

export default MyServices;