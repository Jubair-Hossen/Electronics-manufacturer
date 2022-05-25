import React from 'react';

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.desc.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const minQuantity = e.target.minQuantity.value;

        const product = { name, description, price, quantity, minQuantity }
        console.log(product);
        e.target.reset();
    }
    return (
        <form className='mt-5 mx-2' onSubmit={handleAddProduct}>
            <h1 className="text-xl mb-2">Add A Product</h1>
            <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full max-w-xl mb-3" />
            <textarea className="textarea w-full max-w-xl mb-3 input-bordered" name='desc' placeholder="Product's Derscription"></textarea>
            <input type="text" name='img' placeholder="Image Url" className="input input-bordered w-full max-w-xl mb-3" />
            <input type="number" name='price' placeholder="Product Price" className="input input-bordered w-full max-w-xl mb-3" />
            <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full max-w-xl mb-3" />
            <input type="number" name='minQuantity' placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xl mb-3" />
            <input type="submit" className='btn btn-primary block' value="Add Product" />
        </form>
    );
};

export default AddProduct;