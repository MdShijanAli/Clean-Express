import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../utilities/AuthProvider/AuthProvider';


const ReviewSection = () => {

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState({});

    const AddUser = event => {
        event.preventDefault();
        console.log(reviews);

        fetch('https://assignment-11-server-phi.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Added Sucessfully!!!');
                    event.target.reset();
                }
                console.log(data)
            })
    }

    const InputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newReview = { ...reviews }
        newReview[field] = value;
        setReviews(newReview)

    }

    return (
        <form onSubmit={AddUser}>
            <div className="flex  w-screen bg-white">
                <div className="container mx-auto my-4 px-4 lg:px-20">

                    <div className="w-full p-8 my-4 md:px-12 lg:w-1/2   mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold uppercase text-3xl">Leave a Comment</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input onBlur={InputBlur} name='name' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Name*" required />

                            <input defaultValue={user?.email} onBlur={InputBlur} name='email' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email*" required />

                        </div>
                        <div className="my-4">
                            <textarea onBlur={InputBlur} name='comment' placeholder="Review*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button type='submit' className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline">
                                Submit
                            </button>
                        </div>
                    </div>


                </div>



            </div>
        </form>


    );
};

export default ReviewSection;