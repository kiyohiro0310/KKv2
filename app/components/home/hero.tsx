"use client"
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { fadeInUp, slideInRight, createScrollTrigger } from "@/app/lib/animations";
import Image from "next/image";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !imageRef.current || !backgroundRef.current) return;

    // Animate content
    const contentAnimation = fadeInUp(contentRef.current, 0.2);
    createScrollTrigger(contentRef.current, contentAnimation);

    // Animate image
    const imageAnimation = slideInRight(imageRef.current, 0.4);
    createScrollTrigger(imageRef.current, imageAnimation);

    // Animate background
    const backgroundAnimation = fadeInUp(backgroundRef.current, 0.6);
    createScrollTrigger(backgroundRef.current, backgroundAnimation);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-center text-center md:text-left px-6 overflow-hidden">
      {/* Content */}
      <div ref={contentRef} className="md:w-1/2">
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
        <Link href={'https://aws.amazon.com/certification/certified-cloud-practitioner/'} className="pt-12 flex justify-start align-start">
          <Image src="/images/clf.png" alt="clf logo" width={50} height={50} />
        </Link>
      </div>

      <div ref={imageRef} className="relative md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="relative w-[40vw] h-[40vw] sm:w-[35vw] sm:h-[35vw] rounded-full overflow-hidden shadow-lg transform bg-hero bg-cover bg-center">
        </div>
      </div>

      <div ref={backgroundRef} className="hidden sm:block absolute -right-[5vw] -bottom-[13vw] rounded-[30%] w-[30vw] h-[30vw] bg-sub rotate-45"></div>
      <div ref={backgroundRef} className="sm:hidden block absolute -right-[5vw] -bottom-[13vw] rounded-[30%] w-[200px] h-[200px] bg-sub rotate-45"></div>
    </div>
  );
};

export default Hero;