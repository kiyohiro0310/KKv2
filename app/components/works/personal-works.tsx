import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const PersonalWorks = () => {
  return (
    <Fragment>
      <div className="flex space-y-6 md:space-y-0 md:space-x-8 flex-col md:flex-row md:pb-12">
        <Link
          href={
            "https://kiyohiro-kambayashi-4vm5jbi8z-kiyohiro0310s-projects.vercel.app/"
          }
        >
          <Image
            src={"/images/work1.png"}
            alt="work1 image"
            width={600}
            height={100}
          />
          <p className="text-sm">My Personal website 1</p>
        </Link>

        <Link href={"https://portfolio2-ogsm34d70-kiyohiro0310s-projects.vercel.app/"}>
          <Image
            src={"/images/work2.png"}
            alt="work2 image"
            width={600}
            height={100}
          />
          <p className="text-sm">My Personal website 2</p>
        </Link>
      </div>
      <div className='w-fit'>
        <Link href={"https://k-kambayashi.vercel.app/"}>
          <Image
            src={"/images/work3.png"}
            alt="work3 image"
            width={380}
            height={100}
          />
          <p className="text-sm">My Personal website 3</p>
        </Link>
      </div>
    </Fragment>
  );
};

export default PersonalWorks;
