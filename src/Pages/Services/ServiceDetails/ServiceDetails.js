import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { name } = useLoaderData();
    console.log(name)
    return (
        <div>
            <h2>This is Service Details Page {name}</h2>
        </div>
    );
};

export default ServiceDetails;