import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkSM = ({ url, src, alt}: {url: string, src: string, alt: string}) => {
  return (
    <Link href={url} className="hover:scale-110 transition-all duration-500">
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
      />
    </Link>
  );
};

export default LinkSM;
