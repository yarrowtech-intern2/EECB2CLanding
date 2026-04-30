import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaBook,
  FaEdit,
  FaHeadphones,
  FaGraduationCap,
  FaBullseye,
  FaTrophy,
  FaBrain,
  FaVolumeUp,
  FaUsers,
} from "react-icons/fa";

const FeaturesModules = () => {
  useEffect(() => {
    // AOS is refreshed globally
  }, []);


  const features = [
    {
      icon: <FaBook className="text-[20px]" />,
      title: "Structured Learning Modules",
      description:
        "Each class has a clear, chapter-wise path, students move step-by-step through interactive text content and practice.",
    },
    {
      icon: <FaEdit className="text-[20px]" />,
      title: "Smart Try outs",
      description:
        "Smart practice papers & MCQs based on student's actual performance. Each set adapts to their strengths and challenges.",
    },
    {
      icon: <FaHeadphones className="text-[20px]" />,
      title: "Instant Explanations",
      description:
        "Stuck on a question? Instant text to clarify doubts quickly - no need to search elsewhere.",
    },
    {
      icon: <FaGraduationCap className="text-[20px]" />,
      title: "Progressive Learning (Class 3–10)",
      description:
        "Seamless academic growth from one class to the next. Covers core subjects in a simple, consistent format.",
    },
    {
      icon: <FaBullseye className="text-[20px]" />,
      title: "Daily-Based Challenges",
      description:
        "Fresh daily practice sets designed to build critical thinking and consistent learning habits.",
    },
    {
      icon: <FaTrophy className="text-[20px]" />,
      title: "Leaderboards",
      description:
        "Fun rankings and shortcuts to keep students engaged week after week.",
    },
    
  ];

  return (
    <section
      id="features"
      className="w-full py-6 sm:py-10 relative bg-white overflow-hidden"
    >
      <div className="global-container relative z-10">
        {/* Header */}
        <div className="mb-4 sm:mb-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-extrabold text-slate-800">
            Our <span className="text-purple-600 italic font-serif">interactive</span> features
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
             const styles = [
               { bg: "bg-purple-100", text: "text-purple-900", iconBg: "bg-black/80", iconColor: "text-white" },
               { bg: "bg-purple-600", text: "text-white", iconBg: "bg-white/20", iconColor: "text-white" },
               { bg: "bg-yellow-400", text: "text-slate-900", iconBg: "bg-white", iconColor: "text-slate-900" },
               { bg: "bg-yellow-400", text: "text-slate-900", iconBg: "bg-white", iconColor: "text-slate-900" },
               { bg: "bg-purple-100", text: "text-purple-900", iconBg: "bg-black/80", iconColor: "text-white" },
               { bg: "bg-purple-600", text: "text-white", iconBg: "bg-white/20", iconColor: "text-white" },
             ];
             const s = styles[index % styles.length];

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group relative cursor-pointer h-full"
              >
                <div className={`relative h-full rounded-[32px] p-8 lg:p-10 transition-all duration-300 border border-transparent hover:border-white/20 shadow-sm hover:shadow-2xl ${s.bg} ${s.text} overflow-hidden`}>
                  {/* Decorative background shapes based on index */}
                  {index % 3 === 0 && <div className="absolute top-4 right-4 w-24 h-24 border-[6px] border-current opacity-10 rounded-full"></div>}
                  {index % 3 === 1 && <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-current opacity-10 rounded-[30px] rotate-12"></div>}
                  {index % 3 === 2 && <div className="absolute top-10 right-10 flex gap-2"><div className="w-2 h-2 rounded-full bg-current opacity-20"></div><div className="w-2 h-2 rounded-full bg-current opacity-20"></div></div>}

                  <div className="relative z-10">
                    {/* Icon box */}
                    <div
                      className={`w-14 h-14 rounded-full ${s.iconBg} ${s.iconColor} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}
                    >
                      {feature.icon}
                    </div>

                    <h3 className="text-2xl font-extrabold mb-3">
                      {feature.title}
                    </h3>

                    <p className="opacity-90 text-sm leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesModules;
