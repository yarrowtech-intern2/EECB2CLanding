import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../assets/logo.webp";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

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
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          const headerOffset = 80;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);

      return;
    }

    const section = document.getElementById(id);

    if (!section) {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const headerOffset = 80;

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="global-container relative flex items-center justify-between h-14 lg:h-16">

        {/* LOGO */}
        <button
          onClick={() => scrollToSection("home")}
          className="relative z-10 flex-shrink-0 bg-white px-3 py-2 rounded-xl shadow-sm border border-gray-100"
        >
          <img src={Logo} alt="logo" className="h-7 lg:h-9 w-auto" />
        </button>
 
        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 z-10">
          <nav className="flex items-center gap-1.5 bg-white/30 backdrop-blur-md border border-white/40 rounded-full p-1.5">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-2 rounded-full text-sm xl:text-base font-bold transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-black text-white shadow-md"
                    : "text-black hover:bg-white/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-4 relative z-10">
          <button
            onClick={() =>
              toast.success("Get Started functionality coming soon!")
            }
            className="hidden lg:block bg-white text-black px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:scale-105 border border-gray-100"
          >
            Get Started
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md border border-gray-100"
          >
            <FaBars size={18} />
          </button>
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
          className={`absolute right-0 top-0 w-[85%] max-w-[320px] h-screen bg-white shadow-xl transition-transform duration-300 ${
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
              onClick={() =>
                toast.success("Get Started functionality coming soon!", {
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                })
              }
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