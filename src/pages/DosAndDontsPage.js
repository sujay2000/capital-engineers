import React from 'react';
import Header from '../Components/Header/Header';
import DandDs from '../Components/DOSandDONTS/DosAndDontsPage';
import Footer from '../Components/common/Footer';



const FAQsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <DandDs />
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;