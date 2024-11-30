import React from "react";
import PageTitle from "../components/fragments/page-title";
import LinkText from "../components/fragments/link-text";

const links = ["Learning", "History", "Experience", "Life", "Policy"];

const page = () => {
  return (
    <div className="w-[90%] max-w-4xl mx-auto pb-24">
      <PageTitle title="Site Map" />

      <div className="md:w-full flex flex-col-reverse md:flex-row">
        <div className="w-full flex flex-col justify-center items-center space-y-12">
          {links.map((link: string, index: number) => (
            <div className="w-full flex justify-start items-center border-b py-2" key={index}>
              <LinkText title={link} footer />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
