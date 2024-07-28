import React, { useEffect, useState } from 'react';
import './Home.css';
import { userLoginContext } from '../../Contexts/userLoginContext';
import { useContext } from 'react';
import Products from '../products/Products';

function Home() {
    const { userLoginStatus,currentUser } = useContext(userLoginContext);
    return (
        <div className='mt-5'>
            {
                userLoginStatus && 
                <div className="text-center">
                    <h3 className="m-4">Welcome {currentUser.username}</h3>
                </div>
            }
            {
                !userLoginStatus && 
                <div className="text-center">
                    <h3 className="m-4 mb-1">Welcome Guest</h3>
                    <h4 className="m-4 ms-0 me-0">Login to Purchase Items</h4>
                    {/* <h4 className="m-4 ms-0 me-0 alert alert-danger w-auto">Login to Buy Items</h4> */}
                </div>
            }
            {/* Render products */}
            <Products/>
        </div>
    );
}

export default Home;
