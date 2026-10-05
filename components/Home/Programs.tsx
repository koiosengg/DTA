"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import karateIcon from "@/public/assets/Home/Programs/karate.png";
import occupationIcon from "@/public/assets/Home/Programs/occupation.png";
import manIcon from "@/public/assets/Home/Programs/man.png";
import fitnessIcon from "@/public/assets/Home/Programs/fitness.png";

interface ProgramItem {
  title: string;
  desc: string;
  image: StaticImageData | string;
  isAccent?: boolean;
}

interface ProgramsProps {
  title?: React.ReactNode;
  subtitle?: string;
  items?: ProgramItem[];
  className?: string;
}

const defaultPrograms: ProgramItem[] = [
  {
    title: "Kids Taekwondo Classes (Age 3+)",
    desc: "Help your child build: Confidence, discipline, focus, respect, strength, flexibility. Perfect for parents looking for kids martial arts classes in Bangalore.",
    image: karateIcon,
    isAccent: false,
  },
  {
    title: "Teen Martial Arts Training",
    desc: "Build athletic performance, self-confidence, leadership, and competitive spirit. Ideal for school and college students.",
    image: occupationIcon,
    isAccent: false,
  },
  {
    title: "Adult Self Defence & Fitness",
    desc: "Learn practical self defence while improving: Strength, stamina, mobility, weight loss, mental focus. Perfect for working professionals, mothers, and beginners",
    image: manIcon,
    isAccent: true,
  },
  {
    title: "Senior Fitness & Movement Training",
    desc: "Low impact training designed for: mobility, balance, flexibility, functional strength",
    image: fitnessIcon,
    isAccent: false,
  },
];

function HoverRow({ item, idx }: { item: ProgramItem; idx: number }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="flex items-center text-left group transition-all duration-300"
      style={{
        borderTop: idx > 0 ? "1px solid #f2f2f2" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon Badge Container */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300">
        <div className="relative w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-transform duration-300 transform group-hover:scale-110 flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain transition-all duration-300"
            style={{
              filter: hovered
                ? "invert(18%) sepia(88%) saturate(5940%) hue-rotate(354deg) brightness(91%) contrast(95%)"
                : "none",
            }}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col lg:gap-3 gap-2 justify-center pl-6 sm:pl-8 flex-1">
        <h3
          className="lg:text-2xl font-bold font-primary leading-tight transition-colors duration-300 text-xl"
          style={{ color: hovered ? "#d61f26" : "#111111" }}
        >
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-secondary leading-relaxed font-primary font-medium">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Programs({
  title = (
    <>
      Programs <br className="hidden lg:inline" />
      Designed For <br className="hidden lg:inline" />
      Every Age
    </>
  ),
  subtitle = "Deccan Taekwondo Academy has been shaping lives through the power of Korean martial arts for over 18 years.",
  items = defaultPrograms,
  className = "",
}: ProgramsProps) {
  return (
    <section
      className={`w-full bg-white py-14 px-5 lg:py-30 lg:px-20 flex flex-col gap-12 md:gap-16 overflow-hidden items-center ${className}`}
    >
      {/* Max 1280px Container */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between items-center gap-12">
        {/* Left Column Div */}
        <div className="flex flex-col gap-2 text-left w-full lg:w-[40.625%]">
          <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
            {title}
          </h2>
          <p className="text-[14px] lg:text-[16px] text-secondary leading-relaxed font-primary font-normal max-w-125">
            {subtitle}
          </p>
        </div>

        {/* Right Column Div */}
        <div className="w-full lg:w-[56.25%] flex flex-col gap-8">
          {items.map((item, idx) => (
            <HoverRow key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
