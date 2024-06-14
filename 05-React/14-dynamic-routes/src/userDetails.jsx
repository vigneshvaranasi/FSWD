import React from 'react'
import { useLocation } from 'react-router-dom'

function userDetails() {
    let {state} = useLocation();
    console.log('result: ', state);

  return (
    <div>
        <h1 className='text-center m-4'>User Details</h1>
        <div className='card col-4 mx-auto'>
            <div className='card-body'>
                <h2>{state.user.name}</h2>
                <p className='lead'>@{state.user.username}</p>
                <p>Email: {state.user.email}</p>
                <p>Website: {state.user.website}</p>
            </div>
        </div>
    </div>
  )
}

export default userDetails