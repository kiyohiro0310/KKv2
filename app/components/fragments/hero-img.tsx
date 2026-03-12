import React from "react";

const HeroImg = ({ imageRef }: { imageRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div ref={imageRef} className="relative md:w-1/2 flex justify-center mt-8 md:mt-0">
      <div className="relative w-[40vw] h-[40vw] sm:w-[35vw] sm:h-[35vw] rounded-full overflow-hidden shadow-lg transform bg-hero bg-cover bg-center"></div>
    </div>
  );
};

export default HeroImg;
