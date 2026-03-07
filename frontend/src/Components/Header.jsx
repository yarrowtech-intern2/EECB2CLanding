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

      {/* NAVBAR BACKGROUND */}

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-white/80 via-yellow-50/80 to-white/80 backdrop-blur-2xl border-b border-yellow-200/40 shadow-lg"
            : "bg-white/10 backdrop-blur-xl border-b border-white/10"
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

            <nav className="hidden lg:flex items-center gap-2">

              {navLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-bold transition ${
                    activeSection === item.id
                      ? "text-yellow-700 bg-yellow-100/70"
                      : "text-slate-700 hover:bg-yellow-50"
                  }`}
                >
                  {item.label}

                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-yellow-500 rounded-full" />
                  )}
                </button>
              ))}

            </nav>

            {/* DESKTOP CTA */}

            <div className="hidden lg:flex">

              <a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg font-bold text-sm bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-slate-900 shadow-md hover:shadow-lg transition"
              >
                Get Started
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/40 backdrop-blur hover:bg-white/60 transition"
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
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        {/* DRAWER */}

        <div
          ref={mobileRef}
          className={`absolute right-0 top-0 w-[85%] max-w-[350px] h-full bg-white shadow-2xl transition-transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          <div className="flex items-center justify-between p-5 border-b">

            <img src={Logo} alt="logo" className="h-10" />

            <button onClick={() => setMobileOpen(false)}>
              <FaTimes />
            </button>

          </div>

          <div className="p-5 flex flex-col gap-2">

            {navLinks.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-lg font-semibold ${
                  activeSection === item.id
                    ? "bg-yellow-100 text-yellow-700"
                    : "hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}

          </div>

          <div className="p-5 border-t">

            <a
              href={MAIN_WEBSITE_URL}
              className="block text-center py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 font-bold"
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