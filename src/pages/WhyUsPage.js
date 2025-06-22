import React from 'react';
import Header from '../Components/Header/Header';
import WhyUsP from '../Components/WhyUsP/WhyUsP';
import Footer from '../Components/common/Footer';
import WhyUs from '../Components/WhyUs/WhyUs';



const WhyUsPa = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        
        <WhyUsP />
      </main>
      <Footer />
    </div>
  );
};

export default WhyUsPa;