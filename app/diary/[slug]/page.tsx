import DiaryLayout from "@/app/components/layout/diary-layout";
import { connectToDatabase, getAllRecordsByCategory, getAllRecordsByDate, getPaginatedRecordsByCategory, getPaginatedRecordsByDate } from "@/lib/db";
import DiaryList from "../../components/fragments/diary-list";

export default async function page({
  params,
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = parseInt((await searchParams).page || "1", 10);
  const client = await connectToDatabase();
  let allPosts;
  let filteredPosts;
  if (slug.startsWith("2")) {
    const [year, month] = slug.split("_");
    allPosts = await getAllRecordsByDate(client, Number(year), Number(month));
    filteredPosts = await getPaginatedRecordsByDate(client, Number(year), Number(month), page);
  }
  else {

  allPosts = await getAllRecordsByCategory(
    client,
    slug == "aws" || slug == "php"
      ? slug.toUpperCase()
      : slug.charAt(0).toUpperCase() + slug.slice(1),
  );

  filteredPosts = await getPaginatedRecordsByCategory(
    client,
    slug == "aws" || slug == "php"
      ? slug.toUpperCase()
      : slug.charAt(0).toUpperCase() + slug.slice(1),
    page
  );

}
  client.close();

  return (
    <DiaryLayout>
      <DiaryList posts={filteredPosts} pagination={allPosts.length % 5 == 0 ? allPosts.length / 5 : allPosts.length / 5 + 1} page={page} params={slug} />
    </DiaryLayout>
  );
}
