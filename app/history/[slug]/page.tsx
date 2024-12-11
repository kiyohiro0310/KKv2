import React from "react";
import Image from "next/image";
import Link from "next/link";
import { connectToDatabase, getAllRecordsByCategory } from "@/lib/db";
import PageTitle from "@/app/components/fragments/page-title";
import HistorySideMenu from "@/app/components/menu/history-side-menu";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug= (await params).slug as any;
  const client = await connectToDatabase();
  const records = await getAllRecordsByCategory(client, slug);

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <PageTitle title="History" />
      {records.length == 0 && <p>There is no records</p> }

      <div className="px-12 md:w-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col mx-auto md:grid md:grid-cols-3 gap-8">
          {records.map((history: any, index: number) => {
            return (
              <Link href={`/learning/${history._id}`} key={index} className="md:mx-auto flex flex-row jusitfy-center items-center space-x-4 md:space-x-0 md:flex-col " >
                <Image
                  src={Array.isArray(history.category) ? `/images/language/${history.category[0].trim()}.png` : `/images/language/${history.category}.png`}
                  alt={history.category + " image"}
                  className="w-16 md:w-32"
                  width={150}
                  height={150}
                />
                <p className="text-center">

                  {Array.isArray(history.category) ? history.category.map((item: any, index: number) => (
                    <span key={index}>
                      {item}
                      {history.category.indexOf(item) !=
                        history.category.length - 1 && " &"}
                    </span>
                  )) : (
                    <span key={index}>
                      {history.category}
                    </span>
                  )}
                </p>
              </ Link>
            );
          })}
        </div>
        <HistorySideMenu />
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";