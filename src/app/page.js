import Chef from "@/components/Chef";
import Hero from "@/components/Hero";
import Reserve from "@/components/Reserve";
import Welcome from "@/components/Welcome";
import Feedback from "@/components/Feedback";
import Open from "@/components/Open";

export default function Home() {
  return (
    <>
    {/* <h1> container</h1> */}
    <Hero/>
    <Welcome/>
    <Reserve/>
    <Chef/>
    <Feedback/>
    <Open/>
    </>
  );
}
