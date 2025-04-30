"use client";

import React from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

const Ultra = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 sm:py-20 md:py-24 lg:py-32 px-4">
      {/* Heading block */}
      <div className="flex flex-col justify-center items-center gap-y-2 sm:gap-y-3 md:gap-y-4 py-8 sm:py-10 md:py-12">
        <h6 className="text-black text-sm sm:text-base uppercase">NEW</h6>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-black font-semibold text-center capitalize leading-tight sm:leading-snug md:leading-14">
          Introducing <br /> Ultrahuman Home
        </h1>
        <h6 className="text-black text-center text-sm sm:text-base md:text-lg py-4 max-w-md sm:max-w-lg md:max-w-xl">
          A silent and sophisticated home health device that monitors <br />
          environmental markers that affect your health every day.
        </h6>
        <button className="rounded-full cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out hover:scale-105 bg-black text-white px-4 sm:px-6 py-2 sm:py-3">
          Notify Me
        </button>
      </div>

      {/* Video block */}
      <div className="w-full mx-auto overflow-hidden rounded-lg">
        <video
          src="/landing/simplebg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Ultra;
