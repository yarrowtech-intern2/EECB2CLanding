import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import WhyEEC from "./Components/WhyEEC";
import Modules from "./Components/Modules";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Floating from "./Components/Floating";
import Footer from "./Components/Footer";

function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhyEEC />
      <Modules />
      <FAQ />
      <Contact />
      <Floating />
    </main>
  );
}

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 850,
      once: true, // Only animate once to improve performance
      mirror: false, // Disable mirror to reduce recalculations
      offset: 50,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="font-sans scroll-smooth w-full flex justify-center bg-[#f8f9fa]">
      <div className="w-full max-w-[2560px] relative bg-white flex flex-col shadow-2xl">
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
      </div>
    </div>
  );
}