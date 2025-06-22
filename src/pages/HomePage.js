import React from 'react';
import Header from '../Components/Header/Header';
import Carousel from '../Components/Carousel/Carousel';
import About from '../Components/About/About';
import WhyUs from '../Components/WhyUs/WhyUs';
import Products from '../Components/Products/Products';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/common/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Carousel />
        <About />
        <WhyUs />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;