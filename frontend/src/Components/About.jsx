import React from "react";
import learningMaterials from "../assets/wonderkids/learning_materials.webp";

const About = () => {
  return (
    <section id="about" className="w-full py-12 sm:py-10 relative overflow-hidden bg-white">
      <div className="global-container relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start" data-aos="fade-up" data-aos-offset="0">
          <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Main Image - Now rounded square without border */}
            <div className="w-full h-full rounded-[30px] sm:rounded-[40px] shadow-2xl overflow-hidden relative z-10 bg-white">
              <img src={learningMaterials} alt="About Edify Eight" className="w-full h-full object-cover" loading="eager" />
            </div>
            {/* Decorative shapes */}
            <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-400 rounded-2xl sm:rounded-3xl -z-10 opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-purple-200 rounded-2xl sm:rounded-3xl -z-10 opacity-40"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 text-left" data-aos="fade-left">
          <div className="mb-4 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-extrabold text-slate-800 mb-4 sm:mb-6">
              About <span className="text-purple-600 italic font-serif">Us</span>
            </h2>
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-slate-700 mb-4 sm:mb-6 leading-tight">
              We build education that puts students first
            </h3>
            <p className="text-slate-500 text-sm sm:text-lg leading-relaxed font-medium mb-6 sm:mb-8">
              At Edify Eight, we're on a mission to transform education for the next generation. We blend technology, pedagogy, and empathy to build tools that genuinely help students thrive — academically and personally.
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm border border-purple-100">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-600 rounded-full"></span>
                Technology
              </div>
              <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm border border-yellow-100">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-400 rounded-full"></span>
                Pedagogy
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm border border-purple-100">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-600 rounded-full"></span>
                Empathy
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
