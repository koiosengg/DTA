"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import bannerImg from "@/public/assets/Home/Banner/Banner.webp";
import bannerRespImg from "@/public/assets/Home/Banner/Banner-resp.png";

interface BannerProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  desc?: string;
  buttonText?: string;
  buttonHref?: string;
  phone?: string;
  phoneText?: string;
  image?: string | StaticImageData;
  responsiveImage?: string | StaticImageData;
}

export default function Banner({
  title = <>Train Strong. Live Fearless.</>,
  subtitle = <span className="block text-accent ">Master Taekwondo.</span>,
  desc = "At Deccan Taekwondo Academy, we don't just teach martial arts we build confidence, discipline, fitness, and champions.",
  buttonText = "Book Free Trial Class",
  buttonHref = "/contact",
  phone = "+919876543210",
  phoneText = "Call Us Now",
  image = bannerImg,
  responsiveImage,
}: BannerProps) {
  const activeResponsiveImage =
    responsiveImage || (image === bannerImg ? bannerRespImg : undefined);

  return (
    <section className="relative w-full overflow-hidden bg-primary min-h-[calc(100svh-4rem)] flex items-end">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 h-full w-full z-0 select-none pointer-events-none">
        {activeResponsiveImage ? (
          <>
            {/* Desktop Background Image */}
            <Image
              src={image}
              alt="Deccan Taekwondo Academy Sparring"
              fill
              priority
              placeholder={image === bannerImg ? "blur" : undefined}
              className="hidden md:block object-cover object-center h-full w-full"
            />
            {/* Mobile / Responsive Background Image */}
            <Image
              src={activeResponsiveImage}
              alt="Deccan Taekwondo Academy Sparring Mobile"
              fill
              priority
              placeholder={activeResponsiveImage === bannerRespImg ? "blur" : undefined}
              className="block md:hidden object-cover object-[center_65%] h-full w-full"
            />
          </>
        ) : (
          <Image
            src={image}
            alt="Deccan Taekwondo Academy Sparring"
            fill
            priority
            placeholder={image === bannerImg ? "blur" : undefined}
            className="object-cover object-center h-full w-full"
          />
        )}
      </div>

      {/* Bottom Horizontal Blur Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 md:h-64 lg:h-72 w-full bg-primary blur-[100px] z-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[45%] md:h-56 lg:h-64 w-full bg-primary blur-[100px] z-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[35%] md:h-40 lg:h-48 w-full bg-primary blur-[60px] z-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[20%] md:h-28 lg:h-32 w-full bg-primary blur-[30px] z-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 w-full bg-primary z-5 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-5 md:px-6 lg:px-20 pb-12 sm:pb-16 lg:pb-17 flex flex-col items-start justify-center">
        <div className="lg:max-w-229 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            {/* Main Headings */}
            <h1 className="text-[48px] lg:text-[72px] font-bold tracking-[-1.92px] lg:tracking-[-2.88px] text-white leading-[100%] font-sora ">
              {title}
              {subtitle}
            </h1>

            {/* Subtext description */}
            <p className="text-[16px] sm:text-lg text-[#E7E7E7] font-normal leading-normal font-primary max-w-xl lg:max-w-175">
              {desc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
            <Link
              href={buttonHref}
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#111] font-bold px-6 py-3.5 sm:py-4 rounded-lg text-[18px] hover:bg-accent hover:text-white transition-all duration-200 active:scale-[0.98] shadow-lg hover:shadow-xl font-primary w-full max-w-83.75 sm:w-auto sm:max-w-none"
            >
              {buttonText}
              <svg
                className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            <Link
              href={phone ? `tel:${phone}` : "/contact"}
              className="inline-flex items-center justify-center bg-white/20 hover:bg-[#FBE9E9] text-white hover:text-accent font-semibold p-3.5 sm:p-4 rounded-lg border border-white/20 hover:border-accent transition-all duration-200 active:scale-[0.98] text-[18px] font-primary w-full max-w-83.75 sm:w-auto sm:max-w-none"
            >
              {phoneText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
