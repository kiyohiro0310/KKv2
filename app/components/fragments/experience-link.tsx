import Link from "next/link";
import React from "react";

const ExperienceLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <div>
      <p>{title}</p>
      <Link className="underline text-sub hover:text-main" href={href}>
        Access the applcation
      </Link>
    </div>
  );
};

export default ExperienceLink;
