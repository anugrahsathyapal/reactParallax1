import React, { useState } from 'react';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Previous Button */}
      <div
        onClick={goToPrev}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: '32px',
          fontSize: '45px',
          color: '#fff',
          zIndex: '1',
          cursor: 'pointer'
        }}
      >
        ←
      </div>

      {/* Next Button */}
      <div
        onClick={goToNext}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '32px',
          fontSize: '45px',
          color: '#fff',
          zIndex: '1',
          cursor: 'pointer'
        }}
      >
        →
      </div>

      {/* Image Slide */}
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          width: '100vw',
          height: '100vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
    </div>
  );
};

export default ImageSlider;
