import React, { useEffect, useRef, useState } from "react";
import Logo from "/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef(null);

  const MAIN_WEBSITE_URL = "https://your-main-website.com";

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Why EEC", id: "why-eec" },
    { label: "Features & Modules", id: "features" },
    { label: "FAQ", id: "faq" },
    { label: "Contacts", id: "contact" },
  ];

  /* ======================
     SCROLL ACTIVE SECTION
  ====================== */

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
          if (scrollPosition >= section.offsetTop) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ======================
     CLOSE MOBILE MENU
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

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  /* ======================
     SCROLL FUNCTION
  ====================== */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileOpen(false);
      return;
    }

    const headerOffset = 90;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });

    setMobileOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-[10000]">

      {/* NAVBAR BACKGROUND - BEIGE/TAN WITH YELLOW ACCENTS */}

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-amber-100 via-stone-200 to-amber-100 backdrop-blur-2xl border-b border-yellow-300/50 shadow-md"
            : "bg-gradient-to-r from-stone-300 via-stone-250 to-stone-300 backdrop-blur-xl border-b border-stone-400/30"
        }`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >

            {/* LOGO */}

            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center"
            >
              <img
                src={Logo}
                alt="EEC Logo"
                className={`transition-all duration-300 ${
                  scrolled ? "h-10 w-auto" : "h-12 w-auto"
                }`}
              />
            </button>

            {/* DESKTOP NAV */}

            <nav className="hidden lg:flex items-center gap-1">

              {navLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 rounded-md text-sm font-semibold transition ${
                    activeSection === item.id
                      ? "bg-yellow-300/90 text-amber-900 shadow-md"
                      : "text-stone-700 hover:text-stone-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}

            </nav>

            {/* DESKTOP CTA */}

            <div className="hidden lg:flex">

              <a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-2.5 rounded-md font-bold text-sm bg-yellow-400 hover:bg-yellow-500 text-amber-900 shadow-md hover:shadow-lg transition"
              >
                Get Started
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md bg-yellow-300/70 hover:bg-yellow-400 transition text-amber-900"
              onClick={() => setMobileOpen(true)}
            >
              <FaBars />
            </button>

          </div>
        </div>
      </div>

      {/* ======================
         MOBILE MENU
      ====================== */}

      <div
        className={`fixed inset-0 z-[99999] transition ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >

        {/* BACKDROP */}

        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileOpen(false)}
        />

        {/* DRAWER */}

        <div
          ref={mobileRef}
          className={`absolute right-0 top-0 w-[85%] max-w-[350px] h-full bg-stone-100 shadow-2xl transition-transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          <div className="flex items-center justify-between p-5 border-b border-yellow-300 bg-gradient-to-r from-stone-300 to-amber-100">

            <img src={Logo} alt="logo" className="h-10" />

            <button onClick={() => setMobileOpen(false)} className="text-amber-900 hover:text-amber-950">
              <FaTimes size={24} />
            </button>

          </div>

          <div className="p-5 flex flex-col gap-2">

            {navLinks.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-5 py-3 rounded-md font-semibold transition ${
                  activeSection === item.id
                    ? "bg-yellow-300 text-amber-900 shadow-md"
                    : "text-stone-700 hover:bg-yellow-100 hover:text-stone-900"
                }`}
              >
                {item.label}
              </button>
            ))}

          </div>

          <div className="p-5 border-t border-yellow-300">

            <a
              href={MAIN_WEBSITE_URL}
              className="block text-center py-3 rounded-md bg-yellow-400 hover:bg-yellow-500 text-amber-900 font-bold transition shadow-md hover:shadow-lg"
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