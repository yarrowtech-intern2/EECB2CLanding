import React, { useEffect, useRef, useState } from "react";
import Logo from "/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef(null);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Why EEC", id: "why-eec" },
    { label: "Features & Modules", id: "features" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  /* ======================
     SCROLL ACTIVE SECTION
  ====================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 150;

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
     BODY SCROLL LOCK
  ====================== */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  /* ======================
     SCROLL FUNCTION
  ====================== */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 80;

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">

      {/* NAVBAR */}

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* LOGO */}

            <button onClick={() => scrollToSection("home")}>
              <img
                src={Logo}
                alt="logo"
                className="h-9 lg:h-11 w-auto"
              />
            </button>

            {/* DESKTOP NAV */}

            <nav className="hidden lg:flex items-center gap-2">

              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
                    activeSection === item.id
                      ? "bg-yellow-400 text-black shadow"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.label}
                </button>
              ))}

            </nav>

            {/* DESKTOP CTA */}

            <div className="hidden lg:block">

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-md font-semibold shadow transition"
              >
                Get Started
              </button>

            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md bg-yellow-400"
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
          className={`absolute right-0 top-0 w-[85%] max-w-[320px] h-full bg-white shadow-xl transition-transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* TOP */}

          <div className="flex items-center justify-between p-5 border-b">

            <img src={Logo} alt="logo" className="h-9" />

            <button onClick={() => setMobileOpen(false)}>
              <FaTimes size={22} />
            </button>

          </div>

          {/* LINKS */}

          <div className="p-5 flex flex-col gap-2">

            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-md font-medium ${
                  activeSection === item.id
                    ? "bg-yellow-400 text-black"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}

          </div>

          {/* CTA */}

          <div className="p-5 border-t">

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-3 bg-yellow-400 rounded-md font-semibold shadow"
            >
              Get Started
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;