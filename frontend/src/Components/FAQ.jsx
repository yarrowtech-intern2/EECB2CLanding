import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaPlay,
  FaGraduationCap,
  FaGift,
  FaChartLine,
  FaShieldAlt,
  FaChevronDown,
} from "react-icons/fa";
import { CiWifiOff } from "react-icons/ci";

const FAQ = () => {
  // ✅ FIX: start with null (no open by default)
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: <FaPlay className="text-lg" />,
      question: "Is EEC a video-based app?",
      answer: "No. EEC uses smart text and audio to teach — no long videos.",
    },
    {
      icon: <CiWifiOff className="text-lg" />,
      question: "Can I use it offline?",
      answer:
        "Not yet. EEC requires an active internet connection for accurate AI functioning.",
    },
    {
      icon: <FaGraduationCap className="text-lg" />,
      question: "What grades does it support?",
      answer: "From Class 3 to Class 10.",
    },
    {
      icon: <FaGift className="text-lg" />,
      question: "How much is free?",
      answer: "The first 5 stages are completely free.",
    },
    {
      icon: <FaChartLine className="text-lg" />,
      question: "Can parents track progress?",
      answer: "Yes. Every account includes a Parent Dashboard.",
    },
    {
      icon: <FaShieldAlt className="text-lg" />,
      question: "Is my data safe with EEC?",
      answer:
        "Absolutely. All user data is encrypted and securely stored on cloud servers.",
    },
  ];

  const contentRefs = useRef([]);

  // ✅ FIX: smooth toggle with correct height calculation
  const toggleFAQ = (index) => {
    setOpenIndex((prev) => {
      const next = prev === index ? null : index;

      // wait 1 frame so height can calculate correctly (AOS + transition fix)
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("resize"));
      });

      return next;
    });
  };

  const getHeight = (index) => {
    const el = contentRefs.current[index];
    return el ? el.scrollHeight : 0;
  };

  return (
    <section
      id="faq"
      className="relative py-16 xs:py-20 px-3 xs:px-4 bg-white overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute -top-44 -right-44 w-[720px] h-[720px] bg-sky-100/70 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-56 -left-56 w-[720px] h-[720px] bg-yellow-100/70 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900">
            FAQ –{" "}
            <span className="text-yellow-500">Frequently Asked Questions</span>
          </h2>

          <p className="mt-4 text-slate-600 font-medium text-sm xs:text-base sm:text-lg">
            Quick answers to common questions about how EEC works.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  group w-full rounded-[28px] bg-white
                  shadow-[0_18px_60px_rgba(15,23,42,0.10)]
                  relative overflow-hidden
                  transition-all duration-300 ease-out
                  hover:shadow-[0_28px_90px_rgba(15,23,42,0.16)]
                  hover:-translate-y-2
                  active:scale-[0.99]
                  ${isOpen ? "-translate-y-1" : ""}
                `}
              >
                {/* top gradient line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-400 via-sky-400 to-emerald-400 opacity-70" />

                {/* soft hover glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-200/40 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-200/40 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 xs:px-7 py-6 xs:py-7 flex items-center justify-between gap-5 text-left relative z-10"
                >
                  <div className="flex items-center gap-4 xs:gap-5 flex-1 min-w-0">
                    {/* Icon */}
                    <div
                      className="
                        w-11 h-11 xs:w-12 xs:h-12 rounded-2xl
                        bg-[#FEF9C3]
                        border border-yellow-200/70
                        flex items-center justify-center
                        text-blue-900 shadow-sm
                        transition-all duration-300
                        group-hover:scale-110
                      "
                    >
                      {faq.icon}
                    </div>

                    <h3 className="text-[14px] xs:text-[15px] sm:text-[17px] font-extrabold text-slate-900 break-words">
                      <span className="mr-2 font-extrabold">Q.</span>
                      {faq.question}
                    </h3>
                  </div>

                  <FaChevronDown
                    className={`flex-shrink-0 text-blue-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </button>

                {/* Answer */}
                <div
                  className="px-6 xs:px-7 overflow-hidden relative z-10"
                  style={{
                    height: isOpen ? getHeight(index) : 0,
                    transition:
                      "height 420ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="pb-6 xs:pb-7 pt-1"
                  >
                    <div
                      className="pl-[62px] xs:pl-[68px]"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen
                          ? "translateY(0px)"
                          : "translateY(-6px)",
                        transition:
                          "opacity 350ms ease, transform 350ms ease",
                      }}
                    >
                      <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Soft inner outline */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
