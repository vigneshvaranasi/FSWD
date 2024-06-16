import React, { useState } from 'react';
import { userLoginContext } from './userLoginContext';

function UserLoginStore({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoginStatus, setUserLoginStatus] = useState(false);

    async function handleLogin(userObj) {
        let response = await fetch(`http://localhost:4000/users?username=${userObj.username}&password=${userObj.password}`);
        let usersData = await response.json();
        console.log('usersData: ', usersData);
        if (usersData.length === 0) {
            // Invalid Credntials
            setCurrentUser(null);
            setUserLoginStatus(false)
        } else {
            setCurrentUser(usersData[0]);
            setUserLoginStatus(true)
        }
    }

    // User Logout
    function logoutUser(){
        //reset state
        setCurrentUser({});
        setUserLoginStatus(false)
    }

    return (
        <userLoginContext.Provider value={{ handleLogin,logoutUser,userLoginStatus,setCurrentUser,setUserLoginStatus,currentUser }}>
            {children}
        </userLoginContext.Provider>
    );
}

export default UserLoginStore;
