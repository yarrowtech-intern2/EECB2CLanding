import React from "react";
import Hero from "./Hero";
import WhyEdifyEight from "./WhyEdifyEight";
import Modules from "./Modules";
import About from "./About";
import OurMission from "./ourMission";
import FAQ from "./FAQ";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="w-full bg-white overflow-hidden">
      <Hero />
      <About />
      <OurMission />
      <WhyEdifyEight />
      <Modules />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
