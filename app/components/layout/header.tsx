"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LinkText from "../fragments/link-text";
import Hamburger from "../fragments/hamburger";
import MobileMenu from "../menu/mobile-menu";
import ThemeSwitch from "@/app/Themes/ThemeSwitcher";

const links = ["Diary", "Experience", "Life", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let openStatus: string = "";
  if (isOpen) {
    openStatus = "open";
  }

  function clickHandler() {
    setIsOpen((value) => !value);
  }

  return (
    <div className="fixed w-screen bg-white dark:bg-dark dark:text-light z-50">
      <div className="flex justify-around items-center p-2 md:p-6">
          <Link href={"/"}>
            <Image
              className="cursor-pointer hover:cursor-pointer"
              src={"/images/kiyo-logo.png"}
              alt={"logo"}
              width={60}
              height={60}
            />
          </Link>
          <div className="hidden md:flex justify-center items-center space-x-12">
            {links.map((link: string, index: number) => (
              <LinkText key={index} title={link} />
            ))}
            <ThemeSwitch />
          </div>
          <Hamburger
            openStatus={openStatus}
            isOpen={isOpen}
            clickHandler={clickHandler}
          />
          
          {isOpen && <MobileMenu links={links} onClick={clickHandler} />}
        </div>
    </div>
  );
};

export default Header;
