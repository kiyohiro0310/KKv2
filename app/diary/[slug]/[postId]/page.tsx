import DiaryLayout from "@/app/components/layout/diary-layout";
import { connectToDatabase, getRecordById } from "@/lib/db";
import { marked } from "marked";
import Image from "next/image";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string; postId: string }>;
}) {
  const { postId } = await params;
  const client = await connectToDatabase();
  const post = await getRecordById(client, postId);
  client.close();
  if (!post) {
    return <div className="text-center text-2xl font-bold">Post not found</div>;
  }

  const content = await marked.parse(post.description);

  return (
    <DiaryLayout>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="w-16 h-[3px] bg-main mt-6"></div>
        <div>
          <p className="text-gray-500 text-sm">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-500 text-sm">
            {post.category ? post.category.charAt(0).toUpperCase() + post.category.slice(1) : "Daily"}
          </p>
        </div>

        <Image
          src={post.image}
          alt="image"
          className="w-full h-72 object-cover rounded-lg"
          width={800}
          height={190}
          priority
        />
        <article dangerouslySetInnerHTML={{ __html: content }}></article>
      </div>
    </DiaryLayout>
  );
}
