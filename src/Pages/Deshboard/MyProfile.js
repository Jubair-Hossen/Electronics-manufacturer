import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from 'react-query';
import { faEnvelopeCircleCheck, faBook, faLocationDot, faPhone, faLink } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../Components/Spinner';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { data: author, isLoading } = useQuery('author', () => fetch(`https://polar-sea-81646.herokuapp.com/userbyemail?email=${user?.email}`, {
        method: "GET",
        headers: {
            'authorization': `Beares ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json()
        ));

    const handleEdit = () => {
        navigate(`/deshboard/edit-profile/${user?.email}`)
    }
    if (isLoading) {
        return <Spinner />
    }
    return (
        <section className='px-2'>
            <h1 className='my-2'>My profile</h1>
            <div className="avatar w-24 mx-auto block text-center">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={author?.profilePic || 'https://cdn-icons-png.flaticon.com/512/147/147142.png'} alt='' />
                </div>
            </div>
            <h1 className="text-2xl text-center font-bold my-2">{user?.displayName}</h1>
            <div className="max-w-4xl mx-auto">
                <button onClick={handleEdit} className="btn btn-xs btn-primary">Edit Profile</button>
            </div>
            <div className="bg-slate-200 mt-3 max-w-4xl rounded mx-auto p-5">
                <h1 className='mb-5 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faEnvelopeCircleCheck} /> {user?.email}</h1>
                <h1 className='mb-5 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faBook} /> {author?.education}</h1>
                <h1 className='mb-5 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faLocationDot} /> {author?.address}</h1>
                <h1 className='mb-5 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faPhone} /> {author?.phone}</h1>
                <a href={author?.linkdin} className='text-lg text-primary block'><FontAwesomeIcon className='mr-3 text-2xl' icon={faLink} /> LinkedIn Profile: {author?.linkdin}</a>
            </div>
            <Outlet />
        </section>
    );
};

export default MyProfile;