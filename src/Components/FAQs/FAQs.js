import React from 'react';
import './FAQs.css';

const faqs = [
  {
    question: "What is a puzzle parking system?",
    answer:
      "A puzzle parking system is a mechanical structure that optimizes parking by shifting vehicles vertically and horizontally to create or retrieve a parking space."
  },
  {
    question: "Is it safe to park in automated parking systems?",
    answer:
      "Yes, automated systems are designed with multiple safety sensors and security measures to ensure safe parking and vehicle retrieval."
  },
  {
    question: "How long does it take to retrieve a car?",
    answer:
      "Typically, it takes less than 2 minutes to retrieve a vehicle, depending on the system configuration and the vehicle's location."
  },
  {
    question: "Are these systems environmentally friendly?",
    answer:
      "Yes. They reduce the need for driving around looking for parking, thus cutting emissions and saving fuel."
  },
  {
    question: "Can the system be customized for my building?",
    answer:
      "Absolutely. We provide customized solutions to fit specific architectural and space constraints."
  }
];

const FAQs = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-5 faq-item">
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
