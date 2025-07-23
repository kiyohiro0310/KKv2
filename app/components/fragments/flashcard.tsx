import Image from "next/image";
import React, { useState } from "react";

const Flashcard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-80 m-4 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style preserve-3d transition-transform ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white border rounded-xl overflow-hidden shadow-md">
          <h2 className="text-xl font-bold text-blue-900">{title}</h2>
          <Image src={image} alt={title} className="w-full h-full" width={30} height={30}/>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-gray-100 border rounded-xl p-4 rotate-y-180 shadow-md overflow-auto">
          <p className="mt-2 text-gray-800 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
