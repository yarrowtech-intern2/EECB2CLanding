import React from "react";
import { ChevronRight } from "lucide-react";
import heroKid from "../assets/wonderkids/hero_kid.webp";
import otherKid from "../assets/wonderkids/learning_materials.webp";

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-screen w-full bg-white flex flex-col items-center justify-center pt-16 sm:pt-24 pb-4 sm:pb-8 z-10 overflow-hidden lg:overflow-visible">
      
      {/* Decorative Elements Layer - DESKTOP ONLY FLOATING */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Bottom Left Concentric Circles */}
        <div className="absolute bottom-[20%] left-[10%] sm:left-[15%] lg:left-[22%] scale-75 sm:scale-100 opacity-60">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="#C084FC" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="30" cy="30" r="20" stroke="#C084FC" strokeWidth="2" />
            <circle cx="30" cy="30" r="12" stroke="#C084FC" strokeWidth="2" />
            <circle cx="30" cy="30" r="4" fill="#C084FC" />
          </svg>
        </div>

        {/* Left Floating Kid (Top) - DESKTOP ONLY */}
        <div className="hidden lg:flex absolute top-[20%] left-[10%] flex-col items-center z-10 transition-transform">
          <div className="w-32 h-32 rounded-full bg-purple-100 border-[6px] border-white shadow-xl flex items-center justify-center overflow-hidden relative">
             <img src={otherKid} alt="Student" className="w-full h-full object-cover object-top" />
          </div>
          <svg className="absolute -bottom-20 left-10 w-24 h-24 text-purple-600" viewBox="0 0 100 100" fill="none">
            <path d="M 10 10 Q 10 80 80 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 70 70 L 85 80 L 75 95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* Right Floating Kid (Bottom) - DESKTOP ONLY */}
        <div className="hidden lg:block absolute bottom-[15%] right-[10%] scale-110 z-10">
          <div className="absolute inset-0 bg-purple-200 rounded-full scale-150 -translate-x-4 -translate-y-4 opacity-50" />
          <div className="w-40 h-40 rounded-full flex items-center justify-center relative overflow-hidden bg-white border-4 border-white shadow-2xl">
             <img src={heroKid} alt="Kid" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="global-container relative z-30 flex flex-col items-center text-center">
        
        {/* Headline */}
        <h1 
          data-aos="fade-up"
          className="text-4xl sm:text-6xl lg:text-[5.5rem] leading-[1.1] tracking-tight text-slate-900 font-extrabold mb-4 sm:mb-6 max-w-4xl relative px-4"
        >
          The best place to <br />
          <span className="relative inline-block z-10 mr-4">
            <span className="text-purple-600 italic font-serif">learn</span>
            {/* Purple Squiggly Underline */}
            <svg className="absolute -bottom-3 lg:-bottom-6 left-0 w-full h-4 lg:h-8 text-purple-300 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
              <path d="M0,10 Q10,20 20,10 T40,10 T60,10 T80,10 T100,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
          and 
          <span className="relative inline-block z-10 ml-4">
            <span className="text-yellow-400 italic font-serif">play</span>
            {/* Yellow Squiggly Underline */}
            <svg className="absolute -bottom-2 lg:-bottom-5 left-0 w-[120%] h-4 lg:h-8 text-yellow-400 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
              <path d="M0,15 Q20,5 40,15 T80,15 T100,5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
          <br />
          for kids
        </h1>

        {/* MOBILE IMAGES COLLAGE */}
        <div className="lg:hidden flex items-center justify-center gap-4 mb-10 relative px-4 z-40">
           {/* Image 1 */}
           <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-purple-50 -rotate-6">
              <img src={otherKid} alt="Student" className="w-full h-full object-cover object-top" loading="eager" />
           </div>
           {/* Image 2 */}
           <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white rotate-6 -translate-y-6">
              <img src={heroKid} alt="Kid" className="w-full h-full object-cover" loading="eager" />
           </div>
           
           {/* Background blob for images */}
           <div className="absolute inset-0 bg-purple-100/50 blur-3xl -z-10 rounded-full scale-150" />
        </div>

        <p 
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-xl text-slate-500 text-base sm:text-lg font-medium mb-6 sm:mb-8 leading-relaxed px-4 relative z-20"
        >
          Discover thousands of fun and interactive learning activities to support your child's growth and learning process.
        </p>

        <button
          onClick={scrollToContact}
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex items-center gap-3 px-10 py-4 sm:px-12 sm:py-5 text-lg font-bold text-white bg-purple-600 rounded-full shadow-[0_10px_25px_rgba(147,51,234,0.4)] hover:shadow-[0_15px_35px_rgba(147,51,234,0.5)] hover:bg-purple-700 transition-all hover:-translate-y-1 active:scale-95 relative z-30 mb-6 sm:mb-8"
        >
          Get started
          <span className="bg-white text-purple-600 p-1.5 rounded-full shadow-sm"><ChevronRight size={18} strokeWidth={3} /></span>
        </button>

      </div>
    </section>
  );
};

export default Hero;