import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductP.css';

// ✅ All imports moved to top
import puzzleImage from '../../assets/images/puzzle.jpg';
import stackImage from '../../assets/images/stack.jpg';
import g2StackImage from '../../assets/images/g2_stack.jpg';
import rotaryImage from '../../assets/images/rotary.jpg';
import industrialLiftImage from '../../assets/images/industrial_lift.jpg';
import scissorLiftImage from '../../assets/images/scissor_lift.jpg';

const products = {
  puzzle: {
    title: 'Puzzle Parking System',
    description: `
      Puzzle parking systems are semi-automated systems that operate like a 3D puzzle by shifting vehicles both vertically and horizontally. 
      These systems are space-saving, cost-effective, and suitable for both residential and commercial buildings. 
      With intelligent controls, they provide easy access to vehicles and can significantly increase parking capacity in limited areas.`,
    image: puzzleImage,
    video: 'https://www.youtube.com/embed/ZQlfufALSHA',
  },
  stack: {
    title: 'Stack Parking System',
    description: `
      Stack parking allows vehicles to be vertically arranged in two or more levels using hydraulic lifts or platforms. 
      It is an ideal choice for low-traffic areas or personal garages and requires minimal ground space. 
      The system is simple to operate and offers an affordable automated parking solution with low maintenance requirements.`,
    image: stackImage,
    video: 'https://www.youtube.com/embed/ZQlfufALSHA',
  },
  gplus2: {
    title: 'G2 Stack Parking System',
    description: `
      The G+2 Stack Parking System provides three levels of vertical parking, ideal for commercial buildings, malls, and high-rise apartments. 
      It operates with an electro-hydraulic mechanism and ensures safety and efficiency with each level independently accessible. 
      This system optimizes vertical space without the need for ramps or large driveways.`,
    image: g2StackImage,
    video: 'https://www.youtube.com/embed/ZQlfufALSHA',
  },
  rotary: {
    title: 'Rotary Parking System',
    description: `
      Rotary systems use a rotating carousel-like structure to lift and move cars to different vertical slots. 
      They are best suited for high-density urban areas with minimal footprint. 
      The system is fully automated and can park or retrieve a car in under 90 seconds, offering high efficiency and user convenience.`,
    image: rotaryImage,
    video: 'https://www.youtube.com/embed/ZQlfufALSHA',
  },
  industrial: {
    title: 'Industrial Lifts',
    description: `
      Industrial lifts are heavy-duty machines designed to move goods and materials between different floors in factories, warehouses, and logistics hubs. 
      Built with robust steel structures and powered by hydraulic or mechanical systems, they can lift several tons safely and reliably. 
      Options include goods lifts, dumbwaiters, and cargo elevators with safety interlocks and overload protection.`,
    image: industrialLiftImage,
    video: 'https://www.youtube.com/embed/ZQlfufALSHA',
  },
  scissor: {
    title: 'Scissor Lift',
    description: `
      Scissor lifts offer stable and secure vertical elevation, commonly used in construction, maintenance, and material handling. 
      The scissor mechanism expands to raise the platform, allowing safe access to high places. 
      Available in electric and hydraulic versions, they are valued for their mobility, load capacity, and ease of operation in tight spaces.`,
    image: scissorLiftImage,
    video: 'https://www.youtube.com/embed/ZQlfufALSHA',
  },
};

const ProductP = () => {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <div className="text-center mt-10 text-red-600">Product not found.</div>;
  }

  return (
    <div className="product-container">
      <h2 className="product-title">{product.title}</h2>

      <div className="product-content">
        <img src={product.image} alt={product.title} className="product-image" />
        <p className="product-description">{product.description}</p>
      </div>

      <div className="product-video-section">
        <h3 className="product-video-title">Product Video</h3>
        <div className="product-video-wrapper">
          <iframe
            className="product-video"
            src={product.video}
            title={product.title}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProductP;
