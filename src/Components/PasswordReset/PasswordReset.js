import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import './PasswordReset.css'

const PasswordReset = () => {
    let errorElement;
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const passwordReset = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        await sendPasswordResetEmail(email);
        toast("Password reset email sent!");
    }
    if (error) {
        errorElement = error.message;
    }

    return (
        <section className="password-reset-page">
            <img src="https://img.freepik.com/free-vector/hacker-breaking-lock-get-access-personal-information-computer-isometric_1284-63723.jpg?t=st=1651918760~exp=1651919360~hmac=546622051c0915f92ba4846af5b3d1a2dc324fd2b8a5255c217ee1be02b46ba4&w=740" alt="" />
            <div className='password-reset'>
                <h1>Reset Your Password</h1>
                <form onSubmit={passwordReset}>
                    <input className='border-2' type="email" name="email" id="" placeholder='Enter Your  Email' required />
                    <p className='error'>{errorElement}</p>
                    <input type="submit" value="Reset Password" />
                </form>
            </div>
        </section>

    );
};

export default PasswordReset;