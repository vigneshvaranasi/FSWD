import React, { useState } from 'react';
import { userLoginContext } from './userLoginContext';

function UserLoginStore({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoginStatus, setUserLoginStatus] = useState(false);
    const [err, setErr] = useState("");

    async function handleLogin(userObj) {
        try {

            // let response = await fetch(`http://localhost:4000/users?username=${userObj.username}&password=${userObj.password}`);
            let response = await fetch(`https://user-api-6z6q.onrender.com/users?username=${userObj.username}&password=${userObj.password}`);
            let usersData = await response.json();
            console.log('usersData: ', usersData);

            // If the Username is not found in the show alert
            if (usersData.length === 0) {
                // Invalid Credntials
                setCurrentUser(null);
                setUserLoginStatus(false)
                setErr("Invalid Credentials");
            }
            // If the username is there and the password is wrong
            else if (usersData[0].password !== userObj.password) {
                // Invalid Credntials
                setCurrentUser(null);
                setUserLoginStatus(false)
                setErr("Wrong Password");
            }
            // If the username and password are correct
            else {
                setCurrentUser(usersData[0]);
                setUserLoginStatus(true);
                setErr("");
            }
        }
        catch (err) {
            console.log(err);
            setErr(err)
        }


        // if (usersData.length === 0) {
        // } else {
        //     setCurrentUser(usersData[0]);
        //     setUserLoginStatus(true)
        //     console.log('userLoginStatus: ', userLoginStatus);
        //     console.log('currentUser: ', currentUser);

        // }
    }

    // User Logout
    function logoutUser() {
        //reset state
        setCurrentUser({});
        setUserLoginStatus(false)
        setErr("");
    }

    return (
        <userLoginContext.Provider value={{ handleLogin, logoutUser, userLoginStatus, setCurrentUser, setUserLoginStatus, currentUser,err }}>
            {children}
        </userLoginContext.Provider>
    );
}

export default UserLoginStore;
