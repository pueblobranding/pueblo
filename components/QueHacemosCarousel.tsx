"use client"
import React, { useState, useEffect } from 'react';

interface QueHacemosCarouselProps {
  components: React.ReactNode[];
  autoRotateInterval?: number;
}

const QueHacemosCarousel: React.FC<QueHacemosCarouselProps> = ({ components, autoRotateInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  };

  useEffect(() => {
    if (autoRotateInterval) {
      const timer = setInterval(goToNext, autoRotateInterval);
      return () => clearInterval(timer);
    }
  }, [autoRotateInterval, components.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {components.map((component, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {component}
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2 focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2 focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
};

export default QueHacemosCarousel;