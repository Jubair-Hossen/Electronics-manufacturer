import React from 'react';

const HeroBanner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="lg:w-1/3">
                    <img className='w-screen' src="https://img.freepik.com/free-vector/computer-service-abstract-concept-illustration_335657-1897.jpg?t=st=1653201806~exp=1653202406~hmac=13e8604bbfcfd0c901f26ea400cac6ff5e0295827744e3b41c00fbdebd19ee75&w=740" alt='' />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-4xl font-bold">Radon Electronics</h1>
                    <h3 className="text-xl">A laptop/computer parts manufacturer company</h3>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;