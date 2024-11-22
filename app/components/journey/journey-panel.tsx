import React from "react";
import LinkButton from "../fragments/link-button";

const JourneyPanel = ({
  title,
  description,
  image,
  buttonText
}: {
  title: string;
  description: string;
  image: string;
  buttonText: string;
}) => {

  return (
    <div className={"w-fit mx-auto flex flex-col md:flex-row overflow-hidden"}>
      <div className="space-y-6 md:space-y-12 md:text-left md:p-6">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="w-[60vw] md:w-72">{description}</p>
        <p className="pb-6">
          <LinkButton
            link={title.toLowerCase()}
            title={buttonText}
            bg="bg-black"
            textColor="text-white"
          />
        </p>
      </div>
      <div className={`w-72 h-72 ${image} bg-cover bg-center`}></div>
    </div>
  );
};

export default JourneyPanel;
