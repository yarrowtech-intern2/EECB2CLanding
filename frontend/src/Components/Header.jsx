import React, { useEffect, useRef, useState } from "react";
// import Logo from "../assets/eec.jpeg";
import Logo from "/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef(null);

  // Change this to your main website URL
  const MAIN_WEBSITE_URL = "https://your-main-website.com";

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
      setScrolled(window.scrollY > 20);

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-slate-200/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${
              scrolled ? "h-17.5" : "h-20.5"
            }`}
          >
            {/* LOGO */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center shrink-0"
              aria-label="Go to home"
            >
              <img
                src={Logo}
                alt="EEC Logo"
                className={`object-contain transition-all duration-300 ${
                  scrolled
                    ? "w-35 sm:w-40 h-12"
                    : "w-37.5 sm:w-45 h-14"
                }`}
                draggable={false}
              />
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-[14px] font-bold transition-all duration-200 ${
                    activeSection === item.id
                      ? scrolled
                        ? "text-yellow-700 bg-yellow-50"
                        : "text-white bg-white/15"
                      : scrolled
                        ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.75 rounded-full ${
                        scrolled ? "bg-yellow-500" : "bg-yellow-400"
                      }`}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* DESKTOP GET STARTED */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 rounded-lg font-extrabold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
                  scrolled
                    ? "bg-yellow-400 hover:bg-yellow-300 text-slate-900 shadow-sm hover:shadow-md"
                    : "bg-white text-slate-900 shadow-lg shadow-black/10 hover:bg-yellow-400"
                }`}
                aria-label="Go to main website"
              >
                Get Started
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                scrolled
                  ? "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  : "bg-white/15 hover:bg-white/25 text-white border border-white/20"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              <FaBars className="text-base" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY + DRAWER */}
      <div
        className={`fixed inset-0 z-99999 transition-all duration-300 ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          ref={mobileRef}
          className={`absolute top-0 right-0 w-[85%] max-w-95 h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between gap-3 p-5 border-b border-slate-100">
            <button
              onClick={() => scrollToSection("home")}
              aria-label="Go to home"
            >
              <img
                src={Logo}
                alt="EEC Logo"
                className="w-35 h-12 object-contain"
                draggable={false}
              />
            </button>

            <button
              className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
              onClick={() => setMobileOpen(false)}
              aria-label="Close mobile menu"
            >
              <FaTimes className="text-slate-700 text-base" />
            </button>
          </div>

          {/* Mobile nav links */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3.5 rounded-xl font-bold text-[15px] transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-yellow-50 text-yellow-700 border-l-[3px] border-yellow-500"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 border-l-[3px] border-transparent"
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="p-5 border-t border-slate-100">
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold text-sm shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              aria-label="Go to main website"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
