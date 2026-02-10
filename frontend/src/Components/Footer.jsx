import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const email = "electroniceducaresales@yarrowtech.co.in";

  // ✅ Mailto for mobile
  const mailtoLink = `mailto:${email}`;

  // ✅ Gmail compose for desktop
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  // ✅ Detect mobile
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=Citi+Mart+Dharmatala+Kolkata";

  return (
    <footer className="relative pt-0 pb-20 px-4 overflow-hidden bg-white">
      {/* ===================== WHITE BACKGROUND ===================== */}
      <div className="absolute inset-0 z-0 bg-white" />

      {/* Soft yellow glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-yellow-200/40 blur-[130px] rounded-full z-0" />
      <div className="absolute -bottom-48 -right-48 w-[560px] h-[560px] bg-yellow-200/40 blur-[130px] rounded-full z-0" />

      {/* ===================== CONTENT ===================== */}
      <div className="max-w-7xl mx-auto relative z-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT CARD */}
          <div className="bg-yellow-400 rounded-3xl p-8 sm:p-10 text-black shadow-lg border border-yellow-500/30">
            <div className="mb-6">
              <h3 className="text-2xl font-black">Get In Touch With Us</h3>
              <div className="w-20 h-1 bg-black mt-3 rounded-full" />
            </div>

            {/* Phone */}
            <a
              href="tel:+919830590929"
              className="flex gap-4 mb-6 hover:underline cursor-pointer transition-all hover:translate-x-1"
            >
              <FaPhoneAlt className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Phone Number</p>
                <p>+91 9830590929</p>
              </div>
            </a>

            {/* Email (Fixed) */}
            <a
              href={isMobile ? mailtoLink : gmailLink}
              target={isMobile ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex gap-4 mb-6 hover:underline cursor-pointer transition-all hover:translate-x-1"
            >
              <FaEnvelope className="mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-semibold">Email</p>
                <p className="break-all">{email}</p>
              </div>
            </a>

            {/* Address */}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 mb-10 hover:underline cursor-pointer transition-all hover:translate-x-1"
            >
              <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Office Address</p>
                <p className="leading-relaxed">
                  3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West
                  Bengal 700087
                </p>
              </div>
            </a>

            {/* SOCIAL LINKS */}
            <div>
              <p className="font-semibold mb-4">Follow Us</p>

              <div className="flex gap-4">
                {[
                  {
                    Icon: FaInstagram,
                    link: "https://www.instagram.com/its_eec_",
                  },
                  {
                    Icon: FaLinkedinIn,
                    link: "https://www.linkedin.com/in/electroniceducare-eec-413ba6328/",
                  },
                ].map(({ Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black text-yellow-400 flex items-center justify-center hover:scale-110 transition cursor-pointer"
                    aria-label={`Social media link ${i + 1}`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-yellow-200/60 relative">
            <iframe
              title="CITI Mart Location"
              src="https://www.google.com/maps?q=Citi+Mart+Dharmatala+Kolkata&output=embed"
              className="w-full h-[380px] sm:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-14 text-center text-sm text-gray-700 font-semibold">
          © {new Date().getFullYear()} Electronic Educare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
