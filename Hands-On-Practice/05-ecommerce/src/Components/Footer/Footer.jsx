import React from 'react'
import './Footer.css'
import amzlogo from '../../assets/amazon.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={amzlogo} width={100} className='mt-3 mb-3' alt="" />
              <p>Amazon is the largest online retailer in the world. It is an e-commerce and cloud computing company.</p>
            </div>
            <div className="col-md-4">
              <h3>Links</h3>
              <Link to={""}>Home</Link>
              <Link to={"register"}>Register</Link>
              <Link to={"login"}>Login</Link>
              <Link to={"about"}>About</Link>
            </div>
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <p>123, Main Street, New York, USA</p>
              <p>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer