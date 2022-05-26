import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ProductRow = ({ index, product, setDeleteId }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='w-8 mr-2 inline' src={product.img} alt="" />{product.name}</td>
            <td>{product.quantity}</td>
            <td>
                <label onClick={() => setDeleteId(product._id)} for="delete-modal">
                    <FontAwesomeIcon className='text-2xl cursor-pointer text-red-700' icon={faTrashAlt} />
                </label>
            </td>
        </tr>
    );
};

export default ProductRow;