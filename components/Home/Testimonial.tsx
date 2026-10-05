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
        className="w-full flex flex-col gap-6 overflow-visible relative"
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
        <div className="flex justify-center items-center gap-1">
          <button
            onClick={handlePrev}
            disabled={scrollX <= 0}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
              scrollX <= 0
                ? "border-zinc-200 text-zinc-300"
                : "border-zinc-300 text-primary hover:bg-zinc-50 cursor-pointer"
            }`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={scrollX >= maxScroll - 1}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
              scrollX >= maxScroll - 1
                ? "border-zinc-200 text-zinc-300"
                : "border-zinc-300 text-primary hover:bg-zinc-50 cursor-pointer"
            }`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
