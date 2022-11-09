import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';
import AllReviews from './ReviewSection/AllReviews/AllReviews';
import ReviewSection from './ReviewSection/ReviewSection';

const SingleServiceDetails = ({ singleService }) => {
    console.log(singleService);
    const { photo, description, descriptionPoint, name } = singleService;
    return (
        <div className='md:px-20 md:my-20'>
            <img className='rounded-l-3xl w-full' src={photo} alt="" />
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
                <ReviewSection singleService={singleService}></ReviewSection>
            </div>
        </div >
    );
};

export default SingleServiceDetails;