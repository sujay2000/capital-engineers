import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import Landmark from '../Components/LandmarkProjects/LandmarkProjects';
import Footer from '../Components/common/Footer';



const LandmarkProjectsPagePage = () => {
      // Scroll to top when component mounts
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
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