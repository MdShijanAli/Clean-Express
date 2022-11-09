import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hoocks/useTitle';
import { AuthContext } from '../../utilities/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    useTitle('My Reviews')
    // const [displayReviews, setDisplayReviews] = useState(myreviews)
    const [myreviews, setMyreviews] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-11-server-phi.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])

    const handleDelete = myReview => {
        const agree = window.confirm('Are You Sure Want to delete this Review?')
        if (agree) {

            // console.log('Deleting User with id:', myReview._id)
            fetch(`https://assignment-11-server-phi.vercel.app/reviews/${myReview._id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('User Deleted Successfully!!!');
                        const remainingReviews = myreviews.filter(review => review._id !== myReview._id);
                        setMyreviews(remainingReviews);
                    }
                })
        }
    }

    return (
        <div className='my-20'>
            {
                myreviews.length > 0 ? <h1 className='text-3xl font-bold text-center mb-5'>I have Total {myreviews.length} Reviews</h1> : <h1 className='text-3xl font-bold text-center mb-5'>You Don't have Any Review</h1>
            }
            {
                myreviews.map(myReview => <div key={myReview._id} className="card w-1/2 flex items-center justify-between mx-auto my-5 p-5 card-side bg-base-100 shadow-xl">
                    <figure><img className='rounded-full' src={myReview.photo} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-blue-800 font-bold">Service Name: {myReview.serviceName}</h2>
                        <h2 className="card-title">{myReview.name}</h2>
                        <h2 className="text-md font-semibold mb-10">{myReview.email}</h2>
                        <p>My Review: {myReview.comment}</p>
                    </div>
                    <div className="card-actions grid grid-cols-1">
                        <button className="btn btn-primary">Update Review</button>
                        <button onClick={() => handleDelete(myReview)} className="btn btn-danger">Delete Review</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyReviews;