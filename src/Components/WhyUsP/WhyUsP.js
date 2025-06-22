// src/pages/WhyUsPage.js
import React from 'react';
import './WhyUsPage.css';

const reasons = [
  {
    title: "Proven Experience",
    description:
      "Delivered numerous automated parking projects across India with consistent success."
  },
  {
    title: "Indigenous Technology",
    description:
      "Fully developed and built in India, ensuring cost-efficiency and adaptability."
  },
  {
    title: "Tailored Solutions",
    description:
      "Designed to fit unique space constraints and client-specific needs."
  },
  {
    title: "Reliable Support",
    description:
      "End-to-end service with trained teams for installation and maintenance."
  },
  {
    title: "Safe & Durable",
    description:
      "Multiple safety layers and quality standards for seamless functioning."
  },
  {
    title: "Eco-Friendly",
    description:
      "Smart use of space and reduced emissions help build a greener future."
  }
];

const WhyUsP = () => {
  return (
    <div className="whyus-wrapper mt-24 px-4 py-12">
      <h2 className="whyus-title">Why Choose Us?</h2>
      <div className="whyus-list">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`whyus-card ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="whyus-number">{index + 1}</div>
            <div className="whyus-content">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsP;
