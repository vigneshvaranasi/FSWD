import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Technologies() {
  return (
    <div>
      <h1 className='text-center m-3'>Technologies</h1>
      <ul className='nav justify-content-center fs-5'>
        <li className='nav-item'>
          <Link to='java' className='nav-link'>Java</Link>
        </li>
        <li className='nav-item'>
          <Link to='nodejs' className='nav-link'>Nodejs</Link>
        </li>
        <li className='nav-item'>
          <Link to='vue' className='nav-link'>Vue</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Technologies