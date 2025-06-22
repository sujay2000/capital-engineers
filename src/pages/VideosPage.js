import React from 'react';
import Header from '../Components/Header/Header';
import Videos from '../Components/Video/Videos';
import Footer from '../Components/common/Footer';



const VideosPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Videos />
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;