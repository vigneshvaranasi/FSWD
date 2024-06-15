import React, { useState } from 'react';
import { userLoginContext } from './userLoginContext';

function UserLoginStore({ children }) {
    const [currentUser, setCurrentUser] = useState({});

    async function handleLogin(userObj) {
        try {
            let response = await fetch(`http://localhost:4000/users?username=${userObj.username}&password=${userObj.password}`);
            let userData = await response.json();

            if (userData.length === 0) {
                // Invalid User
                setCurrentUser({});
            } else {
                setCurrentUser(userData[0]);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setCurrentUser({});
        }
    }

    return (
        <userLoginContext.Provider value={{ currentUser, handleLogin }}>
            {children}
        </userLoginContext.Provider>
    );
}

export default UserLoginStore;
