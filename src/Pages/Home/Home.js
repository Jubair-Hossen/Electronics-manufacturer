import React from 'react';
import BusinessSummery from './BusinessSummery';
import Contact from './Contact/Contact';
import CustomerReviews from './CustomerReviews';
import HeroBanner from './HeroBanner';
import Newsletter from './Newsletter';
import Parts from './Parts';

const Home = () => {
    return (
        <div className='px-3'>
            <HeroBanner />
            <Parts />
            <BusinessSummery />
            <CustomerReviews />
            <Newsletter />
            <Contact />
        </div>
    );
};

export default Home;