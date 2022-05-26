import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from '../../Components/Spinner';
import OrderRow from './OrderRow';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [deleteId, setDeleteId] = useState('');
    const { data: orders, isLoading, refetch } = useQuery('myOrders', () => fetch(`http://localhost:5000/myorders?email=${user.email}`, {
        method: "GET",
        headers: {
            'authorization': `Beares ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json()
        ));

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleCancel = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch()
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <h1 className="my-2">My Orders</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <OrderRow
                            key={order._id}
                            index={index}
                            order={order}
                            refetch={refetch}
                            setDeleteId={setDeleteId}
                        ></OrderRow>)
                    }
                </tbody>
            </table>
            <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure?? You want to delete</h3>
                    <div className="modal-action">
                        <label htmlFor="delete-order-modal" className="btn btn-sm">Cancel</label>
                        <label onClick={() => handleCancel(deleteId)} htmlFor="delete-order-modal" className="btn btn-sm bg-red-700">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;