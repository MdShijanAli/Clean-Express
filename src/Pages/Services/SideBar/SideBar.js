import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';


const SideBar = ({ service }) => {
    return (

        <div>
            <div className='mx-5 navlink bg-white'>
                <NavLink to={`/services/${service._id}`}>
                    <h3 className='px-5 cursor-pointer font-bold text-lg hover:text-red-700 py-4'>{service.name}</h3>
                </NavLink>
            </div>


        </div>

    );
};

export default SideBar;