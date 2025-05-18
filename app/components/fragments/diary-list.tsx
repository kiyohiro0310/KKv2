"use client";

import { RecordType } from "@/dev";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const DiaryList = ({ posts, pagination, page, params}: { posts: any; pagination: number; page: number; params?: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePageChange = (newPage: number) => {
    setIsLoading(true);
    const path = !params ? `/diary?page=${newPage}` : `/diary/${params}?page=${newPage}`;
    router.push(path);
  };

  return (
    <div className="space-y-4">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-sub animate-pulse z-50"></div>
      )}
      {posts.map((post: RecordType | any, index: number) => (
        <div key={index} className="flex flex-col md:flex-row items-center dark:bg-dark p-4 rounded-lg shadow-md">
          <div className="w-full md:w-1/3">
            <Image
              src={post.image}
              alt="image"
              className="w-full h-72 object-cover rounded-lg"
              width={800}
              height={190}
              priority={index < 2}
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col space-y-3 px-4">
            <Link 
              className="text-xl font-bold hover:text-sub transition-all duration-200" 
              href={`/diary/${params ? params : post.category ? Array.isArray(post.category) ? post.category[0].toLowerCase() : post.category.toLowerCase() : "daily"}/${post._id}`}
              prefetch={true}
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">{new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}</p>
            <article
              className="w-full h-32 text-gray-500 dark:text-gray-200 text-[14.5px] overflow-hidden"
              dangerouslySetInnerHTML={{ __html: post.description }}
            ></article>
            <div className="text-sm pt-2 space-x-2">
              {post.category ? Array.isArray(post.category) ? post.category.map((c: string, index:number) => (
                <Link 
                  key={index} 
                  className="transition-all duraation-200 bg-sub hover:bg-main w-fit p-2 rounded-lg text-white" 
                  href={`/diary/${c.toLowerCase()}`}
                  prefetch={true}
                >
                  #{c}
                </Link>
              )) : (
                <Link 
                  className="transition-all duraation-200 bg-sub hover:bg-main w-fit p-2 rounded-lg text-white" 
                  href={`/diary/${post.category.toLowerCase()}`}
                  prefetch={true}
                >
                  #{post.category}
                </Link>
              ) : (
                <p className="bg-gray-400 w-fit p-2 rounded-lg text-white">Daily</p>
              )}
            </div>
          </div>
        </div>
      ))}
      {pagination > 1 && (
        <div className="flex justify-center items-center space-x-4 py-8">
          {Array.from({ length: pagination }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md border-[0.5px] border-gray-400 hover:bg-sub hover:text-white transition-all duration-200 ${
                page === index + 1 ? "bg-sub text-white" : ""
              }`}
              disabled={isLoading}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiaryList;
