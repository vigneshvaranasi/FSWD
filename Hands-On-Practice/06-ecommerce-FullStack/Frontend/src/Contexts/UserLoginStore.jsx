import React, { useState } from 'react';
import { userLoginContext } from './userLoginContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function UserLoginStore({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoginStatus, setUserLoginStatus] = useState(false);
    const [err, setErr] = useState("");

    async function handleLogin(userObj) {
        try {
            //  POST Request
            // let response = await fetch('http://localhost:4000/user-api/users/login', {
            let response = await fetch('https://ecommerce-backend-fswd.vercel.app/user-api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObj)
            });

            let data = await response.json();
            // console.log(data.user);

            if (data.message === "Login Success") {
                // Update State
                setCurrentUser(data.user);
                setUserLoginStatus(true);
                setErr("");

                // Notify user of successful login
                toast.success("Login Successful",{
                    style:{
                        marginTop:'-10px',
                        marginBottom:'10px',
                        borderRadius:'10px',
                        background: '#333',
                        color: '#fff',
                    },
                    iconTheme:{
                        primary: '#fff',
                        secondary: '#333',
                    },
                    icon: '🎉',
                });

                // Save token in Session Storage
                sessionStorage.setItem('token', data.token);
            }
            else if (data.message === "Invalid Username") {
                setErr("Invalid Username")
            }
            else if (data.message === "Invalid Password") {
                setErr("Invalid Password")
            } else {
                setErr("Something went wrong")
            }

        }
        catch (err) {
            console.log(err);
            setErr(err)
        }
    }

    // User Logout
    function logoutUser() {
        //reset state
        setCurrentUser({});
        setUserLoginStatus(false)
        setErr("");

        // Remove token from Session Storage
        sessionStorage.removeItem('token');
    }

    return (
        <userLoginContext.Provider value={{ handleLogin, logoutUser, userLoginStatus, setCurrentUser, setUserLoginStatus, currentUser, err }}>
            {children}
        </userLoginContext.Provider>
    );
}

export default UserLoginStore;
