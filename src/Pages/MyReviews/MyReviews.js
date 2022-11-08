import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../utilities/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-11-server-phi.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])

    return (
        <div>
            <h2>You Have {myreviews.length} Reviews</h2>
        </div>
    );
};

export default MyReviews;