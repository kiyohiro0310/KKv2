import React from "react";
import PageTitle from "../components/fragments/page-title";

const page = () => {
  return (
    <div className="dark:bg-dark dark:text-light">
      <div className="w-full h-[80vh] bg-life-hero bg-cover bg-center">
        <div className="absolute bottom-56 md:right-16 lg:right-32 md:bottom-56 space-y-6 text-center text-dark">
          <h1 className="font-bold text-4xl md:text-5xl">
            Life is a journey, not a destination
          </h1>
          <p>Embrace each step, for every path holds a purpose.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <PageTitle title="Life" />
        <div className="flex flex-col space-y-12 pb-32 md:py-32 md:pb-64">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold">Progress, not perfection</h1>
            <p>
              Learn from the past, live in the present, prepare for the future.
            </p>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4 p-4">
            <p className="w-full md:w-3/5">
              Growth is a continuous journey, not a flawless result. Each small
              step forward, each lesson learned, is a valuable part of our
              progress.
            </p>
            <p className="w-full md:w-3/5">
              Embrace imperfections as opportunities for growth, and focus on
              becoming a better version of yourself with each new day.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[30vh] bg-life-middle bg-cover bg-center">
        <div className="absolute bottom-48 md:right-16 lg:right-48 md:bottom-72"></div>
      </div>

      <div className="max-w-4xl mx-auto py-32 md:py-64">
        <div className="flex flex-col space-y-12">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              The best teacher is your last mistake
            </h1>
            <p>Every experience is a lesson; every lesson is a gift.</p>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4 p-4">
          <p className="w-full md:w-3/5">
              Every mistake holds a lesson, guiding us toward wisdom and
              resilience. Rather than dwelling on errors, see each as a stepping
              stone to growth and understanding.
            </p>
            <p className="w-full md:w-3/5">
              Embrace the insights from your last mistake—it&apos;s a powerful guide
              to making better choices and becoming stronger along the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
