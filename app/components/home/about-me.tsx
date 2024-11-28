import React from "react";
import SectionTitle from "../fragments/section-title";

const AboutMe = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <SectionTitle
        title="About Me"
        subTitle="This section describes about me. Please have a read!"
      />

      <div className="w-full h-full flex flex-col md:flex-row py-12 md:py-20 justify-center items-center">
        <div className="block md:hidden text-center">
          <h1 className="text-2xl">Kiyohiro Kambayashi</h1>
          <p>28 years old / Japanese / Web developer</p>
        </div>
        <div className="w-[90%] h-96 md:w-1/3 bg-me bg-cover bg-center rounded-xl mx-auto"></div>
        <div className="p-8 md:w-1/2 mx-auto space-y-6">
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
    </div>
  );
};

export default AboutMe;
