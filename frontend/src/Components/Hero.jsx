import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

import Screw from "../assets/screw.png";
import cap from "../assets/cap.jpg";
import AI from "../assets/AI.jpg";
import Book from "../assets/book.jpg";
import Trophy from "../assets/Trophy.jpg";

const images = [
  { img: AI, title: "AI Learning", subtitle: "Smart Education System" },
  { img: cap, title: "Smart Students", subtitle: "Learning Excellence" },
  { img: Book, title: "Digital Learning", subtitle: "Smart Study System" },
  { img: Trophy, title: "Top Achievers", subtitle: "Student Success" },
];

const Hero = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const current = images[index];

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#F2B300]" />

      {/* CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 items-center min-h-screen">

        {/* LEFT TEXT */}
        <div className="space-y-6 text-black text-center md:text-left">

          <p className="max-w-md text-sm md:text-base leading-relaxed mx-auto md:mx-0">
            AI-guided study paths, concept videose, and gamified progress-created to boost 
            focus, reduce stress and improve outcomes.
          </p>

          <h1 className="font-light leading-tight text-4xl md:text-5xl lg:text-6xl">
            Personalized Learning <br/>
            <span className="font-semibold">that adaps to you</span>
          </h1>

          {/* CTA BUTTON */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-lg"
          >
            Get Free Trial
            <ChevronRight size={18}/>
          </button>

        </div>

        {/* CENTER IMAGE */}
        <div className="relative flex items-center justify-center">

          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-white/30 blur-[120px] rounded-full"/>

          <img
            src={Screw}
            alt="Education Symbol"
            className="relative w-[220px] md:w-[320px] lg:w-[420px] object-contain animate-float"
          />

        </div>

        {/* RIGHT CARD */}
        <div className="space-y-4 flex flex-col items-center lg:items-end">

          <div className="text-sm text-black flex items-center gap-2">
          </div>

          <div className="card-hover bg-white/40 backdrop-blur-xl rounded-xl overflow-hidden w-full max-w-[320px] shadow-xl">

            <div className="relative h-[260px] md:h-[300px] overflow-hidden">

              <img
                src={current.img}
                alt={current.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/40"/>

              <div className="absolute bottom-0 p-5 text-white">

                <h3 className="font-semibold text-lg">
                  {current.title}
                </h3>

                <p className="text-sm text-gray-200">
                  {current.subtitle}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM INFO */}
      <div className="absolute bottom-6 left-6 right-6 hidden md:flex justify-between text-sm text-black">

        <span>EEC Platform</span>

        <span>
          Kolkata, India <br/>
        </span>

        <span>
          Advanced <br/>
          Education Technology
        </span>

      </div>

      {/* CSS */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .card-hover:hover img{
          transform: scale(1.08);
        }
        `}
      </style>

    </section>
  );
};

export default Hero;