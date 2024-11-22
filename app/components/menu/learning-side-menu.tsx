import React from 'react'
import SideMenu from './side-menu';

const LearningSideMenu = () => {
  const dailyList = [
    {
      id: "id-123",
      image: "/images/life-middle.jpg",
      date: "2024.08.26",
      title: "Create ec2 using AWS CDK",
    },
    {
      id: "id-124",
      date: "2024.08.22",
      image: "/images/life-middle.jpg",
      title: "Create lambda function using AWS CDK",
    },
    {
      id: "id-125",
      date: "2024.08.21",
      image: "/images/life-middle.jpg",
      title: "CICD pipeline",
    },
    {
      id: "id-126",
      image: "/images/life-middle.jpg",
      date: "2024.08.26",
      title: "Create ec2 using AWS CDK",
    },
  ];
  return (
    <SideMenu list={dailyList}/>
  )
}

export default LearningSideMenu