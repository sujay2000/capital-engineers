import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/common/Footer';

import HomePage from './pages/HomePage';
import FAQsPage from './pages/FAQsPage';
import AboutUsPage from './pages/AboutPage';
import BusinessEnquiryPage from './pages/BusinessEnquiryPage';
import ContactUsPage from './pages/ContactPage';
import DosAndDontsPage from './pages/DosAndDontsPage';
import LandmarkProjectPage from './pages/LandmarkProjectsPage';
import VideosPage from './pages/VideosPage';
import WhyUsPage from './pages/WhyUsPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <div className="App">
     
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/enquiry" element={<BusinessEnquiryPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/dos-and-donts" element={<DosAndDontsPage />} />
            <Route path="/landmark-projects" element={<LandmarkProjectPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
