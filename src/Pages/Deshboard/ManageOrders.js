import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Components/Spinner';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [deleteId, setDeleteId] = useState('');
    const { data: orders, isLoading, refetch } = useQuery('allOrders', () => fetch(`http://localhost:5000/allorders`, {
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
            <h1 className="my-2">Manage All Orders</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Buyer</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <ManageOrderRow
                            key={order._id}
                            index={index}
                            order={order}
                            refetch={refetch}
                            setDeleteId={setDeleteId}
                        ></ManageOrderRow>)
                    }
                </tbody>
            </table>
            <input type="checkbox" id="cancel-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure?? You want to delete</h3>
                    <div className="modal-action">
                        <label htmlFor="cancel-order-modal" className="btn btn-sm">Cancel</label>
                        <label onClick={() => handleCancel(deleteId)} htmlFor="cancel-order-modal" className="btn btn-sm bg-red-700">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;