import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Spinner from './Spinner';


const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <Spinner />
    }

    if (!admin) {
        return <Navigate to="/deshboard"></Navigate>
    }
    return children;
};

export default RequireAdmin;