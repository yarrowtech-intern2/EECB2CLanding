import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaHeading,
  FaGraduationCap,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    class: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.mobile.trim())
      newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile must be 10 digits";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.class) newErrors.class = "Please select a class";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill all required fields correctly.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        `${import.meta.env.VITE_SCRIPT_URL}`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            project: "B2C",
          }),
        }
      );

      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 4000,
      });

      setFormData({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        class: "",
        description: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const classOptions = Array.from({ length: 8}, (_, i) => i + 3);

  const contactCards = [
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email Us",
      detail: "electroniceducaresales@yarrowtech.co.in",
      href: "mailto:electroniceducaresales@yarrowtech.co.in",
      color: "from-yellow-400 to-amber-500",
      bgLight: "bg-yellow-50",
    },
    {
      icon: <FaPhoneAlt className="text-xl" />,
      title: "Call Us",
      detail: "+91 9830590929",
      href: "tel:+919830590929",
      color: "from-sky-400 to-blue-500",
      bgLight: "bg-sky-50",
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Response Time",
      detail: "Within 24–48 hours",
      href: null,
      color: "from-emerald-400 to-green-500",
      bgLight: "bg-emerald-50",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      detail: "Kolkata, West Bengal, India",
      href: null,
      color: "from-violet-400 to-purple-500",
      bgLight: "bg-violet-50",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-24 px-4 relative overflow-hidden bg-linear-to-b from-slate-50 to-white"
    >
      {/* Background decorations */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-yellow-100/60 blur-[170px] rounded-full" />
      <div className="absolute -bottom-52 -right-52 w-[650px] h-[650px] bg-sky-100/60 blur-[180px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-50/40 blur-[200px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm mb-4 tracking-wide uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950">
            Contact <span className="text-yellow-500">Us</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
            Have a question or need help? Reach out and we'll respond within
            24–48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left Info Section - 2 cols */}
          <div className="lg:col-span-2 space-y-5" data-aos="fade-right">
            {/* Info heading card */}
            <div className="relative overflow-hidden rounded-3xl bg-yellow-600 p-7 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full blur-2xl -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-800 rounded-full blur-2xl translate-y-6 -translate-x-6" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center mb-5">
                  <FaPaperPlane className="text-slate-900 text-lg" />
                </div>
                <h3 className="text-2xl font-extrabold">We're Here to Help</h3>
                <p className="mt-3 text-slate font-medium leading-relaxed text-sm">
                  Fill out the form and our support team will reach out to you.
                  We'd love to hear from you!
                </p>
              </div>
            </div>

            {/* Contact info cards */}
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="group"
              >
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("mailto") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-linear-to-br ${card.color} flex items-center justify-center text-white shrink-0 shadow-sm`}
                    >
                      {card.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {card.title}
                      </p>
                      <p className="text-sm font-bold text-slate-900 truncate group-hover:text-yellow-600 transition-colors">
                        {card.detail}
                      </p>
                    </div>
                    <FaArrowRight className="text-slate-300 text-sm shrink-0 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div
                      className={`w-11 h-11 rounded-xl bg-linear-to-br ${card.color} flex items-center justify-center text-white shrink-0 shadow-sm`}
                    >
                      {card.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {card.title}
                      </p>
                      <p className="text-sm font-bold text-slate-900 truncate">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Form - 3 cols */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-left"
            className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_70px_rgba(15,23,42,0.07)] p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-xl font-extrabold text-slate-950 mb-1">
              Send us a Message
            </h3>
            <p className="text-sm text-slate-400 font-medium mb-7">
              Fields marked with * are required
            </p>

            {/* Name */}
            <div className="mb-5">
              <label className="text-sm font-bold text-slate-700 mb-2 block">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-slate-50/50 transition-all duration-200 ${
                  errors.name
                    ? "border-red-300 bg-red-50/30"
                    : "border-slate-200 focus-within:border-yellow-400 focus-within:bg-white focus-within:shadow-sm"
                }`}
              >
                <FaUser className="text-yellow-500 text-sm shrink-0" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full outline-none bg-transparent text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-medium"
                />
              </div>
              {errors.name && (
                <p className="mt-1.5 text-red-500 font-semibold text-xs">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Mobile & Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* Mobile */}
              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">
                  Mobile No <span className="text-red-500">*</span>
                </label>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-slate-50/50 transition-all duration-200 ${
                    errors.mobile
                      ? "border-red-300 bg-red-50/30"
                      : "border-slate-200 focus-within:border-yellow-400 focus-within:bg-white focus-within:shadow-sm"
                  }`}
                >
                  <FaPhoneAlt className="text-yellow-500 text-sm shrink-0" />
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10 digit number"
                    maxLength={10}
                    className="w-full outline-none bg-transparent text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-medium"
                  />
                </div>
                {errors.mobile && (
                  <p className="mt-1.5 text-red-500 font-semibold text-xs">
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">
                  Email <span className="text-red-500">*</span>
                </label>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-slate-50/50 transition-all duration-200 ${
                    errors.email
                      ? "border-red-300 bg-red-50/30"
                      : "border-slate-200 focus-within:border-yellow-400 focus-within:bg-white focus-within:shadow-sm"
                  }`}
                >
                  <FaEnvelope className="text-yellow-500 text-sm shrink-0" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full outline-none bg-transparent text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-medium"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-red-500 font-semibold text-xs">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject & Class row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* Subject */}
              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">
                  Subject <span className="text-red-500">*</span>
                </label>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-slate-50/50 transition-all duration-200 ${
                    errors.subject
                      ? "border-red-300 bg-red-50/30"
                      : "border-slate-200 focus-within:border-yellow-400 focus-within:bg-white focus-within:shadow-sm"
                  }`}
                >
                  <FaHeading className="text-yellow-500 text-sm shrink-0" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full outline-none bg-transparent text-slate-900 font-semibold text-sm placeholder:text-slate-400 placeholder:font-medium"
                  />
                </div>
                {errors.subject && (
                  <p className="mt-1.5 text-red-500 font-semibold text-xs">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Class Dropdown */}
              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">
                  Class <span className="text-red-500">*</span>
                </label>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-slate-50/50 transition-all duration-200 ${
                    errors.class
                      ? "border-red-300 bg-red-50/30"
                      : "border-slate-200 focus-within:border-yellow-400 focus-within:bg-white focus-within:shadow-sm"
                  }`}
                >
                  <FaGraduationCap className="text-yellow-500 text-sm shrink-0" />
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className={`w-full outline-none bg-transparent font-semibold text-sm cursor-pointer appearance-none ${
                      formData.class ? "text-slate-900" : "text-slate-400 font-medium"
                    }`}
                  >
                    <option value="" disabled>
                      Select class
                    </option>
                    {classOptions.map((cls) => (
                      <option key={cls} value={cls}>
                        Class {cls}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {errors.class && (
                  <p className="mt-1.5 text-red-500 font-semibold text-xs">
                    {errors.class}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-7">
              <label className="text-sm font-bold text-slate-700 mb-2 block">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 outline-none text-slate-900 font-semibold text-sm resize-none placeholder:text-slate-400 placeholder:font-medium focus:border-yellow-400 focus:bg-white focus:shadow-sm transition-all duration-200"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-linear-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg shadow-yellow-400/25 hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane className="text-xs" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
