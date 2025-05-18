import React from "react";
import { Splide, SplideSlide } from "react-splide-ts";
import JourneyPanel from "../journey/journey-panel";

const SkillSlider = () => {
  return (
    <div>
      <Splide options={{}} aria-label="My Favorite Images">
        <SplideSlide>
          <JourneyPanel
            title={"Daily"}
            description={"My dairy to share my daily findings and feelings."}
            image={"bg-life"}
            buttonText="Have a look!"
          />
        </SplideSlide>
        <SplideSlide>
          <JourneyPanel
            title={"Learning"}
            description={"Learn everyday! There is no way to be perfect."}
            image={"bg-learn"}
            buttonText="Learn more!"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default SkillSlider;
