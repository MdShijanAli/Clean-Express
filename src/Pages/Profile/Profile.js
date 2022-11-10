import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hoocks/useTitle';
import { AuthContext } from '../../utilities/AuthProvider/AuthProvider';




const Profile = () => {
    useTitle('Profile')
    const { user } = useContext(AuthContext);
    return (


        <div className="bg-purple-400 shadow-xl my-12 pb-6 mx-5 justify-center items-center overflow-hidden md:w-1/2 rounded-lg md:mx-auto">
            <div className="relative h-40">
                <img className="absolute h-full w-full object-cover" alt='BannerPhoto' src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
            </div>
            <div className="relative shadow mx-auto h-36 w-36 -mt-20 border-white rounded-full overflow-hidden border-4">
                <img className="object-cover w-full h-full" alt='profilePhoto' src={user?.photoURL} />
            </div>
            <div className="mt-10">
                <h1 className="text-2xl text-center font-semibold">
                    {user?.displayName}
                </h1>
                {
                    user?.email ? <p className="text-lg text-black text-center">
                        {user?.email}
                    </p> : <p className="text-lg text-black text-center">Apnaer Email Pawa Jay nai Vai</p>
                }
            </div>

            <div className='md:flex gap-5 text-center md:w-1/2 justify-around mx-auto'>
                <div className='mb-5 my-10'>
                    <Link to='/my-services' className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-800 hover:bg-cyan-800 focus:bg-orange-600" role="button">My Services</Link>

                </div>
                <div className=' md:my-10'>
                    <Link to='/' className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 hover:bg-cyan-800 focus:bg-orange-600" role="button">Go Home</Link>

                </div>
            </div>
        </div>




    );
};

export default Profile;