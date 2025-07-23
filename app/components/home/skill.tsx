"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SkillCard from "../fragments/skill-card";
import SectionTitle from "../fragments/section-title";
import { fadeInUp, staggerFadeInUp, createScrollTrigger } from "@/app/lib/animations";
import Flashcard from "../fragments/flashcard";

const Skill = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !cardsRef.current) return;

    // Animate title
    const titleAnimation = fadeInUp(titleRef.current, 0.2);
    createScrollTrigger(titleRef.current, titleAnimation);

    // Animate cards with stagger effect
    const cards = Array.from(cardsRef.current.children);
    const cardsAnimation = staggerFadeInUp(cards, 0.2);
    createScrollTrigger(cardsRef.current, cardsAnimation);
  }, []);

  return (
    <div className="w-full h-fit pb-6 bg-skill bg-cover bg-center">
      <div ref={titleRef} className="w-full h-32 bg-sub opacity-80 flex justify-center items-center text-white">
        <SectionTitle title="Skill Sets" subTitle="What I can do to support your business process" />
      </div>

      <div className="w-full h-full">
        <div ref={cardsRef} className="md:relative md:top-3 w-[97%] h-fit m-auto bg-skillC dark:bg-dark dark:text-light flex flex-col md:flex-row justify-center">
          <SkillCard
            title="Frontend"
            src="/images/ux.png"
            subTitle="Visualise as required"
            skills="HTML / CSS / SASS / React / TailwindCSS and more"
            bg="bg-white dark:bg-dark dark:text-light"
            cardTitle="Front"
          />
          <SkillCard
            title="Backend"
            src="/images/backend.png"
            subTitle="Optimise and secure system"
            skills="NodeJS / Express / Docker / SQL / Postgresql / MongoDB and more"
            bg="bg-skillC dark:bg-dark dark:text-light"
            cardTitle="Back"
          />
          <SkillCard
            title="Cloud"
            src="/images/infrastructure.png"
            subTitle="Peformance efficiency and productivity"
            skills="AWS / Azure"
            bg="bg-white dark:bg-dark dark:text-light"
            cardTitle="Cloud"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
