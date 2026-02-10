import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/eec.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileRef = useRef(null);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Why EEC", id: "why-eec" },
    { label: "Features & Modules", id: "features" },
    { label: "FAQ", id: "faq" },
    { label: "Contacts", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; 

      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [])

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setMobileOpen(false);
      return;
    }

    const headerOffset = 90;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-[9999]">
      <div className="w-full bg-[#fef3c7]/80 backdrop-blur-2xl border-b border-yellow-400 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[82px] flex items-center justify-between gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center"
              aria-label="Go to home"
            >
              <img
                src={Logo}
                alt="EEC Logo"
                className="w-[170px] sm:w-[190px] h-[60px] object-contain"
                draggable={false}
              />
            </button>

            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[15px] font-extrabold text-slate-900/90 hover:text-slate-950 transition relative group"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                  <span 
                    className={`absolute left-0 -bottom-2 h-[3px] bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 rounded-full transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <button
                onClick={() => scrollToSection("eecunique")}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-white font-extrabold text-sm shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 hover:scale-[1.03] transition-all duration-300"
                aria-label="Get started with EEC"
              >
                Get Started
              </button>
            </div>

            <button
              className="lg:hidden w-12 h-12 rounded-2xl bg-white/30 hover:bg-white/40 border border-white/40 flex items-center justify-center transition"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              <FaBars className="text-slate-900 text-lg" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-end z-[99999]">
          <div
            ref={mobileRef}
            className="w-[88%] max-w-[390px] h-full bg-white shadow-2xl p-5 flex flex-col animate-slideIn"
          >
            <div className="flex items-center justify-between gap-3">
              <button 
                onClick={() => scrollToSection("home")}
                aria-label="Go to home"
              >
                <img
                  src={Logo}
                  alt="EEC Logo"
                  className="w-[160px] h-[55px] object-contain"
                  draggable={false}
                />
              </button>

              <button
                className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
                onClick={() => setMobileOpen(false)}
                aria-label="Close mobile menu"
              >
                <FaTimes className="text-slate-800 text-lg" />
              </button>
            </div>

            <div className="mt-7 flex flex-col gap-2">
              {navLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-xl font-extrabold transition ${
                    activeSection === item.id
                      ? 'bg-yellow-50 text-yellow-700'
                      : 'text-slate-800 hover:bg-yellow-50 hover:text-yellow-700'
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-200">
              <button
                onClick={() => scrollToSection("eecunique")}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-white font-extrabold shadow-lg hover:opacity-95 transition"
                aria-label="Get started with EEC"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;