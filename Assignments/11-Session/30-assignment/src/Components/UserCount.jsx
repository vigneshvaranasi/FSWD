import React from 'react'
import userIcon from '../assets/user.svg'

function UserCount(props) {
    return (
        <div className='text-center'>
            <h1><img src={userIcon} style={{ position: 'relative', top: '-4px' }} width={40} alt="" /> {props.data.usersCount}  </h1>
        </div>
    )
}

export default UserCount