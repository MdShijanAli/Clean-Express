import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../../hoocks/useTitle';

const UpdateReview = () => {
    useTitle('Update Review')
    const storedReview = useLoaderData();

    const [review, setReview] = useState(storedReview);
    const navigate = useNavigate();

    const handleUpdate = event => {
        event.preventDefault();
        console.log(review);
        fetch(`https://assignment-11-server-phi.vercel.app/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Review Updated Successfully!!!')
                    navigate('/my-reviews')
                }
                console.log(data)
            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const updateReview = { ...review }
        updateReview[field] = value;
        setReview(updateReview)

    }
    return (


        <form className='my-20' onSubmit={handleUpdate}>


            <div className="w-1/2 p-8 my-4 md:px-12  mx-auto   rounded-2xl shadow-2xl">
                <div className="flex">
                    <h1 className="font-bold uppercase text-2xl">Update Your Review: <span className='text-blue-800'>{storedReview.serviceName}</span></h1>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input defaultValue={storedReview.name} readOnly name='name' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Name*" required />

                    <input defaultValue={storedReview?.email} readOnly name='email' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="email" placeholder="Email*" required />

                </div>
                <div className="my-4">
                    <textarea onChange={handleInputChange} defaultValue={storedReview.comment} name='comment' placeholder="Review*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                    <button type='submit' className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                  focus:outline-none focus:shadow-outline">
                        Update Review
                    </button>
                </div>
            </div>






        </form>
    );
};

export default UpdateReview;