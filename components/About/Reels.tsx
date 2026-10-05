"use client";

import React, { useState, useEffect, useRef } from "react";

interface ReelItem {
  id: number;
  src: string;
  instagramUrl?: string;
}

const defaultReels: ReelItem[] = [
  {
    id: 1,
    src: "/assets/About/Reels/Video-1.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
  {
    id: 2,
    src: "/assets/About/Reels/Video-2.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
  {
    id: 3,
    src: "/assets/About/Reels/Video-3.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
  {
    id: 4,
    src: "/assets/About/Reels/Video-4.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
  {
    id: 5,
    src: "/assets/About/Reels/Video-5.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
  {
    id: 6,
    src: "/assets/About/Reels/Video-1.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
  {
    id: 7,
    src: "/assets/About/Reels/Video-2.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
  {
    id: 8,
    src: "/assets/About/Reels/Video-3.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
  {
    id: 9,
    src: "/assets/About/Reels/Video-4.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
  {
    id: 10,
    src: "/assets/About/Reels/Video-5.mp4",
    instagramUrl: "https://www.instagram.com/dta_india/",
  },
];


function VideoCard({ reel }: { reel: ReelItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="shrink-0 relative rounded-xl overflow-hidden bg-black shadow-md border border-zinc-200 group cursor-pointer"
      style={{ width: 225, height: 400, minWidth: 225, maxWidth: 225 }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={reel.src}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        loop
        playsInline
        preload="metadata"
        autoPlay
        muted
      />
    </div>
  );
}

interface ReelsProps {
  title?: string;
  subtitle?: string;
  reels?: ReelItem[];
}

export default function Reels({
  title = "Life at Deccan Taekwondo Academy",
  subtitle = "Catch the daily training energy, kicks, student transformations, and masterclass moments on Instagram.",
  reels = defaultReels,
}: ReelsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [stepWidth, setStepWidth] = useState(200);

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
        const cardWidth = firstChild.clientWidth || 185;
        setStepWidth(cardWidth + 16);
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
    <section className="w-full bg-white py-14 px-5 lg:py-30 lg:px-20 flex flex-col gap-12 md:gap-16 overflow-hidden items-center">
      <div className="w-full max-w-7xl flex flex-col gap-12 md:gap-16">
        <div className="w-full flex flex-col items-start text-left gap-2">
          <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
            {title}
          </h2>
          <p className="text-[14px] lg:text-[16px] w-full text-secondary leading-relaxed font-primary font-normal max-w-150">
            {subtitle}
          </p>
        </div>
        <div
          ref={containerRef}
          className="w-full flex flex-col gap-12 overflow-visible relative pr-0"
        >
          {/* Inner Cards flex container */}
          <div
            ref={trackRef}
            className="flex gap-4 transition-[left] duration-500 ease-in-out relative lg:pl-0"
            style={{
              left: `-${scrollX}px`,
            }}
          >
            {reels.map((reel) => (
              <VideoCard key={reel.id} reel={reel} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="w-full flex justify-center items-center gap-1">
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
      </div>
    </section>
  );
}
