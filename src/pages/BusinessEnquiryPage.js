import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import BusinessEnquiry from '../Components/BusinessEnquiry/BusinessEnquiry';
import Footer from '../Components/common/Footer';



const BusinessEnquiryPage = () => {
    // Scroll to top when component mounts
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <BusinessEnquiry />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessEnquiryPage;