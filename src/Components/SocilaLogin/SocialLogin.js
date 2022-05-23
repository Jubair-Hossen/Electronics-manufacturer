import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SocialLogin.css';
import googleLogo from '../../images/googleogo.png';
// import fblogo from '../../images/facebook.png'

const SocialLogin = () => {
    let errorMessage;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        errorMessage = error.message;
    }
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