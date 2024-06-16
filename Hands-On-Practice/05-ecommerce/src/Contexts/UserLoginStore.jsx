import React, { useState } from 'react';
import { userLoginContext } from './userLoginContext';

function UserLoginStore({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoginStatus, setUserLoginStatus] = useState(false);
    
    async function handleLogin(userObj) {
        let response = await fetch(`http://localhost:4000/users?username=${userObj.username}&password=${userObj.password}`);
        let usersData = await response.json();
        console.log('usersData: ', usersData);

        // If the Username is not found in the show alert
        if(usersData.length === 0){
            alert('Invalid Credentials');
            // Invalid Credntials
            setCurrentUser(null);
            setUserLoginStatus(false)
        }
        // If the username is there and the password is wrong
        else if(usersData[0].password !== userObj.password){
            // Invalid Credntials
            setCurrentUser(null);
            setUserLoginStatus(false)
            alert('Wrong Password');
        }
        // If the username and password are correct
        else{
            setCurrentUser(usersData[0]);
            setUserLoginStatus(true);
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
