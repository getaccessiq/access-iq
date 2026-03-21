"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #020408 0%, #040810 30%, #050a12 50%, #040810 70%, #020408 100%)",
      }}
    >
      <div className="container mx-auto">
        <ScrollReveal animation="scale-in" duration={800}>
          <div className="relative">
            <div className="mx-auto max-w-[1180px]">
              <div
                className="group relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_32px_120px_rgba(0,0,0,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, #0c8d88 0%, #117b98 28%, #2b67b7 68%, #4664c8 100%)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.018) 100%)",
                  }}
                />

                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-full"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at 0% 50%, rgba(0,212,170,0.24) 0%, transparent 52%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute right-0 top-0 h-full w-full"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at 100% 0%, rgba(120,150,255,0.18) 0%, transparent 50%)",
                  }}
                />

                <div
                  className="pointer-events-none absolute left-1/2 top-0 h-full w-[60%] -translate-x-1/2"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 28%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 22%, transparent 60%)",
                    filter: "blur(8px)",
                  }}
                />

                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 h-[68%] w-[76%] -translate-x-1/2 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.56) 0%, rgba(255,255,255,0.24) 18%, rgba(255,255,255,0.08) 38%, transparent 68%)",
                    filter: "blur(10px)",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute -right-10 -top-6 md:-right-8 md:-top-4"
                  aria-hidden="true"
                  style={{ opacity: 0.05, transform: "rotate(-24deg)" }}
                >
                  <Image
                    src="/images/favicon-icon.png"
                    alt=""
                    width={220}
                    height={220}
                    className="h-[150px] w-[150px] md:h-[190px] md:w-[190px]"
                  />
                </div>

                <div className="relative z-10 px-6 py-14 text-center md:px-12 md:py-16 lg:px-16 lg:py-20">
                  <div className="mx-auto max-w-[940px]">
                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.45)]"
                        aria-hidden="true"
                      />
                      Verified accessibility reporting
                    </div>

                    <h2 className="mx-auto max-w-[1020px] text-balance text-3xl font-bold leading-[1.01] tracking-[-0.01em] text-white md:text-5xl lg:text-[58px]">
                      Get Your Verified Accessibility Report Today
                    </h2>

                    <p className="mx-auto mt-5 max-w-[780px] text-base leading-relaxed text-white/85 md:text-lg">
                      Ensure your site is WCAG and ADA aligned, reduce legal exposure,
                      and get a clear path to remediation with a report your team can act on.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <button
                        type="button"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0b1a2a] shadow-[0_14px_40px_rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white/30"
                        aria-label="Start your audit"
                      >
                        Start Your Audit
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7v10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/24 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-white/20"
                        aria-label="View sample report"
                      >
                        View Sample Report
                      </button>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/72">
                      <span>No credit card required</span>
                      <span
                        className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block"
                        aria-hidden="true"
                      />
                      <span>Clear remediation guidance</span>
                      <span
                        className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block"
                        aria-hidden="true"
                      />
                      <span>Built for compliance-focused teams</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute bottom-0 left-0 h-[62px] w-full"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.55) 0%, rgba(0,180,216,0.22) 18%, rgba(0,136,204,0.08) 40%, transparent 78%)",
                  filter: "blur(14px)",
                  transform: "translateY(108%)",
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;