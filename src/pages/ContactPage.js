import React from 'react';
import Header from '../Components/Header/Header';
import ContactUs from '../Components/ContactUs/ContactUs';
import Footer from '../Components/common/Footer';



const ContactUsPage = () => {
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