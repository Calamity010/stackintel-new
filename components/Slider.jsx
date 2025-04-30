"use client";

import React, { useRef } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

// Import your PNGs from the public/landing folder or assets
const slides = [
  {
    title: "Banking as a Service Platform",
    description:
      "Launch banking products with ease using our comprehensive BaaS platform. From account management to payment processing, we provide seamless API-driven banking solutions for fintechs, corporates, and enterprises.",
    image: "/landing/banking.png",
  },
  {
    title: "Prepaid Card Management System",
    description:
      "Enable seamless issuance, management, and transaction processing for prepaid cards. Our platform supports multiple use cases, including gift cards, payroll cards, and digital wallets, ensuring flexibility, compliance, and real-time control.",
    image: "/landing/cards.png",
  },
  {
    title: "Corporate Expense Management System",
    description:
      "Simplify corporate spending with a smart, automated expense management platform. Gain real-time insights, set spending limits, and streamline approvals for better financial control and efficiency.",
    image: "/landing/expense.png",
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
    <div className="bg-[#101010] py-16 sm:py-20 mt-14 px-4">
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
              className="relative flex-shrink-0 w-64 w-86 md:w-80 lg:w-112 h-40 h-112 md:h-60 lg:h-132 rounded-xl overflow-hidden p-4 bg-[#2A2A2A]"
            >
              {/* Image fills container */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Text overlay */}
              <div className="relative z-10 text-white">
                <h2 className="text-3xl md:text-2xl lg:text-4xl font-semibold">
                  {slide.title}
                </h2>
                <p className="mt-3 text-md">{slide.description}</p>
              </div>

              {/* Optional gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
