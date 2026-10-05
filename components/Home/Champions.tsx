"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import championsImage from "@/public/assets/Home/Champions/Image.webp";
import championsImage2 from "@/public/assets/Home/Champions/Image2.jpeg";
import championsImage3 from "@/public/assets/Home/Champions/Image3.png";
import championsImage4 from "@/public/assets/Home/Champions/Image4.png";
import championsImage5 from "@/public/assets/Home/Champions/Image5.png";
import championsImage6 from "@/public/assets/Home/Champions/Image6.png";
import championsImage7 from "@/public/assets/Home/Champions/Image7.png";

interface ChampionsProps {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  ctaText?: string;
  ctaHref?: string;
  showCta?: boolean;
  image?: string | StaticImageData;
  className?: string;
}

const championImages = [
  championsImage,
  championsImage2,
  championsImage3,
  championsImage4,
  championsImage5,
  championsImage6,
  championsImage7,
];

export default function Champions({
  title = "Building Champions Since 2008",
  paragraphs = [
    "Deccan Taekwondo Academy has been shaping lives through the power of Korean martial arts for over 18 years.",
    "Founded under the expert guidance of Grand Master H.L. Muthappa Huderi, a 7th Dan Black Belt and internationally recognized martial arts expert, our academy has trained over 10,000 students across Bangalore.",
  ],
  ctaText = "Read More",
  ctaHref = "/about",
  showCta = true,
  className = "",
}: ChampionsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % championImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`w-full bg-white py-14 px-5 lg:py-30 lg:px-20 flex justify-center ${className}`}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-10 items-center lg:items-stretch">
        {/* Left Column: Heading, Mobile Image, Paragraphs, Read More */}
        <div className="w-full lg:flex-1 flex flex-col justify-between items-start text-left md:gap-16 gap-8">
          {/* Header Block (Same as other sections) */}
          <div className="flex flex-col items-start text-left gap-2 max-w-4xl">
            <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
              {title}
            </h2>
          </div>

          {/* Mobile-only Image (Positioned right under header subtitle on responsive screens) */}
          <div className="w-full relative rounded-2xl overflow-hidden aspect-4/3 min-h-64 sm:min-h-80 lg:hidden">
            <Image
              src={championImages[currentIndex]}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 522px"
              className="object-cover"
              priority
            />
          </div>

          {/* Paragraphs Block (Separated by spacer) */}
          <div className="flex flex-col gap-4 md:text-lg text-primary leading-relaxed font-primary font-normal">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* CTA Link */}
          {showCta && (
            <Link
              href={ctaHref}
              className="text-[18px] font-bold text-accent font-primary flex items-center gap-2.5 hover:opacity-80 transition-opacity underline underline-offset-4"
            >
              {ctaText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_317_679"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_317_679)">
                  <path
                    d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                    fill="#D61F26"
                  />
                </g>
              </svg>
            </Link>
          )}
        </div>

        {/* Right Column: Image (Desktop only) */}
        <div className="hidden lg:block w-full lg:w-130.5 shrink-0 self-stretch relative rounded-2xl overflow-hidden min-h-100 lg:min-h-0">
          <Image
            src={championImages[currentIndex]}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 522px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
