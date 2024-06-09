import React from 'react'

function Child(props) {
  return (
    <div className='card m-3'>
        <h1 className='m-3'>Child</h1>
        <div className='m-3'>
            <button className='btn btn-primary m-2' onClick={props.data.increment}>Increment</button>
            <button className='btn btn-primary m-2' onClick={props.data.decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Child