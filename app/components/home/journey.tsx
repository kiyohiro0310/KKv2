"use client";
import React, { useEffect, useRef } from "react";
import SectionTitle from "../fragments/section-title";
import SkillSlider from "../fragments/skill-slider";
import JourneyList from "../journey/jouney-list";
import { fadeInUp, staggerFadeInUp, createScrollTrigger } from "@/app/lib/animations";

export default function MyJourney({learningData, lifeData}: {learningData: string; lifeData: string}) {
  const learningDataArr = JSON.parse(learningData);
  const lifeDataArr = JSON.parse(lifeData);
  const titleRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !sliderRef.current || !listRef.current) return;

    // Animate title
    const titleAnimation = fadeInUp(titleRef.current, 0.2);
    createScrollTrigger(titleRef.current, titleAnimation);

    // Animate slider
    const sliderAnimation = fadeInUp(sliderRef.current, 0.3);
    createScrollTrigger(sliderRef.current, sliderAnimation);

    // Animate list
    const listAnimation = fadeInUp(listRef.current, 0.4);
    createScrollTrigger(listRef.current, listAnimation);
  }, []);

  return (
    <div className="container mx-auto py-12">
      <div id="journey--container" className="py-20">
        <div className="mx-auto">
          <div ref={titleRef}>
            <SectionTitle
              title="My Journey"
              subTitle="Daily update of my life journey."
            />
          </div>
          <div ref={sliderRef}>
            <SkillSlider />
          </div>
          <div ref={listRef}>
            <JourneyList learnings={learningDataArr} lifes={lifeDataArr}/>
          </div>
        </div>
      </div>
    </div>
  );
};


