import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaBookOpen } from "react-icons/fa";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Mission", id: "mission" },
    { label: "Why Edify Eight", id: "why-edify-eight" },
    { label: "Features", id: "features" },
    { label: "FAQ", id: "faq" },
  ];

  /* ======================
     SCROLL BEHAVIOR & ACTIVE SECTION
  ====================== */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

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
  }, []);

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
          scrolled ? "top-2 px-6" : "top-0 py-2 bg-transparent"
        }`}
      >
        <div className={`global-container relative flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? "h-[96px] bg-white/95 backdrop-blur-md shadow-xl rounded-full border border-slate-200" 
            : "h-[96px] bg-transparent border-transparent"
        }`}>
          <button onClick={() => scrollToSection("home")} className="ml-4 flex items-center group focus:outline-none">
            <div className="h-[84px] sm:h-[92px] w-auto px-3.5 py-1.5 bg-[#2b2b2b] rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 border-amber-400/50 group-hover:border-amber-400">
              <img 
                src="/logo.png" 
                alt="Edify Eight Logo" 
                className="h-full w-auto object-contain filter brightness-105 contrast-110" 
              />
            </div>
          </button>
          <div className="flex items-center absolute left-1/2 -translate-x-1/2">
            <nav className="flex items-center gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeSection === item.id 
                      ? "bg-blue-600 text-white shadow-md border border-blue-600" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="mr-6">
            <button onClick={() => scrollToSection("contact")} className="bg-slate-900 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-md active:scale-95">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* ======================
         MOBILE HEADER
      ====================== */}
      <header
        ref={mobileRef}
        className={`lg:hidden fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ease-in-out bg-white ${
          mobileOpen ? "h-[560px] shadow-2xl" : scrolled ? "shadow-md h-[88px] border-b border-slate-200" : "h-[92px] border-transparent"
        }`}
      >
        <div className="global-container flex items-center justify-between h-[88px]">
          <button onClick={() => scrollToSection("home")} className="flex items-center group focus:outline-none">
            <div className="h-[68px] sm:h-[74px] w-auto px-3 py-1 bg-[#2b2b2b] rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-all border-2 border-amber-400/50">
              <img 
                src="/logo.png" 
                alt="Edify Eight Logo" 
                className="h-full w-auto object-contain filter brightness-105 contrast-110" 
              />
            </div>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-50 text-purple-600 active:scale-90 transition-all"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* EXPANDING CONTENT */}
        <div 
          className={`transition-all duration-500 overflow-hidden ${
            mobileOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="p-6 flex flex-col gap-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileOpen(false);
                }}
                className={`text-left px-6 py-4 rounded-2xl font-bold text-lg transition-all ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white shadow-lg border border-blue-600"
                    : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection("contact");
                setMobileOpen(false);
              }}
              className="mt-4 w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-[9998] lg:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Header;