import MarkdownPreview from "@/app/components/fragments/markdown-preview";
import PageTitle from "@/app/components/fragments/page-title";
import DailySideMenu from "@/app/components/menu/daily-side-menu";
import LearningSideMenu from "@/app/components/menu/learning-side-menu";
import { connectToDatabase, getRecordById } from "@/lib/db";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const client = await connectToDatabase();
  const record = await getRecordById(client, slug) as any;

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <PageTitle title="Daily" />

      <div className="flex md:flex-row md:space-x-12">
        <div className="w-3/4 mx-auto flex flex-col space-y-16">
          <div>
            <h1 className="text-2xl font-bold">{record.title}</h1>
            <p className="text-sm text-gray-500">
              {record.date}
            </p>
          </div>

          <MarkdownPreview markdown={record.description} />
          <Link
            href={"/daily"}
            className="text-center border-gray-300 p-2 border-t border-b hover:bg-skillC"
          >
            Back to list
          </Link>
        </div>

        <DailySideMenu />
      </div>
    </div>
  );
}
