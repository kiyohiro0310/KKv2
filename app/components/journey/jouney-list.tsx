import React from 'react'
import JourneyListTable from './journey-list-table';

const JourneyList = ({learnings, lifes}: {learnings: {}[]; lifes: {}[]}) => {
  return (
    <div className='py-24 w-full md:w-2/3 space-y-4 md:space-y-0 md:space-x-4 mx-auto flex flex-col md:flex-row justify-around items-center'>
        <JourneyListTable title='Learning Journey' lists={learnings}/>
        <JourneyListTable title='Life Journey' lists={lifes}/>
    </div>
  )
}

export default JourneyList