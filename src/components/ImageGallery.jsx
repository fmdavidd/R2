// src/components/ImageGallery.jsx
import React, { useState } from 'react';
import '../styles/ImageGallery.css';

const images = [
  'https://via.placeholder.com/400x300?text=Imagen+1',
  'https://via.placeholder.com/400x300?text=Imagen+2',
  'https://via.placeholder.com/400x300?text=Imagen+3'
];

const ImageGallery = () => {
  const [index, setIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (e.key === 'ArrowLeft') {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="gallery">
      <img src={images[index]} alt={`Imagen ${index + 1}`} />
    </div>
  );
};

export default ImageGallery;
