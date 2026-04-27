import React from "react";
import Hero from "./Hero";
import WhyEEC from "./WhyEEC";
import Modules from "./Modules";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="w-full bg-white overflow-hidden">
      <Hero />
      <About />
      <WhyEEC />
      <Modules />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
