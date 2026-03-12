import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaBolt, FaGamepad, FaUserShield } from "react-icons/fa";

const WhyEEC = () => {

  const features = [
    {
      icon: <FaCheckCircle className="text-lg" />,
      title: "Board-Aligned",
      description: "CBSE, ICSE & State boards",
    },
    {
      icon: <FaBolt className="text-lg" />,
      title: "Efficient",
      description: "Adaptive paths save time",
    },
    {
      icon: <FaGamepad className="text-lg" />,
      title: "Engaging",
      description: "Gamified learning",
    },
    {
      icon: <FaUserShield className="text-lg" />,
      title: "Supportive",
      description: "Subject Wise progress reports",
    },
  ];

  return (
    <section
      id="why-eec"
      className="w-full py-20 px-4 relative overflow-hidden bg-white"
    >
      {/* Background soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-white" />

      {/* Soft blur blobs */}
      <div className="absolute -top-44 -left-44 w-[520px] h-[520px] bg-yellow-200/40 blur-[160px] rounded-full" />
      <div className="absolute -bottom-52 -right-52 w-[580px] h-[580px] bg-amber-200/40 blur-[170px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-900">
            Why <span className="text-yellow-500">EEC?</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            Electronic Educare (EEC) is your one-stop intelligent learning
            partner for school students from Class 3 to 10. Powered by smart AI
            and machine learning, it delivers personalized learning experiences,
            practice modules, and instant academic support to help every student
            thrive. We're here to make education smarter, faster, and
            future-ready.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 300}
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
                cursor-pointer
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
                    group-hover:scale-110 text-[24px]
                  "
                >
                  <span className="text-yellow-600 group-hover:rotate-12 transition-transform duration-300 pl-1 pb-1">{feature.icon}</span>
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

export default WhyEEC;
