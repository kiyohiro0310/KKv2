import { connectToDatabase, getThreeLatestRecordsByKind } from "@/lib/db";
import AboutMe from "./components/home/about-me";
import Hero from "./components/home/hero";
import MyJourney from "./components/home/journey";
import Skill from "./components/home/skill";
import Works from "./components/home/works";
import { cache } from "react";

export const fetchLearningData = cache(async () => {
  const client = await connectToDatabase();
  return getThreeLatestRecordsByKind(client, "learning");
});

export const fetchLifeData = cache(async () => {
  const client = await connectToDatabase();
  return getThreeLatestRecordsByKind(client, "daily");
});

export default async function Home() {
  const learningDataArr = await fetchLearningData();
  const lifeDataArr = await fetchLifeData();

  return (
    <div>
      <Hero />
      <Skill />
      <MyJourney learningData={JSON.stringify(learningDataArr)} lifeData={JSON.stringify(lifeDataArr)} />
      <Works />
      <AboutMe />
    </div>
  );
}
