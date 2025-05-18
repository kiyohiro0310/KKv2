'use client';

import React, { useState, useEffect, useRef } from "react";
import SectionTitle from "../fragments/section-title";
import WorkSelect from "../works/work-select";
import PersonalWorks from "../works/personal-works";
import UniversityWorks from "../works/university-work";
import IndustryWorks from "../works/industry-works";
import { fadeInUp, staggerFadeInUp, createScrollTrigger } from "@/app/lib/animations";

const Works = () => {
    const [selectedValue, setSelectedValue] = useState('personal');
    const titleRef = useRef<HTMLDivElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!titleRef.current || !tabsRef.current || !contentRef.current) return;

        // Animate title
        const titleAnimation = fadeInUp(titleRef.current, 0.2);
        createScrollTrigger(titleRef.current, titleAnimation);

        // Animate tabs
        const tabs = Array.from(tabsRef.current.children);
        const tabsAnimation = staggerFadeInUp(tabs, 0.1);
        createScrollTrigger(tabsRef.current, tabsAnimation);

        // Animate content
        const contentAnimation = fadeInUp(contentRef.current, 0.3);
        createScrollTrigger(contentRef.current, contentAnimation);
    }, []);

    return (
        <div className="container mx-auto py-12">
            <div ref={titleRef}>
                <SectionTitle
                    title="Works"
                    subTitle="These are what I have done so far."
                />
            </div>

            <div className="max-w-6xl h-fit mx-auto flex flex-col justify-center items-center py-6">
                <div ref={tabsRef} className="w-full mx-auto flex flex-col md:flex-row font-bold bg-skillC dark:bg-lightDark">
                    <WorkSelect isSelected={selectedValue == 'personal' ? true : false} setValue={() => setSelectedValue("personal")} text="Personal" />
                    <WorkSelect isSelected={selectedValue == 'university' ? true : false} setValue={() => setSelectedValue("university")} text="University" />
                    <WorkSelect isSelected={selectedValue == 'industry' ? true : false} setValue={() => setSelectedValue("industry")} text="Industry" />
                </div>
                <div ref={contentRef} className="min-w-full bg-skillC dark:bg-lightDark p-2">
                    {selectedValue == 'personal' && <PersonalWorks />}
                    {selectedValue == 'university' && <UniversityWorks />}
                    {selectedValue == 'industry' && <IndustryWorks />}
                </div>
            </div>
        </div>
    );
};

export default Works;
