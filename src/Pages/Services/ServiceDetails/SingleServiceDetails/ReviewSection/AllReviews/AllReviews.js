import React, { useEffect, useState } from 'react';

const AllReviews = ({ singleService }) => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-phi.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                const showReview = data.filter(shw => shw.serviceId === singleService._id)

                setReviews(showReview);
            })
    }, [singleService._id])
    console.log(reviews)
    return (
        <div className='my-20'>
            <h1 className='text-2xl font-semibold'>Total Reviews: {reviews.length}</h1>
            {
                reviews.map(review => <tbody key={review._id}>

                    <tr >


                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="rounded-full w-12 h-12">
                                        <img src={review.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{review.name}</div>
                                    <div className="text-sm opacity-50">{review.email}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {review.comment}
                        </td>


                    </tr>



                </tbody>


                )
            }
        </div>
    );
};

export default AllReviews;