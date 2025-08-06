"use client"

import { useState, useEffect, type ReactNode } from "react"

interface SimpleCarouselProps {
  components: ReactNode[]
  autoRotateInterval?: number
}

export default function SimpleCarousel({ components, autoRotateInterval = 5000 }: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate slides
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % components.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [components.length, autoRotateInterval, isPaused])

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex((current) => (current === 0 ? components.length - 1 : current - 1))
  }

  // Go to next slide
  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % components.length)
  }

  return (
    <div
      className="h-108 w-full relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="h-full w-full">
        {components.map((component, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {component}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/10 text-white p-2 rounded-full hover:bg-black/30 color-transition cursor-pointer"
        aria-label="Anterior"
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
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/10 text-white p-2 rounded-full hover:bg-black/30 color-transition cursor-pointer"
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

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {components.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70 cursor-pointer"
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
