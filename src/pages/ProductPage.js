import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/common/Footer';
import ProductP from '../Components/ProductP/ProductP';

const ProductPage = () => {
      // Scroll to top when component mounts
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 pb-10">
        <ProductP />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
