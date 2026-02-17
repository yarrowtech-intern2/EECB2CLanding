import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaBolt, FaGamepad, FaUserShield } from "react-icons/fa";

const WhyEEC = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 90,
      easing: "ease-out",
    });
  }, []);

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
      description: "Parent view & progress reports",
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
              data-aos-delay={150 + index * 120}
              className="
                bg-white
                border border-slate-200/70
                rounded-2xl
                px-6 py-6
                shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                hover:shadow-[0_16px_55px_rgba(15,23,42,0.12)]
                transition-shadow duration-300 ease-out
              "
            >
              {/* Top small pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-slate-800 text-sm font-semibold">
                <span className="text-yellow-500">{feature.icon}</span>
                {feature.title}
              </div>

              {/* Description */}
              <p className="mt-4 text-slate-600 text-sm font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEEC;
