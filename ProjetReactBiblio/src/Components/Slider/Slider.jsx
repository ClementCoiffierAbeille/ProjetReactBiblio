import React, { useState, useEffect } from 'react';
import './Slider.scss'; 

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); 

  const goToPrevious = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };
  
  const goToNext = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={goToPrevious}>
          &lt;
      </button>

      <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="slider-image slide"
      />

      <button className="next" onClick={goToNext}>
          &gt;
      </button>

      <div className="slide-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'indicator active' : 'indicator'}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
