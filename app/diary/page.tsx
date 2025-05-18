import DiaryLayout from "../components/layout/diary-layout";
import DiaryList from "../components/fragments/diary-list";
import { connectToDatabase, getPaginatedRecords } from "@/lib/db";
import { Metadata } from "next";
import { cache } from "react";

// Cache the total count query
const getTotalCount = cache(async () => {
  const client = await connectToDatabase();
  try {
    const count = await client.db().collection("records").countDocuments();
    return count;
  } finally {
    await client.close();
  }
});

export const metadata: Metadata = {
  title: "Diary | Kiyohiro Kambayashi",
  description: "Sharing experience and new findings through my diary entries.",
};

interface PageProps {
  searchParams: Promise<{ page: string }>
}

export default async function Page({ searchParams }: PageProps) {
  try {
    const params = await searchParams;
    const page = parseInt(params.page || "1", 10);
    const client = await connectToDatabase();

    try {
      // Fetch total count and paginated records in parallel
      const [totalCount, posts] = await Promise.all([
        getTotalCount(),
        getPaginatedRecords(client, page),
      ]);

      // Calculate pagination
      const pagination = Math.ceil(totalCount / 5);

      return (
        <DiaryLayout>
          <div className="pb-12 animate-fade-in">
            <h1 className="text-4xl font-bold animate-slide-down">Diary</h1>
            <p className="animate-slide-up">Sharing experience and new findings.</p>
          </div>

          <div className="animate-fade-in">
            <DiaryList posts={posts} pagination={pagination} page={page} />
          </div>
        </DiaryLayout>
      );
    } finally {
      await client.close();
    }
  } catch (error) {
    console.error("Error loading diary page:", error);
    return (
      <DiaryLayout>
        <div className="pb-12 animate-fade-in">
          <h1 className="text-4xl font-bold animate-slide-down">Diary</h1>
          <p className="text-red-500 animate-slide-up">Sorry, there was an error loading the diary entries. Please try again later.</p>
        </div>
      </DiaryLayout>
    );
  }
}
