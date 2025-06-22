import React from 'react';
import Header from '../Components/Header/Header';
import BusinessEnquiry from '../Components/BusinessEnquiry/BusinessEnquiry';
import Footer from '../Components/common/Footer';



const BusinessEnquiryPage = () => {
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