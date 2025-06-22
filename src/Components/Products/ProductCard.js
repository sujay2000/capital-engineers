import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(product.link);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative h-56 sm:h-60 md:h-56 w-full overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        {/* Hover Badge */}
        <div
          className={`absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 transform ${
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
        >
          View Details
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        {product.features && (
          <div className="mb-4 sm:mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
              Key Features:
            </h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
              {product.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Link styled as button */}
        <Link
          to={product.link}
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 group/btn font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Learn More
          <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
