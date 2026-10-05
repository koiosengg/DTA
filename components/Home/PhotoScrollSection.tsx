"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image, { StaticImageData } from "next/image";

// Assets from moments library
import img1 from "@/public/assets/Home/Moments/Image1.webp";
import img6 from "@/public/assets/Home/Moments/Image6.webp";
import img11 from "@/public/assets/Home/Moments/Image11.webp";
import img14 from "@/public/assets/Home/Moments/Image14.webp";
import img16 from "@/public/assets/Home/Moments/Image16.webp";
import img18 from "@/public/assets/Home/Moments/Image18.webp";
import img19 from "@/public/assets/Home/Moments/Image19.webp";
import img24 from "@/public/assets/Home/Moments/Image24.webp";

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
                onClick={nextSlide}
                disabled={activeSlide >= total - 1}
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
                  activeSlide >= total - 1
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
        </div>
      </div>
    </section>
  );
}
