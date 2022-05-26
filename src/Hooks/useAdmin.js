import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const email = user.email;
        if (email) {
            fetch(`https://polar-sea-81646.herokuapp.com/admin/${email}`, {
                method: 'Get',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setLoading(false)
                })
        }
    }, [user])
    return [admin, loading]
};

export default useAdmin;