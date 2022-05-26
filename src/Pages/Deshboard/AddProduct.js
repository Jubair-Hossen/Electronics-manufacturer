import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const navigate = useNavigate();
    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.desc.value;
        const img = e.target.img.value;
        const price = parseInt(e.target.price.value);
        const quantity = parseInt(e.target.quantity.value);
        const minQuantity = parseInt(e.target.minQuantity.value);

        const product = { name, description, img, price, quantity, minQuantity }

        fetch('https://polar-sea-81646.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                    signOut(auth);
                    localStorage.removeItem('token')
                }
                res.json()
            })
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    toast.success('Product added succesfully')
                }
            })
    }
    return (
        <form className='mt-5 mx-2' onSubmit={handleAddProduct}>
            <h1 className="text-xl mb-2">Add A Product</h1>
            <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full max-w-xl mb-3" />
            <textarea className="textarea w-full max-w-xl mb-3 input-bordered" name='desc' placeholder="Product's Derscription"></textarea>
            <input type="text" name='img' placeholder="Image Url" className="input input-bordered w-full max-w-xl mb-3" />
            <input type="number" name='price' placeholder="Product Price" className="input input-bordered w-full max-w-xl mb-3" />
            <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full max-w-xl mb-3" />
            <input type="number" name='minQuantity' placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xl mb-3" />
            <input type="submit" className='btn btn-primary block' value="Add Product" />
        </form>
    );
};

export default AddProduct;