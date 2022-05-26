import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserRow = ({ user, index, refetch }) => {
    const navigate = useNavigate();
    const makeAdmin = () => {
        fetch(`https://polar-sea-81646.herokuapp.com/makeadmin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("fail to make admin");
                }
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                    signOut(auth);
                    localStorage.removeItem('token')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Admin made succesfully")
                    refetch();
                }
            })
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                {
                    user.role === 'admin' ? <p className='text-gray-400'> Already Admin</p> : <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default UserRow;