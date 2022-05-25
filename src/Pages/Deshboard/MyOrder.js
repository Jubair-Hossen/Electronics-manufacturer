import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from '../../Components/Spinner';
import OrderRow from './OrderRow';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('myOrders', () => fetch(`https://polar-sea-81646.herokuapp.com/myorders?email=${user.email}`, {
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
                        <th>Total Price</th>
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
                        ></OrderRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;