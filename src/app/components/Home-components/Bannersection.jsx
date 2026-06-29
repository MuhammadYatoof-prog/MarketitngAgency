"use client";

import React, { useState } from "react";

export default function Bannersection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const openJoinModal = () => {
    setIsModalOpen(true);
    setSubmitted(false);
  };

  const closeJoinModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="relative bg-[url('https://t3.ftcdn.net/jpg/04/42/44/98/360_F_442449827_ispo2oI83ffX0TSax4Pgdd7xkqCA5ThA.jpg')] bg-cover bg-center h-screen w-full overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">
        {/* Animated Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight animate-fadeInUp">
          Welcome to our <br />
          <span className="text-cyan-400 animate-pulse">
            Marketing Academy
          </span>
        </h1>

        {/* Sub Text */}
        <p className="text-gray-300 mt-6 max-w-xl text-lg md:text-xl animate-fadeIn delay-200">
          Learn digital marketing, branding, SEO, social media strategies,
          and grow your career with professional training.
        </p>

        {/* Animated Button */}
        <div className="mt-8 animate-fadeIn delay-500">
          <button
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            onClick={openJoinModal}
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Join Now Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-20">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-slideDown max-h-[85vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeJoinModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-cyan-500 text-5xl mb-4">&#10003;</div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Thank you!
                </h3>
                <p className="text-gray-600 mt-2">
                  Your request has been submitted. Our team will contact you
                  soon.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                  Join Our Marketing Academy
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Fill in your details and we&apos;ll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Area of Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="">Select an option</option>
                      <option value="seo">SEO</option>
                      <option value="social-media">Social Media Marketing</option>
                      <option value="branding">Branding</option>
                      <option value="paid-ads">Paid Ads</option>
                      <option value="full-course">Full Digital Marketing Course</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us a bit about your goals"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold rounded-lg transition-all duration-300 mx-auto block"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}