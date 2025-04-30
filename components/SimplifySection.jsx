import React from "react";

const SimplifySection = () => (
  <section className="relative w-full overflow-hidden">
    {/* Image container with fixed height */}
    <div className="w-full h-[100vh]">
      <img
        src="/landing/simplify-bg.png"
        alt="Simplify finance"
        className="w-[100%] h-full object-cover"
      />
    </div>

    {/* Text overlay positioned toward the bottom */}
    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-semibold text-white leading-26 max-w-3xl">
        Simplifying finance at every step
      </h2>
      <p className="mt-2 text-xs sm:text-sm md:text-xl text-white max-w-2xl">
        Get three solutions for the cost of one – corporate cards, expense
        management software, and an AI automation tool.
      </p>
    </div>
  </section>
);

export default SimplifySection;
