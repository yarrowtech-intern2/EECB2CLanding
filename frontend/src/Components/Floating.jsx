import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FloatingActions = () => {
  const email = "electroniceducaresales@yarrowtech.co.in";

  // ✅ Gmail compose link (best for desktop)
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  // ✅ Mailto (best for mobile)
  const mailtoLink = `mailto:${email}`;

  // ✅ Detect mobile device
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <div
      className="
        fixed
        right-3 sm:right-4 xl:right-8
        bottom-4 sm:bottom-6 xl:bottom-8
        z-[1000]
        flex flex-col gap-3 sm:gap-4 xl:gap-5
        pointer-events-auto
      "
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/919830590929?text=Hello%20I%20am%20interested%20in%20your%20ERP%20solutions"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="
          w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16
          rounded-full
          bg-green-500 hover:bg-green-600
          text-white
          flex items-center justify-center
          shadow-lg hover:shadow-[0_20px_50px_rgba(34,197,94,0.3)]
          transition-all duration-300
          hover:scale-110 active:scale-95
        "
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8" />
      </a>

      {/* Email */}
      <a
        href={isMobile ? mailtoLink : gmailLink}
        target={isMobile ? "_self" : "_blank"}
        rel="noopener noreferrer"
        aria-label="Send Email"
        title="Send Email"
        className="
          w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16
          rounded-full
          bg-blue-500 hover:bg-blue-600
          text-white
          flex items-center justify-center
          shadow-lg hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]
          transition-all duration-300
          hover:scale-110 active:scale-95
        "
      >
        <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8" />
      </a>
    </div>
  );
};

export default FloatingActions;
