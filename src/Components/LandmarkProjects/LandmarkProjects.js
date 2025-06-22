// src/pages/LandmarkProjectsPage.js
import React from 'react';

const projects = [
  {
    location: 'Mumbai, Maharashtra',
    cars: 40,
    systemType: 'Puzzle Parking System',
    description: 'Installed a semi-automatic puzzle parking system for a residential high-rise building near Andheri East.'
  },
  {
    location: 'Bengaluru, Karnataka',
    cars: 24,
    systemType: 'Rotary Parking System',
    description: 'Compact rotary system built for a commercial complex in Koramangala.'
  },
  {
    location: 'Chennai, Tamil Nadu',
    cars: 50,
    systemType: 'Stack Parking System',
    description: 'Deployed G+2 stack systems for a government office building.'
  },
  {
    location: 'Kochi, Kerala',
    cars: 16,
    systemType: 'Scissor Lift',
    description: 'Scissor lift solution for a car showroom to manage vertical movement of vehicles.'
  },
  {
    location: 'Delhi NCR',
    cars: 60,
    systemType: 'Shuttle Parking System',
    description: 'Fully automated shuttle system for a corporate park.'
  }
];

const LandmarkProjects = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 mt-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Landmark Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{project.location}</h3>
            <p className="text-gray-700 mb-1"><strong>No. of Cars:</strong> {project.cars}</p>
            <p className="text-gray-700 mb-1"><strong>System Type:</strong> {project.systemType}</p>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandmarkProjects;
