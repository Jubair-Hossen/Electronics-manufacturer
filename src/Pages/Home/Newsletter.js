import React from 'react';

const Newsletter = () => {
    return (
        <section className='mt-24'>
            <div className="container text-center">
                <h1 className='text-3xl font-bold mb-8'>Subscribe Out Newsletter for latest update</h1>
                <div className="flex justify-center">
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xl mb-3" />
                    <button className='btn btn-primary'>Subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;