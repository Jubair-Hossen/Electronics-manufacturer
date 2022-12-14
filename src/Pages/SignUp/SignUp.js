import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocilaLogin/SocialLogin';
import Spinner from '../../Components/Spinner';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    let singUpError;
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token] = useToken(user);

    const [updateProfile] = useUpdateProfile(auth);
    const handleSignup = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;

        await createUserWithEmailAndPassword(email, pass);
        await updateProfile({ displayName: name });

    }
    if (error) {
        singUpError = error.message;
    }

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate])
    return (
        <section className='container signup-page'>
            <div className="img">
                <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?t=st=1651902963~exp=1651903563~hmac=497f76a760654583f4f504ede70f65272e1c15c2523c067dce2c6b16f6ca86ee&w=740" alt="" />
            </div>
            <div className='signup-container'>
                <form className='signup-from' onSubmit={handleSignup}>
                    {
                        loading && <Spinner></Spinner>
                    }
                    <h2>Please Sign Up</h2>
                    <input type="text" name="name" id="name" placeholder='Name' required />
                    <input type="email" name="email" id="email" placeholder='Email' required />
                    <input type="password" name="pass" id="pass" placeholder='Password' required />
                    <input type="submit" value="Sign Up" />
                    <p>Alreadey have an account? <span onClick={() => navigate('/login')}>log in</span></p>
                </form>
                <p className='error'>{singUpError}</p>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default SignUp;