import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SocialLogin.css';
import googleLogo from '../../images/googleogo.png';
import useToken from '../../Hooks/useToken';
import { useNavigate } from 'react-router-dom';
// import fblogo from '../../images/facebook.png'

const SocialLogin = ({ from }) => {
    const navigate = useNavigate();
    let errorMessage;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    if (error) {
        errorMessage = error.message;
    }

    useEffect(() => {
        if (token) {
            navigate(from || '/');
        }
    }, [token, from, navigate])
    return (
        <div className='social-login'>
            <p className='error'> {errorMessage}</p>
            <div className="divider">or</div>
            <div className='social-btn' onClick={() => signInWithGoogle()}>
                <img src={googleLogo} alt="" />
                <p>Continue With Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;