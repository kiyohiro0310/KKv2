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
  const [allPosts, filteredPosts] = await Promise.all([
    slug.startsWith("2")
      ? getAllRecordsByDate(client, Number(slug.split("_")[0]), Number(slug.split("_")[1]))
      : getAllRecordsByCategory(
          client,
          slug == "aws" || slug == "php"
            ? slug.toUpperCase()
            : slug.charAt(0).toUpperCase() + slug.slice(1),
        ),
    slug.startsWith("2")
      ? getPaginatedRecordsByDate(client, Number(slug.split("_")[0]), Number(slug.split("_")[1]), page)
      : getPaginatedRecordsByCategory(
          client,
          slug == "aws" || slug == "php"
            ? slug.toUpperCase()
            : slug.charAt(0).toUpperCase() + slug.slice(1),
          page,
        ),
  ]);

  return (
    <DiaryLayout>
      <DiaryList posts={filteredPosts} pagination={allPosts.length % 5 == 0 ? allPosts.length / 5 : allPosts.length / 5 + 1} page={page} params={slug} />
    </DiaryLayout>
  );
}
