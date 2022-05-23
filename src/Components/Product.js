import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, price, url, description, supplier, quantities, _id } = product;
    const navigate = useNavigate();
    return (
        <div className='shadow-md p-3 rounded border'>
            <img src={url} alt="" />
            <h3 className='text-2xl font-bold mb-2'>{name}</h3>
            <p className='mb-2'>{description}</p>
            <p className='mb-2'>Price: ${price}/p</p>
            <p className='mb-2'>Supplier: {supplier}</p>
            <p className='mb-4'>Available in Stock: {quantities}</p>
            <button className='btn btn-primary' onClick={() => navigate(`/inventory/${_id}`)}>Order Now</button>
        </div>
    );
};

export default Product;