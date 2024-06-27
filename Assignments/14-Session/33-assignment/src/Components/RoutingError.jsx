import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'

export default function RoutingError() {
    let err = useRouteError()
    console.log(err)
    return (
        <div className='mx-auto text-center'>
            <h1 className='text-danger m-5 text-center display-4 fw-semibold'>Invalid Path</h1>
            <p className='text-center text-warning display-3'>{err.status}-{err.statusText}</p>
            <Link to={''} >
                <button className='btn btn-primary m-3'>Go to Home</button>
            </Link>
        </div>
    )
}
