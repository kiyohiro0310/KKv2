import React from "react";
import LinkText from "../fragments/link-text";

const MobileMenu = ({ links, onClick }: { links: string[]; onClick: () => void; }) => {
  return (
    <div className="absolute flex flex-col space-y-6 top-[60px] left-0 bg-white w-screen md:hidden p-14 rounded-md z-32 shadow-xl">
      {links.map((link: string, index: number) => (
        <div key={index} onClick={onClick}>
          <LinkText title={link} />
          <div className="relative right-3 w-full h-[1px] bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
