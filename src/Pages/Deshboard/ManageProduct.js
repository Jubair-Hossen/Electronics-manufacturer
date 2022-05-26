import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Components/Spinner';
import ProductRow from './ProductRow';
import { toast } from 'react-toastify';

const ManageProduct = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products', {
        method: "GET",
        headers: {
            'authorization': `Beares ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json()
        ));

    const [deleteId, setDeleteId] = useState('');
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    toast.success('product deleted')
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <section className='px-2'>
            <h1 className='my-2'>Manage Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Email</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                index={index}
                                product={product}
                                refetch={refetch}
                                setDeleteId={setDeleteId}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
                <input type="checkbox" id="delete-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure?? You want to delete</h3>
                        <div className="modal-action">
                            <label htmlFor="delete-modal" className="btn btn-sm">Cancel</label>
                            <label onClick={() => handleDelete(deleteId)} htmlFor="delete-modal" className="btn btn-sm bg-red-700">Delete</label>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ManageProduct;