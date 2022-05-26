import React from 'react';

const ManageOrderRow = ({ index, order, refetch }) => {
    const { productName, orderQuantity, email, status, _id } = order;
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
    const handleShipped = () => {

        fetch(`http://localhost:5000/changestatus/${_id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                }
            })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{email}</td>
            <td>
                {<p className='text-gray-400'>{status}</p>}
            </td>
            <td>
                {
                    order.status === "unpaid" && <button onClick={handleCancel} className="btn btn-xs mr-3">Cancel</button>
                }
                {
                    order.status === "pending" && <button onClick={handleShipped} className="btn btn-xs">shipped order</button>
                }
            </td>
        </tr >
    );
};

export default ManageOrderRow;