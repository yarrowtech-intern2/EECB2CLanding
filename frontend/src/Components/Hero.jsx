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
    <section id="home" className="relative h-auto lg:h-screen lg:min-h-[700px] w-full overflow-hidden flex justify-center bg-gradient-to-br from-amber-500 to-yellow-400">
      <div className="w-full max-w-[88rem] 2xl:max-w-[105rem] mx-auto flex flex-col lg:flex-row relative h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Vertical line separator mimicking reference */}
        <div className="hidden lg:block absolute left-[68%] top-0 bottom-0 w-[1px] bg-white/10 z-10" />

        {/* Desktop Mascot: absolute floating centered */}
        <div className="hidden lg:flex absolute bottom-[-10px] left-[58%] xl:left-[55%] 2xl:left-[52%] -translate-x-1/2 z-[15] pointer-events-none w-[380px] xl:w-[500px] 2xl:w-[620px] h-[90%] xl:h-[95%] 2xl:h-full items-end justify-center">
           <div className="w-full relative flex items-end justify-center pb-0" >
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[280px] xl:w-[350px] 2xl:w-[500px] h-[80px] bg-yellow-300/30 blur-[60px] rounded-full -z-10" />
              <img
                src={Student}
                alt="Education Symbol"
                className="w-full h-auto max-h-[70vh] xl:max-h-[80vh] 2xl:max-h-[90vh] object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)]"
              />
           </div>
        </div>

        {/* LEFT COLUMN: Text and CTA */}
        <div className="relative z-20 w-full lg:w-[68%] h-full flex flex-col pt-24 lg:pt-0 pb-12 lg:pb-0 text-white justify-center">
          
          <div className="z-[25] pointer-events-none self-start relative mb-10 lg:max-w-[420px] xl:max-w-[550px] 2xl:max-w-none">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300/20 blur-[50px] rounded-full" />
            <div className="animate-[fadeInUp_1s_ease-out_forwards]">
              <h1 className="text-4xl xs:text-5xl sm:text-[3.5rem] md:text-[4.5rem] lg:text-[3.8rem] xl:text-[5.0rem] 2xl:text-[6.5rem] leading-[1.05] tracking-[-0.04em] text-white font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
                Personalized <br />
                Learning <br />
                <span className="font-medium text-white/90 drop-shadow-sm">that adapts <br className="hidden lg:block"/> to you</span>
              </h1>
            </div>
          </div>

          <div className="max-w-[500px] lg:max-w-[380px] xl:max-w-[480px] 2xl:max-w-[650px] relative z-[25] pointer-events-auto">
            <div className="animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <p className="text-black/80 text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.05rem] xl:text-[1.15rem] 2xl:text-[1.4rem] leading-[1.6] font-medium tracking-wide mb-8 drop-shadow-md">
                AI-guided study paths, concept videos, and gamified progress tailored to boost 
                focus, reduce stress, and dramatically improve outcomes.
              </p>
              
              <button
                onClick={scrollToContact}
                className="group relative px-10 py-4 text-lg font-bold text-orange-950 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] transition-all duration-300 hover:-translate-y-1"
              >
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Mobile Mascot: Shown only below text on mobile */}
          <div className="flex justify-center items-center pt-16 pb-4 lg:hidden relative z-10 w-full mt-4">
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="w-[80vw] h-[80vw] max-w-[350px] max-h-[350px] bg-yellow-300/40 blur-[50px] rounded-full" />
            </div>
            <img
              src={Student}
              alt="Education Symbol"
              className="w-[90%] max-w-[480px] h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Featured Marquee */}
        <div className="relative z-10 flex w-full lg:w-[32%] h-auto lg:h-full flex-col justify-end pb-12 lg:pb-24 overflow-hidden">
          <div className="lg:mb-[10vh] w-full overflow-hidden relative">
            <div className="marquee-track flex gap-4 items-center">
              {loopedImages.map((item, idx) => (
                <div 
                  key={idx} 
                  className="marquee-card relative w-[200px] xl:w-[240px] h-[300px] xl:h-[360px] bg-black/20 shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer shrink-0 overflow-hidden rounded-3xl"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg font-bold leading-tight">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
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
