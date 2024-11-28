"use client";
import React from "react";
import SectionTitle from "../fragments/section-title";
import SkillSlider from "../fragments/skill-slider";
import JourneyList from "../journey/jouney-list";



export default function MyJourney({learningData, lifeData}: {learningData: string; lifeData: string}) {
  const learningDataArr = JSON.parse(learningData);
  const lifeDataArr = JSON.parse(lifeData);


  return (
    <div className="container mx-auto py-12">
      <div id="journey--container" className="py-20">
        <div className="mx-auto">
          <SectionTitle
            title="My Journey"
            subTitle="Daily update of my life journey."
          />
          <SkillSlider />
          <JourneyList learnings={learningDataArr} lifes={lifeDataArr}/>
        </div>
      </div>
    </div>
  );
};


