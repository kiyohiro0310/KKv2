import React from "react";

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="pt-3">{subTitle}</p>
      <div className="w-12 h-[2px] bg-main mt-6"></div>
    </div>
  );
};

export default SectionTitle;
