import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import B2c from "../assets/b2c.jpg";

import {
  FaRocket,
  FaBrain,
  FaGamepad,
  FaChevronDown,
} from "react-icons/fa";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      (headerHeight + 20);

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const highlights = [
    {
      icon: <FaBrain />,
      text: "AI-Powered Learning",
    },
    {
      icon: <FaGamepad />,
      text: "Gamified Progress",
    },
    {
      icon: <FaRocket />,
      text: "Boost Results",
    },
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${B2c})`,
          transform: `scale(1.1) translateY(${scrollY * 0.15}px)`,
        }}
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-linear-to-b from-black/80 via-black/60 to-black/80" />

      {/* Animated accent glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/15 rounded-full blur-[120px] z-[2]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] z-[2]" />

      {/* Content */}
      <div className="w-full max-w-5xl mx-auto text-center relative z-10 px-4 pt-28 sm:pt-32 md:pt-36 pb-20">
        {/* Badge */}
        {/* <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-white/90 font-bold text-sm tracking-wide">
            India's Smart Learning Platform
          </span>
        </div> */}

        {/* Main heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="180"
          className="font-black tracking-tight leading-[1.05] text-[38px] sm:text-[52px] md:text-[68px] lg:text-[82px] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          Personalized
          <br />
          <span>learning that adapts</span>
          <br />
          <span>to </span>
          <span className="relative inline-block">
            <span className="relative z-10">you</span>
            <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-yellow-400/40 rounded-sm -skew-x-3 z-0" />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="260"
          className="mt-7 max-w-2xl mx-auto text-white/85 text-base sm:text-lg md:text-xl leading-relaxed font-medium"
        >
          AI-guided study paths, concept support, and gamified progress —
          crafted to boost focus, reduce stress, and improve outcomes.
        </p>

        {/* Highlight pills */}
        <div
          data-aos="fade-up"
          data-aos-delay="340"
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 font-semibold text-sm hover:bg-white/15 transition-all duration-300"
            >
              <span className="text-yellow-400">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="420"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold text-base sm:text-lg shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get Started Free
          </button>

          <button
            onClick={() => scrollToSection("eecunique")}
            className="px-10 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 text-white font-extrabold text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-16 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("why-eec")}
        >
          <span className="text-white/50 text-xs font-bold tracking-widest uppercase group-hover:text-white/70 transition">
            Scroll to explore
          </span>
          <FaChevronDown className="text-white/40 text-sm animate-bounce group-hover:text-yellow-400 transition" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
