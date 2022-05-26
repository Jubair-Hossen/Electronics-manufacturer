import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const params = useParams();
    const id = params.id;
    const url = `https://polar-sea-81646.herokuapp.com/productbyid/${id}`;
    const navigate = useNavigate();
    const { data: product, isLoading } = useQuery('product', () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Beares ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json()
        ));

    const [orderQuantity, setOrderQuantity] = useState(0);
    const [error, setError] = useState('');
    const [user] = useAuthState(auth);

    if (isLoading) {
        return <Spinner />
    }

    const handleQuantity = (e) => {
        const quantity = parseInt(e.target.value);
        setOrderQuantity(quantity)
        if (quantity < product.minQuantity) {
            setError(`Minimum order quantity is ${product?.minQuantity}`)
        }
        else if (quantity > product.quantity) {
            setError(`Sorry, We have ${product?.quantity}P in stock`)
        }
        else {
            setError('')
        }
    }
    const handleOrder = (e) => {
        e.preventDefault();
        const address = e.target.address.value;
        const phone = e.target.phone.value;

        const order = {
            name: user.displayName,
            email: user.email,
            address,
            phone,
            productId: product._id,
            productName: product.name,
            orderQuantity,
            price: orderQuantity * product.price,
            status: 'unpaid',
        }

        fetch('https://polar-sea-81646.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    toast.success('Order placed successfully');
                    navigate('/')
                }
            })
    }

    return (
        <section className='grid md:grid-cols-2 gap-12 mt-5 px-5'>
            <div className='shadow-md p-3 rounded border'>
                <img className='w-1/2 mx-auto' src={product.img} alt="" />
                <h3 className='text-2xl font-bold my-2'>{product.name}</h3>
                <p className='mb-2'>{product.description}</p>
                <p className='mb-2'>Price: ${product.price}/p</p>
                <p className='mb-2'>Available in Stock: {product.quantity}</p>
                <p className='mb-2'>Minimum Order Quantity: {product.minQuantity}</p>
            </div>
            <form className='mx-2' onSubmit={handleOrder}>
                <h1 className="text-xl mb-2">Please, Fill up the form</h1>
                <input type="text" value={user.displayName} disabled className="input input-bordered w-full max-w-xl mb-3" />
                <input type="text" value={user.email} disabled className="input input-bordered w-full max-w-xl mb-3" />
                <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xl mb-3" required />
                <input type="number" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xl mb-3" required />
                <input type="number" onChange={handleQuantity} placeholder={`Order Quantity (Minimum ${product.minQuantity}P)`} className="input input-bordered w-full max-w-xl mb-3" required />
                <h1 className='text-xl mb-2'>Totall Price: ${orderQuantity * product.price}</h1>
                <h1 className='mb-2 text-red-400'>{error}</h1>
                <input type="submit" disabled={error && true} className='btn btn-primary block' value="Place Order" />
            </form>
        </section>
    );
};

export default Purchase;