import Image from "next/image";
import React from "react";

const SkillCard = ({
  title,
  src,
  subTitle,
  skills,
  bg,
  cardTitle
}: {
  title: string;
  src: string;
  subTitle: string;
  skills: string;
  bg: string;
  cardTitle: string
}) => {
  return (
    <div className={`relative w-full md:w-[23vw] h-fit md:h-[38vh] p-4 text-center flex flex-col items-center space-y-8 ${bg}`}>
      <div className="hidden md:block absolute -top-[25px] w-[50px] h-[50px] bg-black rotate-45"></div>
      <div className="hidden md:block absolute -top-[52px] w-[40px] h-[40px] bg-white rotate-45"></div>
      <div className="hidden md:block absolute -top-[42px] font-bold text-black text-sm">{cardTitle}</div>

      <h1 className="text-2xl text-main font-bold">{title}</h1>
      <Image src={src} alt={"ux logo"} width={50} height={50} />
      <h2 className="font-bold w-[90%] md:h-16">{subTitle}</h2>
      <p className="text-sm">{skills}</p>
    </div>
  );
};

export default SkillCard;
