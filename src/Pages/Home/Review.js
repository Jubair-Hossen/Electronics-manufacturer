import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    const { img, name, comment, rating } = review;
    return (
        <div className='shadow-md rounded'>
            <img className='w-1/4 mx-auto rounded-[50%]' src={img} alt="" />
            <h2 className='text-2xl font-bold text-center px-3'>{name}</h2>
            <p className='text-yellow-400 text-center px-3'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
                <span className='ml-2'>{rating}</span>
            </p>
            <p className='p-3'>{comment}</p>
        </div>
    );
};

export default Review;