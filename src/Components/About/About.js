import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Capital Engineers & Consultants
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We are a leading provider of automated parking solutions, specializing in innovative 
              parking systems that maximize space efficiency and provide seamless user experiences. 
              With years of expertise in the industry, we deliver cutting-edge technology that 
              transforms urban parking challenges into smart solutions.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Our commitment to excellence, safety, and sustainability drives us to create parking 
              systems that not only save space but also contribute to smarter, more livable cities.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Modern parking facility"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Smart</div>
              <div className="text-sm">Parking Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;