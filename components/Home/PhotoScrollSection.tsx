"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
  viewMoreLink?: string;
  photos?: GalleryPhoto[];
}

export default function PhotoScrollSection({
  title = (
    <>
      Moments of Discipline <br />
      and Achievement
    </>
  ),
  subtitle = "Expert-led training in Taekwondo, self-defence, poomsae, kyorugi, fitness, and gymnastics tailored for kids, teens, adults, and working professionals.",
  photos = GALLERY_PHOTOS,
}: PhotoScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll tracking inside the section container
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollDistance =
        containerRef.current.offsetHeight - window.innerHeight;

      if (totalScrollDistance <= 0) return;

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

  // Stage 1 (0.00 -> 0.18): Fan out flanking cards left and right (fast)
  const fanOutProgress = Math.min(Math.max(scrollProgress / 0.18, 0), 1);

  // HOLD (0.18 -> 0.48): All 5 cards stay spread — nothing changes during this window

  // Stage 2 (0.48 -> 0.68): Expanding center card to full gallery width
  const expandProgress = Math.min(
    Math.max((scrollProgress - 0.48) / 0.2, 0),
    1,
  );

  // Stage 3 (0.65 -> 0.85): Gallery UI overlay (arrows, caption, thumbnails) fully interactive
  const galleryUiOpacity = Math.min(
    Math.max((scrollProgress - 0.65) / 0.15, 0),
    1,
  );

  // Flanking cards opacity and lateral fan-out
  const flankingOpacity = Math.max(
    0,
    fanOutProgress * (1 - expandProgress * 2),
  );
  // Offsets computed from actual card widths + 20px gap so cards never overlap:
  // center half=170, L1/R1 half=125, L2/R2 half=90
  // L1: -(170+20+125)=-315, L2: -(170+20+250+20+90)=-550
  const left1Offset = -315 * fanOutProgress - expandProgress * 420;
  const right1Offset = 315 * fanOutProgress + expandProgress * 420;
  const left2Offset = -550 * fanOutProgress - expandProgress * 580;
  const right2Offset = 550 * fanOutProgress + expandProgress * 580;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      ref={containerRef}
      id="photo-showcase"
      className="relative w-full bg-white text-[#111111] overflow-visible select-none"
      style={{ height: isMobile ? "auto" : "420vh" }}
    >
      {/* DESKTOP VIEW: PINNED INTERACTIVE CONTAINER */}
      {!isMobile ? (
        <div
          className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between bg-white"
          style={{ padding: "120px 80px" }}
        >
          {/* Subtle dot grid */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />

          {/* Header Block */}
          <div className="relative z-40 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6 text-left">
            <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.1] sm:self-start">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[14px] lg:text-[16px] text-secondary leading-relaxed font-primary font-normal max-w-150 sm:self-start">
                {subtitle}
              </p>
            )}
          </div>

          {/* FLANKING CARDS (LEFT 2, LEFT 1, RIGHT 1, RIGHT 2) */}
          {flankingOpacity > 0.01 && (
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              {/* Left 2 */}
              <div
                className="absolute overflow-hidden rounded-xl shadow-xl bg-zinc-200 border border-black/10"
                style={{
                  width: "180px",
                  height: "270px",
                  left: "50%",
                  top: "56%",
                  transform: `translate(calc(-50% + ${left2Offset}px), -50%) scale(0.92)`,
                  opacity: flankingOpacity,
                }}
              >
                <Image
                  src={photos[4]?.src || img19}
                  alt="Left 2 photo"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>

              {/* Left 1 */}
              <div
                className="absolute overflow-hidden rounded-xl shadow-2xl bg-zinc-200 border border-black/10"
                style={{
                  width: "250px",
                  height: "380px",
                  left: "50%",
                  top: "56%",
                  transform: `translate(calc(-50% + ${left1Offset}px), -50%) scale(0.96)`,
                  opacity: flankingOpacity,
                }}
              >
                <Image
                  src={photos[1]?.src || img6}
                  alt="Left 1 photo"
                  fill
                  className="object-cover"
                  sizes="250px"
                />
              </div>

              {/* Right 1 */}
              <div
                className="absolute overflow-hidden rounded-xl shadow-2xl bg-zinc-200 border border-black/10"
                style={{
                  width: "250px",
                  height: "380px",
                  left: "50%",
                  top: "56%",
                  transform: `translate(calc(-50% + ${right1Offset}px), -50%) scale(0.96)`,
                  opacity: flankingOpacity,
                }}
              >
                <Image
                  src={photos[3]?.src || img14}
                  alt="Right 1 photo"
                  fill
                  className="object-cover"
                  sizes="250px"
                />
              </div>

              {/* Right 2 */}
              <div
                className="absolute overflow-hidden rounded-xl shadow-xl bg-zinc-200 border border-black/10"
                style={{
                  width: "180px",
                  height: "270px",
                  left: "50%",
                  top: "56%",
                  transform: `translate(calc(-50% + ${right2Offset}px), -50%) scale(0.92)`,
                  opacity: flankingOpacity,
                }}
              >
                <Image
                  src={photos[5]?.src || img24}
                  alt="Right 2 photo"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </div>
          )}

          {/* MAIN PHOTO STAGE (Morphs from Center Card into Full Interactive Gallery) */}
          <div
            className="relative z-20 flex-1 w-full max-w-7xl mx-auto flex flex-col justify-center items-center"
            style={{ marginTop: "64px" }}
          >
            <div
              className="relative overflow-hidden rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] bg-black border border-black/10 transition-all duration-300 ease-out"
              style={{
                width: `${340 + expandProgress * 940}px`,
                height: `${500 + expandProgress * 140}px`,
                maxWidth: "94vw",
                maxHeight: "66vh",
              }}
            >
              {/* Photo Slides with smooth crossfade */}
              {photos.map((photo, idx) => (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === activeSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    priority={idx === 0}
                    className="object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                    onClick={() => setLightboxIndex(idx)}
                    sizes="(max-width: 1280px) 95vw, 1200px"
                  />
                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                </div>
              ))}

              {/* Prev / Next Buttons (Appear when expanded) */}
              <div
                className="transition-opacity duration-300"
                style={{
                  opacity: galleryUiOpacity,
                  pointerEvents: galleryUiOpacity > 0.5 ? "auto" : "none",
                }}
              >
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous Photo"
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-red-600 text-white border border-white/20 backdrop-blur flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next Photo"
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-red-600 text-white border border-white/20 backdrop-blur flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Bottom Right Interactive Thumbnail Strip */}
                <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-30 flex items-center gap-3 p-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
                  {photos.slice(0, 5).map((photo, thumbIdx) => {
                    const isActive = thumbIdx === activeSlide;
                    return (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => setActiveSlide(thumbIdx)}
                        aria-label={`Select photo ${thumbIdx + 1}`}
                        className={`relative w-16 h-11 lg:w-20 lg:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                          isActive
                            ? "border-red-500 scale-105 shadow-[0_0_12px_rgba(220,38,38,0.7)]"
                            : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/60"
                        }`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </button>
                    );
                  })}

                  {/* Counter */}
                  <div className="px-3 py-1 font-mono text-xs font-semibold text-zinc-300">
                    <span className="text-white font-bold text-sm">
                      {String(activeSlide + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-1 text-zinc-500">/</span>
                    <span>{String(photos.length).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* MOBILE VIEW: SLEEK TOUCH CAROUSEL */
        <div className="w-full py-16 px-4 sm:px-6 bg-white">
          <div className="w-full flex flex-col justify-between items-start gap-4 mb-8 text-left">
            <h2 className="text-[32px] sm:text-[36px] font-bold text-primary tracking-[-1.44px] font-sora leading-[1.1]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[14px] text-secondary leading-relaxed font-primary font-normal">
                {subtitle}
              </p>
            )}
          </div>

          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl bg-black mb-4">
            <Image
              src={photos[activeSlide]?.src || img1}
              alt={photos[activeSlide]?.title || "Gallery Photo"}
              fill
              className="object-cover"
              onClick={() => setLightboxIndex(activeSlide)}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block bg-red-600 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider mb-1.5">
                {photos[activeSlide]?.category}
              </span>
              <h3 className="text-lg font-bold font-sora line-clamp-1">
                {photos[activeSlide]?.title}
              </h3>
              <p className="text-xs text-zinc-300 line-clamp-1 mt-0.5">
                {photos[activeSlide]?.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center active:scale-90"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center active:scale-90"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {photos.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  idx === activeSlide
                    ? "border-red-600 scale-105"
                    : "border-zinc-200 opacity-60"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 lg:p-10"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 text-white hover:text-red-500 bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur transition-all"
            aria-label="Close Lightbox"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex]?.src || img1}
              alt={photos[lightboxIndex]?.title || "Full photo view"}
              fill
              className="object-contain bg-black"
            />
            <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-6 text-white flex items-end justify-between">
              <div>
                <span className="text-xs bg-red-600 px-2.5 py-1 rounded font-bold uppercase tracking-wider inline-block mb-2">
                  {photos[lightboxIndex]?.category}
                </span>
                <h4 className="text-xl lg:text-2xl font-bold font-sora">
                  {photos[lightboxIndex]?.title}
                </h4>
                <p className="text-sm text-zinc-300 mt-1">
                  {photos[lightboxIndex]?.subtitle}
                </p>
              </div>
              <div className="text-right font-mono text-xs text-zinc-400">
                {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
