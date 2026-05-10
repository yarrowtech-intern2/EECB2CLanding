import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserCheck, FaBolt, FaBookOpen, FaBullseye } from "react-icons/fa";

const WhyEdifyEight = () => {
  useEffect(() => {
    // AOS is refreshed globally in App.jsx
  }, []);


  const features = [
    {
      icon: <FaUserCheck className="text-lg" />,
      description: "Personalized progress Learning",
    },
    {
      icon: <FaBolt className="text-lg" />,
      description: "Quick revision ",
    },
    {
      icon: <FaBookOpen className="text-lg" />,
      description: "Board wise structured modules ",
    },
    {
      icon: <FaBullseye className="text-lg" />,
      description: "Weak chapter revision",
    },
  ];

  return (
    <section
      id="why-edify-eight"
      className="w-full py-6 sm:py-10 relative bg-purple-600 overflow-hidden"
    >
      {/* Decorative yellow sun */}
      <div className="absolute top-16 right-10 lg:right-32 w-20 h-20 lg:w-32 lg:h-32 bg-yellow-400 shadow-lg animate-[spin_12s_linear_infinite]" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 border-[8px] border-purple-500 rounded-full opacity-50"></div>

      <div className="global-container relative z-10 flex flex-col">
        
        <div className="mb-4 sm:mb-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-extrabold text-white mb-6">
            Why <span className="text-yellow-400 italic font-serif">Edify Eight?</span>
          </h2>
          
          <p className="text-purple-100 text-base sm:text-lg max-w-3xl leading-relaxed font-medium mx-auto">
            Edify Eight is your one-stop intelligent learning partner for school students from Class 3 to 10. Powered by smart AI and machine learning, it delivers personalized learning experiences, practice modules, and instant academic support to help every student thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative cursor-pointer h-full"
            >
              <div className="bg-white h-full rounded-[32px] p-8 border border-slate-100 hover:border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-left relative overflow-hidden">
                {/* Soft purple gradient line */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-white transition-all shrink-0">
                     {feature.icon}
                  </div>
                  <p className="text-slate-800 font-bold text-lg leading-tight group-hover:text-purple-600 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEdifyEight;
