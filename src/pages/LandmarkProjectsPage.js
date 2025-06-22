import React from 'react';
import Header from '../Components/Header/Header';
import Landmark from '../Components/LandmarkProjects/LandmarkProjects';
import Footer from '../Components/common/Footer';



const LandmarkProjectsPagePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Landmark />
      </main>
      <Footer />
    </div>
  );
};

export default LandmarkProjectsPagePage;