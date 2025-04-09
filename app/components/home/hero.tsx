import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-center text-center md:text-left px-6 overflow-hidden">
      {/* Content */}
      <div className="md:w-1/2">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800 dark:text-white">
          Choice and Consequence
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-300">
          Without haste, but without rest
        </p>
        <p className="my-6 text-sm md:text-base lg:text-lg max-w-2xl text-gray-500 dark:text-gray-400">
          Have a blast on your journey—it&apos;s the one adventure that&apos;s all yours!
        </p>
        <Link href={"/contact"} className="px-8 py-3 bg-primary hover:bg-primary-dark font-medium text-lg rounded-lg shadow-lg transition-all duration-300 hover:text-main">
          Contact
        </Link>
      </div>

      <div className="relative md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="relative w-[40vw] h-[40vw] rounded-full overflow-hidden shadow-lg transform bg-hero bg-cover bg-center">
        </div>
      </div>

      <div className="hidden md:absolute -right-[5vw] -bottom-[13vw] rounded-[30%] w-[30vw] h-[30vw] bg-sub rotate-45"></div>
    </div>
  );
};

export default Hero;