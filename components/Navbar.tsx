"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../public/assets/DTA logo.png";
// import logo1 from "../public/assets/DTA logo1.webp";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileBatchOpen, setMobileBatchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      if (pathname === "/") {
        setTimeout(() => {
          const elem = document.getElementById(targetId);
          if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white h-20 px-5 sm:px-8 min-[1200px]:px-20 flex items-center border-b border-zinc-100">
        <div className="flex items-center justify-between w-full relative h-full">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-1.25 group">
              <Image
                src={logo}
                alt="DTA Logo Mark"
                priority
                className="w-auto h-18 object-cover"
              />
              {/* <Image
                src={logo1}
                alt="DTA Logo Text"
                priority
                className="w-18 h-5.5 md:w-21.5 md:h-6.5 object-contain"
              /> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden min-[1200px]:flex items-center gap-6 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative flex items-center py-1 transition-colors duration-200 font-primary text-md ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-primary hover:text-accent font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Batch Timings Dropdown */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-md  font-medium flex items-center gap-1.5 py-1 transition-colors duration-200 text-primary hover:text-accent font-primary focus:outline-none cursor-pointer"
              >
                Batch Timings
                <svg
                  className={`h-4 w-4 transition-transform duration-200 text-zinc-400 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1.25 bg-white border border-zinc-100 shadow-2xl rounded-2xl z-50 flex flex-col items-start w-196.5 p-10 gap-10 animate-in fade-in slide-in-from-top-1 duration-200"
                  style={{
                    fontFamily: 'var(--family-body, "Plus Jakarta Sans")',
                  }}
                >
                  {/* Heading */}
                  <h3 className="text-[28px] font-bold text-[#929292]">
                    Our Batch Timings
                  </h3>

                  <div className="flex flex-col gap-5 w-full">
                    {/* Section 1 */}
                    <div className="flex flex-col gap-4 items-start text-left w-full border-b border-[#F2F2F2] pb-5">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold text-accent">
                          Adult Fitness Classes
                        </h4>
                        <p className=" text-md text-secondary font-normal  ">
                          Includes, cardio, light weight gym, weight loss
                          training and functional fitness
                        </p>
                      </div>
                      <p
                        className=" font-semibold text-secondary text-lg
                    "
                      >
                        07:00 AM – 09:00 AM
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col gap-4 items-start text-left w-full border-b border-[#F2F2F2] pb-4">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold text-accent">
                          Taekwondo Classes
                        </h4>
                        <p className=" text-md text-secondary font-normal   ">
                          Morning batch for all ages
                        </p>
                      </div>
                      <p
                        className=" font-semibold text-secondary text-lg
                    "
                      >
                        06:00 AM – 07:00 AM
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="flex flex-col gap-4 items-start text-left w-full">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold text-accent">
                          Evening Batch Classes
                        </h4>
                        <p className=" text-md text-secondary font-normal  ">
                          Suitable for kids, teens, adults, and working
                          professionals.
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 w-full">
                        <div
                          className="flex items-center gap-4 font-semibold text-secondary text-lg
                      "
                        >
                          <span>03:00 PM – 04:00 PM</span>
                          <span className="text-zinc-300 font-light">|</span>
                          <span>04:00 PM – 05:00 PM</span>
                          <span className="text-zinc-300 font-light">|</span>
                          <span>05:00 PM – 06:00 PM</span>
                        </div>
                        <div className="flex items-center gap-4 text-lg font-semibold text-zinc-900">
                          <span>06:00 PM – 07:00 PM</span>
                          <span className="text-zinc-300 font-light">|</span>
                          <span>07:00 PM – 08:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden min-[1200px]:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-base font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95 shadow-md shadow-red-600/10 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center px-5 h-10 min-[1200px]:h-11 gap-2 rounded-lg bg-accent backdrop-blur-[20px]"
            >
              Get Started
              <svg
                className="h-4 w-4"
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
          </div>

          {/* Mobile Menu Button */}
          <div className="flex min-[1200px]:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-500 hover:text-black focus:outline-none cursor-pointer transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Full-Screen White Drawer */}
        {isOpen && (
          <div className="fixed top-20 left-0 right-0 bottom-0 h-[calc(100dvh-5rem)] bg-white z-50 flex flex-col justify-between p-6 min-[1200px]:hidden overflow-y-auto border-t border-zinc-100 animate-in fade-in duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center px-4 py-3 text-lg font-semibold rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-accent/10 text-accent font-bold"
                        : "text-primary hover:bg-zinc-50 hover:text-accent font-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Batch Timings Tab */}
              <div className="flex flex-col rounded-xl overflow-hidden border border-zinc-100 bg-zinc-50/50">
                <button
                  onClick={() => setMobileBatchOpen(!mobileBatchOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-primary hover:text-accent font-primary"
                >
                  <span>Batch Timings</span>
                  <svg
                    className={`h-5 w-5 transition-transform duration-200 text-zinc-400 ${
                      mobileBatchOpen ? "rotate-180 text-accent" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                {mobileBatchOpen && (
                  <div className="p-4 flex flex-col gap-4 text-left border-t border-zinc-100 bg-white">
                    {/* Section 1 */}
                    <div className="flex flex-col gap-1 border-b border-zinc-100 pb-3">
                      <h4 className="text-base font-semibold text-accent font-primary">
                        Adult Fitness Classes
                      </h4>
                      <p className="text-xs text-secondary font-primary">
                        Includes cardio, light weight gym, weight loss training
                        & functional fitness
                      </p>
                      <p className="text-sm font-semibold text-primary font-primary mt-1">
                        07:00 AM – 09:00 AM
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col gap-1 border-b border-zinc-100 pb-3">
                      <h4 className="text-base font-semibold text-accent font-primary">
                        Taekwondo Classes
                      </h4>
                      <p className="text-xs text-secondary font-primary">
                        Morning batch for all ages
                      </p>
                      <p className="text-sm font-semibold text-primary font-primary mt-1">
                        06:00 AM – 07:00 AM
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-semibold text-accent font-primary">
                        Evening Batch Classes
                      </h4>
                      <p className="text-xs text-secondary font-primary mb-1">
                        Suitable for kids, teens, adults, & working
                        professionals
                      </p>
                      <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-primary font-primary">
                        <span className="bg-zinc-100 px-2 py-1 rounded">
                          03:00 PM – 04:00 PM
                        </span>
                        <span className="bg-zinc-100 px-2 py-1 rounded">
                          04:00 PM – 05:00 PM
                        </span>
                        <span className="bg-zinc-100 px-2 py-1 rounded">
                          05:00 PM – 06:00 PM
                        </span>
                        <span className="bg-zinc-100 px-2 py-1 rounded">
                          06:00 PM – 07:00 PM
                        </span>
                        <span className="bg-zinc-100 px-2 py-1 rounded">
                          07:00 PM – 08:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Talk To Us CTA */}
            <div className="border-t border-zinc-100 mt-auto">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-base font-bold text-white shadow-md shadow-red-600/10 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center h-12 p-4 gap-2.5 rounded-lg bg-accent backdrop-blur-[20px] font-primary"
              >
                Get Started
                <svg
                  className="h-4 w-4"
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
            </div>
          </div>
        )}
      </header>
      {/* Dynamic Dropdown Backdrop Overlay */}
      {dropdownOpen && (
        <div className="fixed inset-0 top-16 bg-[#070707]/70 backdrop-blur-[10px] z-40 pointer-events-none transition-all duration-300 animate-in fade-in" />
      )}
    </>
  );
}
