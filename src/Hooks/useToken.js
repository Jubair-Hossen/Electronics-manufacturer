import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (user) {
            const updateUser = { email: user.user?.email }
            fetch(`http://localhost:5000/user/${user.user?.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateUser)
            })
                .then(res => res.json())
                .then(data => {
                    const token = data.token;
                    setToken(token);
                    localStorage.setItem('token', token);
                })
        }
    }, [user])

    return [token]
};

export default useToken;