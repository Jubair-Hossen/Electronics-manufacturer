import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocilaLogin/SocialLogin';
import Spinner from '../../Components/Spinner';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import './Login.css'

const LogIn = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let errorMessage;
    // const [user1] = useAuthState(auth);
    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate(from);
        }
    }, [token, from, navigate])

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        signInWithEmailAndPassword(email, pass);
    }
    if (error) {
        errorMessage = error.message;
    }

    return (
        <section className="container login-page">
            <div className="img">
                <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?t=st=1651902522~exp=1651903122~hmac=9a26919e6c5662b2f703084322fe33cbb1e82c78bf5ac642e630a30973c69498&w=740" alt="" />
            </div>
            <div className='login-container'>
                <form className='login-from' onSubmit={handleLogIn}>
                    {
                        loading && <Spinner></Spinner>
                    }
                    <h2>Please Log in</h2>
                    <input type="email" name="email" id="email" placeholder='Email' required />
                    <input type="password" name="pass" id="pass" placeholder='Password' required />
                    <input type="submit" value="Log In" />
                    forger Password? <span onClick={() => navigate('/resetpassword')}>reset</span>
                    <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span></p>
                </form>
                <p className='error'>{errorMessage}</p>
                <SocialLogin from={from}></SocialLogin>
            </div>
        </section>
    );
};

export default LogIn;