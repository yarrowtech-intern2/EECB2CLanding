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
    <section id="home" className="relative h-auto lg:h-screen lg:min-h-[600px] w-full flex justify-center bg-gradient-to-br from-amber-500 to-yellow-400 overflow-hidden">
      <div className="w-full max-w-[88rem] 2xl:max-w-[105rem] 3xl:max-w-[120rem] mx-auto flex flex-col lg:flex-row relative h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        
        {/* Desktop Mascot: absolute floating centered */}
        <div className="hidden lg:flex absolute bottom-0 left-[54%] xl:left-[52%] 2xl:left-[50%] -translate-x-1/2 z-[15] pointer-events-none w-[420px] xl:w-[540px] 2xl:w-[640px] 3xl:w-[750px] h-[90%] xl:h-[95%] items-end justify-center">
           <div className="w-full relative flex items-end justify-center pb-0" >
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[300px] xl:w-[400px] 2xl:w-[500px] h-[80px] bg-yellow-300/30 blur-[60px] rounded-full -z-10" />
              <img
                src={Student}
                alt="Education Symbol"
                fetchpriority="high"
                loading="eager"
                className="w-full h-auto max-h-[75vh] xl:max-h-[85vh] 2xl:max-h-[95vh] object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)] animate-gpu"
                decoding="async"
              />
           </div>
        </div>

        {/* LEFT COLUMN: Text and CTA */}
        <div className="relative z-20 w-full lg:w-[45%] xl:w-[42%] 2xl:w-[40%] min-h-full flex flex-col pt-32 sm:pt-40 lg:pt-24 pb-12 lg:pb-0 text-white justify-center lg:pr-10 xl:pr-16">
          
          <div className="z-[25] pointer-events-none self-start relative mb-10 lg:max-w-[380px] xl:max-w-[480px] 2xl:max-w-[580px] 3xl:max-w-[1000px]">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300/20 blur-[50px] rounded-full" />
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[4rem] 2xl:text-[4.8rem] leading-[1.1] tracking-[-0.04em] text-white font-black drop-shadow-[0_8px_10px_rgba(0,0,0,0.2)]">
                Personalized <br />
                Learning <br />
                <span className="font-medium text-white/95 drop-shadow-sm">that adapts <br className="hidden lg:block"/> to you</span>
              </h1>
            </div>
          </div>

          <div className="max-w-[500px] lg:max-w-[340px] xl:max-w-[420px] 2xl:max-w-[550px] 3xl:max-w-[850px] relative z-[25] pointer-events-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-black/80 text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1rem] xl:text-[1.05rem] 2xl:text-[1.15rem] leading-[1.6] font-medium tracking-wide mb-8 drop-shadow-md">
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
          <div className="flex flex-col justify-center items-center pt-16 pb-8 lg:hidden relative z-10 w-full mt-4">
            <div className="relative flex justify-center items-center w-full">
              <div className="absolute inset-0 flex justify-center items-center -z-10">
                <div className="w-[80vw] h-[80vw] max-w-[350px] max-h-[350px] bg-yellow-300/40 blur-[50px] rounded-full" />
              </div>
              <img
                src={Student}
                alt="Education Symbol"
                fetchpriority="high"
                loading="eager"
                className="w-[90%] max-w-[480px] h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)] relative z-10"
                decoding="async"
              />
            </div>
            {/* Added Text for Mobile Gap */}
            <div className="mt-6 px-4 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-black/90 font-bold text-lg sm:text-xl tracking-wide drop-shadow-sm">
                Empower Your Future with Smart Learning! 🎓
              </p>
              <p className="text-black/70 font-medium text-sm sm:text-base mt-1">
                Join the revolution in personalized education.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Featured Marquee */}
        <div className="relative z-10 flex w-full lg:w-[32%] xl:w-[30%] 2xl:w-[28%] ml-auto h-auto lg:h-full flex-col justify-center pb-0 overflow-hidden mr-0 [contain:paint]">
          <div className="w-full overflow-hidden relative">
            <div className="marquee-track flex w-max animate-gpu">
              {[0, 1].map((_, blockIdx) => (
                <div key={blockIdx} className="flex gap-4 pr-4 items-center" aria-hidden={blockIdx === 1}>
                  {images.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="marquee-card relative w-[200px] xl:w-[240px] 2xl:w-[270px] h-[300px] xl:h-[360px] 2xl:h-[400px] bg-black/20 shadow-2xl transition-all duration-1000 hover:-translate-y-4 cursor-pointer shrink-0 overflow-hidden rounded-3xl animate-gpu smooth-shadow"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 brightness-[0.9] transition-all duration-500 group-hover:opacity-100 group-hover:brightness-100"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-lg font-bold leading-tight">{item.title}</h3>
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
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translate3d(0, 40px, 0); 
          }
          to { 
            opacity: 1; 
            transform: translate3d(0, 0, 0); 
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

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
