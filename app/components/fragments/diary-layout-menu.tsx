import { datefunc } from '@/functions/date';
import { categories } from '@/lib/categories'
import Link from 'next/link'
import React from 'react'

const DiaryLayoutMenu = ( { items }: {items: any}) => {
    
  const dateCounts = datefunc(items);

  return (
    <div className="hidden md:block w-1/4">
        <div id="category" className="w-full">
          <h1>Category</h1>
          <div className="p-3 flex flex-col items-start justify-center">
            {categories.map((item: any, index: number) => (
              <Link
                href={`/diary/${item.category.toLowerCase()}`}
                key={index}
                className="font-bold py-2 hover:text-sub cursor-pointer transition-all duration-200"
              >
                {item.category}
              </Link>
            ))}
          </div>
        </div>

        <div id="date" className="w-full">
          <h1>Date</h1>
          <div className="p-3 flex flex-col items-start justify-center">
            {dateCounts.map((item: any, index: number) => (
              <div className="flex w-full items-center space-x-4" key={index}>
                <span className="flex h-8 w-8 items-center justify-center rounded-md border-[0.5px] border-gray-400" >{item.count}</span>
                <Link
                  href={`/diary/${item.year}_${item.month}`}
                  key={index}
                  className="font-bold py-2 hover:text-sub cursor-pointer transition-all duration-200"
                >
                  {new Date(item.year, item.month - 1).toLocaleString("default", {
                    month: "long",
                  }).slice(0, 3)}, {item.year}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default DiaryLayoutMenu