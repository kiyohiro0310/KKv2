import React from "react";
import PageTitle from "../components/fragments/page-title";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const histories = [
    {
      id: "id-123",
      image: "/images/typescript.png",
      date: "2024.08.26",
      category: "Typescript",
      title: "Typescript",
    },
    {
      id: "id-124",
      date: "2024.08.22",
      image: "/images/typescript.png",
      category: "Typescript",
      title: "Lambda",
    },
    {
      id: "id-125",
      date: "2024.08.21",
      image: "/images/typescript.png",
      category: "Typescript",
      title: "Typescript",
    },
    {
      id: "id-123",
      image: "/images/typescript.png",
      date: "2024.08.26",
      category: "Typescript",
      title: "Typescript",
    },
    {
      id: "id-124",
      date: "2024.08.22",
      image: "/images/typescript.png",
      category: "Typescript",
      title: "Lambda",
    },
    {
      id: "id-125",
      date: "2024.08.21",
      image: "/images/typescript.png",
      category: "Typescript",
      title: "Typescript",
    },
    {
      id: "id-123",
      image: "/images/typescript.png",
      date: "2024.08.26",
      category: "Typescript",
      title: "Typescript",
    },
    {
      id: "id-124",
      date: "2024.08.22",
      image: "/images/typescript.png",
      category: "Typescript",
      title: "Lambda",
    },
    {
      id: "id-125",
      date: "2024.08.21",
      image: "/images/typescript.png",
      category: "Typescript",
      title: "Typescript",
    },
  ];

  const lists = [
    {
      category: "Typescript",
      number: 10,
    },
    {
      category: "Python",
      number: 10,
    },
    {
      category: "PHP",
      number: 10,
    },
    {
      category: "Docker",
      number: 10,
    },
    {
      category: "AWS",
      number: 10,
    },
    {
      category: "Linux",
      number: 10,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <PageTitle title="History" />

      <div className="px-12 md:w-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col mx-auto md:grid md:grid-cols-3 gap-8">
          {histories.map((history: any, index: number) => {
            return (
              <Link href={`/learning/${history.id}`} key={index} className="md:mx-auto flex flex-row jusitfy-center items-center space-x-4 md:space-x-0 md:flex-col " >
                <Image
                  src={history.image}
                  alt=""
                  className="w-16 md:w-32"
                  width={150}
                  height={150}
                />
                <p>{history.title}</p>
              </ Link>
            );
          })}
        </div>
        <div className="w-full md:w-1/4 mx-auto pb-8 space-y-4 md:pb-0 md:space-y-0">
          {lists.map((item: any, index: number) => {
            return (
              <div key={index} className="mx-auto border-b-[0.5px] border-gray-500 py-2 hover:text-sub cursor-pointer transition-all duration-200">
                <Link href={`/history?category=${item.category.toLowerCase()}`} >
                  {item.category}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
