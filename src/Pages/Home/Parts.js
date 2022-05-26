import React, { useEffect, useState } from 'react';
import Product from '../../Components/Product';
import Spinner from '../../Components/Spinner';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://polar-sea-81646.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <section className='mt-12'>
            <h1 className='text-3xl text-center font-bold mb-8'>Laptop/Computer Parts We Manumanufacture</h1>
            {parts.length ?
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        parts.slice(-6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                :
                <Spinner></Spinner>
            }
        </section>
    );
};

export default Parts;