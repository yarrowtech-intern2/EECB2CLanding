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
          scrolled ? "top-2 px-6" : "top-0 py-5 bg-transparent"
        }`}
      >
        <div className={`global-container relative flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? "h-16 bg-white/95 backdrop-blur-md shadow-lg rounded-full border border-slate-200" 
            : "h-16 bg-transparent border-transparent"
        }`}>
          <button onClick={() => scrollToSection("home")} className="ml-6 flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <FaBookOpen size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              <span className="text-purple-600">Edify</span>
              <span className="text-yellow-400">Eight</span>
            </span>
          </button>
          <div className="flex items-center absolute left-1/2 -translate-x-1/2">
            <nav className="flex items-center gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeSection === item.id 
                      ? "bg-blue-600 text-white shadow-md border border-blue-600" 
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="mr-6">
            <button onClick={() => scrollToSection("contact")} className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* ======================
         MOBILE HEADER
      ====================== */}
      <header
        className={`lg:hidden fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ease-in-out bg-white ${
          mobileOpen ? "h-[500px]" : scrolled ? "shadow-md h-[64px] border-b border-slate-200" : "h-[72px] border-transparent"
        }`}
      >
        <div className="global-container flex items-center justify-between h-[64px]">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white shadow-md">
              <FaBookOpen size={16} />
            </div>
            <span className="text-xl font-black tracking-tighter">
              <span className="text-purple-600">Edify</span>
              <span className="text-yellow-400">Eight</span>
            </span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-50 text-purple-600 active:scale-90 transition-all"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
                onClick={() => scrollToSection(item.id)}
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
              onClick={() => scrollToSection("contact")}
              className="mt-4 w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] lg:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Header;