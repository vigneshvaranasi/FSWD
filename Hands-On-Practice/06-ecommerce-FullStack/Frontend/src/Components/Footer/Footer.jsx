import React from 'react';
import './Footer.css';
import amzlogo from '../../assets/amazon.png';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={amzlogo} width={100} className="mb-3" alt="Amazon Logo" />
            <p>Amazon is the largest online retailer in the world. It is an e-commerce and cloud computing company.</p>
          </div>
          <div className="col-md-4">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/register" className="text-white" onClick={scrollToTop}>Register</Link></li>
              <li><Link to="/login" className="text-white" onClick={scrollToTop}>Login</Link></li>
              <li><Link to="/about" className="text-white" onClick={scrollToTop}>About</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>123 Main Street, New York, USA</p>
            <p>
              <a href="tel:+1234567890" className="text-white">+1 234 567 890</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
