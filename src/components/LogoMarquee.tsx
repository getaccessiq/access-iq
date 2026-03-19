"use client";

import React from "react";
import Image from "next/image";

const logos = [
  { src: "/images/logos/target.svg", alt: "Target", width: 120 },
  { src: "/images/logos/siemens.svg", alt: "Siemens", width: 130 },
  { src: "/images/logos/ford.svg", alt: "Ford", width: 100 },
  { src: "/images/logos/accenture.svg", alt: "Accenture", width: 130 },
  { src: "/images/logos/vector.svg", alt: "Vector", width: 130 },
  { src: "/images/logos/Logo_Edgeward_7384.png", alt: "Edgeward", width: 120 },
  { src: "/images/logos/accessiq.svg", alt: "AccessIQ", width: 120 },
];

const LogoMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #f8f9fb 0%, transparent 100%)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #f8f9fb 0%, transparent 100%)",
        }}
      />

      {/* Scrolling track */}
      <div className="flex items-center marquee-track">
        {/* First set */}
        <div className="flex items-center shrink-0 marquee-scroll">
          {logos.map((logo, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center justify-center shrink-0 mx-10"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={56}
                className="h-[36px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center shrink-0 marquee-scroll">
          {logos.map((logo, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center justify-center shrink-0 mx-10"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={56}
                className="h-[36px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
