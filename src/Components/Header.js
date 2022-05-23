import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                        <li><Link to={'/deshboard'}>Deshboard</Link></li>
                        <li><Link to={'/my-portfolio'}>My Portfolio</Link></li>
                        {
                            user ? <li><Link onClick={() => signOut(auth)} to={''}>Logout</Link></li> : <li><Link to={'/login'}>Login</Link></li>
                        }
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-2xl">Radon Electronics</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/blogs'}>Blogs</Link></li>
                    <li><Link to={'/deshboard'}>Deshboard</Link></li>
                    <li><Link to={'/my-portfolio'}>My Portfolio</Link></li>
                    {
                        user ? <li><Link onClick={() => signOut(auth)} to={''}>Logout</Link></li> : <li><Link to={'/login'}>Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;