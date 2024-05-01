import React, { useState } from 'react';
import './Slider.scss'; 

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <button className='ButtonSlider' onClick={goToPrevious}>&lt;</button>
      
      <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="slider-image" />
      
      <button className='ButtonSlider' onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Slider;
