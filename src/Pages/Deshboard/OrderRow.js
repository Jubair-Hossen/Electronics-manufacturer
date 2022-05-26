import React from 'react';

const OrderRow = ({ index, order, refetch }) => {
    const { productName, orderQuantity, price, status, _id } = order;
    const handleCancel = () => {
        const confirm = window.confirm('Are You Sure? You Want to delete');
        if (confirm) {
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        refetch()
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>${price}</td>
            <td>
                {<p className='text-gray-400'>{status}</p>}
            </td>
            <td>
                {
                    order.status === "unpaid" && <>
                        <button onClick={handleCancel} className="btn btn-xs mr-3">Cancel</button>
                        <button className="btn btn-xs">Pay</button>
                    </>
                }
            </td>
        </tr >
    );
};

export default OrderRow;