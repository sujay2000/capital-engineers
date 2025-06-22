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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0404906218127!2d76.3181620750487!3d10.80645248935564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85d837efc5a03%3A0x67a4a7bcf342c4a0!2sCapital%20Engineers!5e0!3m2!1sen!2sin!4v1718193381780!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="office-details">
          <h2>Head Office</h2>
          <p><strong>Capital Engineers & Consultants</strong></p>
          <p>3rd Floor, Tech Tower, Industrial Layout, Kochi, Kerala - 682030</p>
          <p>Email: info@capitalengineers.in</p>
          <p>Phone: +91 98765 43210</p>
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
          <p>Plot No. 45, SIDCO Industrial Area, Palakkad, Kerala - 678007</p>
          <p>Phone: +91 98765 12345</p>
          <p>Email: factory@capitalengineers.in</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
