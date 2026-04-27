import React, { useRef, useState } from "react";

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
      icon: <FaGraduationCap className="text-lg" />,
      question: "Is there the latest syllabus?",
      answer: "Yes, absolutely! Our team of teacher-wizards works day and night to make sure every question is perfectly aligned with the newest board guidelines. No old stuff here!",
    },
    {
      icon: <FaPlay className="text-lg" />,
      question: "Can we print the papers for a real experience?",
      answer: "No! Every paper is a high-quality PDF. It's the best way to train your brain!",
    },
    {
      icon: <FaShieldAlt className="text-lg" />,
      question: "What if we get stuck on a hard level?",
      answer: "Don't worry, every explorer gets stuck sometimes! Our Scholar plan gives you access to Expert Help. Just send a flare, and our teachers will guide you through the solution!",
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
      className="relative py-24 bg-slate-50 overflow-hidden"
    >
      <div className="global-container relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-extrabold text-slate-800 mb-6">
            Got <span className="text-purple-600 italic font-serif">questions?</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-3xl leading-relaxed font-medium mx-auto">
            Quick answers to common questions about how EEC works.
          </p>
        </div>

        {/* Vertical List */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className={`group w-full rounded-[24px] bg-white border transition-all duration-300 ease-out cursor-pointer ${isOpen ? "border-purple-300 shadow-[0_10px_30px_rgba(107,70,193,0.1)] ring-4 ring-purple-50" : "border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200"}`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 text-left relative z-10"
                >
                  <div className="flex items-center gap-5 flex-1">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {faq.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-800">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-purple-100 group-hover:text-purple-600"}`}>
                     <FaChevronDown
                       className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                       size={14}
                     />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className="px-6 sm:px-8 overflow-hidden relative z-10"
                  style={{
                    height: isOpen ? getHeight(index) : 0,
                    transition: "height 300ms ease-in-out",
                  }}
                >
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="pb-6 sm:pb-8 pt-0 pl-[68px]"
                  >
                    <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base">
                      {faq.answer}
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

export default FAQ;
