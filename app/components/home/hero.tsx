"use client";
import HeroContent from "../fragments/hero-content";
import SakuraRain from '../fragments/sakura-rain';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-center text-center px-6 overflow-hidden">
      <HeroContent />
      <SakuraRain />
    </div>
  );
};

export default Hero;
