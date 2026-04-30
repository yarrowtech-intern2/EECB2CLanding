import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.webp";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBullseye, FaQuestionCircle, FaStar, FaThLarge } from "react-icons/fa";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Home", id: "home", icon: <FaHome /> },
    { label: "About", id: "about", icon: <FaInfoCircle /> },
    { label: "Mission", id: "mission", icon: <FaBullseye /> },
    { label: "Why EEC", id: "why-eec", icon: <FaStar /> },
    { label: "Features", id: "features", icon: <FaThLarge /> },
    { label: "FAQ", id: "faq", icon: <FaQuestionCircle /> },
  ];

  /* ======================
     SCROLL BEHAVIOR & ACTIVE SECTION
  ====================== */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      // Hide Header Logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // CLOSE MENU ON SCROLL
      if (mobileOpen) {
        setMobileOpen(false);
      }

      setLastScrollY(currentScrollY);

      // Active Section Logic
      const scrollPosition = currentScrollY + 150;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileOpen]);

  /* ======================
     MOBILE CLOSE OUTSIDE
  ====================== */

  useEffect(() => {
    const handler = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ======================
     SCROLL FUNCTION
  ====================== */

  const scrollToSection = (id) => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const headerOffset = 80;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        } else if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const section = document.getElementById(id);
    if (!section) {
      if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const headerOffset = 90;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <>
      {/* ======================
         DESKTOP HEADER
      ====================== */}
      <header
        className={`hidden lg:block fixed left-0 w-full z-[9999] transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled ? "top-2 px-6" : "top-0 py-5 bg-transparent"
        }`}
      >
        <div className={`global-container relative flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? "h-16 bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-white/20" 
            : "h-16 bg-transparent"
        }`}>
          <button onClick={() => scrollToSection("home")} className="ml-6">
            <img src={Logo} alt="logo" className="h-10 w-auto" />
          </button>
          <div className="flex items-center absolute left-1/2 -translate-x-1/2">
            <nav className="flex items-center gap-1">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeSection === item.id ? "text-purple-600" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="mr-6">
            <button onClick={() => scrollToSection("contact")} className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-600 transition-all shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* ======================
         MOBILE HEADER (Standard Top Bar)
      ====================== */}
      <header
        className={`lg:hidden fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"
        }`}
      >
        <div className="global-container flex items-center justify-between relative z-[10001]">
          <button onClick={() => scrollToSection("home")}>
            <img src={Logo} alt="logo" className="h-8 w-auto" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-50 text-purple-600 active:scale-90 transition-all"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* ======================
           PREMIUM TOP SLIDE-DOWN GRID MENU
        ====================== */}
        <div 
          ref={mobileRef}
          className={`absolute top-0 left-0 w-full bg-white rounded-b-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out z-[10000] overflow-hidden ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          {/* Header height offset placeholder */}
          <div className="h-20" />
          
          <div className="p-6 pb-10">
            <div className="grid grid-cols-2 gap-3 mb-8">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex flex-col items-center justify-center p-5 rounded-3xl transition-all duration-300 border ${
                    activeSection === item.id
                      ? "bg-purple-600 text-white border-purple-600 shadow-lg scale-[1.02]"
                      : "bg-slate-50 text-slate-700 border-slate-100 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                >
                  <div className={`text-2xl mb-2 ${activeSection === item.id ? "text-white" : "text-purple-600"}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold">{item.label}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-slate-900 text-white py-5 rounded-3xl font-bold text-lg shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Get Started
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                 <FaBars className="rotate-90" size={10} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998] lg:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Header;