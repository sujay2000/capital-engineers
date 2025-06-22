import React from 'react';
import Header from '../Components/Header/Header';
import FAQs from '../Components/FAQs/FAQs';
import Footer from '../Components/common/Footer';



const FAQsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;