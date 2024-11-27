import Link from "next/link";
import React from "react";

const LinkButton = ({ link, bg, title, textColor }: { link: string; bg: string; title: string; textColor: string }) => {
  return (
    <Link
      className={`px-6 py-2 ${bg} rounded-md hover:bg-sub transition-all duration-200 font-bold ${textColor}`}
      href={link == "learning" ? "/learning" : "/daily"}
    >
      {title}
    </Link>
  );
};

export default LinkButton;
