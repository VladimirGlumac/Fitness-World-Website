import HomePage from "./components/HomePage";
import WhoWeAre from "./components/WhoWeAre";
import MeetTheTeam from "./components/MeetTheTeam";
import Classes from "./components/Classes";
import Memberships from "./components/Memberships";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <HomePage />
      <WhoWeAre />
      <MeetTheTeam />
      <Classes />
      <Memberships />
      <Contact />
    </>
  );
}
