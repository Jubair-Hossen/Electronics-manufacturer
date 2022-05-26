import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSave = (e) => {
        e.preventDefault();
        const education = e.target.education.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const profilePic = e.target.profile.value;
        const linkdin = e.target.linkdin.value;
        const updateProfile = { education, address, phone, linkdin, profilePic };

        fetch(`https://polar-sea-81646.herokuapp.com/updateprofile/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    navigate('/deshboard');
                    e.target.reset();
                };
            })
    }
    return (
        <section className='max-w-2xl mx-auto px-2'>
            <h1 className='my-2'>Update Profile</h1>
            <form onSubmit={handleSave}>
                <input type="text" name='education' placeholder="Your Education" className="input input-bordered w-full max-w-xl mb-3" />
                <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xl mb-3" />
                <input type="number" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xl mb-3" />
                <input type="text" name='linkdin' placeholder='LinkedIn Profile url' className="input input-bordered w-full max-w-xl mb-3" />
                <input type="text" name='profile' placeholder='Profile picture' className="input input-bordered w-full max-w-xl mb-3" />
                <input type="submit" className='btn btn-primary block' value="Save Changes" />
            </form>
        </section>
    );
};

export default UpdateProfile;