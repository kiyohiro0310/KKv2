'use client';

import React, { useState } from "react";
import SectionTitle from "../fragments/section-title";
import WorkSelect from "../works/work-select";
import PersonalWorks from "../works/personal-works";
import UniversityWorks from "../works/university-work";
import IndustryWorks from "../works/industry-works";

const Works = () => {
    const [selectedValue, setSelectedValue] = useState('personal');

  return (
    <div className="container mx-auto py-12">
      <SectionTitle
        title="Works"
        subTitle="These are what I have done so far."
      />

      <div className="max-w-6xl h-fit mx-auto flex flex-col justify-center items-center">
        <div className="w-full mx-auto flex flex-col md:flex-row font-bold">
          <WorkSelect isSelected={selectedValue == 'personal' ? true : false} setValue={() => setSelectedValue("personal")} text="Personal" />
          <WorkSelect isSelected={selectedValue == 'university' ? true : false} setValue={() => setSelectedValue("university")} text="University" />
          <WorkSelect isSelected={selectedValue == 'industry' ? true : false} setValue={() => setSelectedValue("industry")} text="Industry" />
        </div>
        <div className="min-w-full bg-skillC p-2">
            {selectedValue == 'personal' && <PersonalWorks />}
            {selectedValue == 'university' && <UniversityWorks />}
            {selectedValue == 'industry' && <IndustryWorks />}
        </div>
      </div>
    </div>
  );
};

export default Works;
