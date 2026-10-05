"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import coach1_1 from "@/public/assets/Home/Learn/Image1.png";
import coach1_2 from "@/public/assets/Home/Learn/Image2.png";
import coach1_3 from "@/public/assets/Home/Learn/Image3.png";
import coach1_4 from "@/public/assets/Home/Learn/Image4.png";
import coach2_1 from "@/public/assets/Home/Learn/Image5.jpeg";
import coach2_2 from "@/public/assets/Home/Learn/Image6.jpeg";
import coach2_3 from "@/public/assets/Home/Learn/Image8.png";
import coach2_4 from "@/public/assets/Home/Learn/Image9.jpeg";

interface Coach {
  name: string;
  cert: string;
  desc: string;
  images: (string | StaticImageData)[];
  tags: string[];
  objectFit?: string;
}

interface LearnProps {
  title?: string;
  subtitle?: string;
  coaches?: Coach[];
}

const coachesData: Coach[] = [
  {
    name: "Grand Master H.L. Muthappa Huderi",
    cert: "7th Dan Black Belt",
    desc: "With 30+ years of experience in Korean martial arts, Grand Master H.L. Muthappa has trained 50,0000+ students, 10,000+ black belts and 10+ grandmasters in 500+  national and international tournaments",
    images: [coach1_1, coach1_2, coach1_3, coach1_4],
    tags: [
      "International Taekwondo Referee",
      "Black Belt in 5+ Martial Arts",
      "International Gold Medalist",
      "30+ Years of Experience",
      "500+ Tournaments",
    ],
    objectFit: "object-cover object-top",
  },
  {
    name: "Head Coach Bhupendra",
    cert: "4th Dan Black Belt",
    desc: "As the Branch Head Coach of Shantinagar, he ensures every student from kids to working professionals, receives personal attention, structured training, and continuous growth.",
    images: [coach2_1, coach2_2, coach2_3, coach2_4],
    tags: [
      "Disciplined Coaching Style",
      "Student First Approach",
      "Martial Artist",
      "Confidence Building",
      "Beginner Development",
    ],
    objectFit: "object-cover object-top",
  },
];

function CoachImage({
  images,
  name,
  objectFit,
}: {
  images: (string | StaticImageData)[];
  name: string;
  objectFit?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full md:w-1/2 h-auto aspect-414/445 md:h-111.25 relative rounded-2xl overflow-hidden border border-[#D6D6D6] bg-[#F2F2F2]">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`${name} ${i + 1}`}
          fill
          sizes="414px"
          className={`${objectFit || "object-cover object-top"} transition-opacity duration-700 ease-in-out ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default function Learn({
  title = "Learn From Masters",
  subtitle = "With decades of experience, our masters have trained thousands of students to achieve their martial arts goals.",
  coaches = coachesData,
}: LearnProps) {
  return (
    <section className="w-full bg-white py-14 px-5 lg:py-30 lg:px-20 border-b border-zinc-100 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-start lg:gap-16 gap-12">
        {/* Header Block */}
        <div className="flex flex-col items-start text-left gap-2 max-w-4xl">
          <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
            {title}
          </h2>
          <p className="text-[14px] lg:text-[16px] text-secondary leading-relaxed font-primary font-normal max-w-150">
            {subtitle}
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="w-full grid lg:grid-cols-1 gap-16">
          {coaches.map((coach, idx) => {
            const isReverse = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center text-center gap-5 md:gap-8 ${
                  isReverse ? "coach-reverse" : ""
                }`}
              >
                {/* Auto-rotating Image Slideshow */}
                <CoachImage
                  images={coach.images}
                  name={coach.name}
                  objectFit={coach.objectFit}
                />

                {/* Profile Details Container */}
                <div className="flex flex-col items-center text-center md:gap-6 gap-4 w-full md:w-1/2">
                  {/* Info Text Block (8px gap) */}
                  <div className="flex flex-col items-center gap-2 w-full">
                    {/* Coach Name */}
                    <h3 className="md:text-6 font-bold font-sora text-primary text-xl">
                      {coach.name}
                    </h3>

                    {/* Certification Belt Label (accent color, bold) */}
                    <div className="text-md font-bold text-accent font-primary tracking-wider uppercase flex items-center gap-0.5">
                      {/* Left Wreath SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="29"
                        viewBox="0 0 11 29"
                        fill="none"
                        className="shrink-0"
                      >
                        <path
                          d="M6.96902 2.18581C7.85509 1.99804 8.7915 1.68962 9.63935 0C6.5325 0.819628 7.0682 1.92699 6.96902 2.18581Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M5.73028 3.3589C5.85059 3.14635 6.74312 2.33202 5.86928 0.425781C5.85871 0.446501 5.63842 0.76548 5.30758 1.61399C4.87756 2.84483 5.71892 3.33818 5.73028 3.3589Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M4.18067 5.6105C4.1969 5.55604 5.02526 4.43406 3.8498 2.69287C3.80755 2.81639 3.7157 2.87857 3.48238 3.95459C3.21008 5.16472 4.15955 5.58978 4.18067 5.6105Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M3.00523 8.07786C3.002 8.04818 3.67018 6.81001 2.20942 5.25C2.13222 5.65998 2.05826 5.9737 2.0517 6.55562C2.01191 7.84745 2.98494 8.05954 3.00523 8.07786Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M2.24192 10.7028C2.23946 10.6232 2.69387 9.36752 1.00142 8.03955C1.00142 8.06353 0.941285 8.29757 1.05263 9.35373C1.23148 10.635 2.2208 10.6898 2.24192 10.7028Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M1.91621 13.4163C1.88526 12.6385 1.739 11.786 0.264385 10.9883C0.646495 13.8421 1.77798 13.2927 1.91621 13.4163Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M2.02168 16.1469C1.9851 16.0465 2.03141 14.7384 0 14.0127C0.00732875 14.0334 0.0406452 14.3016 0.466604 15.2407C1.02423 16.3943 2.00055 16.142 2.02168 16.1469Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M2.55586 18.8279C2.5331 18.7999 2.35749 17.4167 0.228558 17.0396C1.4357 19.4797 2.15835 18.7942 2.55586 18.8279Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M3.52803 21.3825C3.48495 21.3297 3.06065 20.0216 0.936524 19.9956C1.00156 20.0822 1.03491 20.2403 1.76812 21.0152C2.62407 21.938 3.50687 21.3845 3.52803 21.3825Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M4.88545 23.7553C4.86103 23.7419 4.27418 22.4757 2.10537 22.8024C2.12736 22.8235 2.3931 23.1401 3.08979 23.6748C4.15307 24.4302 4.86429 23.7602 4.88545 23.7553Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M6.61543 25.8713C5.98704 25.3125 5.19695 24.9062 3.72074 25.3755C5.82288 26.9554 6.11547 26.0854 6.61543 25.8713Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.65254 27.6931C8.45987 27.5969 7.58849 26.7244 5.71396 27.6663C6.54713 28.0621 7.46898 28.5741 8.2591 28.0788C8.53143 27.9065 8.65254 27.6931 8.65254 27.6931Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M5.90822 3.4663C5.93751 3.45247 6.80725 2.15824 8.64765 3.30414C8.52895 3.35574 8.46148 3.41633 7.63318 3.71622C6.58372 4.15385 5.92934 3.47402 5.90822 3.4663Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M4.37317 5.68819C4.39426 5.66993 5.03485 4.25945 7.05 5.09167C6.57206 5.39522 6.2883 5.56141 6.11515 5.66014C5.11937 6.23477 4.42761 5.70447 4.37317 5.68819Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M3.20751 8.1236C3.2221 8.10282 3.39285 7.44171 4.16018 7.14342C4.63085 6.9752 5.33397 7.00691 5.75264 7.10565C4.76578 7.94879 4.9438 7.79846 4.92267 7.81672C4.04397 8.55757 3.22866 8.12437 3.20751 8.1236Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M2.44993 10.7152C2.46213 10.6945 2.6507 9.13648 4.79756 9.3007C4.65286 9.47907 4.55614 9.6262 4.09034 10.1349C3.33924 11.0131 2.47103 10.7123 2.44993 10.7152Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M2.12233 13.3953C2.13129 13.3726 2.07926 11.817 4.21308 11.6216C3.82291 12.336 3.4311 13.1214 2.67103 13.3437C2.36461 13.4347 2.12233 13.3953 2.12233 13.3953Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M2.2226 16.0935C2.22746 16.0728 1.91285 14.5322 4.00117 14.0093C3.20622 16.2739 2.69324 15.8712 2.2226 16.0935Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M2.74496 18.7423C2.57668 17.8747 2.76772 17.0153 4.17646 16.4009C4.02933 17.1778 4.00981 17.0933 3.93665 17.4676C3.69033 18.5778 2.76608 18.7285 2.74496 18.7423Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M3.70125 21.2679C3.69885 21.2472 2.93143 19.8904 4.73115 18.729C4.70676 19.3048 4.67997 19.6648 4.66778 19.8197C4.55234 21.0094 3.72238 21.248 3.70125 21.2679Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M5.0383 23.6137C5.0383 23.593 4.05228 22.3829 5.64471 20.9419C5.64471 21.2247 6.02839 22.4731 5.4488 23.2419C5.25373 23.5011 5.0383 23.6137 5.0383 23.6137Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M6.74271 25.7081C6.73947 25.6874 5.55022 24.6747 6.91669 22.9717C7.18166 23.8214 7.44263 24.5967 7.08657 25.2774C6.93861 25.5618 6.74271 25.7081 6.74271 25.7081Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.75325 27.5106C8.70201 27.4489 7.9607 26.9881 8.09723 25.9474C8.14601 25.5849 8.29964 25.1099 8.48744 24.7832C8.53622 24.8827 8.63617 25.027 8.93776 25.7808C9.41166 26.8247 8.76135 27.4899 8.75325 27.5106Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M2.40371 9.81578C1.37624 13.8655 2.07287 16.3516 2.19321 17.628C3.56208 23.2999 5.93578 25.845 10.3863 28.9618C10.4993 29.03 10.6367 29.0049 10.6927 28.9049C10.7488 28.8049 10.7041 28.6696 10.5944 28.603C8.90684 27.7646 7.15102 26.084 5.92682 24.6503C0.545476 18.2542 0.766572 7.91278 7.67614 1.64918C9.68559 -0.172947 4.13273 3.40989 2.40371 9.81578Z"
                          fill="#D61F26"
                        />
                      </svg>

                      <span>{coach.cert}</span>

                      {/* Right Wreath SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="29"
                        viewBox="0 0 11 29"
                        fill="none"
                        className="shrink-0"
                      >
                        <path
                          d="M3.74797 2.18581C2.8619 1.99804 1.92549 1.68962 1.07764 0C4.18449 0.819628 3.64879 1.92699 3.74797 2.18581Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M4.98671 3.3589C4.8664 3.14635 3.97387 2.33202 4.84771 0.425781C4.85828 0.446501 5.07857 0.76548 5.40941 1.61399C5.83943 2.84483 4.99807 3.33818 4.98671 3.3589Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M6.53632 5.6105C6.52009 5.55604 5.69173 4.43406 6.86719 2.69287C6.90944 2.81639 7.00129 2.87857 7.23461 3.95459C7.50691 5.16472 6.55744 5.58978 6.53632 5.6105Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M7.71176 8.07786C7.71499 8.04818 7.04681 6.81001 8.50757 5.25C8.58477 5.65998 8.65873 5.9737 8.66529 6.55562C8.70508 7.84745 7.73205 8.05954 7.71176 8.07786Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.47507 10.7028C8.47753 10.6232 8.02312 9.36752 9.71557 8.03955C9.71557 8.06353 9.77571 8.29757 9.66436 9.35373C9.48551 10.635 8.49619 10.6898 8.47507 10.7028Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.80078 13.4163C8.83173 12.6385 8.97799 11.786 10.4526 10.9883C10.0705 13.8421 8.93901 13.2927 8.80078 13.4163Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.69531 16.1469C8.73189 16.0465 8.68558 14.7384 10.717 14.0127C10.7097 14.0334 10.6763 14.3016 10.2504 15.2407C9.69276 16.3943 8.71644 16.142 8.69531 16.1469Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.16113 18.8279C8.18389 18.7999 8.3595 17.4167 10.4884 17.0396C9.28129 19.4797 8.55864 18.7942 8.16113 18.8279Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M7.18896 21.3825C7.23204 21.3297 7.65634 20.0216 9.78047 19.9956C9.71543 20.0822 9.68208 20.2403 8.94887 21.0152C8.09292 21.938 7.21012 21.3845 7.18896 21.3825Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M5.83154 23.7553C5.85596 23.7419 6.44281 22.4757 8.61162 22.8024C8.58964 22.8235 8.32389 23.1401 7.6272 23.6748C6.56392 24.4302 5.8527 23.7602 5.83154 23.7553Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M4.10156 25.8713C4.72995 25.3125 5.52004 24.9062 6.99625 25.3755C4.89411 26.9554 4.60152 26.0854 4.10156 25.8713Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M2.06445 27.6931C2.25712 27.5969 3.1285 26.7244 5.00303 27.6663C4.16986 28.0621 3.24801 28.5741 2.45789 28.0788C2.18556 27.9065 2.06445 27.6931 2.06445 27.6931Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M4.80877 3.4663C4.77949 3.45247 3.90974 2.15824 2.06934 3.30414C2.18804 3.35574 2.25551 3.41633 3.08381 3.71622C4.13327 4.15385 4.78765 3.47402 4.80877 3.4663Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M6.34382 5.68819C6.32273 5.66993 5.68214 4.25945 3.66699 5.09167C4.14493 5.39522 4.42869 5.56141 4.60184 5.66014C5.59762 6.23477 6.28938 5.70447 6.34382 5.68819Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M7.50948 8.1236C7.49489 8.10282 7.32414 7.44171 6.55681 7.14342C6.08614 6.9752 5.38302 7.00691 4.96436 7.10565C5.95121 7.94879 5.77319 7.79846 5.79432 7.81672C6.67303 8.55757 7.48833 8.12437 7.50948 8.1236Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.26706 10.7152C8.25486 10.6945 8.06629 9.13648 5.91943 9.3007C6.06413 9.47907 6.16085 9.6262 6.62665 10.1349C7.37775 11.0131 8.24596 10.7123 8.26706 10.7152Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.59466 13.3953C8.5857 13.3726 8.63773 11.817 6.50391 11.6216C6.89408 12.336 7.28589 13.1214 8.04596 13.3437C8.35238 13.4347 8.59466 13.3953 8.59466 13.3953Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.49439 16.0935C8.48953 16.0728 8.80414 14.5322 6.71582 14.0093C7.51077 16.2739 8.02375 15.8712 8.49439 16.0935Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M7.97203 18.7423C8.14031 17.8747 7.94927 17.0153 6.54053 16.4009C6.68766 17.1778 6.70718 17.0933 6.78035 17.4676C7.02666 18.5778 7.95091 18.7285 7.97203 18.7423Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M7.01574 21.2679C7.01814 21.2472 7.78556 19.8904 5.98584 18.729C6.01023 19.3048 6.03702 19.6648 6.04921 19.8197C6.16465 21.0094 6.99461 21.248 7.01574 21.2679Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M5.67869 23.6137C5.67869 23.593 6.66471 22.3829 5.07228 20.9419C5.07228 21.2247 4.6886 22.4731 5.26819 23.2419C5.46326 23.5011 5.67869 23.6137 5.67869 23.6137Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M3.97428 25.7081C3.97752 25.6874 5.16677 24.6747 3.8003 22.9717C3.53533 23.8214 3.27436 24.5967 3.63042 25.2774C3.77838 25.5618 3.97428 25.7081 3.97428 25.7081Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M1.96374 27.5106C2.01498 27.4489 2.75629 26.9881 2.61976 25.9474C2.57098 25.5849 2.41735 25.1099 2.22955 24.7832C2.18077 24.8827 2.08082 25.027 1.77923 25.7808C1.30533 26.8247 1.95564 27.4899 1.96374 27.5106Z"
                          fill="#D61F26"
                        />
                        <path
                          d="M8.31328 9.81578C9.34075 13.8655 8.64412 16.3516 8.52378 17.628C7.15491 23.2999 4.78121 25.845 0.330704 28.9618C0.217694 29.03 0.0802947 29.0049 0.0242515 28.9049C-0.0318533 28.8049 0.0128572 28.6696 0.122603 28.603C1.81015 27.7646 3.56597 26.084 4.79017 24.6503C10.1715 18.2542 9.95042 7.91278 3.04085 1.64918C1.0314 -0.172947 6.58426 3.40989 8.31328 9.81578Z"
                          fill="#D61F26"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="lg:text-lg text-primary leading-relaxed font-primary font-medium ">
                    {coach.desc}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {coach.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-white border border-[#D6D6D6] rounded-sm p-2 text-md text-primary font-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
