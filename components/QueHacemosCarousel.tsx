"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface QueHacemosCarouselProps {
  components: React.ReactNode[];
  autoRotateInterval?: number;
}

const QueHacemosCarousel: React.FC<QueHacemosCarouselProps> = ({ components, autoRotateInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [thumbPosition, setThumbPosition] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  }, [components.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  };

  // Auto-rotate slides
  useEffect(() => {
    if (autoRotateInterval && !isDragging) {
      const timer = setInterval(goToNext, autoRotateInterval);
      return () => clearInterval(timer);
    }
  }, [autoRotateInterval, goToNext, isDragging]);

  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    // Stop text selection and other default drag behaviors
    e.preventDefault();

    const moveHandler = (moveEvent: MouseEvent | TouchEvent) => {
      const trackRect = trackRef.current!.getBoundingClientRect();
      const clientX = 'touches' in moveEvent ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const newLeft = clientX - trackRect.left;
      const percentage = Math.max(0, Math.min(100, (newLeft / trackRect.width) * 100));
      setThumbPosition(percentage);
    };

    const endHandler = (endEvent: MouseEvent | TouchEvent) => {
      setIsDragging(false);
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseup', endHandler);
      document.removeEventListener('touchmove', moveHandler);
      document.removeEventListener('touchend', endHandler);

      // Snap to the closest index
      const trackRect = trackRef.current!.getBoundingClientRect();
      const finalLeft = 'changedTouches' in endEvent
        ? endEvent.changedTouches[0].clientX - trackRect.left
        : endEvent.clientX - trackRect.left;

      const percentage = (finalLeft / trackRect.width) * 100;
      const newIndex = Math.round(percentage / (100 / (components.length - 1)));
      const finalIndex = Math.max(0, Math.min(components.length - 1, newIndex));
      setCurrentIndex(finalIndex);
    };

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', endHandler);
    document.addEventListener('touchmove', moveHandler);
    document.addEventListener('touchend', endHandler);
  }, [components.length]);

  // Update thumb position when currentIndex changes (and not dragging)
  useEffect(() => {
    if (!isDragging) {
      const newPosition = currentIndex * (100 / (components.length - 1));
      setThumbPosition(newPosition);
    }
  }, [currentIndex, isDragging, components.length]);

  return (
    <div ref={carouselRef} className="relative w-full overflow-hidden">
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
      {/* <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2 focus:outline-none z-20"
      >
        &#10094;
      </button> */}
      <button
        className="absolute left-6 top-1/4 -translate-y-1/2 z-20 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 color-transition cursor-pointer"
        aria-label="Anterior"
        onClick={goToPrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/4 -translate-y-1/2 z-20 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 color-transition cursor-pointer"
        aria-label="Siguiente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      {/* Slider Control */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-64 h-12 flex items-center justify-center z-20">
        <div
          ref={trackRef}
          className="relative w-full h-3 bg-black/30 rounded-full border-2 border-white/40 shadow-inner cursor-pointer"
          onClick={(e) => {
            // Allow clicking on the track to jump to a slide
            if (trackRef.current) {
              const trackRect = trackRef.current.getBoundingClientRect();
              const clickX = e.clientX - trackRect.left;
              const percentage = (clickX / trackRect.width) * 100;
              const newIndex = Math.round(percentage / (100 / (components.length - 1)));
              setCurrentIndex(Math.max(0, Math.min(components.length - 1, newIndex)));
            }
          }}
        >
          {/* Draggable Thumb */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-tigerlily rounded-full border-2 border-white shadow-lg"
            style={{
              left: `${thumbPosition}%`,
              transform: 'translateX(-50%)',
              transition: isDragging ? 'none' : 'left 0.2s ease-out',
            }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          />
        </div>
      </div>
    </div>
  );
};

export default QueHacemosCarousel;
