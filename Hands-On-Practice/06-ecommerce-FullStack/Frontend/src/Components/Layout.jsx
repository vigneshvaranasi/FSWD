import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function Layout() {
    return (
        <div>
            <Navbar />
            <div style={{minHeight:"100vh",marginTop:"130px"}} className='container'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout