import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import FAQs from '../Components/FAQs/FAQs';
import Footer from '../Components/common/Footer';



const FAQsPage = () => {
      // Scroll to top when component mounts
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
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