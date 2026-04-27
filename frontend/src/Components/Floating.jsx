import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaArrowUp, FaTimes, FaAddressBook, FaHeadset } from "react-icons/fa";

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const email = "electroniceducaresales@yarrowtech.co.in";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  const mailtoLink = `mailto:${email}`;
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const section = document.getElementById("contact");
    if (section) {
      const headerOffset = 90;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="
        fixed
        right-6 sm:right-10
        bottom-8 sm:bottom-12
        z-[1000]
        pointer-events-none
      "
    >
      <div className="relative flex items-center justify-center">
        
        {/* Sub-buttons - Arc Layout */}
        {/* WhatsApp - Top Left */}
        <a
          href="https://wa.me/919830590929?text=Hello%20I%20am%20interested%20in%20your%20ERP%20solutions"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transform: isOpen ? "translate(-80px, -140px) scale(1)" : "translate(0, 0) scale(0)",
            transitionDelay: isOpen ? "100ms" : "0ms",
          }}
          className="
            absolute pointer-events-auto
            w-12 h-12 rounded-full
            bg-green-500 text-white
            flex items-center justify-center
            shadow-[0_0_20px_rgba(34,197,94,0.4)]
            transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)
            hover:scale-110 active:scale-90
          "
          title="WhatsApp Support"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Email - Top Center */}
        <a
          href={isMobile ? mailtoLink : gmailLink}
          target={isMobile ? "_self" : "_blank"}
          rel="noopener noreferrer"
          style={{
            transform: isOpen ? "translate(0px, -165px) scale(1)" : "translate(0, 0) scale(0)",
            transitionDelay: isOpen ? "200ms" : "0ms",
          }}
          className="
            absolute pointer-events-auto
            w-12 h-12 rounded-full
            bg-blue-500 text-white
            flex items-center justify-center
            shadow-[0_0_20px_rgba(59,130,246,0.4)]
            transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)
            hover:scale-110 active:scale-90
          "
          title="Send Email"
        >
          <FaEnvelope size={20} />
        </a>

        {/* Contact Us - Further Left */}
        <button
          onClick={scrollToContact}
          style={{
            transform: isOpen ? "translate(-130px, -70px) scale(1)" : "translate(0, 0) scale(0)",
            transitionDelay: isOpen ? "150ms" : "0ms",
          }}
          className="
            absolute pointer-events-auto
            w-12 h-12 rounded-full
            bg-purple-600 text-white
            flex items-center justify-center
            shadow-[0_0_20px_rgba(107,70,193,0.4)]
            transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)
            hover:scale-110 active:scale-90
          "
          title="Contact Us"
        >
          <FaHeadset size={20} />
        </button>

        {/* Scroll Top - Above Main Toggle */}
        <button
          onClick={scrollToTop}
          style={{
            transform: isScrolled ? "translate(0px, -75px) scale(1)" : "translate(0, 0) scale(0)",
            opacity: isScrolled ? 1 : 0,
          }}
          className="
            absolute pointer-events-auto
            w-11 h-11 sm:w-12 sm:h-12 rounded-full
            bg-slate-900/90 backdrop-blur-md text-white
            flex items-center justify-center
            shadow-2xl border border-white/10
            transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)
            hover:scale-110 active:scale-90
          "
          title="Scroll to Top"
        >
          <FaArrowUp size={20} />
        </button>

        {/* Main Toggle Button - "Liquid" Shape */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative pointer-events-auto
            w-14 h-14 sm:w-16 sm:h-16
            bg-gradient-to-tr from-purple-500 via-purple-600 to-indigo-600
            text-white
            flex items-center justify-center
            shadow-[0_10px_35px_rgba(107,70,193,0.5)]
            transition-all duration-500 ease-in-out
            hover:scale-110 active:scale-90
            ${isOpen ? "rounded-full" : "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-liquid"}
          `}
        >
          <div className={`transition-all duration-500 ${isOpen ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
            <FaAddressBook size={28} />
          </div>
          <div className={`absolute transition-all duration-500 ${isOpen ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-0 opacity-0"}`}>
            <FaTimes size={28} />
          </div>

          {/* Glowing Aura */}
          <div className="absolute inset-0 rounded-inherit bg-purple-400 blur-xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
        </button>
      </div>

      <style>
        {`
          @keyframes liquid {
            0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
            50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
            75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
            100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          }
          .animate-liquid {
            animation: liquid 8s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FloatingActions;
