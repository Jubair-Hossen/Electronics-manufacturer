import React from 'react';
import CustomerReviews from './CustomerReviews';
import HeroBanner from './HeroBanner';
import Parts from './Parts';

const Home = () => {
    return (
        <div className='px-6'>
            <HeroBanner />
            <Parts />
            <CustomerReviews />
        </div>
    );
};

export default Home;