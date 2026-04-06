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
    <section id="home" className="relative h-auto lg:h-screen lg:min-h-[700px] w-full overflow-hidden flex flex-col lg:flex-row bg-gradient-to-br from-amber-500 to-yellow-400">
      
      {/* Vertical line separator mimicking reference */}

      {/* Desktop: absolute floating centered */}
      <div className="hidden lg:flex absolute bottom-[-10px] left-[52%] -translate-x-1/2 z-20 pointer-events-none w-[540px] xl:w-[680px] h-full items-end justify-center">
         <div className="w-full relative flex items-end justify-center pb-0" >
            <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-yellow-300/30 blur-[60px] rounded-full -z-10" />
            <img
              src={Student}
              alt="Education Symbol"
              className="w-full h-auto max-h-[85vh] object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)]"
            />
         </div>
      </div>

      {/* LEFT COLUMN */}
      <div className="relative z-10 w-full lg:w-[68%] h-full flex flex-col pt-24 sm:pt-28 md:pt-36 lg:pt-0 pb-12 md:pb-16 lg:pb-0 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 text-white justify-center">
        
        {/* Main Heading */}
        <div className="z-10 pointer-events-none self-start relative mb-10">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300/20 blur-[50px] rounded-full" />
          <div className="animate-[fadeInUp_1s_ease-out_forwards]">
            <div style={{ animation: 'float 6s ease-in-out infinite' }}>
              <h1 className="text-4xl xs:text-5xl sm:text-[3.5rem] md:text-[4.5rem] lg:text-[4.2rem] xl:text-[5.5rem] leading-[1.05] tracking-[-0.04em] text-white font-bold drop-shadow-md break-words">
                Personalized <br />
                Learning <br />
                <span className="font-medium text-black/90 drop-shadow-sm">that adapts <br/> to you</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Top Text (Intro and Button) */}
        <div className="max-w-[500px] relative z-10">
          <div className="animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div style={{ animation: 'float 6s ease-in-out infinite 0.5s' }}>
              <p className="text-black/80 text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.1rem] xl:text-[1.2rem] leading-[1.6] font-medium tracking-wide mb-8 drop-shadow-sm max-w-[90%] md:max-w-[85%] lg:max-w-full">
                AI-guided study paths, concept videos, and gamified progress tailored to boost 
                focus, reduce stress, and dramatically improve outcomes.
              </p>
              
              <button
                onClick={scrollToContact}
                className="group relative px-10 py-4 text-lg font-bold text-orange-950 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] transition-all duration-300 pointer-events-auto hover:-translate-y-1 block w-fit"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Image: shown in-flow below text, hidden on Desktop */}
        <div className="flex justify-center items-center pt-16 pb-4 lg:hidden relative z-10 w-full pointer-events-none mt-4">
          <div className="absolute inset-0 flex justify-center items-center -z-10 bg-gradient-to-br from-amber-500/0 to-amber-500/0">
            <div className="w-[80vw] h-[80vw] max-w-[350px] max-h-[350px] bg-yellow-300/40 blur-[50px] rounded-full" />
          </div>
          <img
            src={Student}
            alt="Education Symbol"
            className="w-[90%] max-w-[480px] h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)] relative z-10 mx-auto"
          />
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="relative z-10 flex w-full lg:w-[32%] h-auto lg:h-full flex-col justify-end pb-8 pl-6 sm:pl-12 lg:pl-0 pr-0 mt-12 lg:mt-0 overflow-hidden">
        
        {/* Cards Row Container */}
        <div className="lg:mb-[15vh] w-full overflow-hidden relative">
          {/* Edge Blur Overlays using CSS mask for a clean fade effect */}
          {/* Removed overlays per user request */}
          {/* Marquee Track */}
          <div className="marquee-track flex gap-4 items-center">
            {loopedImages.map((item, idx) => (
              <div 
                key={idx} 
                className="marquee-card relative w-[180px] sm:w-[220px] md:w-[240px] lg:w-[200px] xl:w-[240px] h-[280px] sm:h-[340px] md:h-[360px] lg:h-[300px] xl:h-[360px] bg-black/20 shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer shrink-0 overflow-hidden rounded-3xl"
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
