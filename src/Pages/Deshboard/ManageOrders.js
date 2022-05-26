import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Components/Spinner';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
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
    return (
        <div className="overflow-x-auto">
            <h1 className="my-2">My Orders</h1>
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
                        ></ManageOrderRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;