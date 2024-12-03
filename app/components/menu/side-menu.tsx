import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SideMenu = ({list, isLearning}: {list: {}[]; isLearning: boolean;}) => {
  return (
    <div className="hidden md:block w-1/2 md:w-1/4 mx-auto space-y-4 pb-8">
          <Link href={'/learning'}>
            <p className="border-b-[0.5px] border-gray-500 py-4 md:py-2 text-center hover:text-sub transition-all duration-200">Learning</p>
          </Link>
          <Link href={'/daily'}>
            <p className="border-b-[0.5px] border-gray-500 py-4 md:py-2 text-center hover:text-sub transition-all duration-200">Daily</p>
          </Link>
          {isLearning ? <p className='hidden md:block font-bold'>Latest learning</p> : <p className='hidden md:block font-bold'>Latest my daily</p> }
          {list.map((item: any, index: number) => {
            return (
              <Link href={isLearning ? `/learning/${item._id}` : `/daily/${item._id}`} key={index} className="hidden md:block">
                <div className="flex justify-start items-center space-x-4 border-b-[0.5px] border-gray-300 py-2">
                  <div className="w-1/5 h-8 flex justify-center items-center overflow-hidden"><Image src={item.image} alt="learning image" width={40} height={40} /></div>
                  <div className="w-2/3 flex flex-col overflow-hidden hover:text-sub transition-all duration-200">
                    <p className="text-xs">{item.date}</p>
                    <p className="text-sm">{item.title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
  )
}

export default SideMenu