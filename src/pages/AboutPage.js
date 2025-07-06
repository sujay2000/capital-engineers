import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import AboutUs from '../Components/AboutUs/AboutUs';
import Footer from '../Components/common/Footer';



const AboutUsPage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;