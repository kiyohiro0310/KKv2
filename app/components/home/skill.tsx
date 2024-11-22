import Image from "next/image";
import React from "react";
import SkillCard from "../fragments/skill-card";
import SectionTitle from "../fragments/section-title";

const Skill = () => {
  return (
    <div className="w-full h-fit pb-6 bg-skill bg-cover bg-center">
      <div className="w-full h-32 bg-sub opacity-80 flex justify-center items-center text-white">
        <SectionTitle title="Skill Sets" subTitle="What I can do to support your business process" />
      </div>

      <div className="w-full h-full">
        <div className="md:relative md:top-3 w-[97%] h-fit m-auto bg-skillC flex flex-col md:flex-row justify-center">
          <SkillCard
            title="Frontend"
            src="/images/ux.png"
            subTitle="Visualise as required"
            skills="HTML / CSS / SASS / React / TailwindCSS and more"
            bg="bg-white"
            cardTitle="Front"
          />
          <SkillCard
            title="Backend"
            src="/images/backend.png"
            subTitle="Optimise and secure system"
            skills="NodeJS / Express / Docker / SQL / Postgresql / MongoDB and more"
            bg="bg-skillC"
            cardTitle="Back"
          />
          <SkillCard
            title="Cloud"
            src="/images/infrastructure.png"
            subTitle="Peformance efficiency and productivity"
            skills="AWS / Azure"
            bg="bg-white"
            cardTitle="Cloud"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
