import { CheckIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../utilities/AuthProvider/AuthProvider';
import AllReviews from './ReviewSection/AllReviews/AllReviews';
import ReviewSection from './ReviewSection/ReviewSection';
import './SingleServiceDetails.css'

const SingleServiceDetails = ({ singleService }) => {
    const { user } = useContext(AuthContext);
    console.log(singleService);
    const { photo, description, descriptionPoint, name } = singleService;
    return (
        <div className='md:px-20 md:my-20'>
            <img className='rounded-l-3xl w-full height' src={photo} alt="" />
            <h1 className='text-5xl my-5 font-semibold'>{name}</h1>
            <p className='mb-10 text-gray-600 font-semibold'>{description}</p>
            {
                singleService?.descriptionPoint && descriptionPoint.map(point => <div className='flex gap-3 my-2'>
                    <CheckIcon className='h-6 w-6 text-red-700'></CheckIcon>
                    <p className='font-semibold'>{point}</p>
                </div>)
            }
            <p className='mt-10 text-gray-600 font-semibold'>{singleService?.descriptionLast}</p>



            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <AllReviews singleService={singleService}></AllReviews>
                </table>
            </div>



            <div>
                {
                    user?.uid ? <ReviewSection singleService={singleService}></ReviewSection> :
                        <Link to='/login'>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Please login to add a review</button>
                        </Link>
                }
            </div>
        </div >
    );
};

export default SingleServiceDetails;