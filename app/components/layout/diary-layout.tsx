import { connectToDatabase, getAllRecords } from "@/lib/db";
import React from "react";
import DiaryLayoutMenuMobile from "../fragments/diary-layout-menu-mobile";

const DiaryLayout = async (props: React.PropsWithChildren) => {
  const client = await connectToDatabase();
  const items = await getAllRecords(client);
  client.close();

  const serializedItems = items.map((item: any) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className="w-screen dark:bg-dark dark:text-light">
      <div className="container mx-auto px-4 py-8 flex pt-36">
        <DiaryLayoutMenuMobile items={serializedItems} />
        <div className="w-full sm:w-3/4">{props.children}</div>
      </div>
    </div>
  );
};

export default DiaryLayout;
