import DiaryLayout from "../components/layout/diary-layout";
import DiaryList from "../components/fragments/diary-list";
import { connectToDatabase, getPaginatedRecords } from "@/lib/db";

export default async function page({ searchParams }: { searchParams: Promise<{ page?: string }>; }) {
  const page = parseInt((await searchParams).page || "1", 10);
  const client = await connectToDatabase();

  // Fetch total count and paginated records in parallel
  const [totalCount, posts] = await Promise.all([
    client.db().collection("records").countDocuments(), // Get total count
    getPaginatedRecords(client, page), // Fetch paginated records
  ]);

  client.close();

  // Calculate pagination
  const pagination = Math.ceil(totalCount / 5);

  return (
    <DiaryLayout>
      <div className="pb-12">
        <h1 className="text-4xl font-bold">Diary</h1>
        <p>Sharing experience and new findings.</p>
      </div>

      <DiaryList posts={posts} pagination={pagination} page={page} />
    </DiaryLayout>
  );
}
