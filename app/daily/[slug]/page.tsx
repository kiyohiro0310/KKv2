import PageTitle from "@/app/components/fragments/page-title";
import DailySideMenu from "@/app/components/menu/daily-side-menu";
import LearningSideMenu from "@/app/components/menu/learning-side-menu";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log("id: ", slug);

  const mockData = {
    title: "Speak fast...?",
    category: "Typescript, AWS",
    date: "2024.08.26",
    description:
      "<div>I’ve learned AWS CDK today.</div><br/><p>This coding is really fun, I’ll share my experience here and hope it will be helpful for you all!</p>",
  };

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <PageTitle title="Daily" />

      <div className="flex md:flex-row md:space-x-12">
        <div className="w-3/4 mx-auto flex flex-col space-y-16">
          <div>
            <h1 className="text-2xl font-bold">{mockData.title}</h1>
            <p className="text-sm text-gray-500">
              Category: {mockData.category} | {mockData.date}
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: mockData.description }}></div>
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
