import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import UserCount from './UserCount'

function Users() {

    let [usersCount, setCount] = useState(0)

    let [users, setUser] = useState([])

    function setCountFun() {
        setCount(usersCount + 1)
    }

    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        setUser(data)
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="container">
            <UserCount data={{ usersCount }} />
            <h1 className='display-4 text-info text-center'>Users</h1>
            <div className='row justify-content-center '>
                {
                    users.map((user, index) => {
                        return (
                            <div  key={index} className='col-12 col-sm-6 col-md-5 col-lg-3 d-flex'>
                                <div className=' card m-2 p-0 flex-grow-1 d-flex flex-column'>
                                    <div className='card-header'>
                                        <h4 className='card-title'>{user.name}</h4>
                                        <p className='text-secondary'>@{user.username}</p>
                                    </div>
                                    <div className='card-body'>
                                        <p className='text-secondary'>Email: {user.email}</p>
                                        <p>Phone: {user.phone}</p>
                                        <p>Portfolio: <a href={`http://${user.website}`}>{user.website}</a></p>
                                        <p>City: {user.address.city}</p>
                                    </div>
                                    <div className='card-footer'>
                                        <button onClick={setCountFun} className='btn btn-primary'>Add User</button>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Users