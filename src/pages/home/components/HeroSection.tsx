import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-blueDark min-h-[450px] lg:h-screen text-white bg-[#00000099] overflow-hidden grid place-items-center px-6">
      <div className="text-center max-w-3xl px-4">
        <p className="opacity-80">Performance in motion</p>
        <h1 className="text-2xl lg:text-4xl font-semibold mt-4 leading-tight">
          Soft Trims and NVH Solutions
        </h1>
        <p className="text-2xl lg:text-4xl font-light opacity-100 mb-6 leading-tight">
          for seamless rides
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
