"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/landing/hero_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h5 className="text-sm md:text-base font-normal uppercase tracking-wider text-gray-100 mb-2">
          World’s Smartest Corporate Spending Platform
        </h5>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-200 to-gray-100 mb-2">
          StackIntel Smart Cards
        </h2>

        <h5 className="text-sm md:text-lg text-gray-300 max-w-2xl mb-6">
          Seamlessly tracks expenses, controls budgets, and prevents
          overspending — all in real-time, with daily actionable insights for
          smarter financial decisions.
        </h5>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-8 py-2 border border-gray-400 text-white rounded-full transition duration-300 ease-in-out  hover:border-white cursor-pointer">
            Learn More
          </button>
          <button className="px-8 py-2 bg-white text-black rounded-full shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:brightness-110 cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
