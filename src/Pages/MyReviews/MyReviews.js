import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../../hoocks/useTitle';
import { AuthContext } from '../../utilities/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);

    useTitle('My Reviews')
    // const [displayReviews, setDisplayReviews] = useState(myreviews)
    const [myreviews, setMyreviews] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-11-server-phi.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('clean-express-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    return logOut()
                }
                return res.json()
            })
            .then(data => {

                setMyreviews(data)
            })
    }, [user?.email, logOut])

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
        <div className='my-20 mx-5 md:mx-0 '>
            {
                myreviews.length > 0 ? <h1 className='text-3xl font-bold text-center mb-5'>I have Total {myreviews.length} Reviews</h1> : <h1 className='text-3xl font-bold text-center mb-5'>You Don't have Any Review</h1>
            }
            {
                myreviews.map(myReview => <div key={myReview._id} className="card md:w-1/2 flex items-center justify-between mx-auto my-5 p-5  bg-base-100 shadow-xl">
                    <div className='md:w-1/5'>
                        <figure><img className='w-32 h-32 rounded-full' src={myReview.serviceImg} alt="Movie" /></figure>
                    </div>
                    <div className="card-body md:w-3/5">
                        <h2 className="text-2xl font-bold">Service Name: <span className='text-blue-800'>{myReview.serviceName}</span></h2>

                        <h2 className='text-md'><span className='font-bold'>My Review:</span> {myReview.comment}</h2>
                    </div>
                    <div className="card-actions flex">
                        <Link to={`/update-review/${myReview._id}`}> <button className="btn btn-primary">Update Review</button></Link>
                        <button onClick={() => handleDelete(myReview)} className="btn btn-danger">Delete Review</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyReviews;