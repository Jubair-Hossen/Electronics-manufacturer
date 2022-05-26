import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/makeadmin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("fail to make admin");
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