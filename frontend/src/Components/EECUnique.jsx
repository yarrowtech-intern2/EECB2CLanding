import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBolt, FaUserGraduate, FaUsers, FaCheckCircle } from "react-icons/fa";

const WhatMakesEECUnique = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 90,
      easing: "ease-out",
    });
    AOS.refresh();
  }, []);

  const smartLearning = [
    "AI-adaptive pathways",
    "Instant audio & text help",
    "Skill progression logic",
    "No video dependency",
    "Safe, distraction-free UX",
  ];

  const students = [
    "Learn faster with feedback",
    "Understand with audio help",
    "Easy → Arduous challenges",
    "Boost focus & reasoning",
    "Track self-progress",
  ];

  const parents = [
    "Subject-wise growth reports",
    "Strengths & weak-zone insights",
    "Stress-free exam prep",
    "Clutter-free, safe platform",
    "Start free, upgrade later",
  ];

  const Card = ({ title, subtitle, items, icon, delay = 0 }) => (
    <div
      className="
        group w-full rounded-[28px] bg-white
        border border-slate-200/70
        shadow-[0_18px_60px_rgba(15,23,42,0.10)]
        p-7 sm:p-8 relative overflow-hidden
        transition-all duration-300 ease-out
        hover:shadow-[0_28px_90px_rgba(15,23,42,0.16)]
        hover:border-yellow-200
        hover:scale-[1.02]
        active:scale-[0.99]
      "
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-400 via-sky-400 to-emerald-400 opacity-70" />

      {/* soft hover glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-200/40 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-200/40 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Header */}
      <div className="flex items-start gap-4 mb-4 relative z-10">
        <div
          className="
            w-12 h-12 rounded-2xl
            bg-[#FEF9C3]
            border border-yellow-200/70
            flex items-center justify-center
            text-blue-900 shadow-sm
            transition-all duration-300
            group-hover:scale-110
          "
        >
          {icon}
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {title}
          </h3>
          <p className="text-slate-600 text-sm sm:text-[15px] mt-2 leading-relaxed max-w-xl">
            {subtitle}
          </p>
        </div>
      </div>

      {/* List */}
      <div className="mt-6 space-y-3 relative z-10">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span
              className="
                mt-[2px] w-7 h-7 rounded-xl
                bg-white border border-slate-200
                flex items-center justify-center
                text-blue-700 shadow-sm
                transition-all duration-300
                group-hover:border-yellow-200
              "
            >
              <FaCheckCircle className="text-[14px]" />
            </span>

            <p className="text-slate-700 text-sm sm:text-[15px] font-medium">
              {it}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="eecunique"
      className="w-full py-20 px-4 relative overflow-hidden bg-white"
    >
      {/* Soft page glow */}
      <div className="absolute -top-48 -left-48 w-[520px] h-[520px] bg-sky-100/70 blur-[140px] rounded-full" />
      <div className="absolute -bottom-56 -right-56 w-[620px] h-[620px] bg-yellow-100/70 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT TEXT */}
          <div
            className="lg:col-span-5 flex flex-col justify-center"
            data-aos="fade-right"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-slate-900">
              What Makes{" "}
              <span className="text-yellow-500 font-extrabold">EEC</span>
              <br />
              Unique
            </h2>

            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              Designed for clarity, built for outcomes — a focused learning loop
              for students and peace of mind for parents.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-8">
              <Card
                title="Smart Learning"
                subtitle="Right practice, right time — adaptive loops with instant audio + text clarifications."
                items={smartLearning}
                icon={<FaBolt className="text-lg" />}
                delay={100}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                  title="For Students"
                  subtitle="Small wins → big confidence. Evolving sets, clear feedback, steady focus."
                  items={students}
                  icon={<FaUserGraduate className="text-lg" />}
                  delay={200}
                />

                <Card
                  title="For Parents"
                  subtitle="Clarity without micromanaging — calm analytics and exam readiness."
                  items={parents}
                  icon={<FaUsers className="text-lg" />}
                  delay={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesEECUnique;
