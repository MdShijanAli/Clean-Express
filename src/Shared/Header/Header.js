import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logoo.png';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../utilities/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import HeaderTop from './HeaderTop/HeaderTop';
import './Header.css';



const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    console.log('header user', user)
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('successfuly logout');
                toast.success('You have logged Out Successfully!!')
            })
            .catch(error => {
                console.error('error', error.message)
            })
    }
    return (

        <div>
            <HeaderTop></HeaderTop>

            <nav className="w-full bg-gray-800 shadow sticky top-0 z-50">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-2 md:block">
                            <NavLink to='/'>
                                <img className='h-20' src={logo} alt="" />
                            </NavLink>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white hover:text-indigo-200">
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                    <NavLink to='/services'>Services</NavLink>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                    <NavLink to='/blogs'>Blog</NavLink>
                                </li>

                                <li className="text-white hover:text-indigo-200">
                                    <NavLink to='/contact'>Contact</NavLink>
                                </li>

                            </ul>

                            <div className="mt-3 space-y-2 md:hidden ">
                                <NavLink to='/profile'>
                                    {
                                        user?.uid && <div>

                                            {
                                                user?.photoURL ? <img className='w-12 h-12 rounded-full mr-2' alt='profilePhoto' src={user?.photoURL} title={user?.displayName}></img> : <UserCircleIcon title={user?.displayName} className='w-12 h-12 text-white mr-2'></UserCircleIcon>
                                            }
                                        </div>

                                    }
                                </NavLink>

                                {
                                    user?.uid ? <NavLink onClick={handleLogout}

                                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                    >
                                        Sign Out
                                    </NavLink> :
                                        <>
                                            <NavLink
                                                to='/login'
                                                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                            >
                                                Login
                                            </NavLink>
                                            <NavLink
                                                to='/register'
                                                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                            >
                                                Register
                                            </NavLink>
                                        </>
                                }
                                {/*                            <div className="form-control">
                                <label className="label cursor-pointer">

                                    <input type="checkbox" className="toggle toggle-secondary" />
                                </label>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex">


                        <NavLink to='/profile'>
                            {
                                user?.uid && <div>

                                    {
                                        user?.photoURL ? <img className='w-12 h-12 rounded-full mr-2' alt='profilePhoto' src={user?.photoURL} title={user?.displayName}></img> : <UserCircleIcon title={user?.displayName} className='w-12 h-12 text-white mr-2'></UserCircleIcon>
                                    }
                                </div>

                            }
                        </NavLink>



                        {
                            user?.uid ? <NavLink onClick={handleLogout}

                                className="px-4 text-center py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                            >
                                Logout
                            </NavLink> :
                                <>
                                    <NavLink
                                        to='/login'
                                        className="px-4 mr-2 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        to='/register'
                                        className="px-4 mr-2 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                    >
                                        Register
                                    </NavLink>
                                </>

                        }
                        {/*         <div className="form-control">
                        <label className="label cursor-pointer">

                            <input type="checkbox" className="toggle toggle-secondary" />
                        </label>
                    </div> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;