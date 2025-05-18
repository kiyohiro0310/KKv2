'use client';

import React, { useEffect, useRef } from "react";
import SectionTitle from "../fragments/section-title";
import Hotjar from "@hotjar/browser";
import { fadeInUp, slideInLeft, slideInRight, createScrollTrigger } from "@/app/lib/animations";

const AboutMe = () => {
  const siteId = 3609741;
  const hotjarVersion = 6;
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);

    if (!titleRef.current || !imageRef.current || !contentRef.current) return;

    // Animate title
    const titleAnimation = fadeInUp(titleRef.current, 0.2);
    createScrollTrigger(titleRef.current, titleAnimation);

    // Animate image
    const imageAnimation = slideInLeft(imageRef.current, 0.3);
    createScrollTrigger(imageRef.current, imageAnimation);

    // Animate content
    const contentAnimation = slideInRight(contentRef.current, 0.4);
    createScrollTrigger(contentRef.current, contentAnimation);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 ">
      <div ref={titleRef}>
        <SectionTitle
          title="About Me"
          subTitle="This section describes about me. Please have a read!"
        />
      </div>

      <div className="w-full h-full flex flex-col md:flex-row py-12 md:py-20 justify-center items-center">
        <div className="block md:hidden text-center">
          <h1 className="text-2xl">Kiyohiro Kambayashi</h1>
          <p>28 years old / Japanese / Web developer</p>
        </div>
        <div ref={imageRef} className="w-[90%] h-96 md:w-1/3 bg-me bg-cover bg-center rounded-xl mx-auto"></div>
        <div ref={contentRef} className="p-8 md:w-1/2 mx-auto space-y-6">
          <div className="hidden md:block">
            <h1 className="text-3xl">Kiyohiro Kambayashi</h1>
            <p>28 years old / Japanese / Web developer</p>
          </div>

          <p>Hi, all!</p>
          <p>Glad of you to see this website!</p>
          <p>
            I&apos;m studying Bachelor of Information and Communications Techonology in
            WSU!
          </p>

          <p>
            It takes time to get new skill but I believe choice and consistency will deliver
            the great consequences.
          </p>

          <p>
            Without haste but without rest. I spend most of my free time for learning
            technology. I&apos;ll share what I&apos;ve learned and my journey with you all
            here.
          </p>
        </div>
      </div>
      <script
          id="hotjarsection"
          dangerouslySetInnerHTML={{
            __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3609741,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
    </div>
  );
};

export default AboutMe;
