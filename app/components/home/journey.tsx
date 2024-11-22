"use client";
import React from "react";
import SectionTitle from "../fragments/section-title";
import SkillSlider from "../fragments/skill-slider";
import JourneyList from "../journey/jouney-list";

const learningDataArr = [
    {
        id: "id-123",
        date: "2024.08.26",
        title: "Create ec2 using AWS CDK"
    },
    {
        id: "id-124",
        date: "2024.08.22",
        title: "Create lambda function using AWS CDK"
    },
    {
        id: "id-125",
        date: "2024.08.21",
        title: "Create ec2 using AWS CDK"
    }
]

const lifeDataArr = [
    {
        id: "id-100",
        date: "2024.08.26",
        title: "Speak fast...?"
    },
    {
        id: "id-101",
        date: "2024.08.25",
        title: "Different life and different mind set"
    },
    {
        id: "id-102",
        date: "2024.08.23",
        title: "Great power with great responsiblity"
    }
]


const MyJourney = () => {
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

export default MyJourney;
