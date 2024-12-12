import React from "react";
import PageTitle from "../components/fragments/page-title";
import Image from "next/image";
import Link from "next/link";
import { connectToDatabase, getAllRecordsByKind } from "@/lib/db";
import HistorySideMenu from "../components/menu/history-side-menu";

export default async function page() {
  const client = await connectToDatabase();
  const records = await getAllRecordsByKind(client, "learning");

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
                  src={Array.isArray(history.category) ? `/images/language/${history.category[0].trim()}.png` : `/images/language/${history.category.trim()}.png`}
                  alt={history.category + " image"}
                  className="w-16 md:w-32"
                  width={150}
                  height={150}
                  priority
                />
                <p className="text-center">
                  {history.title}
                </p>
              </Link>
            );
          })}
        </div>
        <HistorySideMenu />
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";