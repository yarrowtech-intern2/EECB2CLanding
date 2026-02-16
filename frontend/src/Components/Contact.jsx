import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaUser, FaPhoneAlt, FaEnvelope, FaHeading } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    setSuccess(false);
    setErrors({});
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile must be 10 digits";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.description.trim())
      newErrors.description = "Description is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Contact Form Submitted:", formData);

    setSuccess(true);
    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      description: "",
    });
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-4 relative overflow-hidden bg-white"
    >
      {/* soft background glow */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-yellow-100/70 blur-[170px] rounded-full" />
      <div className="absolute -bottom-52 -right-52 w-[650px] h-[650px] bg-sky-100/70 blur-[180px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-950"
            data-aos="fade-up"
          >
            Contact <span className="text-yellow-500">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Info Box */}
          <div
            data-aos="fade-right"
            className="
              group bg-white rounded-3xl
              border border-slate-200/70
              shadow-[0_18px_60px_rgba(15,23,42,0.08)]
              p-8
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_26px_85px_rgba(15,23,42,0.12)]
            "
          >
            <h3 className="text-2xl font-extrabold text-slate-950">
              We're Here to Help
            </h3>

            <p className="mt-3 text-slate-600 font-medium leading-relaxed">
              Fill out the form and our support team will contact you. We usually
              respond within 24 to 48 hours.
            </p>

            <div className="mt-7 space-y-4 text-slate-900 font-semibold">
              <p className="break-all text-slate-700">
                Email:{" "}
                <a
                  href="mailto:electroniceducaresales@yarrowtech.co.in"
                  className="font-extrabold text-slate-950 hover:text-yellow-600 hover:underline transition-all duration-300"
                >
                  electroniceducaresales@yarrowtech.co.in
                </a>
              </p>

              <p className="text-slate-700">
                Phone:{" "}
                <a
                  href="tel:+919830590929"
                  className="font-extrabold text-slate-950 hover:text-yellow-600 hover:underline transition-all duration-300"
                >
                  +91 9830590929
                </a>
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-left"
            className="
              group bg-white rounded-3xl
              border border-slate-200/70
              shadow-[0_18px_60px_rgba(15,23,42,0.08)]
              p-8
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_26px_85px_rgba(15,23,42,0.12)]
            "
          >
            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 rounded-2xl border border-green-200 bg-green-50 text-green-800 font-bold">
                ✅ Message sent successfully!
              </div>
            )}

            {/* Name */}
            <div className="mb-5">
              <label className="font-bold text-slate-900">Name</label>
              <div className="mt-2 flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-200 bg-white focus-within:border-yellow-400 transition">
                <FaUser className="text-yellow-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full outline-none bg-transparent text-slate-900 font-semibold"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-red-600 font-semibold text-sm">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div className="mb-5">
              <label className="font-bold text-slate-900">Mobile No</label>
              <div className="mt-2 flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-200 bg-white focus-within:border-yellow-400 transition">
                <FaPhoneAlt className="text-yellow-500" />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10 digit mobile number"
                  className="w-full outline-none bg-transparent text-slate-900 font-semibold"
                />
              </div>
              {errors.mobile && (
                <p className="mt-1 text-red-600 font-semibold text-sm">
                  {errors.mobile}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="font-bold text-slate-900">Email</label>
              <div className="mt-2 flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-200 bg-white focus-within:border-yellow-400 transition">
                <FaEnvelope className="text-yellow-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full outline-none bg-transparent text-slate-900 font-semibold"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-red-600 font-semibold text-sm">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label className="font-bold text-slate-900">Subject</label>
              <div className="mt-2 flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-200 bg-white focus-within:border-yellow-400 transition">
                <FaHeading className="text-yellow-500" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full outline-none bg-transparent text-slate-900 font-semibold"
                />
              </div>
              {errors.subject && (
                <p className="mt-1 text-red-600 font-semibold text-sm">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="font-bold text-slate-900">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                className="
                  mt-2 w-full px-4 py-3 rounded-2xl
                  border border-slate-200 bg-white
                  outline-none text-slate-900 font-semibold
                  resize-none
                  focus:border-yellow-400 transition
                "
              />
              {errors.description && (
                <p className="mt-1 text-red-600 font-semibold text-sm">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full flex items-center justify-center gap-3
                px-6 py-3 rounded-full font-extrabold text-slate-950
                bg-yellow-400 hover:bg-yellow-300
                shadow-lg hover:shadow-xl
                transition-all duration-300
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
