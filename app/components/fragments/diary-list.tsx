import { recordType } from "@/dev";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DiaryList = async ({ posts, pagination, page, params}: { posts: any; pagination: number; page: number; params?: string }) => {
  return (
    <div className="space-y-4">
      {posts.map((post: recordType | any, index: number) => (
        <div key={index} className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md">
          <div className="w-full md:w-1/3">
            <Image
              src={post.image}
              alt="image"
              className="w-full h-72 object-cover rounded-lg"
              width={800}
              height={190}
              priority
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col space-y-3 px-4">
            <Link className="text-xl font-bold hover:text-sub transition-all duration-200" href={`/diary/${params ? params : post.category ? Array.isArray(post.category) ? post.category[0].toLowerCase() : post.category.toLowerCase() : "daily"}/${post._id}`}>{post.title}</Link>
            <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</p>
            <article
              className="w-full h-32 text-gray-500 text-[14.5px] overflow-hidden"
              dangerouslySetInnerHTML={{ __html: post.description }}
            ></article>
            <div className="text-sm pt-2 space-x-2">
              {post.category ? Array.isArray(post.category) ? post.category.map((c: string, index:number) => <Link key={index} className="transition-all duraation-200 bg-sub hover:bg-main w-fit p-2 rounded-lg text-white" href={`/diary/${c.toLowerCase()}`}>#{c}</Link>
              
              ) : (
                <Link className="transition-all duraation-200 bg-sub hover:bg-main w-fit p-2 rounded-lg text-white" href={`/diary/${post.category.toLowerCase()}`}>#{post.category}</Link>
              ) : (
                <p className="bg-gray-400 w-fit p-2 rounded-lg text-white">Daily</p>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center space-x-4 py-8">
        {Array.from({ length: pagination }, (_, index) => (
          <Link
            key={index}
            href={!params ? `/diary?page=${index + 1}`: `/diary/${params}?page=${index + 1}`}
            className={`px-4 py-2 rounded-md border-[0.5px] border-gray-400 hover:bg-sub hover:text-white transition-all duration-200 ${
              page === index + 1 ? "bg-sub text-white" : ""
            }`}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
