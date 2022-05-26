import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Components/Spinner';
import UserRow from './UserRow';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const MakeAdmin = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            'authorization': `Beares ${localStorage.getItem('token')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                navigate('/login');
                signOut(auth);
                localStorage.removeItem('token')
            }
            return res.json();
        })
    );

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => <UserRow
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;