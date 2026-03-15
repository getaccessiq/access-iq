"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "./AnimatedGradient";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#06101a]">
      <AnimatedGradient />

      <div className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 pt-[145px] md:pt-[160px] lg:pt-[175px] pb-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[520px]">
            {/* Left side */}
            <div className="max-w-[560px]">
              <ScrollReveal animation="fade-in-up" delay={180}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1c93b3]/40 bg-[#0e2234]/70 mb-6">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="trustGrad0"
                        x1="14.6654"
                        y1="8.00065"
                        x2="1.33203"
                        y2="8.00065"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2865C7" />
                        <stop offset="1" stopColor="#24A9AC" />
                      </linearGradient>
                      <linearGradient
                        id="trustGrad1"
                        x1="10.6654"
                        y1="8.00065"
                        x2="5.33203"
                        y2="8.00065"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2865C7" />
                        <stop offset="1" stopColor="#24A9AC" />
                      </linearGradient>
                      <linearGradient
                        id="trustGrad2"
                        x1="14.6654"
                        y1="8.5"
                        x2="1.33203"
                        y2="8.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2865C7" />
                        <stop offset="1" stopColor="#24A9AC" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z"
                      stroke="url(#trustGrad0)"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.9987 1.33398C6.28685 3.13142 5.33203 5.51848 5.33203 8.00065C5.33203 10.4828 6.28685 12.8699 7.9987 14.6673C9.71054 12.8699 10.6654 10.4828 10.6654 8.00065C10.6654 5.51848 9.71054 3.13142 7.9987 1.33398Z"
                      stroke="url(#trustGrad1)"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.33203 8H14.6654"
                      stroke="url(#trustGrad2)"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-[13px] font-semibold">
                    Trusted Accessibility Experts
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={260}>
                <h1 className="text-white font-semibold tracking-[-0.04em] leading-[0.96] text-[40px] md:text-[52px] xl:text-[64px] mb-5">
                  Enterprise WCAG
                  <br />
                  & ADA Compliance{" "}
                  <span className="bg-gradient-to-r from-[#1fd8c4] via-[#20c7ff] to-[#2b9dff] bg-clip-text text-transparent">
                    Platform.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={340}>
                <p className="text-white/78 text-[16px] md:text-[18px] leading-[1.6] mb-8 max-w-[540px]">
                  Automated monitoring, expert audits, and AI-powered tools for
                  continuous accessibility compliance. Ensure your website meets
                  the latest ADA & WCAG standards.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={420}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
                  <button
                    onClick={() => (window.location.href = "https://access-iq.vercel.app/scan")}
                    className="bg-gradient-to-r from-[#22d9c9] to-[#25beff] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-[0_12px_35px_rgba(36,191,255,0.25)] hover:opacity-95 transition-opacity"
                  >
                    Run Free Quick Scan
                  </button>

                  <button className="text-white text-[15px] font-semibold px-7 py-3.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.03] transition-all">
                    Book Expert Audit
                  </button>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={500}>
                <div>
                  <p className="text-white/72 text-[14px] font-medium mb-4">
                    Trusted by 1,000+ organizations
                  </p>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                    <span className="text-white/90 text-[17px] font-semibold">Shopify</span>
                    <span className="text-white/90 text-[17px] font-semibold italic">KPMG</span>
                    <span className="text-white/90 text-[17px] font-semibold">
                      Deloitte <span className="font-normal text-[15px]">Digital</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side */}
            <ScrollReveal animation="fade-in-right" delay={300} duration={800}>
              <div className="relative mx-auto w-full max-w-[640px]">
                <div className="absolute inset-0 bg-[#20c7ff]/10 blur-[100px] rounded-full scale-90" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-[70px] bg-[#1fc5ff]/10 blur-[60px]" />

                <div className="relative rounded-[24px] border border-white/10 bg-[#0c1627]/70 p-[8px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <div className="overflow-hidden rounded-[18px] border border-white/10 bg-white">
                    <Image
                      src="/images/premium-hero-dashboard.png"
                      alt="AccessIQ Dashboard Overview"
                      width={1400}
                      height={980}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 py-5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center">
              <span className="text-white/78 text-[16px] font-medium">
                Over <span className="text-[#25c8ff] font-semibold">20 million</span> pages scanned
              </span>

              <div className="hidden md:block w-px h-4 bg-white/10" />

              <div className="flex flex-wrap items-center justify-center gap-3 text-[12px] font-medium text-white/45">
                <span>ADA</span>
                <span>|</span>
                <span>WCAG</span>
                <span>|</span>
                <span>Section 508</span>
                <span>|</span>
                <span>EN 301 549</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-6 md:h-8" />
      </div>
    </section>
  );
};

export default HeroSection;