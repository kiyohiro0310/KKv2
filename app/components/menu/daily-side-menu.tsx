import React from 'react'
import SideMenu from './side-menu';

const DailySideMenu = () => {
  const learningList = [
    {
      id: "id-123",
      image: "/images/life-middle.jpg",
      date: "2024.08.26",
      title: "Speak fast...?",
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
      title: "Create ec2 using AWS CDK",
    },
    {
      id: "id-123",
      image: "/images/life-middle.jpg",
      date: "2024.08.26",
      title: "Create ec2 using AWS CDK",
    },
  ];
  return (
    <SideMenu list={learningList}/>
  )
}

export default DailySideMenu