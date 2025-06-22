import { useState, useEffect } from 'react';

const useCarousel = (items, autoSlideInterval = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, autoSlideInterval);
    
    return () => clearInterval(interval);
  }, [items.length, autoSlideInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide
  };
};

export default useCarousel;