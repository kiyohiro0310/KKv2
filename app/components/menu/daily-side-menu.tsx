import React from 'react'
import SideMenu from './side-menu';
import { connectToDatabase, getAllRecordsByKind } from '@/lib/db';

export default async function DailySideMenu () {
  const client = await connectToDatabase();
  const records = await getAllRecordsByKind(client, "learning");
  return (
    <SideMenu list={records} isLearning={true}/>
  )
}

export const dynamic = "force-dynamic";