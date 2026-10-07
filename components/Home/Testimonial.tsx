"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export interface TestimonialItem {
  text: string;
  author: string;
  role?: string;
  rating?: number;
  date?: string;
}

interface TestimonialProps {
  title?: React.ReactNode;
  subtitle?: string;
  items?: TestimonialItem[];
  googleSearchUrl?: string;
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=deccan+taekwondo+academy&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_5fWL4tPT_03473q3PDcty_ohQzVxXRLXF9lJIvZIgasn8QkOw-58_V2oyfy7M_Q8RqYH-5iv-MGWEzqNj2_VXhts_9lXgXFZ_qoS1Cw9eiitRiZVBRV9JGEt-I8R4-0hLetXxI%3D";

const defaultTestimonials: TestimonialItem[] = [
  {
    author: "Jashnavi Endala",
    role: "Student",
    rating: 5,
    date: "Verified Google Review",
    text: "Deccan Taekwondo Academy has been an amazing experience for me. The masters are extremely skilled, patient, and dedicated. My fitness, stamina, and self-defense skills have improved significantly since joining!",
  },
  {
    author: "Pratham Kumar",
    role: "Student",
    rating: 5,
    date: "Verified Google Review",
    text: "One of the best martial arts academies in Bangalore! The focus on discipline, proper technique, and sparring drills is top-notch. Master and coaches pay personal attention to every single student.",
  },
  {
    author: "Lakshmi Madhu",
    role: "Parent",
    rating: 5,
    date: "Verified Google Review",
    text: "Enrolled my child here, and the transformation in confidence, posture, and discipline has been incredible. Highly recommend Deccan Taekwondo Academy to all parents looking for holistic development!",
  },
  {
    author: "Shiva Sadhana",
    role: "Trainee",
    rating: 5,
    date: "Verified Google Review",
    text: "Great environment, professional instructors, and authentic Korean Taekwondo training. The sparring drills, kicks, and belt progression tests are exceptionally well structured.",
  },
  {
    author: "Dr. Ananya Rao",
    role: "Adult Practitioner",
    rating: 5,
    date: "Verified Google Review",
    text: "As an adult beginner, I was initially hesitant, but the instructors made me feel so welcome and motivated. Phenomenal physical conditioning, stress relief, and self-defense training!",
  },
  {
    author: "Rajesh Varma",
    role: "Parent",
    rating: 5,
    date: "Verified Google Review",
    text: "Top class training facility, clean environment, and very supportive masters. My son loves attending every single class. 5 stars without a doubt for Deccan Taekwondo Academy!",
  },
  {
    author: "Sunita & Mahesh Patel",
    role: "Parents",
    rating: 5,
    date: "Verified Google Review",
    text: "Both our kids have been training under the masters here for over 2 years now. The focus on values, respect, and physical stamina is outstanding. Best academy in the region!",
  },
  {
    author: "Aditya Hegde",
    role: "Student",
    rating: 5,
    date: "Verified Google Review",
    text: "The high-energy kick training and conditioning workouts here are top tier. Coach pays close attention to detail and stance correction. Truly inspiring environment!",
  },
  {
    author: "Meera Krishnan",
    role: "Adult Practitioner",
    rating: 5,
    date: "Verified Google Review",
    text: "Joined the morning adult fitness and self-defense batch. It has completely transformed my daily routine and energy levels. Friendly coaches and great community!",
  },
  {
    author: "Karthik Gowda",
    role: "Black Belt Student",
    rating: 5,
    date: "Verified Google Review",
    text: "Trained here from green belt all the way to black belt. The championship preparation and state-level tournament guidance provided by the Master is exceptional.",
  },
  {
    author: "Deepa Ramanathan",
    role: "Parent",
    rating: 5,
    date: "Verified Google Review",
    text: "Extremely safe, encouraging, and structured environment for young children. My daughter has become so much more focused and agile since she started training at DTA.",
  },
  {
    author: "Manoj Kumar",
    role: "Fitness Enthusiast",
    rating: 5,
    date: "Verified Google Review",
    text: "If you want real functional strength, flexibility, and practical defense skills, Deccan Taekwondo Academy is the right place. Highly dedicated team of coaches.",
  },
  {
    author: "Priya Sharma",
    role: "Parent",
    rating: 5,
    date: "Verified Google Review",
    text: "Very punctual batch timings, spacious wooden flooring/mats setup, and very professional management. My kids never want to miss a single class!",
  },
  {
    author: "Varun Deshmukh",
    role: "Student",
    rating: 5,
    date: "Verified Google Review",
    text: "The Poomsae forms and sparring techniques taught here are very authentic. The instructors build strong discipline while keeping the classes super engaging.",
  },
  {
    author: "Sangeetha Nair",
    role: "Adult Beginner",
    rating: 5,
    date: "Verified Google Review",
    text: "Never thought I could start martial arts in my late 20s, but the masters tailored the flexibility and cardio routines so well. Best decision ever!",
  },
  {
    author: "Rahul Sengupta",
    role: "Parent",
    rating: 5,
    date: "Verified Google Review",
    text: "Excellent focus on mental grit and physical endurance. The belt examination events are conducted with supreme standards and Korean Taekwondo ethics.",
  },
  {
    author: "Kavya Reddy",
    role: "Martial Arts Student",
    rating: 5,
    date: "Verified Google Review",
    text: "Amazing atmosphere, great peer support, and top coaching staff. My kicking power and flexibility have improved beyond my expectations!",
  },
  {
    author: "Vigneshwaran K",
    role: "Trainee",
    rating: 5,
    date: "Verified Google Review",
    text: "DTA is more than an academy, it is a family! Masters motivate everyone to reach their personal best. Outstanding academy in Bangalore.",
  },
  {
    author: "Archana & Vikram",
    role: "Parents",
    rating: 5,
    date: "Verified Google Review",
    text: "Wonderful place for kid overall development! The trainers ensure every child learns self-confidence, agility, and respect alongside kickboxing and Taekwondo.",
  },
  {
    author: "Bharath Srinivas",
    role: "Black Belt Aspirant",
    rating: 5,
    date: "Verified Google Review",
    text: "Rigorous physical fitness combined with mental discipline. Master's years of expertise really show in every single training session. 5 stars!",
  },
];

function GoogleGLogo() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export default function Testimonial({
  title = (
    <>
      Trusted By Students. <br />
      Recommended By Families.
    </>
  ),
  subtitle = "For over 18 years, Deccan Taekwondo Academy has helped children, teenagers, adults, and families transform their lives through martial arts.",
  items = defaultTestimonials,
  googleSearchUrl = GOOGLE_REVIEWS_URL,
}: TestimonialProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [stepWidth, setStepWidth] = useState(494);

  const updateScrollBounds = () => {
    if (containerRef.current && trackRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const trackWidth = trackRef.current.scrollWidth;
      const style = window.getComputedStyle(containerRef.current);
      const paddingLeft = parseFloat(style.paddingLeft) || 0;

      const calculatedMax = Math.max(
        0,
        trackWidth + paddingLeft - containerWidth,
      );
      setMaxScroll(calculatedMax);

      const firstChild = trackRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.clientWidth;
        setStepWidth(cardWidth + 20);
      }
    }
  };

  useEffect(() => {
    updateScrollBounds();
    const timer = setTimeout(updateScrollBounds, 100);

    window.addEventListener("resize", updateScrollBounds);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateScrollBounds);
    };
  }, []);

  const handlePrev = () => {
    updateScrollBounds();
    setScrollX((prev) => Math.max(0, prev - stepWidth));
  };

  const handleNext = () => {
    updateScrollBounds();
    setScrollX((prev) => Math.min(maxScroll, prev + stepWidth));
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-white py-14 px-5 lg:py-30 lg:px-20 border-zinc-100 flex flex-col gap-12 md:gap-16 overflow-hidden items-center"
    >
      {/* Header Block with Google Review Summary */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex flex-col items-start text-left gap-3 max-w-2xl">
          <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
            {title}
          </h2>
          <p className="text-[14px] lg:text-md text-secondary leading-relaxed font-primary font-normal">
            {subtitle}
          </p>
        </div>

        {/* View on Google button */}
        <Link
          href={googleSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex font-primary items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-accent transition-colors shrink-0 self-start md:self-auto shadow-sm"
        >
          <GoogleGLogo />
          <span>Read All Google Reviews</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="w-full flex flex-col gap-12 overflow-visible relative"
        style={{
          paddingLeft: "max(0px, calc((100% - 1280px) / 2))",
        }}
      >
        {/* Inner Cards flex container */}
        <div
          ref={trackRef}
          className="flex gap-5 transition-[left] duration-500 ease-in-out relative pr-20 pl-0"
          style={{
            left: `-${scrollX}px`,
          }}
        >
          {items.map((t, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[82vw] max-w-75 sm:w-85 sm:max-w-85 lg:w-105 lg:max-w-105 flex flex-col gap-6 text-left bg-[#F2F2F2] border border-[#D6D6D6] rounded-xl justify-between transition-colors duration-300 hover:bg-[#FBE9E9] hover:border-[#EC989B] p-6 sm:p-7"
              style={{
                width: "min(85vw, 420px)",
                maxWidth: "420px",
                padding: "24px",
                boxSizing: "border-box",
              }}
            >
              <div className="flex flex-col gap-3">
                {/* Header: Stars & Google Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    {"★".repeat(t.rating || 5)}
                  </div>
                  <GoogleGLogo />
                </div>

                {/* Review Text */}
                <p className="text-lg text-primary leading-relaxed font-primary font-medium">
                  {t.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-start justify-between pt-2 border-t border-zinc-300/60">
                <h4 className="text-lg font-semibold text-accent font-primary">
                  {t.author}
                </h4>
                <span className="text-xs text-primary font-primary font-medium">
                  {t.role || "Verified Google Review"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows at Bottom Center */}
        <div className="flex justify-center items-center gap-1 max-w-7xl">
          <button
            onClick={handlePrev}
            disabled={scrollX <= 0}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
              scrollX <= 0
                ? "border-zinc-200 text-zinc-300"
                : "border-zinc-300 text-[#D61F26] hover:bg-zinc-50 cursor-pointer"
            }`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 -scale-x-100"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 11.03 19.95 L 10.94 19.89 L 9.87 19.86 L 9.69 19.89 L 9.63 19.95 L 9.63 20.69 L 9.54 20.81 L 9.25 20.81 L 9.16 20.90 L 9.13 20.99 L 9.04 21.05 L 8.77 21.05 L 8.41 21.43 L 8.24 21.55 L 8.21 21.61 L 8.24 21.73 L 8.29 21.76 L 8.59 21.73 L 8.77 21.97 L 9.16 21.94 L 9.37 22.00 L 9.43 22.00 L 9.54 21.94 L 9.60 21.79 L 9.69 21.73 L 9.78 21.73 L 9.84 21.79 L 9.90 21.94 L 9.96 21.97 L 10.08 21.94 L 10.14 21.79 L 10.20 21.73 L 10.47 21.73 L 10.56 21.61 L 10.79 21.40 L 10.79 20.42 L 10.88 20.30 L 10.97 20.27 L 11.06 20.15 L 11.06 20.01 Z M 10.44 10.57 L 10.26 10.54 L 10.17 10.60 L 10.14 10.66 L 10.14 10.96 L 10.05 11.05 L 9.87 11.05 L 9.87 11.38 L 9.84 11.46 L 9.75 11.49 L 9.63 11.64 L 9.40 11.85 L 9.40 12.12 L 9.34 12.21 L 9.19 12.27 L 9.16 12.62 L 8.92 12.80 L 8.89 12.98 L 8.95 13.13 L 8.95 13.28 L 8.86 13.40 L 8.77 13.43 L 8.68 13.52 L 8.65 13.64 L 8.68 14.26 L 8.71 14.32 L 8.77 14.35 L 9.28 14.35 L 9.34 14.32 L 9.37 14.26 L 9.34 13.34 L 9.37 13.25 L 9.43 13.19 L 9.51 13.16 L 9.63 13.01 L 9.63 12.89 L 9.57 12.74 L 9.57 12.60 L 9.66 12.48 L 9.75 12.45 L 9.84 12.33 L 10.08 12.12 L 10.08 11.85 L 10.14 11.76 L 10.29 11.70 L 10.35 11.58 L 10.32 11.38 L 10.38 11.29 L 10.47 11.26 L 10.53 11.20 L 10.56 10.81 L 10.53 10.63 Z M 8.38 8.73 L 8.00 8.67 L 7.88 8.67 L 7.76 8.73 L 7.55 8.93 L 7.49 9.05 L 7.49 9.23 L 7.46 9.29 L 7.31 9.41 L 7.25 9.53 L 7.25 10.04 L 7.37 10.04 L 7.43 10.07 L 7.49 10.12 L 7.52 10.21 L 7.61 10.30 L 7.70 10.30 L 7.73 10.33 L 7.79 10.33 L 7.85 10.30 L 8.26 9.86 L 8.35 9.83 L 8.38 9.47 L 8.50 9.35 L 8.56 9.35 L 8.62 9.29 L 8.65 9.17 L 8.65 9.05 L 8.62 8.99 L 8.56 8.93 L 8.47 8.90 L 8.44 8.88 Z M 6.54 7.83 L 6.54 7.68 L 6.48 7.60 L 6.48 7.27 L 6.42 7.24 L 6.36 7.24 L 6.27 7.18 L 6.24 7.12 L 6.24 7.03 L 6.27 7.00 L 6.27 6.88 L 6.21 6.79 L 6.12 6.73 L 6.03 6.55 L 5.91 6.52 L 5.74 6.73 L 5.62 6.79 L 5.62 6.88 L 5.59 6.91 L 5.59 7.09 L 5.56 7.15 L 5.47 7.24 L 5.38 7.27 L 5.17 7.27 L 5.08 7.36 L 5.08 7.39 L 4.87 7.57 L 4.87 7.62 L 4.93 7.68 L 5.85 7.68 L 6.15 7.65 L 6.24 7.71 L 6.30 7.89 L 6.48 7.89 Z M 3.77 4.14 L 3.56 4.38 L 3.29 4.38 L 2.73 4.95 L 2.73 5.21 L 2.49 5.42 L 2.49 6.40 L 3.53 7.45 L 3.65 7.48 L 4.46 7.48 L 4.57 7.42 L 4.72 7.21 L 4.78 7.18 L 5.02 7.18 L 5.53 6.67 L 5.53 6.43 L 5.56 6.38 L 5.79 6.20 L 5.76 5.60 L 5.68 5.57 L 5.53 5.39 L 5.53 5.27 L 5.59 5.12 L 5.56 4.95 L 4.99 4.38 L 4.81 4.35 L 4.57 4.41 L 4.49 4.38 L 4.28 4.14 Z M 11.42 3.43 L 10.68 3.43 L 10.47 3.67 L 10.05 3.64 L 9.75 3.90 L 8.53 4.14 L 8.32 4.38 L 7.58 4.38 L 7.37 4.62 L 7.10 4.62 L 6.30 5.42 L 6.12 6.02 L 7.01 7.83 L 6.90 8.19 L 6.39 8.22 L 6.24 7.98 L 4.31 7.92 L 3.92 8.28 L 3.92 9.98 L 4.16 10.18 L 5.11 12.36 L 5.91 13.16 L 6.66 13.16 L 8.18 11.17 L 8.15 10.84 L 7.79 10.78 L 7.10 10.10 L 6.12 11.29 L 6.00 10.99 L 6.30 10.45 L 5.53 10.15 L 5.65 9.83 L 5.94 10.07 L 6.72 10.04 L 7.22 8.76 L 7.55 8.43 L 8.32 8.37 L 8.92 8.96 L 8.95 9.23 L 8.71 9.41 L 8.71 9.74 L 8.47 9.89 L 8.18 10.63 L 8.26 10.78 L 9.04 10.78 L 9.25 11.02 L 9.81 11.02 L 9.84 10.42 L 10.29 9.80 L 10.29 9.23 L 10.53 9.05 L 10.56 8.55 L 11.00 7.86 L 11.00 7.33 L 11.21 7.21 L 11.33 7.86 L 11.09 7.98 L 11.09 8.49 L 10.59 9.44 L 10.91 9.59 L 11.24 9.32 L 11.24 8.96 L 11.48 8.85 L 11.48 8.25 L 11.72 8.13 L 11.69 7.62 L 11.96 7.27 L 11.30 7.21 L 10.94 6.76 L 10.44 6.76 L 9.69 6.29 L 9.25 6.32 L 8.65 5.90 L 9.04 5.75 L 9.16 5.96 L 9.69 6.02 L 10.02 5.75 L 10.38 5.81 L 10.68 5.54 L 11.42 5.54 L 11.63 5.30 L 11.96 5.27 L 12.01 4.56 Z M 12.01 3.96 L 12.04 4.05 L 12.10 4.11 L 12.16 4.14 L 12.85 4.11 L 12.94 4.17 L 12.94 4.20 L 13.06 4.35 L 13.12 4.38 L 13.26 4.38 L 13.32 4.35 L 13.56 4.11 L 13.71 3.93 L 13.83 3.88 L 13.89 3.82 L 13.89 3.73 L 13.83 3.67 L 13.74 3.64 L 13.65 3.55 L 13.62 3.22 L 13.56 3.19 L 12.34 3.19 L 12.25 3.28 L 12.25 3.31 L 12.13 3.43 L 12.04 3.46 L 12.04 3.73 Z M 17.79 3.16 L 16.18 4.38 L 15.91 4.38 L 15.23 5.10 L 14.96 5.10 L 14.28 5.81 L 14.01 5.81 L 12.85 6.76 L 12.55 6.76 L 12.49 7.12 L 12.04 7.51 L 12.04 8.07 L 11.81 8.25 L 11.81 8.79 L 11.57 8.93 L 11.30 9.74 L 11.81 10.42 L 11.84 12.21 L 12.04 12.33 L 12.04 12.65 L 12.52 13.37 L 12.43 13.64 L 11.96 13.25 L 11.93 12.71 L 11.48 12.12 L 11.45 10.33 L 10.97 9.89 L 10.38 9.89 L 10.38 10.21 L 11.03 10.57 L 10.82 10.93 L 10.79 11.61 L 11.09 11.88 L 11.09 12.62 L 11.33 12.83 L 11.33 13.37 L 11.54 13.46 L 11.54 13.79 L 11.78 14.02 L 11.66 14.17 L 11.30 14.05 L 11.24 13.46 L 10.97 13.19 L 11.00 12.80 L 10.62 12.48 L 10.62 13.28 L 10.35 13.52 L 10.35 14.74 L 10.11 14.95 L 10.11 16.17 L 9.87 16.38 L 9.87 17.60 L 9.63 17.80 L 9.66 18.93 L 9.40 19.20 L 9.78 19.59 L 12.19 19.56 L 12.22 19.23 L 12.46 19.02 L 12.46 18.04 L 12.70 17.83 L 12.70 17.09 L 12.94 16.88 L 12.94 15.90 L 13.18 15.69 L 13.18 14.95 L 13.41 14.74 L 13.41 13.99 L 13.65 13.79 L 13.65 12.80 L 13.89 12.60 L 13.89 11.85 L 14.13 11.64 L 14.13 10.18 L 19.60 5.01 Z M 11.78 13.76 L 11.81 13.70 L 11.90 13.61 L 12.04 13.61 L 12.16 13.64 L 12.25 13.73 L 12.25 13.79 L 12.22 13.85 L 12.13 13.93 L 11.87 13.93 L 11.81 13.90 Z M 18.21 3.07 L 18.24 3.13 L 18.53 3.37 L 19.04 3.90 L 19.22 3.90 L 19.28 3.88 L 19.72 3.40 L 20.23 3.40 L 20.44 3.64 L 21.12 3.61 L 21.30 3.67 L 21.42 3.67 L 21.48 3.64 L 21.51 3.58 L 21.51 3.49 L 21.33 3.34 L 21.30 3.34 L 21.03 3.04 L 20.23 2.24 L 20.08 2.12 L 20.08 2.09 L 19.99 2.00 L 19.49 2.00 L 19.40 2.09 L 19.40 2.12 L 19.25 2.24 L 18.80 2.71 L 18.77 2.71 L 18.68 2.80 L 18.65 2.89 L 18.59 2.95 L 18.24 2.95 Z"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={scrollX >= maxScroll - 1}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
              scrollX >= maxScroll - 1
                ? "border-zinc-200 text-zinc-300"
                : "border-zinc-300 text-[#D61F26] hover:bg-zinc-50 cursor-pointer"
            }`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 11.03 19.95 L 10.94 19.89 L 9.87 19.86 L 9.69 19.89 L 9.63 19.95 L 9.63 20.69 L 9.54 20.81 L 9.25 20.81 L 9.16 20.90 L 9.13 20.99 L 9.04 21.05 L 8.77 21.05 L 8.41 21.43 L 8.24 21.55 L 8.21 21.61 L 8.24 21.73 L 8.29 21.76 L 8.59 21.73 L 8.77 21.97 L 9.16 21.94 L 9.37 22.00 L 9.43 22.00 L 9.54 21.94 L 9.60 21.79 L 9.69 21.73 L 9.78 21.73 L 9.84 21.79 L 9.90 21.94 L 9.96 21.97 L 10.08 21.94 L 10.14 21.79 L 10.20 21.73 L 10.47 21.73 L 10.56 21.61 L 10.79 21.40 L 10.79 20.42 L 10.88 20.30 L 10.97 20.27 L 11.06 20.15 L 11.06 20.01 Z M 10.44 10.57 L 10.26 10.54 L 10.17 10.60 L 10.14 10.66 L 10.14 10.96 L 10.05 11.05 L 9.87 11.05 L 9.87 11.38 L 9.84 11.46 L 9.75 11.49 L 9.63 11.64 L 9.40 11.85 L 9.40 12.12 L 9.34 12.21 L 9.19 12.27 L 9.16 12.62 L 8.92 12.80 L 8.89 12.98 L 8.95 13.13 L 8.95 13.28 L 8.86 13.40 L 8.77 13.43 L 8.68 13.52 L 8.65 13.64 L 8.68 14.26 L 8.71 14.32 L 8.77 14.35 L 9.28 14.35 L 9.34 14.32 L 9.37 14.26 L 9.34 13.34 L 9.37 13.25 L 9.43 13.19 L 9.51 13.16 L 9.63 13.01 L 9.63 12.89 L 9.57 12.74 L 9.57 12.60 L 9.66 12.48 L 9.75 12.45 L 9.84 12.33 L 10.08 12.12 L 10.08 11.85 L 10.14 11.76 L 10.29 11.70 L 10.35 11.58 L 10.32 11.38 L 10.38 11.29 L 10.47 11.26 L 10.53 11.20 L 10.56 10.81 L 10.53 10.63 Z M 8.38 8.73 L 8.00 8.67 L 7.88 8.67 L 7.76 8.73 L 7.55 8.93 L 7.49 9.05 L 7.49 9.23 L 7.46 9.29 L 7.31 9.41 L 7.25 9.53 L 7.25 10.04 L 7.37 10.04 L 7.43 10.07 L 7.49 10.12 L 7.52 10.21 L 7.61 10.30 L 7.70 10.30 L 7.73 10.33 L 7.79 10.33 L 7.85 10.30 L 8.26 9.86 L 8.35 9.83 L 8.38 9.47 L 8.50 9.35 L 8.56 9.35 L 8.62 9.29 L 8.65 9.17 L 8.65 9.05 L 8.62 8.99 L 8.56 8.93 L 8.47 8.90 L 8.44 8.88 Z M 6.54 7.83 L 6.54 7.68 L 6.48 7.60 L 6.48 7.27 L 6.42 7.24 L 6.36 7.24 L 6.27 7.18 L 6.24 7.12 L 6.24 7.03 L 6.27 7.00 L 6.27 6.88 L 6.21 6.79 L 6.12 6.73 L 6.03 6.55 L 5.91 6.52 L 5.74 6.73 L 5.62 6.79 L 5.62 6.88 L 5.59 6.91 L 5.59 7.09 L 5.56 7.15 L 5.47 7.24 L 5.38 7.27 L 5.17 7.27 L 5.08 7.36 L 5.08 7.39 L 4.87 7.57 L 4.87 7.62 L 4.93 7.68 L 5.85 7.68 L 6.15 7.65 L 6.24 7.71 L 6.30 7.89 L 6.48 7.89 Z M 3.77 4.14 L 3.56 4.38 L 3.29 4.38 L 2.73 4.95 L 2.73 5.21 L 2.49 5.42 L 2.49 6.40 L 3.53 7.45 L 3.65 7.48 L 4.46 7.48 L 4.57 7.42 L 4.72 7.21 L 4.78 7.18 L 5.02 7.18 L 5.53 6.67 L 5.53 6.43 L 5.56 6.38 L 5.79 6.20 L 5.76 5.60 L 5.68 5.57 L 5.53 5.39 L 5.53 5.27 L 5.59 5.12 L 5.56 4.95 L 4.99 4.38 L 4.81 4.35 L 4.57 4.41 L 4.49 4.38 L 4.28 4.14 Z M 11.42 3.43 L 10.68 3.43 L 10.47 3.67 L 10.05 3.64 L 9.75 3.90 L 8.53 4.14 L 8.32 4.38 L 7.58 4.38 L 7.37 4.62 L 7.10 4.62 L 6.30 5.42 L 6.12 6.02 L 7.01 7.83 L 6.90 8.19 L 6.39 8.22 L 6.24 7.98 L 4.31 7.92 L 3.92 8.28 L 3.92 9.98 L 4.16 10.18 L 5.11 12.36 L 5.91 13.16 L 6.66 13.16 L 8.18 11.17 L 8.15 10.84 L 7.79 10.78 L 7.10 10.10 L 6.12 11.29 L 6.00 10.99 L 6.30 10.45 L 5.53 10.15 L 5.65 9.83 L 5.94 10.07 L 6.72 10.04 L 7.22 8.76 L 7.55 8.43 L 8.32 8.37 L 8.92 8.96 L 8.95 9.23 L 8.71 9.41 L 8.71 9.74 L 8.47 9.89 L 8.18 10.63 L 8.26 10.78 L 9.04 10.78 L 9.25 11.02 L 9.81 11.02 L 9.84 10.42 L 10.29 9.80 L 10.29 9.23 L 10.53 9.05 L 10.56 8.55 L 11.00 7.86 L 11.00 7.33 L 11.21 7.21 L 11.33 7.86 L 11.09 7.98 L 11.09 8.49 L 10.59 9.44 L 10.91 9.59 L 11.24 9.32 L 11.24 8.96 L 11.48 8.85 L 11.48 8.25 L 11.72 8.13 L 11.69 7.62 L 11.96 7.27 L 11.30 7.21 L 10.94 6.76 L 10.44 6.76 L 9.69 6.29 L 9.25 6.32 L 8.65 5.90 L 9.04 5.75 L 9.16 5.96 L 9.69 6.02 L 10.02 5.75 L 10.38 5.81 L 10.68 5.54 L 11.42 5.54 L 11.63 5.30 L 11.96 5.27 L 12.01 4.56 Z M 12.01 3.96 L 12.04 4.05 L 12.10 4.11 L 12.16 4.14 L 12.85 4.11 L 12.94 4.17 L 12.94 4.20 L 13.06 4.35 L 13.12 4.38 L 13.26 4.38 L 13.32 4.35 L 13.56 4.11 L 13.71 3.93 L 13.83 3.88 L 13.89 3.82 L 13.89 3.73 L 13.83 3.67 L 13.74 3.64 L 13.65 3.55 L 13.62 3.22 L 13.56 3.19 L 12.34 3.19 L 12.25 3.28 L 12.25 3.31 L 12.13 3.43 L 12.04 3.46 L 12.04 3.73 Z M 17.79 3.16 L 16.18 4.38 L 15.91 4.38 L 15.23 5.10 L 14.96 5.10 L 14.28 5.81 L 14.01 5.81 L 12.85 6.76 L 12.55 6.76 L 12.49 7.12 L 12.04 7.51 L 12.04 8.07 L 11.81 8.25 L 11.81 8.79 L 11.57 8.93 L 11.30 9.74 L 11.81 10.42 L 11.84 12.21 L 12.04 12.33 L 12.04 12.65 L 12.52 13.37 L 12.43 13.64 L 11.96 13.25 L 11.93 12.71 L 11.48 12.12 L 11.45 10.33 L 10.97 9.89 L 10.38 9.89 L 10.38 10.21 L 11.03 10.57 L 10.82 10.93 L 10.79 11.61 L 11.09 11.88 L 11.09 12.62 L 11.33 12.83 L 11.33 13.37 L 11.54 13.46 L 11.54 13.79 L 11.78 14.02 L 11.66 14.17 L 11.30 14.05 L 11.24 13.46 L 10.97 13.19 L 11.00 12.80 L 10.62 12.48 L 10.62 13.28 L 10.35 13.52 L 10.35 14.74 L 10.11 14.95 L 10.11 16.17 L 9.87 16.38 L 9.87 17.60 L 9.63 17.80 L 9.66 18.93 L 9.40 19.20 L 9.78 19.59 L 12.19 19.56 L 12.22 19.23 L 12.46 19.02 L 12.46 18.04 L 12.70 17.83 L 12.70 17.09 L 12.94 16.88 L 12.94 15.90 L 13.18 15.69 L 13.18 14.95 L 13.41 14.74 L 13.41 13.99 L 13.65 13.79 L 13.65 12.80 L 13.89 12.60 L 13.89 11.85 L 14.13 11.64 L 14.13 10.18 L 19.60 5.01 Z M 11.78 13.76 L 11.81 13.70 L 11.90 13.61 L 12.04 13.61 L 12.16 13.64 L 12.25 13.73 L 12.25 13.79 L 12.22 13.85 L 12.13 13.93 L 11.87 13.93 L 11.81 13.90 Z M 18.21 3.07 L 18.24 3.13 L 18.53 3.37 L 19.04 3.90 L 19.22 3.90 L 19.28 3.88 L 19.72 3.40 L 20.23 3.40 L 20.44 3.64 L 21.12 3.61 L 21.30 3.67 L 21.42 3.67 L 21.48 3.64 L 21.51 3.58 L 21.51 3.49 L 21.33 3.34 L 21.30 3.34 L 21.03 3.04 L 20.23 2.24 L 20.08 2.12 L 20.08 2.09 L 19.99 2.00 L 19.49 2.00 L 19.40 2.09 L 19.40 2.12 L 19.25 2.24 L 18.80 2.71 L 18.77 2.71 L 18.68 2.80 L 18.65 2.89 L 18.59 2.95 L 18.24 2.95 Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
