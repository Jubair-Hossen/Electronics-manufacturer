import React, { useEffect, useState } from 'react';
import Review from './Review';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='mt-24'>
            <h1 className="text-3xl font-bold text-center mb-8">What our customers said about us</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    reviews.map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </section>
    );
};

export default CustomerReviews;