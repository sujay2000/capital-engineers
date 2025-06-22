import React from 'react';
import { Car, Shield, Clock, Settings } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
  const features = [
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Space Efficient",
      description: "Save up to 60% more space compared to traditional parking"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Enhanced Security",
      description: "Advanced security features protect your vehicle 24/7"
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Time Saving",
      description: "Quick and efficient parking and retrieval process"
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: "Smart Technology",
      description: "IoT-enabled systems with mobile app integration"
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Parking Systems?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our automated parking solutions offer unmatched benefits that transform 
            the way you think about parking
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow feature-card">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;