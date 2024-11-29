import React from 'react'

const PageTitle = ({title}: {title: string}) => {
  return (
    <div className='space-y-16 pt-48 pb-16 flex flex-col justify-center items-center md:block'>
        <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
        <div className="w-16 h-[3px] bg-main mt-6"></div>
    </div>
  )
}

export default PageTitle