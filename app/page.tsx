import { connectToDatabase, getAllRecordsByKind } from "@/lib/db";
import AboutMe from "./components/home/about-me";
import Hero from "./components/home/hero";
import MyJourney from "./components/home/journey";
import Skill from "./components/home/skill";
import Works from "./components/home/works";

export default async function Home() {
  const client = await connectToDatabase();
  const learningDataArr = await getAllRecordsByKind(client, "learning");
  const lifeDataArr = await getAllRecordsByKind(client, "daily");

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
