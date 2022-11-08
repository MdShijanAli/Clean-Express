import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../../utilities/AuthProvider/AuthProvider';

const AllReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-phi.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <h1 className='text-2xl font-semibold'>Total Reviews: {reviews.length}</h1>
            {
                reviews.map(review => <div key={review._id}>
                    <p>{review.name}</p>
                </div>)
            }
        </div>
    );
};

export default AllReviews;