import React from 'react';


const SideBar = ({ service }) => {
    return (

        <div>
            <div className='mx-5  bg-white'>
                <h3 className='px-5 font-bold text-lg hover:text-red-700 py-4'>{service.name}</h3>
            </div>


        </div>

    );
};

export default SideBar;