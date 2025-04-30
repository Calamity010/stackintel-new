"use client";

import React from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

const Ultra = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 md:py-24 lg:py-4 px-4 md:px-14">
      {/* Heading block */}
      <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4 py-8 sm:py-10 md:py-12">
        <h6 className="text-black text-sm sm:text-base uppercase">NEW</h6>
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-black font-semibold text-center capitalize  md:leading-14">
          Introducing <br /> Stackify
        </h1>
        <h6 className="text-black text-center text-sm sm:text-base md:text-lg py-4 max-w-md sm:max-w-lg md:max-w-xl">
          Create as many cards as your team needs <br /> with custom limits and
          restrictions
        </h6>
        <button className="rounded-full cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out hover:scale-105 bg-black text-white px-4 sm:px-6 py-2 sm:py-3">
          contact sales
        </button>
      </div>

      {/* Video block */}

      <video
        src="/landing/simplebg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default Ultra;
