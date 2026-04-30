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
    <footer className="relative pt-0 pb-16 overflow-hidden bg-white">
      {/* ===================== WHITE BACKGROUND ===================== */}
      <div className="absolute inset-0 z-0 bg-white" />

      {/* Soft glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-100/40 blur-[130px] rounded-full z-0" />
      <div className="absolute -bottom-48 -right-48 w-[560px] h-[560px] bg-yellow-100/40 blur-[130px] rounded-full z-0" />

      {/* ===================== CONTENT ===================== */}
      <div className="global-container relative z-20 pt-8 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-16 items-stretch">
          {/* LEFT CARD */}
          <div 
            data-aos="fade-right"
            className="bg-purple-600 rounded-[32px] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden"
          >
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl -translate-y-10 translate-x-10" />

            <div className="relative z-10 mb-8">
              <h3 className="text-3xl font-extrabold mb-4">Get in Touch</h3>
              <div className="w-16 h-1.5 bg-yellow-400 rounded-full" />
            </div>

            {/* Phone */}
            <a
              href="tel:+919830590929"
              className="flex items-center gap-5 mb-6 group hover:translate-x-1 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-colors">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-purple-200 font-bold mb-0.5">Phone Number</p>
                <p className="font-semibold text-lg">+91 9830590929</p>
              </div>
            </a>

            {/* Email (Fixed) */}
            <a
              href={isMobile ? mailtoLink : gmailLink}
              target={isMobile ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-5 mb-6 group hover:translate-x-1 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-colors">
                <FaEnvelope />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-purple-200 font-bold mb-0.5">Email</p>
                <p className="font-semibold text-lg truncate">{email}</p>
              </div>
            </a>

            {/* Address */}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 mb-10 group hover:translate-x-1 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-colors">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm text-purple-200 font-bold mb-0.5">Office Address</p>
                <p className="font-semibold text-base leading-relaxed max-w-sm">
                  3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West
                  Bengal 700087
                </p>
              </div>
            </a>

            {/* SOCIAL LINKS */}
            <div className="relative z-10 pt-4 border-t border-purple-500/50">
              <p className="text-sm text-purple-200 font-bold mb-4">Follow Us</p>

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
                    className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer"
                    aria-label={`Social media link ${i + 1}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div 
            data-aos="fade-left"
            className="rounded-[32px] overflow-hidden shadow-xl border-4 border-slate-100 relative bg-slate-50"
          >
            <iframe
              title="CITI Mart Location"
              src="https://www.google.com/maps?q=Citi+Mart+Dharmatala+Kolkata&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-slate-400 font-bold">
          © {new Date().getFullYear()} Electronic Educare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
