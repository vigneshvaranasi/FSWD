import React from 'react';
import { useLocation } from 'react-router-dom';

function UserDashboard() {

    const {state} = useLocation();
    return (
        <div>
            <h1 className='text-center m-4'>User Dashboard</h1>
            <h1 className="text-center text-info display-3 m-3">Welcome {state.username}</h1>
        </div>
    );
}

export default UserDashboard;
