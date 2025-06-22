// Products.jsx
import React, { useRef } from 'react';
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

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

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

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-blue-50"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          <div ref={carouselRef} className="products-carousel">
            {products.map((product, index) => (
              <div key={product.id} className="product-slide">
                <ProductCard
                  product={product}
                  onClick={() => navigate(product.link)}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-blue-50"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
