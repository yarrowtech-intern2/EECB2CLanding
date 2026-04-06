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

  const features = [
    {
      icon: <FaBook className="text-[20px]" />,
      title: "Structured Learning Modules",
      description:
        "Each class has a clear, chapter-wise path, students move step-by-step through interactive text content and AI-generated practice.",
    },
    {
      icon: <FaEdit className="text-[20px]" />,
      title: "Smart Worksheets & Practice Sets",
      description:
        "AI-generated practice papers & MCQs based on student's actual performance. Each set adapts to their strengths and challenges.",
    },
    {
      icon: <FaHeadphones className="text-[20px]" />,
      title: "Instant Explanations",
      description:
        "Stuck on a question? Instant text and audio explanations to clarify doubts quickly - no need to search elsewhere.",
    },
    {
      icon: <FaGraduationCap className="text-[20px]" />,
      title: "Progressive Learning (Class 3–10)",
      description:
        "Seamless academic growth from one class to the next. Covers core subjects in a simple, consistent format.",
    },
    {
      icon: <FaBullseye className="text-[20px]" />,
      title: "Skill-Based Challenges",
      description:
        "Three levels: Easy, Intermediate, Arduous - designed to build critical thinking and confidence.",
    },
    {
      icon: <FaTrophy className="text-[20px]" />,
      title: "Weekly Leaderboards",
      description:
        "Fun rankings and shortcuts to keep students engaged week after week.",
    },
    
  ];

  return (
    <section
      id="features"
      className="w-full py-24 relative overflow-hidden bg-white"
    >
      {/* Soft Background Glow */}
      <div className="absolute -top-56 -right-56 w-[800px] h-[800px] bg-sky-100/70 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-64 -left-64 w-[850px] h-[850px] bg-slate-100/80 blur-[190px] rounded-full pointer-events-none" />

      <div className="global-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="mt-6 text-3xl xs:text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.5rem] leading-[1.1] tracking-tight font-extrabold text-slate-900"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            What EEC Offers{" "}
            <span className="text-yellow-500">(Features & Modules)</span>
          </h2>

          <p
            className="mt-5 text-slate-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed font-medium"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Everything learners and parents need — thoughtfully organized,
            data-driven, and designed to motivate consistent progress.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={250 + index * 70}
              className="
                group relative bg-white
                rounded-[26px]
                border border-slate-200/70
                shadow-[0_18px_60px_rgba(15,23,42,0.08)]
                p-8
                transition-all duration-300 ease-out
                hover:border-yellow-300
                hover:shadow-[0_22px_75px_rgba(245,158,11,0.18)]
                hover:scale-[1.02]
              "
            >
              {/* Light yellow tint inside card */}
              <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-yellow-50/60 via-white to-white opacity-70 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon box */}
                <div
                  className="
                    w-14 h-14 rounded-2xl
                    bg-[#FEF9C3]
                    border border-yellow-200/70
                    flex items-center justify-center
                    text-blue-900
                    shadow-[0_10px_25px_rgba(15,23,42,0.08)]
                    mb-6
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  {feature.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesModules;
