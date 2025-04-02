import { categories } from "@/lib/categories";
import Link from "next/link";
import React from "react";

const HistorySideMenu = () => {
  
  return (
    <div className="w-full md:w-1/4 mx-auto pb-8 space-y-4 md:pb-0 md:space-y-0">
      {categories.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="mx-auto border-b-[0.5px] border-gray-500 py-2 hover:text-sub cursor-pointer transition-all duration-200"
          >
            <Link href={`/history/${item.category}`}>{item.category}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default HistorySideMenu;
