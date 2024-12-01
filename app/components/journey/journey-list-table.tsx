import Link from "next/link";
import React from "react";

const JourneyListTable = ({ title, lists, isLearning }: { title: string; lists: {}[]; isLearning: boolean;}) => {
  return (
    <div className="w-1/2 space-y-10">
      <h1 className="font-bold text-2xl text-center pb-6">{title}</h1>
      {lists.map((item: any, index: number) => {
        return (
          <Link href={isLearning ? `/learning/${item._id}` : `/daily/${item._id}` } key={index}>
            <div
              className="flex flex-col md:flex-row justify-start items-center space-x-6 overflow-hidden border-b-[0.5px] border-gray-300 py-4 hover:text-sub transition-all duration-200"
            >
              <p className="w-full md:w-1/4 h-8 overflow-hidden text-sm flex items-center">{item.date}</p>
              <p className="w-full md:w-3/4 h-8 overflow-hidden">{item.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default JourneyListTable;
