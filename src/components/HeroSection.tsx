"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "./AnimatedGradient";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Three.js animated gradient background */}
      <AnimatedGradient />

      {/* Content layer */}
      <div className="relative z-10">
        {/* Compliance badges bar */}
        <div className="pt-[88px] pb-4">
          <div className="container mx-auto">
            <ScrollReveal animation="fade-in-down" delay={100}>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {[
                "ADA",
                "WCAG 2.2 AA",
                "Section 508",
                "EN 301 549",
              ].map((badge, i) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`bg0-${i}`} x1="14.6693" y1="7.99998" x2="1.33594" y2="7.99998" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2865C7"/>
                        <stop offset="1" stopColor="#24A9AC"/>
                      </linearGradient>
                      <linearGradient id={`bg1-${i}`} x1="10" y1="7.99998" x2="6" y2="7.99998" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2865C7"/>
                        <stop offset="1" stopColor="#24A9AC"/>
                      </linearGradient>
                    </defs>
                    <path d="M12.6629 12.6666H12.6693M12.6629 12.6666C12.2478 13.0783 11.4955 12.9758 10.9679 12.9758C10.3203 12.9758 10.0084 13.1024 9.5462 13.5646C9.15267 13.9582 8.62507 14.6666 8.0026 14.6666C7.38014 14.6666 6.85254 13.9582 6.45898 13.5646C5.99679 13.1024 5.68493 12.9758 5.03731 12.9758C4.50972 12.9758 3.75739 13.0783 3.34226 12.6666C2.92381 12.2517 3.02679 11.4962 3.02679 10.9652C3.02679 10.2942 2.88004 9.98571 2.40219 9.50785C1.69136 8.79705 1.33595 8.44158 1.33594 7.99998C1.33594 7.55831 1.69135 7.20291 2.40217 6.49209C2.82874 6.06553 3.02679 5.64283 3.02679 5.03469C3.02679 4.50708 2.92426 3.75474 3.33594 3.33961C3.75089 2.92117 4.50634 3.02415 5.03732 3.02415C5.64545 3.02415 6.06815 2.82611 6.4947 2.39956C7.20554 1.68873 7.56094 1.33331 8.0026 1.33331C8.44427 1.33331 8.79967 1.68873 9.51047 2.39956C9.93694 2.82603 10.3596 3.02415 10.9679 3.02415C11.4955 3.02415 12.2479 2.92163 12.663 3.33331C13.0814 3.74827 12.9784 4.50371 12.9784 5.03469C12.9784 5.7057 13.1252 6.01423 13.603 6.49209C14.3139 7.20291 14.6693 7.55831 14.6693 7.99998C14.6693 8.44158 14.3139 8.79705 13.603 9.50785C13.1251 9.98571 12.9784 10.2942 12.9784 10.9652C12.9784 11.4962 13.0814 12.2517 12.6629 12.6666Z" stroke={`url(#bg0-${i})`}/>
                    <path d="M6 8.59525C6 8.59525 6.8 9.02978 7.2 9.66665C7.2 9.66665 8.4 7.16665 10 6.33331" stroke={`url(#bg1-${i})`}/>
                  </svg>
                  <span className="text-gray-300 text-[13px] font-medium">{badge}</span>
                </div>
              ))}
            </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Hero main content - split layout */}
        <div className="container mx-auto pt-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[540px]">
            {/* Left side - Text content */}
            <div>
              {/* Trust badge */}
              <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-7">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="trustGrad0" x1="14.6654" y1="8.00065" x2="1.33203" y2="8.00065" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                    </linearGradient>
                    <linearGradient id="trustGrad1" x1="10.6654" y1="8.00065" x2="5.33203" y2="8.00065" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                    </linearGradient>
                    <linearGradient id="trustGrad2" x1="14.6654" y1="8.5" x2="1.33203" y2="8.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                    </linearGradient>
                  </defs>
                  <path d="M7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z" stroke="url(#trustGrad0)" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.9987 1.33398C6.28685 3.13142 5.33203 5.51848 5.33203 8.00065C5.33203 10.4828 6.28685 12.8699 7.9987 14.6673C9.71054 12.8699 10.6654 10.4828 10.6654 8.00065C10.6654 5.51848 9.71054 3.13142 7.9987 1.33398Z" stroke="url(#trustGrad1)" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.33203 8H14.6654" stroke="url(#trustGrad2)" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white text-[13px] font-medium">Trusted Accessibility Experts</span>
              </div>
              </ScrollReveal>

              {/* Main heading */}
              <ScrollReveal animation="fade-in-up" delay={300}>
              <h1 className="text-[34px] md:text-[42px] lg:text-[50px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
                Enterprise ADA & WCAG Compliance.{" "}
                <span className="gradient-text">Beyond Automated Scans.</span>
              </h1>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fade-in-up" delay={400}>
              <p className="text-gray-300 text-[17px] leading-[1.7] mb-8 max-w-[540px]">
                Ensure your website meets ADA and WCAG 2.2 standards with expert audits, AI-powered analysis, and continuous accessibility monitoring.
              </p>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal animation="fade-in-up" delay={500}>
              <div className="flex items-center gap-4 mb-10">
                <button className="bg-gradient-to-r from-[#00d4aa] to-[#0088cc] text-white text-[14px] font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#00d4aa]/20">
                  Run Free Quick Scan
                </button>
                <button className="text-white text-[14px] font-medium px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.03] transition-all">
                  Book Expert Audit
                </button>
              </div>
              </ScrollReveal>

              {/* Stats */}
              <ScrollReveal animation="fade-in-up" delay={600}>
              <div className="flex items-center gap-10">
                <div>
                  <div className="text-white text-[36px] font-bold leading-none">99%</div>
                  <div className="text-gray-400 text-[13px] mt-1.5">Client Satisfaction</div>
                </div>
                <div className="w-px h-12" style={{ background: "linear-gradient(180deg, transparent, rgba(0, 212, 170, 0.3), transparent)" }} />
                <div>
                  <div className="text-white text-[36px] font-bold leading-none">120+</div>
                  <div className="text-gray-400 text-[13px] mt-1.5">Websites Protected</div>
                </div>
              </div>
              </ScrollReveal>
            </div>

            {/* Right side - Dashboard image */}
            <ScrollReveal animation="fade-in-right" delay={400} duration={800}>
            <div className="relative">
              {/* Glow behind dashboard */}
              <div className="absolute -inset-8 bg-[#00d4aa]/[0.04] rounded-3xl blur-3xl" />

              <div className="relative">
                {/* Main dashboard image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
                  <Image
                    src="/images/dashboard.png"
                    alt="AccessIQ Dashboard Overview"
                    width={720}
                    height={480}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom spacer for the curved white section overlap */}
        <div className="h-16" />
      </div>
    </section>
  );
};

export default HeroSection;
