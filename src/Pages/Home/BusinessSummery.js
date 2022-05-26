import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth, faDollar, faTruck, faComputer } from '@fortawesome/free-solid-svg-icons';

const BusinessSummery = () => {
    return (
        <section className='mt-24'>
            <h1 className="text-3xl font-bold text-center mb-8">Why we are the best</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className='text-center border-2 p-8 rounded'>
                    <FontAwesomeIcon className='text-4xl' icon={faEarth} />
                    <h1 className="font-bold mt-3">Supply All Over The World</h1>
                </div>
                <div className='text-center border-2 p-8 rounded-lg'>
                    <FontAwesomeIcon className='text-4xl' icon={faDollar} />
                    <h1 className="font-bold mt-3">Reasonable Price</h1>
                </div>
                <div className='text-center border-2 p-8 rounded'>
                    <FontAwesomeIcon className='text-4xl' icon={faTruck} />
                    <h1 className="font-bold mt-3">On Time Delevery</h1>
                </div>
                <div className='text-center border-2 p-8 rounded'>
                    <FontAwesomeIcon className='text-4xl' icon={faComputer} />
                    <h1 className="font-bold mt-3">Manufacture All cumputer's parts</h1>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummery;