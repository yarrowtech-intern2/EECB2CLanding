import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import WhyEEC from "./Components/WhyEEC";
import Modules from "./Components/Modules";
import About from "./Components/About";
import OurMission from "./Components/ourMission";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Floating from "./Components/Floating";
import Footer from "./Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";

function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <OurMission />
      <WhyEEC />
      <Modules />
      <FAQ />
      <Contact />
    </main>
  );
}

export default function App() {
  React.useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false, 
      mirror: true, 
      offset: 80, 
      easing: "ease-out-cubic",
      anchorPlacement: 'top-bottom',
    });

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans scroll-smooth w-full flex justify-center bg-[#f8f9fa] overflow-x-hidden">
      <div className="w-full max-w-[2560px] relative bg-white flex flex-col shadow-2xl overflow-x-hidden">
        <Toaster position="bottom-right" reverseOrder={false} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-eec" element={<WhyEEC />} />
          <Route path="/modules" element={<Modules />} />
          {/* <Route path="/eec-unique" element={<EECUnique />} /> */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/floating" element={<Floating />} />
        </Routes>
        <Footer />
        <Floating />
      </div>
    </div>
  );
}