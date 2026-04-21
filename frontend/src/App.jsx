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
      once: false,
      mirror: true,
      offset: 90,
      easing: "ease-out",
    });
    AOS.refresh();
    const cursor = document.getElementById('custom-cursor');
    const cursorFollower = document.getElementById('custom-cursor-follower');

    if (!cursor || !cursorFollower) return;

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const addHover = () => cursor.classList.add('hovering');
    const removeHover = () => cursor.classList.remove('hovering');

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, .card-hover');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    // Handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const newInteractives = document.querySelectorAll('button:not([data-hover]), a:not([data-hover]), .card-hover:not([data-hover])');
          newInteractives.forEach((el) => {
            el.setAttribute('data-hover', 'true');
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans scroll-smooth w-full flex justify-center bg-[#f8f9fa]">
      <div className="w-full max-w-[2560px] relative bg-white flex flex-col shadow-2xl">
        <div id="custom-cursor" className="custom-cursor hidden lg:block"></div>
        <div id="custom-cursor-follower" className="custom-cursor-follower hidden lg:block"></div>
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