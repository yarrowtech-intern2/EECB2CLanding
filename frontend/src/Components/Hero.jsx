import React, { useState, useEffect } from "react";
import { ChevronRight, Brain, Lightbulb, BookOpen, Award } from "lucide-react";

import Student from "../assets/student.png"
import cap from "../assets/cap.jpg";
import AI from "../assets/AI.jpg";
import Book from "../assets/book.jpg";
import Trophy from"../assets/Trophy.jpg";

const images = [
  { img: AI, title: "AI Learning", subtitle: "Smart Education System", icon: <Brain size={24} className="text-yellow-400" /> },
  { img: cap, title: "Smart Students", subtitle: "Learning Excellence", icon: <Lightbulb size={24} className="text-yellow-400" /> },
  { img: Book, title: "Smart Learning", subtitle: "Smart Study System", icon: <BookOpen size={24} className="text-yellow-400" /> },
  { img: Trophy, title: "Top Achievers", subtitle: "Student Success", icon: <Award size={24} className="text-yellow-400" /> },
];

const loopedImages = [...images, ...images];

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section id="home" className="relative h-auto md:h-screen min-h-[100vh] w-full overflow-hidden flex flex-col md:flex-row bg-gradient-to-br from-amber-500 to-yellow-400">
      
      {/* Vertical line separator mimicking reference */}


      {/* Mobile: shown in-flow between columns */}
      <div className="flex justify-center items-end pt-12 pb-0 lg:hidden relative z-10 w-full pointer-events-none" style={{ marginBottom: '-2px' }}>
        <div className="absolute inset-0 flex justify-center items-end">
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-yellow-300/30 blur-[80px] rounded-full" />
        </div>
        <img
          src={Student}
          alt="Education Symbol"
          className="w-[340px] sm:w-[460px] md:w-[540px] h-auto object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)] relative z-10 mx-auto"
        />
      </div>

      {/* Desktop: absolute floating centered */}
      <div className="hidden lg:block absolute bottom-0 left-[52%] -translate-x-1/2 z-20 pointer-events-none w-[560px] xl:w-[720px]">
         <div className="w-full h-full flex items-center justify-center" >
            <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-yellow-300/30 blur-[60px] rounded-full -z-10" />
            <img
              src={Student}
              alt="Education Symbol"
              className="w-full h-auto object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)]"
            />
         </div>
      </div>

      {/* LEFT COLUMN */}
      <div className="relative z-10 w-full lg:w-[68%] h-full flex flex-col pt-24 sm:pt-32 lg:pt-32 pb-8 px-6 sm:px-12 lg:px-24 xl:px-32 text-white justify-start">
        
        {/* Main Heading (Massive and lower like 'Modern Care...' in reference) */}
        <div className="z-10 animate-[fadeInUp_1s_ease-out_forwards] pointer-events-none self-start relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300/20 blur-[50px] rounded-full" />
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6.5rem] leading-[0.9] tracking-[-0.04em] text-white font-bold drop-shadow-md">
            Personalized <br />
            Learning <br />
            <span className="font-medium text-black/90 drop-shadow-sm">that adapts <br/> to you</span>
          </h1>
        </div>

        {/* Spacer to push content down */}
        <div className="flex-1 min-h-[40px] lg:min-h-[60px]"></div>

        {/* Top Text (Intro and Button) */}
        <div className="max-w-[500px] animate-[fadeInUp_1s_ease-out_0.2s_forwards] mb-[8vh] relative z-10">
          <p className="text-black/80 text-[1.1rem] sm:text-[1.25rem] leading-[1.7] font-medium tracking-wide mb-8 drop-shadow-sm">
            AI-guided study paths, concept videos, and gamified progress tailored to boost 
            focus, reduce stress, and dramatically improve outcomes.
          </p>
          
          <button
            onClick={scrollToContact}
            className="group relative px-10 py-4 text-lg font-bold text-orange-950 bg-white rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] transition-all duration-300 pointer-events-auto hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Start Free Trial <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="relative z-10 flex w-full lg:w-[32%] h-auto lg:h-[100vh] flex-col justify-end pb-8 pl-6 sm:pl-12 lg:pl-0 pr-0 mt-12 lg:mt-0 overflow-hidden">
        
        {/* Cards Row Container */}
        <div className="lg:mb-[15vh] w-full overflow-hidden relative">
          {/* Edge Blur Overlays using CSS mask for a clean fade effect */}
          {/* Removed overlays per user request */}
          {/* Marquee Track */}
          <div className="marquee-track flex gap-4 items-center">
            {loopedImages.map((item, idx) => (
              <div 
                key={idx} 
                className="marquee-card relative w-[180px] sm:w-[220px] lg:w-[200px] xl:w-[240px] h-[280px] sm:h-[340px] lg:h-[300px] xl:h-[360px] bg-black/20 shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer shrink-0 overflow-hidden rounded-3xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1a0a04]/90 via-[#1a0a04]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-sm sm:text-base font-normal text-[#F6F5EE] leading-tight">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FIXED BOTTOM META ALIGNMENTS */}
      <div className="absolute bottom-8 left-0 w-full px-6 sm:px-12 lg:px-24 xl:px-32 flex flex-col md:flex-row justify-between gap-8 md:gap-0 pointer-events-none z-30">
        

      </div>

      {/* CSS */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInFromRight {
          from { opacity: 0; transform: translate(100vw, -50%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }

        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marquee-scroll 25s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>

    </section>
  );
};

export default Hero;
