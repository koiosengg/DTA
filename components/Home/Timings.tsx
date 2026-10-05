"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TimingsProps {
  title?: React.ReactNode;
  subtitle?: string;
  badge?: string;
}

export default function Timings({
  title = "Our Batch Timings",
  subtitle = "From beginners to champions, we train kids, teens, adults, and professionals through expert",
  badge = "Choose the batch that suits you",
}: TimingsProps) {
  const [showAllEvening, setShowAllEvening] = useState(false);

  const eveningSlots = [
    "03:00 PM – 04:00 PM",
    "04:00 PM – 05:00 PM",
    "05:00 PM – 06:00 PM",
    "06:00 PM – 07:00 PM",
    "07:00 PM – 08:00 PM",
  ];

  return (
    <section className="w-full bg-white py-14 lg:py-30 px-5 md:px-12 lg:px-20 overflow-hidden font-primary flex">
      <div className="w-full max-w-7xl flex flex-col gap-18.5 lg:gap-15">
        {/* Header Block */}
        <div className="flex flex-col gap-2 text-left">
          <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
            {title}
          </h2>
          <p className="text-md text-secondary leading-relaxed font-primary font-normal max-w-162.5">
            {subtitle}
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="w-full flex flex-col justify-center items-center gap-6 lg:gap-10.5">
          <p className="text-accent font-semibold text-xl font-primary text-center">
            {badge}
          </p>

          {/* Cards Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
            {/* Card 1: Adult Fitness Classes */}
            <Link
              href="/contact"
              className="flex flex-col gap-6 text-center bg-[#F2F2F2] border border-[#D6D6D6] rounded-lg p-6 sm:p-8 justify-start transition-colors duration-300 hover:bg-[#FBE9E9] hover:border-[#EC989B] cursor-pointer"
            >
              <div className="flex flex-col gap-1.5 items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-primary">
                  Adult Fitness Classes
                </h3>
                <p className="text-lg text-secondary leading-relaxed font-primary font-normal">
                  Includes high-intensity cardio, light weight gym access,
                  weight loss training, and functional fitness routines designed
                  for peak performance.
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <span className="font-bold text-accent font-primary text-sm ">
                  07:00 AM – 09:00 AM
                </span>
              </div>
            </Link>

            {/* Card 2: Taekwondo Classes */}
            <Link
              href="/contact"
              className="flex flex-col gap-6 text-center bg-[#F2F2F2] border border-[#D6D6D6] rounded-lg p-6 sm:p-8 justify-start transition-colors duration-300 hover:bg-[#FBE9E9] hover:border-[#EC989B] cursor-pointer"
            >
              <div className="flex flex-col gap-1.5 items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-primary">
                  Taekwondo Classes
                </h3>
                <p className="text-lg  text-secondary leading-relaxed font-primary font-normal">
                  Our flagship morning batch for all ages. Focus on technical
                  precision, forms, and traditional martial arts discipline.
                  Available every day.
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <span className="font-bold text-accent font-primary text-sm ">
                  06:00 AM – 07:00 AM
                </span>
              </div>
            </Link>

            {/* Card 3: Evening Batch Classes */}
            <Link
              href="/contact"
              className="flex flex-col gap-6 text-center bg-[#F2F2F2] border border-[#D6D6D6] rounded-xl p-6 sm:p-8 justify-between transition-all duration-300 hover:bg-[#FBE9E9] hover:border-[#EC989B] cursor-pointer"
            >
              <div className="flex flex-col gap-1.5 items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-primary">
                  Evening Batch Classes
                </h3>
                <p className="text-lg text-secondary leading-relaxed font-primary font-normal">
                  Flexible evening slots suitable for kids, teens, adults, and
                  working professionals looking to train after hours.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                {/* Timings List */}
                <div className="flex flex-col gap-2 items-center w-full">
                  {!showAllEvening ? (
                    <div className="flex flex-wrap justify-center items-center gap-2 font-bold text-accent font-primary text-sm ">
                      <span>{eveningSlots[0]}</span>
                      <span className="text-zinc-400 font-light">|</span>
                      <span>{eveningSlots[1]}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 items-center w-full animate-in fade-in slide-in-from-top-1 duration-200">
                      {eveningSlots.map((slot, index) => (
                        <span
                          key={index}
                          className="font-bold text-accent font-primary text-sm "
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* View All Timing CTA */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowAllEvening(!showAllEvening);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-secondary hover:text-accent transition-colors duration-200 cursor-pointer pt-1"
                  aria-expanded={showAllEvening}
                >
                  <span>
                    {showAllEvening ? "View Less" : "View All Timings"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showAllEvening ? "rotate-180 text-accent" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
