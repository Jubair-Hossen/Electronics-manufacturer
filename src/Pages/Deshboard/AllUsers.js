import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            'authorization': `Beares ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json()
        ));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Remove User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow
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

export default AllUsers;