// src/pages/AboutUsPage.js
import React from 'react';
import './AboutUs.css';
import stackImage from '../../assets/images/Kartik.jpeg';

const AboutUs = () => {
  return (
    <div className="about-wrapper mt-24 px-4 py-12">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">About Capital Engineers & Consultants</h2>
          <p>
            Capital Engineers & Consultants is a leading provider of automated parking solutions in India. 
            With a commitment to innovation, sustainability, and client satisfaction, 
            we specialize in the design, development, and deployment of smart parking systems such as Puzzle, Rotary, and Stack Parking.
          </p>
          <p>
            We pride ourselves on providing end-to-end services — from consultation and customization to installation 
            and maintenance. Our systems are engineered for maximum safety and operational efficiency.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Company overview"
          />
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="vision-mission-section">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To revolutionize urban mobility through innovative and space-saving parking solutions, 
            making every square foot count for a sustainable tomorrow.
          </p>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To deliver reliable, technologically advanced, and eco-friendly parking systems 
            that address real-world infrastructure challenges while exceeding client expectations.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="leadership-section">
        <h3 className="section-title">Leadership Team</h3>
        <div className="leaders">
          <div className="leader-card">
            <img src={stackImage}></img>
            <h4>Kartik BABU</h4>
            <p>Founder & CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default AboutUs;
