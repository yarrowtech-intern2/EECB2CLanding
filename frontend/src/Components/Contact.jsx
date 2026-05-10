import React, { useState } from "react";
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
            project: "Edify Eight",
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
      className="w-full py-6 sm:py-10 relative overflow-hidden bg-white"
    >
      <div className="global-container relative z-10">
        {/* Header */}
        <div className="mb-4 sm:mb-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-extrabold text-slate-800 mb-6">
            Get in <span className="text-yellow-400 italic font-serif">touch</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-lg text-base sm:text-lg mx-auto">
            Have a question or need help? Reach out and we'll respond within
            24–48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Info Section */}
          <div data-aos="fade-right" className="lg:col-span-2 space-y-6">
            <div className="relative overflow-hidden rounded-[32px] bg-purple-600 p-8 text-white shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-2xl -translate-y-8 translate-x-8" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-6 text-slate-900 text-xl shadow-md">
                  <FaPaperPlane />
                </div>
                <h3 className="text-2xl font-extrabold mb-3">We're Here to Help</h3>
                <p className="text-purple-100 font-medium leading-relaxed text-sm">
                  Fill out the form and our support team will reach out to you.
                  We'd love to hear from you!
                </p>
              </div>
            </div>

            <div className="space-y-4">
               {contactCards.map((card, idx) => {
                 const isLink = !!card.href;
                 const CardContent = (
                   <div className="flex items-center gap-5 p-5 rounded-[24px] bg-slate-50 border border-slate-100 transition-all hover:bg-purple-50 group">
                     <div className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center text-lg shadow-sm border border-slate-100 group-hover:border-purple-200 group-hover:scale-110 transition-all">
                       {card.icon}
                     </div>
                     <div>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{card.title}</p>
                       <p className="text-sm font-extrabold text-slate-800 group-hover:text-purple-700 transition-colors">{card.detail}</p>
                     </div>
                   </div>
                 );

                 return isLink ? (
                   <a key={idx} href={card.href} target={card.href.startsWith("mailto") ? "_blank" : undefined} rel="noreferrer" className="block">
                     {CardContent}
                   </a>
                 ) : (
                   <div key={idx}>{CardContent}</div>
                 );
               })}
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-left"
            className="lg:col-span-3 bg-white rounded-[32px] border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.06)] p-8 lg:p-10"
          >
            <h3 className="text-2xl font-extrabold text-slate-800 mb-2">
              Send us a Message
            </h3>
            <p className="text-sm text-slate-400 font-medium mb-8">
              Fields marked with * are required
            </p>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">Full Name <span className="text-red-500">*</span></label>
                <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border bg-slate-50 transition-all ${errors.name ? "border-red-300 ring-2 ring-red-50" : "border-slate-200 focus-within:border-purple-400 focus-within:ring-4 focus-within:ring-purple-50"}`}>
                  <FaUser className="text-purple-400 shrink-0" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full outline-none bg-transparent text-slate-800 font-bold text-sm placeholder:text-slate-400 placeholder:font-medium" />
                </div>
                {errors.name && <p className="mt-1.5 text-red-500 font-semibold text-xs">{errors.name}</p>}
              </div>

              {/* Mobile & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Mobile No <span className="text-red-500">*</span></label>
                  <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border bg-slate-50 transition-all ${errors.mobile ? "border-red-300 ring-2 ring-red-50" : "border-slate-200 focus-within:border-purple-400 focus-within:ring-4 focus-within:ring-purple-50"}`}>
                    <FaPhoneAlt className="text-purple-400 shrink-0" />
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="10 digit number" maxLength={10} className="w-full outline-none bg-transparent text-slate-800 font-bold text-sm placeholder:text-slate-400 placeholder:font-medium" />
                  </div>
                  {errors.mobile && <p className="mt-1.5 text-red-500 font-semibold text-xs">{errors.mobile}</p>}
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Email <span className="text-red-500">*</span></label>
                  <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border bg-slate-50 transition-all ${errors.email ? "border-red-300 ring-2 ring-red-50" : "border-slate-200 focus-within:border-purple-400 focus-within:ring-4 focus-within:ring-purple-50"}`}>
                    <FaEnvelope className="text-purple-400 shrink-0" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" className="w-full outline-none bg-transparent text-slate-800 font-bold text-sm placeholder:text-slate-400 placeholder:font-medium" />
                  </div>
                  {errors.email && <p className="mt-1.5 text-red-500 font-semibold text-xs">{errors.email}</p>}
                </div>
              </div>

              {/* Subject & Class */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Subject <span className="text-red-500">*</span></label>
                  <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border bg-slate-50 transition-all ${errors.subject ? "border-red-300 ring-2 ring-red-50" : "border-slate-200 focus-within:border-purple-400 focus-within:ring-4 focus-within:ring-purple-50"}`}>
                    <FaHeading className="text-purple-400 shrink-0" />
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject" className="w-full outline-none bg-transparent text-slate-800 font-bold text-sm placeholder:text-slate-400 placeholder:font-medium" />
                  </div>
                  {errors.subject && <p className="mt-1.5 text-red-500 font-semibold text-xs">{errors.subject}</p>}
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Class <span className="text-red-500">*</span></label>
                  <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border bg-slate-50 transition-all ${errors.class ? "border-red-300 ring-2 ring-red-50" : "border-slate-200 focus-within:border-purple-400 focus-within:ring-4 focus-within:ring-purple-50"}`}>
                    <FaGraduationCap className="text-purple-400 shrink-0" />
                    <select name="class" value={formData.class} onChange={handleChange} className={`w-full outline-none bg-transparent font-bold text-sm cursor-pointer appearance-none ${formData.class ? "text-slate-800" : "text-slate-400 font-medium"}`}>
                      <option value="" disabled>Select class</option>
                      {classOptions.map((cls) => (<option key={cls} value={cls}>Class {cls}</option>))}
                    </select>
                    <svg className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  {errors.class && <p className="mt-1.5 text-red-500 font-semibold text-xs">{errors.class}</p>}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Write your message here..." rows="4" className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 outline-none text-slate-800 font-bold text-sm resize-none placeholder:text-slate-400 placeholder:font-medium focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all" />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" disabled={isSubmitting} className="mt-8 w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full font-bold text-base text-white bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
              {isSubmitting ? "Submitting..." : (
                <>
                  Send Message
                  <span className="bg-white/20 p-1.5 rounded-full"><FaArrowRight size={12} /></span>
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
