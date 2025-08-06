import React from 'react';

interface QueHacemosSlideProps {
  title: string;
  description: string;
  imageUrl: string;
  services: string[];
}

const QueHacemosSlide: React.FC<QueHacemosSlideProps> = ({ title, description, imageUrl, services }) => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 w-full">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div style={{ fontFamily: 'dream-avenue' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white tracking-wider text-center uppercase">
            {title}
          </div>
        </div>
        <div className="p-6 text-lg min-h-[300px]">
          <p className="mb-4 text-center">{description}</p>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-tigerlily">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QueHacemosSlide;
