"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image, { StaticImageData } from "next/image";

// Assets from moments library
import img1 from "@/public/assets/Home/Moments/1.png";
import img6 from "@/public/assets/Home/Moments/2.png";
import img11 from "@/public/assets/Home/Moments/3.png";
import img14 from "@/public/assets/Home/Moments/4.png";
import img16 from "@/public/assets/Home/Moments/5.png";
import img18 from "@/public/assets/Home/Moments/6.png";
import img19 from "@/public/assets/Home/Moments/7.png";
import img24 from "@/public/assets/Home/Moments/8.png";

export interface GalleryPhoto {
  id: number;
  src: StaticImageData;
  title: string;
  category: string;
  subtitle?: string;
  location?: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    src: img1,
    title: "Black Belt Championship",
    category: "CHAMPIONSHIP",
    subtitle:
      "Mastery and precision displayed on the national tournament stage.",
    location: "Bangalore Open 2024",
  },
  {
    id: 2,
    src: img6,
    title: "Dynamic High Kick Sparring",
    category: "SPARRING",
    subtitle:
      "Explosive agility and high-precision tactical kicking techniques.",
    location: "DTA Main Dojo",
  },
  {
    id: 3,
    src: img11,
    title: "Grand Master H.L. Muthappa",
    category: "MASTERS",
    subtitle:
      "7th Dan Black Belt mentor guiding martial artists for over 18 years.",
    location: "Academy Heritage",
  },
  {
    id: 4,
    src: img14,
    title: "Poomsae Form Perfection",
    category: "POOMSAE",
    subtitle:
      "Harmony of body and spirit through traditional Korean martial art forms.",
    location: "Demonstration Team",
  },
  {
    id: 5,
    src: img19,
    title: "Youth Podium Champions",
    category: "AWARDS",
    subtitle:
      "Celebrating courage, discipline, and hard-earned championship medals.",
    location: "State Championship",
  },
  {
    id: 6,
    src: img24,
    title: "Belt Graduation & Honor",
    category: "CEREMONY",
    subtitle:
      "Honoring years of dedication and perseverance across generations.",
    location: "Annual Convocation",
  },
  {
    id: 7,
    src: img16,
    title: "Speed & Reflex Drills",
    category: "TRAINING",
    subtitle:
      "Conditioning martial athletes to react with lightning speed and power.",
    location: "Elite Squad Camp",
  },
  {
    id: 8,
    src: img18,
    title: "Warrior Spirit & Focus",
    category: "DISCIPLINE",
    subtitle:
      "Building unshakeable mental endurance, focus, and self-confidence.",
    location: "Masterclass Session",
  },
];

interface PhotoScrollSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  photos?: GalleryPhoto[];
  className?: string;
}

export default function PhotoScrollSection({
  title = "Moments of Discipline and Achievement",
  subtitle = "Expert-led training in Taekwondo, self-defence, poomsae, kyorugi, fitness, and gymnastics tailored for kids, teens, adults, and working professionals.",
  photos = GALLERY_PHOTOS,
  className = "",
}: PhotoScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  const total = photos.length;
  const centerIdx = activeSlide % total;
  const left1Idx = (activeSlide - 1 + total) % total;
  const left2Idx = (activeSlide - 2 + total) % total;
  const right1Idx = (activeSlide + 1) % total;
  const right2Idx = (activeSlide + 2) % total;

  // Track scroll inside the section for the fan-out animation
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollDistance =
        containerRef.current.offsetHeight - window.innerHeight;

      if (totalScrollDistance <= 0) {
        setScrollProgress(1);
        return;
      }

      const currentScroll = -rect.top;
      const progress = Math.min(
        Math.max(currentScroll / totalScrollDistance, 0),
        1,
      );

      animationFrameId = requestAnimationFrame(() => {
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Fast fan-out in the first 25% of scroll
  const fanOutProgress = Math.min(Math.max(scrollProgress / 0.25, 0), 1);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => Math.min(total - 1, prev + 1));
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => Math.max(0, prev - 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) nextSlide();
    else if (diff < -45) prevSlide();
    touchStartX.current = null;
  };

  return (
    <section
      ref={containerRef}
      id="photo-showcase"
      className={`relative w-full h-auto md:h-[115vh] bg-white select-none overflow-visible ${className}`}
    >
      {/* Sticky Fullscreen Container */}
      <div className="relative md:sticky top-0 h-auto md:h-screen w-full overflow-hidden flex flex-col items-center justify-between bg-white py-14 px-5 lg:py-30 lg:px-20">
        <div className="w-full max-w-7xl flex-1 flex flex-col justify-start md:justify-between gap-10 md:gap-16">
          {/* Header Block */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-6 text-left">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[14px] lg:text-[16px] text-secondary leading-relaxed font-primary font-normal max-w-150">
                {subtitle}
              </p>
            )}
          </div>

          {/* Responsive Fanned-Out Card Slider Stage */}
          <div
            className="w-full flex flex-col items-center gap-12 md:gap-12"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Card Carousel Viewport */}
            <div className="relative w-full h-90 sm:h-105 md:h-115 lg:h-125 flex items-center justify-center overflow-hidden">
              {/* Left 2 (Visible on tablet & desktop >= md) */}
              <div
                onClick={() => setActiveSlide(left2Idx)}
                className="hidden md:block absolute overflow-hidden rounded-xl lg:rounded-2xl bg-zinc-200 border border-black/10 transition-all duration-300 ease-out cursor-pointer hover:scale-95 z-0"
                style={{
                  width: "min(20vw, 180px)",
                  height: "min(30vw, 270px)",
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% - min(43vw, 540px) * ${fanOutProgress}), -50%) scale(0.92)`,
                  opacity: 0.7 * fanOutProgress,
                }}
              >
                <Image
                  key={`left2-${left2Idx}`}
                  src={photos[left2Idx]?.src || img19}
                  alt={photos[left2Idx]?.title || "Left 2 photo"}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>

              {/* Left 1 */}
              <div
                onClick={() => setActiveSlide(left1Idx)}
                className="absolute overflow-hidden rounded-xl sm:rounded-2xl shadow-xl lg:shadow-2xl bg-zinc-200 border border-black/10 transition-all duration-300 ease-out cursor-pointer hover:scale-100 z-10"
                style={{
                  width: "min(32vw, 250px)",
                  height: "min(48vw, 380px)",
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% - min(28vw, 310px) * ${fanOutProgress}), -50%) scale(0.96)`,
                  opacity: 0.88 * fanOutProgress,
                }}
              >
                <Image
                  key={`left1-${left1Idx}`}
                  src={photos[left1Idx]?.src || img6}
                  alt={photos[left1Idx]?.title || "Left 1 photo"}
                  fill
                  className="object-cover"
                  sizes="250px"
                />
              </div>

              {/* Main Center Card */}
              <div
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-200 border border-black/10 transition-all duration-300 ease-out z-20"
                style={{
                  width: "min(48vw, 340px)",
                  height: "min(70vw, 480px)",
                }}
              >
                <Image
                  key={`center-${centerIdx}`}
                  src={photos[centerIdx]?.src || img1}
                  alt={photos[centerIdx]?.title || "Center photo"}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 50vw, 340px"
                />
              </div>

              {/* Right 1 */}
              <div
                onClick={() => setActiveSlide(right1Idx)}
                className="absolute overflow-hidden rounded-xl sm:rounded-2xl shadow-xl lg:shadow-2xl bg-zinc-200 border border-black/10 transition-all duration-300 ease-out cursor-pointer hover:scale-100 z-10"
                style={{
                  width: "min(32vw, 250px)",
                  height: "min(48vw, 380px)",
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + min(28vw, 310px) * ${fanOutProgress}), -50%) scale(0.96)`,
                  opacity: 0.88 * fanOutProgress,
                }}
              >
                <Image
                  key={`right1-${right1Idx}`}
                  src={photos[right1Idx]?.src || img14}
                  alt={photos[right1Idx]?.title || "Right 1 photo"}
                  fill
                  className="object-cover"
                  sizes="250px"
                />
              </div>

              {/* Right 2 (Visible on tablet & desktop >= md) */}
              <div
                onClick={() => setActiveSlide(right2Idx)}
                className="hidden md:block absolute overflow-hidden rounded-xl lg:rounded-2xl shadow-xl bg-zinc-200 border border-black/10 transition-all duration-300 ease-out cursor-pointer hover:scale-95 z-0"
                style={{
                  width: "min(20vw, 180px)",
                  height: "min(30vw, 270px)",
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + min(43vw, 540px) * ${fanOutProgress}), -50%) scale(0.92)`,
                  opacity: 0.7 * fanOutProgress,
                }}
              >
                <Image
                  key={`right2-${right2Idx}`}
                  src={photos[right2Idx]?.src || img24}
                  alt={photos[right2Idx]?.title || "Right 2 photo"}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </div>

            {/* Navigation Arrows at Bottom Center */}
            <div className="flex justify-center items-center gap-1">
              <button
                onClick={prevSlide}
                disabled={activeSlide <= 0}
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
                  activeSlide <= 0
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
                onClick={nextSlide}
                disabled={activeSlide >= total - 1}
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
                  activeSlide >= total - 1
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
        </div>
      </div>
    </section>
  );
}
