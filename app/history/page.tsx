import React from "react";
import PageTitle from "../components/fragments/page-title";
import Image from "next/image";
import Link from "next/link";
import { connectToDatabase, getAllRecordsByKind } from "@/lib/db";

export default async function page() {
  const client = await connectToDatabase();
  const records = await getAllRecordsByKind(client, "learning");

  const lists = [
    {
      category: "Typescript",
    },
    {
      category: "Python",
    },
    {
      category: "PHP",
    },
    {
      category: "Docker",
    },
    {
      category: "AWS",
    },
    {
      category: "Linux",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <PageTitle title="History" />

      <div className="px-12 md:w-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col mx-auto md:grid md:grid-cols-3 gap-8">
          {records.map((history: any, index: number) => {
            return (
              <Link
                href={`/learning/${history._id}`}
                key={index}
                className="md:mx-auto flex flex-row jusitfy-center items-center space-x-4 md:space-x-0 md:flex-col "
              >
                <Image
                  src={`/images/language/${history.category[0]}.png`}
                  alt=""
                  className="w-16 md:w-32"
                  width={150}
                  height={150}
                />
                <p className="text-center">
                  {history.category.map((item: any, index: number) => (
                    <span key={index}>
                      {item}
                      {history.category.indexOf(item) !=
                        history.category.length - 1 && " &"}
                    </span>
                  ))}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="w-full md:w-1/4 mx-auto pb-8 space-y-4 md:pb-0 md:space-y-0">
          {lists.map((item: any, index: number) => {
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
      </div>
    </div>
  );
}
