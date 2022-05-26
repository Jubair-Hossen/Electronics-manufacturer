import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrderRow = ({ index, order, setDeleteId }) => {
    const { productName, orderQuantity, price, status, _id } = order;

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
                        <label onClick={() => setDeleteId(_id)} htmlFor="delete-order-modal">
                            <FontAwesomeIcon className='text-lg mr-2 cursor-pointer text-red-700' icon={faTrashAlt} />
                        </label>
                        <button className="btn btn-xs">Pay</button>
                    </>
                }
            </td>
        </tr >
    );
};

export default OrderRow;