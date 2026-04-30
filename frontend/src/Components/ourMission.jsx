import React from "react";
import missionVision from "../assets/wonderkids/mission_vision.webp";
import { FaBullseye, FaBolt } from "react-icons/fa";

const OurMission = () => {
  return (
    <section id="mission" className="w-full py-6 sm:py-10 relative overflow-hidden bg-slate-50">
      <div className="global-container relative z-10 flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-20">
        
        {/* Right Side: Image (re-using teachers for this section) */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end" data-aos="fade-up" data-aos-offset="0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Main Image - Now rounded square without border */}
            <div className="w-full h-full rounded-[40px] shadow-2xl overflow-hidden relative z-10 bg-white">
               <img src={missionVision} alt="Our Mission" className="w-full h-full object-cover" loading="eager" />
            </div>
            {/* Decorative shapes */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-purple-400 rounded-3xl -z-10 opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-200 rounded-3xl -z-10 opacity-40"></div>
          </div>
        </div>

        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 text-left" data-aos="fade-right">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-extrabold text-slate-800 mb-6">
              Our <span className="text-purple-600 italic font-serif">Mission</span>
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 mb-6 leading-tight">
              The Mission of Edify Eight
            </h3>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium mb-8">
              Our mission is to ensure every learner receives the best assistance possible - building strong foundations in learning, retention and reflection. We go beyond traditional education. EEC strives to be a transformative solution provider, supporting institutions with real-time insights, AI-driven feedback and simplified digital-age learning systems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm group hover:border-purple-500 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <FaBullseye size={22} />
                </div>
                <span className="text-slate-800 font-bold">Real-time Insights</span>
              </div>
              
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm group hover:border-yellow-500 transition-all">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-white transition-colors">
                  <FaBolt size={22} />
                </div>
                <span className="text-slate-800 font-bold">AI Feedback Loops</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurMission;
