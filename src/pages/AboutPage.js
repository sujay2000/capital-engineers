import React from 'react';
import Header from '../Components/Header/Header';
import AboutUs from '../Components/AboutUs/AboutUs';
import Footer from '../Components/common/Footer';



const AboutUsPage = () => {
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