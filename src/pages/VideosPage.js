import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import Videos from '../Components/Video/Videos';
import Footer from '../Components/common/Footer';



const VideosPage = () => {
      // Scroll to top when component mounts
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
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