import React from 'react';
import './About.css';
import amzOff from '../../assets/amazonOffice.png';

function About() {
  return (
    <div className="m-2 m-sm-5">
      <h1 className="text-center mb-4 mt-4">About Us</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <img src={amzOff} alt="Amazon Office" className="img-fluid mb-4" />
        </div>
        <div className="col-12 col-md-10">
          <p className="text-justify">
            Amazon, founded by Jeff Bezos in 1994, started as an online bookstore and has grown into the world's largest online retailer. Headquartered in Seattle, Washington, Amazon offers a vast array of products and services spanning e-commerce, cloud computing through Amazon Web Services (AWS), digital streaming with Prime Video, and AI-powered devices like Alexa. Known for its customer-centric approach, Amazon continues to innovate and expand, focusing on sustainability, workforce diversity, and technological advancement to shape the future of retail and digital services worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
