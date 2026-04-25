import React, { useState, useEffect } from "react";
import { ChevronRight, Brain, Lightbulb, BookOpen, Award } from "lucide-react";

import Student from "../assets/student.webp"
import cap from "../assets/cap.webp";
import AI from "../assets/AI.webp";
import Book from "../assets/book.webp";
import Trophy from"../assets/Trophy.webp";

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
    <section id="home" className="relative h-screen min-h-[100svh] w-full flex flex-col bg-gradient-to-br from-amber-500 to-yellow-400 overflow-hidden pt-[70px] lg:pt-0">
      <div className="flex-1 w-full max-w-[88rem] mx-auto flex flex-col lg:flex-row relative px-4 sm:px-6 lg:px-12 items-center justify-between overflow-hidden">
        
        {/* Desktop Mascot */}
        <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-[15] pointer-events-none w-[420px] xl:w-[640px] h-[90%] items-end justify-center">
           <div className="w-full relative flex items-end justify-center" >
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[500px] h-[80px] bg-yellow-300/30 blur-[60px] rounded-full -z-10" />
              <img
                src={Student}
                alt="Education Symbol"
                className="w-full h-auto max-h-[90vh] object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)]"
              />
           </div>
        </div>

        {/* CONTENT COLUMN */}
        <div className="relative z-20 w-full lg:w-[45%] flex flex-col text-white text-center lg:text-left items-center lg:items-start justify-center py-2 lg:py-0">
          
          <h1 className="text-[1.6rem] xs:text-3xl sm:text-4xl lg:text-[3.2rem] xl:text-[4rem] leading-[1.1] tracking-tight text-white font-black drop-shadow-md mb-3">
            Personalized <br />
            Learning <span className="font-medium opacity-90">that adapts to you</span>
          </h1>

          <p className="max-w-[420px] text-black/80 text-[0.75rem] sm:text-base leading-relaxed font-medium mb-5 sm:mb-8">
            AI-guided study paths, concept videos, and gamified progress tailored to boost 
            focus, reduce stress, and dramatically improve outcomes.
          </p>
          
          <button
            onClick={scrollToContact}
            className="px-8 py-3 text-base font-bold text-orange-950 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all active:scale-95"
          >
            Start Free Trial
          </button>

          {/* Mobile Mascot */}
          <div className="mt-4 mb-2 lg:hidden w-full max-w-[240px]">
            <img
              src={Student}
              alt="Student"
              className="w-full h-auto max-h-[25svh] object-contain drop-shadow-2xl"
            />
            <div className="mt-2 text-center">
              <p className="text-black/90 font-bold text-[10px] sm:text-xs tracking-tight">
                Empower Your Future with Smart Learning! 🎓
              </p>
              <p className="text-black/70 font-medium text-[8px] sm:text-[10px]">
                Join the revolution in personalized education.
              </p>
            </div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="relative z-10 w-full lg:w-[32%] mt-auto lg:mt-0 flex flex-col justify-end pb-6 lg:pb-0">
          <div className="w-full overflow-hidden">
            <div className="marquee-track flex animate-gpu">
              {[0, 1].map((_, blockIdx) => (
                <div key={blockIdx} className="flex gap-2 pr-2" aria-hidden={blockIdx === 1}>
                  {images.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="relative w-[110px] xs:w-[130px] sm:w-[180px] h-[150px] xs:h-[180px] sm:h-[240px] bg-black/20 rounded-xl overflow-hidden shrink-0"
                    >
                      <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white text-[10px] font-bold">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee-scroll 20s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .smooth-shadow {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      box-shadow 0.5s ease;
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
