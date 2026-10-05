"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/assets/Contact/Image.png";
import img2 from "@/public/assets/Contact/Image1.png";
import img3 from "@/public/assets/Contact/Image2.png";
import img4 from "@/public/assets/Contact/Image3.png";

const bannerImages = [img1, img2, img3, img4];

export default function ContactBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    topic: "",
    otherTopic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xeaejyvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          topic:
            formData.topic === "Other" && formData.otherTopic
              ? `Other: ${formData.otherTopic}`
              : formData.topic,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          topic: "",
          otherTopic: "",
          message: "",
        });
      } else {
        const data = await response.json();
        if (data && data.errors && Array.isArray(data.errors)) {
          setError(
            data.errors
              .map((err: { message?: string }) => err.message || "Error")
              .join(", ")
          );
        } else {
          setError("Failed to send message. Please try again later.");
        }
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const topics = [
    "General Inquiry",
    "Class Timings",
    "Admissions",
    "Fees & Pricing",
    "Trial Class",
    "Other",
  ];

  return (
    <section
      className="w-full mx-auto flex flex-col lg:flex-row font-primary min-h-[calc(100vh-4rem)]"
      style={{ maxWidth: "1440px" }}
    >
      {/* Left Panel – Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col py-14 px-5 lg:py-20 lg:px-20">
        <div className="w-full flex flex-col md:gap-11.25 gap-8">
          {/* Header Block */}
          <div className="flex flex-col gap-2">
            {/* Heading */}
            <h1 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
              Get In Touch
              <br />
              With Us
            </h1>
            <p className="text-[14px] lg:text-[16px] text-secondary leading-relaxed font-primary font-normal max-w-125">
              Have questions about classes, timings, or admissions?
              <br />
              Our team is here to help you begin your martial arts journey.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center flex flex-col items-center gap-3">
              <svg
                className="mx-auto h-12 w-12 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-emerald-800">
                Message Sent!
              </h3>
              <p className="text-sm text-emerald-600">
                Thank you for reaching out. We&apos;ll get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-3 inline-flex items-center px-4 py-2 border border-emerald-600 text-sm font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50 transition cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xeaejyvp"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              {error && (
                <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Full Name */}
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="banner-name"
                  className="block text-lg font-medium text-[#111]"
                >
                  Full Name<span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="banner-name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Type your answer here"
                  className="w-full border border-zinc-200 rounded-md px-4 py-2.5 text-md text-zinc-700 focus:outline-none focus:ring-0 transition "
                />
              </div>

              {/* Email Address */}
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="banner-email"
                  className="block text-lg font-medium text-[#111]"
                >
                  Email Address<span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="banner-email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Type your answer here"
                  className="w-full border border-zinc-200 rounded-md px-4 py-2.5 text-md text-zinc-700 focus:outline-none focus:ring-0 transition "
                />
              </div>

              {/* Mobile Number */}
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="banner-mobile"
                  className="block text-lg font-medium text-[#111]"
                >
                  Mobile Number<span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="banner-mobile"
                  required
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  placeholder="Type your answer here"
                  className="w-full border border-zinc-200 rounded-md px-4 py-2.5 text-md text-zinc-700 focus:outline-none focus:ring-0 transition "
                />
              </div>

              {/* Select Topic */}
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="banner-topic"
                  className="block text-lg font-medium text-[#111]"
                >
                  Select Topic<span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <select
                    name="topic"
                    id="banner-topic"
                    required
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value })
                    }
                    className="w-full appearance-none border border-zinc-200 rounded-md px-4 py-2.5 text-sm text-zinc-700 bg-white focus:outline-none focus:ring-0 transition"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                {formData.topic === "Other" && (
                  <input
                    type="text"
                    name="otherTopic"
                    id="banner-other-topic"
                    required
                    value={formData.otherTopic}
                    onChange={(e) =>
                      setFormData({ ...formData, otherTopic: e.target.value })
                    }
                    placeholder="Please specify your topic"
                    className="w-full border border-zinc-200 rounded-md px-4 py-2.5 text-sm text-zinc-700 focus:outline-none focus:ring-0 transition"
                  />
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="banner-message"
                  className="block text-lg font-medium text-[#111]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="banner-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Type your answer here"
                  className="w-full border border-zinc-200 rounded-md px-4 py-2.5 text-md text-zinc-700 focus:outline-none focus:ring-0 transition  resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-white font-semibold py-3 rounded-md text-sm hover:bg-accent/90 active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right Panel – Image Slideshow */}
      <div className="relative w-full sm:max-w-none md:max-w-none h-132 aspect-49/69 mx-auto lg:w-1/2 lg:max-w-none lg:h-auto lg:aspect-auto self-stretch overflow-hidden">
        {bannerImages.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Deccan Taekwondo Academy Martial Artist ${idx + 1}`}
            fill
            priority={idx === 0}
            className={`object-cover h-full w-full transition-opacity duration-1000 ease-in-out ${
              idx === currentImgIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentImgIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentImgIndex
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
