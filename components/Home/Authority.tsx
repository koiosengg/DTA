"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import logo1 from "@/public/assets/Home/Authorities/Rectangle 46.webp";
import logo2 from "@/public/assets/Home/Authorities/Rectangle 47.webp";
// import logo3 from "@/public/assets/Home/Authorities/Rectangle 49.webp";

interface LogoItem {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  link?: string;
}

interface AuthorityProps {
  title?: string;
  subtitle?: string;
  logos?: LogoItem[];
}

const defaultLogos = [
  {
    src: logo1,
    alt: "World Taekwondo Affiliation",
    width: 296,
    height: 167,
    link: "https://www.worldtaekwondo.org/main",
  },
  {
    src: logo2,
    alt: "Kukkiwon World Taekwondo Headquarters",
    width: 296,
    height: 167,
    link: "https://www.kukkiwon.or.kr/eng/main/view",
  },
];

export default function Authority({
  title = "Proudly Affiliated with World Taekwondo Authorities.",
  subtitle = "A commitment to authentic training, recognized standards, and excellence through official martial arts affiliations.",
  logos = defaultLogos,
}: AuthorityProps) {
  return (
    <section className="w-full bg-white py-14 px-5 lg:py-30 lg:px-20 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-start gap-12 md:gap-16">
        {/* Header Block */}
        <div className="flex flex-col items-start text-left gap-2 max-w-4xl">
          <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
            {title}
          </h2>
          <p className="text-[14px] lg:text-[16px] text-secondary leading-relaxed font-primary font-normal max-w-135">
            {subtitle}
          </p>
        </div>

        {/* Logos Container */}
        <div className="w-full flex flex-col md:flex-row gap-12 justify-around items-center">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={logo.alt}
              className="group relative p-4 sm:p-6 rounded-2xl bg-white border border-transparent hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#D61F26] focus-visible:outline-none"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 296}
                height={logo.height || 167}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
