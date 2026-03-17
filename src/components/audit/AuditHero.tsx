"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedGradient from "../AnimatedGradient";
import ScrollReveal from "../ScrollReveal";

const AuditHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#06101a]">
      <AnimatedGradient />

      {/* soft ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#18d4c0]/10 blur-[120px]" />
        <div className="absolute right-[-6%] top-[14%] h-[440px] w-[440px] rounded-full bg-[#229dff]/10 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 pt-[124px] md:pt-[136px] lg:pt-[146px] pb-12 md:pb-14 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10 min-h-[500px]">
            {/* Left side */}
            <div className="max-w-[590px]">
              <ScrollReveal animation="fade-in-up" delay={120}>
                <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#1d8fb4]/35 bg-[#0d2235]/65 px-4 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <defs>
                      <linearGradient
                        id="heroAuditGradA"
                        x1="1.5"
                        y1="1.5"
                        x2="14.5"
                        y2="14.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#19d7c3" />
                        <stop offset="1" stopColor="#28a9ff" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M8 1.5L13 3.25V7C13 10.15 10.95 12.95 8 14C5.05 12.95 3 10.15 3 7V3.25L8 1.5Z"
                      stroke="url(#heroAuditGradA)"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.6 8.1L7.2 9.7L10.6 6.3"
                      stroke="url(#heroAuditGradA)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-[13px] font-semibold tracking-[-0.01em] text-white">
                    Expert-Led Accessibility Audit
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={200}>
                <h1 className="mb-6 text-[42px] font-semibold leading-[0.94] tracking-[-0.05em] text-white md:text-[56px] xl:text-[68px]">
                  Accessibility Audits
                  <br />
                  Reduce Legal Risk
                  <br />
                  <span className="bg-gradient-to-r from-[#1fd8c4] via-[#22cfff] to-[#2f98ff] bg-clip-text text-transparent">
                    Prove Compliance.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={280}>
                <p className="mb-8 max-w-[560px] text-[16px] leading-[1.65] text-white/80 md:text-[18px]">
                  Human-verified compliance reviews with clear documentation, standards mapping, issue evidence, and actionable remediation guidance for your legal and engineering teams.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={360}>
                <div className="mb-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    className="inline-flex min-w-[250px] items-center justify-center rounded-full bg-gradient-to-r from-[#22d9c9] to-[#25beff] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_16px_40px_rgba(36,191,255,0.22)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_22px_48px_rgba(36,191,255,0.30)]"
                  >
                    Book Expert Audit
                  </Link>

                  <Link
                    href="/sample-report"
                    className="inline-flex min-w-[230px] items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] hover:scale-[1.015]"
                  >
                    View Sample Report
                  </Link>
                </div>
              </ScrollReveal>

            
            </div>

            {/* Right side */}
            <ScrollReveal animation="fade-in-right" delay={240} duration={800}>
              <div className="relative mx-auto w-full max-w-[690px]">
                <div className="absolute inset-0 scale-[0.96] rounded-[34px] bg-[#24c7ff]/8 blur-[90px]" />
                <div className="absolute -bottom-8 left-1/2 h-[70px] w-[70%] -translate-x-1/2 bg-[#1fc5ff]/20 blur-[55px]" />

                <div className="relative rounded-[30px] border border-[#2aaeff]/30 bg-[linear-gradient(180deg,rgba(11,20,35,0.96),rgba(10,18,32,0.86))] p-[10px] shadow-[0_28px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(34,207,255,0.06)]">
                  <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
                    <Image
                      src="/images/Dashboard_i3484.png"
                      alt="AccessIQ Audit Report Overview"
                      width={1600}
                      height={1100}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            
          </div>

          <ScrollReveal animation="fade-in-up" delay={440}>
                            <div
                              className="flex items-center gap-3"
                              aria-label="Rated 4.9 out of 5 by accessibility teams"
                            >
                              <div
                                className="flex items-center gap-1 text-[20px] leading-none text-[#ffbf1f] drop-shadow-[0_0_12px_rgba(255,191,31,0.18)]"
                                aria-hidden="true"
                              >
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                              </div>
            
                              <p className="text-[15px] font-medium text-white/90 md:text-[16px]">
                                Trusted by <span className="font-semibold text-white">compliance</span> teams worldwide

                              </p>
                            </div>
                          </ScrollReveal>
        </div>

        {/* Bottom info strip */}
        <div className="mt-12 md:mt-16 lg:mt-8 border-t border-white/[0.06]">
          <div className="mx-auto max-w-[1400px] px-4 py-4 md:px-6 md:py-5 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-4">
              <p className="text-[15px] font-medium text-white/80 md:text-[16px]">
                Human-verified <span className="font-semibold text-[#25c8ff]">WCAG</span>{" "}
                accessibility audits
              </p>

              <div aria-hidden="true" className="hidden h-4 w-px bg-white/10 md:block" />

              <p className="flex flex-wrap items-center justify-center gap-3 text-[12px] font-medium text-white/45 md:text-[13px]">
                <span>ADA</span>
                <span aria-hidden="true">•</span>
                <span>WCAG</span>
                <span aria-hidden="true">•</span>
                <span>Section 508</span>
                <span aria-hidden="true">•</span>
                <span>EN 301 549</span>
              </p>
            </div>
          </div>
        </div>

        {/* extra dark spacer before next white section */}
        <div className="h-12 md:h-16 lg:h-20 bg-[#06101a]" />
      </div>
    </section>
  );
};

export default AuditHero;