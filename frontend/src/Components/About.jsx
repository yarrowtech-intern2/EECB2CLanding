import React from "react";
import learningMaterials from "../assets/wonderkids/learning_materials.png";

const About = () => {
  return (
    <section id="about" className="w-full py-24 relative overflow-hidden bg-white">
      <div className="global-container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start" data-aos="fade-right">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl bg-purple-50 max-w-[480px]">
            <img 
              src={learningMaterials} 
              alt="About Edify Eight" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full -z-10 opacity-20 animate-pulse"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 text-left" data-aos="fade-left">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-extrabold text-slate-800 mb-6">
              About <span className="text-purple-600 italic font-serif">Us</span>
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 mb-6 leading-tight">
              We build education that puts students first
            </h3>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium mb-8">
              At Edify Eight, we're on a mission to transform education for the next generation. We blend technology, pedagogy, and empathy to build tools that genuinely help students thrive — academically and personally. If you're driven by purpose and want your work to matter, you've found the right place.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-purple-50 text-purple-700 px-5 py-2.5 rounded-full font-bold text-sm border border-purple-100">
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-full"></span>
                Technology
              </div>
              <div className="flex items-center gap-3 bg-yellow-50 text-yellow-700 px-5 py-2.5 rounded-full font-bold text-sm border border-yellow-100">
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                Pedagogy
              </div>
              <div className="flex items-center gap-3 bg-purple-50 text-purple-700 px-5 py-2.5 rounded-full font-bold text-sm border border-purple-100">
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-full"></span>
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
