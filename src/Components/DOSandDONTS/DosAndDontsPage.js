// src/pages/DosAndDontsPage.js
import React from 'react';
import './DosAndDontsPage.css';
import dosImage from '../../assets/images/do1.jpg'; // Replace with actual image path
import dontsImage from '../../assets/images/do2.jpeg'; // Replace with actual image path

const DosAndDontsPage = () => {
  return (
    <div className="px-4 py-12 mt-20 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">
        Once you install Capital Engineers indigenous parking solution, <br />
        here’s what you need to know about.
      </h2>

      {/* Do's Section */}
      <div className="flex flex-col md:flex-row items-stretch bg-white shadow-md rounded-2xl overflow-hidden mb-12">
        {/* Text */}
        <div className="md:w-1/2 p-6 bg-green-50 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Do's</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Ensure systems and their surrounding area are clean.</li>
            <li>Use rodent repellent around the system.</li>
            <li>Make sure the system is operated only by a trained operator.</li>
            <li>Stop usage if you observe any irregularity and contact customer support.</li>
            <li>Ensure the system is protected from water at all times.</li>
            <li>Use system only for parking 4-wheelers.</li>
            <li>Only the driver should enter during parking/retrieval.</li>
            <li>Fold mirrors, lock car, retract antenna, and engage hand-brake.</li>
            <li>Ensure the car is properly parked on the platform.</li>
          </ul>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img src={dosImage} alt="Do's" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Don'ts Section */}
      <div className="flex flex-col md:flex-row-reverse items-stretch bg-white shadow-md rounded-2xl overflow-hidden">
        {/* Text */}
        <div className="md:w-1/2 p-6 bg-red-50 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-red-800 mb-4">Don'ts</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Do not eat food on the pallet or near the system.</li>
            <li>Do not wash cars on the system.</li>
            <li>Do not operate in bypass mode or press any limit switch.</li>
            <li>Do not use service, semi-auto, or manual modes.</li>
            <li>Do not open or directly operate the control panel.</li>
            <li>Do not modify control panel wiring or circuits.</li>
            <li>Do not attempt repairs yourself.</li>
            <li>Do not place trash bins around the system.</li>
            <li>Keep children's play areas away from the system.</li>
          </ul>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img src={dontsImage} alt="Don'ts" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default DosAndDontsPage;