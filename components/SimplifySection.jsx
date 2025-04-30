import React from "react";

const SimplifySection = () => (
  <section className="relative w-full overflow-hidden mb-10">
    {/* Image container with fixed height */}
    <div className="w-full h-[90vh] md:h-[100vh]">
      <img
        src="/landing/simplify-bg.png"
        alt="Simplify finance"
        className="w-[100%] h-full object-cover"
      />
    </div>

    {/* Text overlay positioned toward the bottom */}
    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl lg:text-8xl font-semibold text-white max-w-3xl">
        Simplifying finance at every step
      </h2>
      <p className="mt-2 text-md md:text-xl text-white max-w-2xl">
        Get three solutions for the cost of one – corporate cards, expense
        management software, and an AI automation tool.
      </p>
    </div>
  </section>
);

export default SimplifySection;
