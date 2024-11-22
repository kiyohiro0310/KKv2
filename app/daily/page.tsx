import React from "react";
import PageTitle from "../components/fragments/page-title";
import Link from "next/link";
import Image from "next/image";
import LearningSideMenu from "../components/menu/learning-side-menu";

const page = () => {
  const learningLists = [
    {
      id: "id-123",
      image: "/images/life-middle.jpg",
      date: "2024.08.26",
      title: "Speak fast...?",
    },
    {
      id: "id-124",
      date: "2024.08.22",
      image: "/images/life-middle.jpg",
      title: "Speak fast...?",
    },
    {
      id: "id-125",
      date: "2024.08.21",
      image: "/images/life-middle.jpg",
      title: "Create ec2 using AWS CDK",
    },
    {
      id: "id-123",
      image: "/images/life-middle.jpg",
      date: "2024.08.26",
      title: "Create ec2 using AWS CDK",
    },
    {
      id: "id-124",
      date: "2024.08.22",
      image: "/images/life-middle.jpg",
      title: "Create lambda function using AWS CDK",
    },
    {
      id: "id-125",
      date: "2024.08.21",
      image: "/images/life-middle.jpg",
      title: "Create ec2 using AWS CDK",
    },
    {
      id: "id-123",
      image: "/images/life-middle.jpg",
      date: "2024.08.26",
      title: "Create ec2 using AWS CDK",
    },
    {
      id: "id-124",
      date: "2024.08.22",
      image: "/images/life-middle.jpg",
      title: "Create lambda function using AWS CDK",
    },
    {
      id: "id-125",
      date: "2024.08.21",
      image: "/images/life-middle.jpg",
      title: "Create ec2 using AWS CDK",
    },
  ];


  return (
    <div className="max-w-4xl mx-auto pb-24">
      <PageTitle title="Daily" />

      <div className="flex flex-col-reverse md:flex-row md:space-x-12">
        <div className="w-3/4 mx-auto">
          {learningLists.map((item: any, index: number) => {
            return (
              <Link href={`/daily/${item.id}`} key={index}>
                <div className="flex justify-start items-center border-b-[0.5px] border-gray-300 py-4 space-x-4">
                  <div className='w-1/6'><Image src={item.image} alt="learning image" className="mx-auto" width={70} height={70} /></div>
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

export default page;
