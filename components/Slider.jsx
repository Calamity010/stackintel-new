"use client";

import React, { useRef } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

const slides = [
  {
    title: "Precision engineering at the UltraFactory",
    description:
      "Ultrahuman's integrated production facility ensures gold-standard performance testing, providing complete control over form factor and algorithmic accuracy.",
    video: "/landing/bgvideo1.webm",
  },
  {
    title: "Trusted by the World's #1 Ranked Cycling Team and more",
    description:
      "UAE Team Emirates, Team ADQ, and many other high-performance teams worldwide trust Ultrahuman for its gold-standard accuracy and unmatched volume of insights.",
    video: "/landing/bgvideo2.webm",
  },
  // repeat as needed
  {
    title: "Precision engineering at the UltraFactory",
    description:
      "Ultrahuman's integrated production facility ensures gold-standard performance testing, providing complete control over form factor and algorithmic accuracy.",
    video: "/landing/bgvideo1.webm",
  },
  {
    title: "Trusted by the World's #1 Ranked Cycling Team and more",
    description:
      "UAE Team Emirates, Team ADQ, and many other high-performance teams worldwide trust Ultrahuman for its gold-standard accuracy and unmatched volume of insights.",
    video: "/landing/bgvideo2.webm",
  },
];

const Slider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const { clientWidth } = sliderRef.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="bg-black py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header + Arrows */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-semibold mb-4 md:mb-0">
            Accuracy at its core
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="text-white bg-gray-800 p-3 hover:bg-white hover:text-black rounded-full transition"
            >
              <BiLeftArrowAlt size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="text-white bg-gray-800 p-3 hover:bg-white hover:text-black rounded-full transition"
            >
              <BiRightArrowAlt size={24} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 no-scrollbar"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 h-40 sm:h-48 md:h-60 lg:h-132 rounded-xl overflow-hidden"
            >
              {/* Video fills container */}
              <video
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Text overlaid */}
              <div className="relative z-10 p-4 text-white">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                  {slide.title}
                </h2>
                <p className="mt-1 text-sm sm:text-base">{slide.description}</p>
              </div>

              {/* Optional dark gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
