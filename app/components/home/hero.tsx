import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] bg-hero bg-cover bg-center">
      <div className="absolute bottom-48 md:right-16 lg:right-48 md:bottom-60 space-y-6 text-center md:text-left text-white">
        <div className="relative z-0">
            <h1 className="font-bold text-4xl md:text-5xl">Choice and Consequence</h1>
            <p className="text-2xl">Without haste, but without rest</p>
        </div>
        <p>Have a blast on your journey—it&apos;s the one adventure that&apos;s all yours!</p>
      </div>
    </div>
  );
};

export default Hero;
