import React, { useState } from 'react';

const recommendations = [
  {
    name: "Jane Doe",
    text: "Working with Adedolapo was an absolute pleasure. Super fast, clean code, and very professional!",
  },
  {
    name: "Michael Smith",
    text: "He brought our designs to life exactly how we imagined. Highly recommend!",
  },
  {
    name: "Amina Bello",
    text: "One of the best frontend devs I've worked with. Pixel-perfect and detail-oriented.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center text-center">
      <div className="relative p-6 rounded-xl w-full min-h-[150px]">
        {/* Animated content */}
        <div
          key={currentIndex}
          className="transition-opacity duration-500 ease-in-out opacity-100"
        >
          <p className="text-lg italic text-gray-700">
            "{recommendations[currentIndex].text}"
          </p>
          <h3 className="mt-4 font-bold text-sm text-gray-800">
            — {recommendations[currentIndex].name}
          </h3>
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-xl font-bold cursor-pointer"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xl font-bold cursor-pointer"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carousel;
