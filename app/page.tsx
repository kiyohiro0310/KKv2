import AboutMe from "./components/home/about-me";
import Hero from "./components/home/hero";
import MyJourney from "./components/home/journey";
import Skill from "./components/home/skill";
import Works from "./components/home/works";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skill />
      <MyJourney />
      <Works />
      <AboutMe />
    </div>
  );
}
