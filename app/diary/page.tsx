
import DiaryLayout from "../components/layout/diary-layout";
import DiaryList from "../components/fragments/diary-list";
import { connectToDatabase, getAllRecords, getPaginatedRecords } from "@/lib/db";


export default async function page({ searchParams }: { searchParams: Promise<{ page?: string }>; }) {
  const page = parseInt((await searchParams).page || "1", 10);
  const client = await connectToDatabase();
  const pagination = (await getAllRecords(client)).length / 5;
  const posts = await getPaginatedRecords(client, page);
  client.close();

  return (
    <DiaryLayout>
      <div className="pb-12">
        <h1 className="text-4xl font-bold">Diary</h1>
        <p>Sharing experinece and new findings.</p>
        
      </div>

      <DiaryList posts={posts} pagination={pagination} page={page} />
      
    </DiaryLayout>
  );
}
