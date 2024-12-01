
import React, { useEffect, useState } from "react";
import PageTitle from "../components/fragments/page-title";
import Link from "next/link";
import Image from "next/image";
import DailySideMenu from "../components/menu/daily-side-menu";
import { connectToDatabase, getAllRecordsByKind } from "@/lib/db";
import LearningSideMenu from "../components/menu/learning-side-menu";

export default async function pagd() {
  const client = await connectToDatabase();
  const records = await getAllRecordsByKind(client, "learning");

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <PageTitle title="Learning" />

      <div className="flex flex-col-reverse md:flex-row md:space-x-12">
        <div className="w-3/4 mx-auto">
          {records.map((item: any, index: number) => {
            return (
              <Link href={`/learning/${item._id}`} key={index}>
                <div className="flex justify-start items-center border-b-[0.5px] border-gray-300 py-4 space-x-4">
                  <div className="w-1/6">
                    <Image
                      src={item.image}
                      alt="learning image"
                      className="mx-auto"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="w-3/4 flex flex-col overflow-hidden hover:text-sub transition-all duration-200">
                    <p className="text-sm">{item.date}</p>
                    <p>{item.title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <LearningSideMenu />
      </div>
    </div>
  );
};
