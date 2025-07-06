// src/pages/ContactUsPage.js
import React from 'react';
import './ContactUs.css';

import factoryImage from '../../assets/images/contact-us-img.png';

const ContactUs = () => {
  

   return (
    <div className="contact-container mt-24 px-4 py-12">
      {/* Page Heading */}
      <center><h1 className="contact-heading">Contact Us</h1></center>

      {/* Map & Office Section */}
      <div className="map-office-section">
        <div className="map">
          <iframe
            title="Capital Engineers Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1953.5!2d76.6462778!3d9.5570278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="office-details">
          <h2>Head Office</h2>
          <p><strong>Capital Engineers & Consultants</strong></p>
          <p>Pothenpuram junction</p>
          <p> Pampady meenadom road,pambady,Kottayam,686502 </p>
          <p>Email: capitalengineersktym@gmail.com</p>
          <p>Phone: +91 6235552714</p>
          <p>Working Hours: Mon – Sat | 9:00 AM – 6:00 PM</p>
        </div>
      </div>

      {/* Factory Section */}
      <div className="factory-section">
        <div className="factory-image">
          <img src={factoryImage} alt="Factory" />
        </div>
        <div className="factory-details">
          <h2>Factory Address</h2>
          <p><strong>Capital Engineers Manufacturing Unit</strong></p>
          <p>Pothenpuram junction</p>
          <p> Pampady meenadom road,pambady,Kottayam,686502 </p>
          <p>Phone: +91 6235552714</p>
          <p>Email: capitalengineersktym@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;