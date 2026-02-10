import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import WhyEEC from "./Components/WhyEEC";
import Modules from "./Components/Modules";
import EECUnique from "./Components/EECUnique";
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
      <EECUnique />
      <FAQ />
      <Contact />
      <Floating />
    </main>
  );
}

export default function App() {
  return (
    <div className="font-sans scroll-smooth overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-eec" element={<WhyEEC />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/eec-unique" element={<EECUnique />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/floating" element={<Floating />} />
      </Routes>
      <Footer />
    </div>
  );
}