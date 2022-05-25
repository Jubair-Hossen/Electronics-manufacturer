import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
// import useAdmin from '../../Hooks/useAdmin';

const Deshboard = () => {
    const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile lg:px-2 mt-5 gap-3">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <div className="flex justify-between items-center lg:justify-start bg-slate-200 p-2 rounded-t-md">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <h2 className='text-primary font-bold'>Deshboard</h2>
                </div>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 overflow-y-auto bg-slate-200 rounded-md text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to={''}>My Profile</Link></li>
                    <li><Link to={'my-order'}>My Orders</Link></li>
                    <li><Link to={'add-review'}>Add A Review</Link></li>
                    <li><Link to={'manage-all-orders'}>Manage All Orders</Link></li>
                    <li><Link to={'add-product'}>Add A Product</Link></li>
                    <li><Link to={'manage-products'}>Manage Products</Link></li>
                    <li><Link to={'make-admin'}>Make Admin</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Deshboard;