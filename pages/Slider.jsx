import React, { useState } from 'react';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`, // Adjust the spacing as needed
    transition: 'transform 0.5s ease-in-out',
    display: 'flex',
  };

  return (
    <div className="slider-container">
      <button className="btn" onClick={prevSlide}>{'<'}</button>
      <div className="slider-content" style={slideStyle}>
        {items.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item} alt={`Slide ${index + 1}`} style={{ width: '50px', height: '50px' }} />
          </div>
        ))}
      </div>
      <button className="btn" onClick={nextSlide}>{'>'}</button>
    </div>
  );
};

export default Slider;
