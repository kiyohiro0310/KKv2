import React from 'react'

const ExperienceTitle = ({title, date}: {title: string; date: string;}) => {
  return (
    <div className='w-fit flex space-x-4 items-center border-b-[0.5px] border-gray-300 py-2'>
        <div className='w-[3px] h-10 bg-sub'></div>
        <div className='space-y-1'>
            <p className='text-sm'>{date}</p>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    </div>
  )
}

export default ExperienceTitle