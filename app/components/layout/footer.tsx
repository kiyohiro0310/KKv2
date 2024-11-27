import Link from "next/link";
import React from "react";
import LinkText from "../fragments/link-text";
import LinkSM from "../fragments/link-sm";

const links = ["Learning", "History", "Experience", "Life", "Policy", "Site Map"];

const Footer = () => {
  return (
    <div className="w-full bg-footer text-white">
      <div className="container mx-auto pt-4 pb-20 md:pb-24">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-32 p-6">
          <div className="flex flex-row space-x-4">
            <LinkSM url="https://www.instagram.com/kiyohiro0310/" src="/images/instagram.png" alt="instagram logo" />
            <LinkSM url="https://www.linkedin.com/in/kiyohiro-kambayashi-533aa0244/" src="/images/linkedin.png" alt="linkedin logo" />
          </div>

          <div>
            <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4 md:gap-x-12 gap-y-6">
              {links.map((link: string, index: number) => (
                <LinkText key={index} title={link} footer={true} />
              ))}
            </div>
          </div>

          <Link href={'/contact'} title="Contact" className="px-6 py-2 bg-main rounded-md hover:bg-sub transition-all duration-200 font-bold text-white">
              Contact
          </Link>
        </div>
      </div>

      <p className="text-xs text-center">2024 Kiyohiro Kambayashi</p>
    </div>
  );
};

export default Footer;
