import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageOrderRow = ({ index, order, refetch, setDeleteId }) => {
    const { productName, orderQuantity, email, status, _id } = order;

    const handleShipped = () => {

        fetch(`https://polar-sea-81646.herokuapp.com/changestatus/${_id}`, {
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
                    order.status === "unpaid" &&
                    <label onClick={() => setDeleteId(_id)} htmlFor="cancel-order-modal">
                        <FontAwesomeIcon className='text-2xl cursor-pointer text-red-700' icon={faTrashAlt} />
                    </label>
                }
                {
                    order.status === "pending" && <button onClick={handleShipped} className="btn btn-xs">shipped order</button>
                }
            </td>
        </tr >
    );
};

export default ManageOrderRow;