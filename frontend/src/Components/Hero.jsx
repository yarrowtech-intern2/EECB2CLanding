import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/hero.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
    AOS.refresh();
  }, []);

  const scrollToUnique = () => {
    const section = document.getElementById("eecunique");
    if (!section) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      (headerHeight + 20);

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="
        w-full min-h-screen
        pt-24 sm:pt-28 md:pt-32
        pb-16
        relative overflow-hidden
        px-4
        flex items-center justify-center
      "
    >
      {/* ✅ BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      />

      {/* ✅ YELLOW → AMBER → YELLOW GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-yellow-400/50 via-amber-500/55 to-yellow-400/50" />

      {/* ✅ CONTENT */}
      <div className="w-full max-w-5xl mx-auto text-center relative z-20">
        <h1
          className="
            font-black tracking-tight leading-[1.05]
            text-[40px] sm:text-[56px] md:text-[72px] lg:text-[86px]
            text-white
            drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]
          "
          data-aos="fade-up"
          data-aos-delay="160"
        >
          Personalized
          <br />
          <span className="font-black">learning that adapts</span>
          <br />
          <span className="font-black">to </span>
          <span className="text-white-500 font-black">you</span>
        </h1>

        <p
          className="
            mt-7
            max-w-3xl mx-auto
            text-white
            text-base sm:text-lg md:text-xl
            leading-relaxed
            font-bold
            drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]
          "
          data-aos="fade-up"
          data-aos-delay="240"
        >
          AI-guided study paths, concept support, and gamified progress — crafted
          to boost focus, reduce stress, and improve outcomes.
        </p>

        <div
          className="mt-11 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="340"
        >
          <button
            onClick={scrollToUnique}
            className="
              px-12 py-4
              rounded-xl
              bg-yellow-500
              border-2 border-yellow-600
              text-white
              font-extrabold
              text-base sm:text-lg
              shadow-lg
              hover:shadow-xl
              hover:bg-yellow-400
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all duration-300
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
