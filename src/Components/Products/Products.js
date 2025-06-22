// Products.jsx
import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './Products.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Product Images
import puzzleImage from '../../assets/images/puzzle.jpg';
import stackImage from '../../assets/images/stack.jpg';
import g2StackImage from '../../assets/images/g2_stack.jpg';
import rotaryImage from '../../assets/images/rotary.jpg';
import industrialLiftImage from '../../assets/images/industrial_lift.jpg';
import scissorLiftImage from '../../assets/images/scissor_lift.jpg';

const Products = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  const products = [
    {
      id: 1,
      name: "Puzzle Parking System",
      image: puzzleImage,
      description: "Semi-automated 3D puzzle system that shifts vehicles vertically and horizontally.",
      features: ["3D puzzle mechanism", "Space-saving design", "Intelligent controls", "Easy vehicle access"],
      link: "/product/puzzle"
    },
    {
      id: 2,
      name: "Stack Parking System",
      image: stackImage,
      description: "Vertical parking arrangement using hydraulic lifts.",
      features: ["Hydraulic operation", "Minimal ground space", "Low maintenance", "Simple operation"],
      link: "/product/stack"
    },
    {
      id: 3,
      name: "G+2 Stack Parking System",
      image: g2StackImage,
      description: "Three-level vertical parking system with electro-hydraulic mechanism.",
      features: ["Three-level parking", "Electro-hydraulic system", "Independent access", "No ramps needed"],
      link: "/product/gplus2"
    },
    {
      id: 4,
      name: "Rotary Parking System",
      image: rotaryImage,
      description: "Carousel-like rotating structure for high-density urban areas.",
      features: ["360° rotation", "90-second retrieval", "Minimal footprint", "Fully automated"],
      link: "/product/rotary"
    },
    {
      id: 5,
      name: "Industrial Lifts",
      image: industrialLiftImage,
      description: "Heavy-duty machines for moving goods between floors.",
      features: ["Heavy-duty construction", "Safety interlocks", "Hydraulic/mechanical", "Overload protection"],
      link: "/product/industrial"
    },
    {
      id: 6,
      name: "Scissor Lift",
      image: scissorLiftImage,
      description: "Stable vertical elevation for construction and maintenance.",
      features: ["Scissor mechanism", "High mobility", "Electric/hydraulic", "Stable platform"],
      link: "/product/scissor"
    }
  ];

  // Handle responsive card count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality - moves forward continuously
  useEffect(() => {
    if (isHovered) return;

    const autoSlide = setInterval(() => {
      setCurrentIndex(prev => {
        // Calculate total number of slides based on products and cards per view
        const totalSlides = Math.ceil(products.length / cardsPerView);
        return (prev + 1) % totalSlides;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoSlide);
  }, [products.length, cardsPerView, isHovered]);

  const scroll = (direction) => {
    const totalSlides = Math.ceil(products.length / cardsPerView);
    
    if (direction === 'left') {
      setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
    } else {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const totalSlides = Math.ceil(products.length / cardsPerView);

  // Get current visible products based on currentIndex and cardsPerView
  const getCurrentProducts = () => {
    const startIndex = currentIndex * cardsPerView;
    const endIndex = Math.min(startIndex + cardsPerView, products.length);
    return products.slice(startIndex, endIndex);
  };

  return (
    <section id="products" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Parking & Lifting Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our comprehensive range of automated parking systems and industrial lifting solutions.
          </p>
        </div>

        <div 
          className="relative carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows - Positioned further from cards */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 md:-left-12 lg:-left-16 top-1/2 transform -translate-y-1/2 z-10 p-3 md:p-4 bg-white rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl border border-gray-200"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
          </button>

          <div className="products-carousel-wrapper overflow-hidden">
            <div 
              ref={carouselRef} 
              className="products-carousel"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.6s ease-in-out'
              }}
            >
              {/* Create slides based on cardsPerView */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="carousel-slide">
                  {products
                    .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                    .map((product) => (
                      <div key={product.id} className="product-slide">
                        <ProductCard
                          product={product}
                          onClick={() => navigate(product.link)}
                        />
                      </div>
                    ))
                  }
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 md:-right-12 lg:-right-16 top-1/2 transform -translate-y-1/2 z-10 p-3 md:p-4 bg-white rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl border border-gray-200"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 max-w-md mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-blue-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;