import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');
    const handleReview = (e) => {
        e.preventDefault();
        const ratings = e.target.ratings.value;
        const comment = e.target.comment.value;
        const review = { email: user?.email, name: user?.displayName, ratings, comment };

        if (ratings < 1 || ratings > 5) {
            setError('ratings should be between 1 to 5');
            return
        }
        else {
            setError('')
        }

        fetch('https://polar-sea-81646.herokuapp.com/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    e.target.reset();
                    toast.error('You have already added review')
                }
                if (data.insertedId) {
                    e.target.reset();
                    toast.success('Review added succesfully')
                }
            })

    }
    return (
        <section className='mx-2'>
            <h1 className='my-2'>Add A Review</h1>
            <form onSubmit={handleReview}>
                <input type="number" name='ratings' placeholder="Ratings" className="input input-bordered w-full max-w-xl mb-3" />
                <h1 className="text-red-400 mb-3">{error}</h1>
                <textarea className="textarea w-full max-w-xl mb-3 input-bordered" name='comment' placeholder="Write Your Comment here"></textarea>
                <input type="submit" className='btn btn-primary block' value="Add Review" />
            </form>
        </section>
    );
};

export default AddReview;