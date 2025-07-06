import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import ContactUs from '../Components/ContactUs/ContactUs';
import Footer from '../Components/common/Footer';



const ContactUsPage = () => {
    // Scroll to top when component mounts
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;