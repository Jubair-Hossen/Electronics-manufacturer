import React from 'react';
import CustomerReviews from './CustomerReviews';
import HeroBanner from './HeroBanner';
import Parts from './Parts';

const Home = () => {
    return (
        <div className='px-3'>
            <HeroBanner />
            <Parts />
            <CustomerReviews />
        </div>
    );
};

export default Home;