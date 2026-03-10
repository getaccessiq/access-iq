"use client";

import React from "react";
import Image from "next/image";
import LogoMarquee from "./LogoMarquee";
import ScrollReveal from "./ScrollReveal";

const AccessibilitySolutions = () => {
  return (
    <section
      className="relative bg-[#f8f9fb]"
      style={{
        borderRadius: "24px 24px 0 0",
        marginTop: "-24px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Company logos - infinite scroll marquee */}
      <div className="pt-10 pb-8">
        <LogoMarquee />
      </div>

      {/* Divider */}
      <div className="container mx-auto">
        <div className="h-px bg-gray-200" />
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto">
          {/* Section Header */}
          <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#0b0f1a] leading-tight">
              Accessibility Solutions for
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight mt-1">
              <span className="gradient-text">Enterprise Teams</span>
            </h2>
          </div>
          </ScrollReveal>

          {/* Process Steps Bar - inside a card */}
          <ScrollReveal animation="fade-in-up" delay={200}>
          <div className="flex justify-center mb-20">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white border border-gray-200 shadow-sm flex-wrap justify-center">
              {[
                { label: "Scan" },
                { label: "Audit" },
                { label: "Fix" },
                { label: "Monitor" },
                { label: "Certify" },
              ].map((step, i) => (
                <React.Fragment key={step.label}>
                  <div className="flex items-center gap-1.5">
                    {step.label === "Scan" && (
                      /* 03.svg - search/magnifier */
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="scanGrad" x1="1.25006" y1="12" x2="22.75" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                          </linearGradient>
                        </defs>
                        <path d="M11.0001 1.25C5.61534 1.25007 1.25006 5.61527 1.25006 11C1.25006 16.3847 5.61534 20.7499 11.0001 20.75C13.4226 20.75 15.6367 19.8638 17.3419 18.4014L21.4698 22.5303C21.7627 22.8231 22.2374 22.8231 22.5303 22.5303C22.8232 22.2374 22.8232 21.7626 22.5303 21.4697L18.4024 17.3408C19.8644 15.6357 20.7501 13.4221 20.7501 11C20.7501 5.61522 16.3848 1.25 11.0001 1.25ZM11.0001 2.75C15.5564 2.75 19.2501 6.44365 19.2501 11C19.2501 15.5563 15.5564 19.25 11.0001 19.25C6.44377 19.2499 2.75006 15.5563 2.75006 11C2.75006 6.4437 6.44377 2.75007 11.0001 2.75Z" fill="url(#scanGrad)"/>
                      </svg>
                    )}
                    {(step.label === "Audit" || step.label === "Fix" || step.label === "Certify") && (
                      /* 04.svg - checkbox checkmark */
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`checkGrad-${i}`} x1="22.25" y1="12" x2="1.75" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                          </linearGradient>
                        </defs>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.057 1.75C14.248 1.75 15.969 1.75001 17.312 1.93101C18.689 2.11601 19.781 2.50301 20.639 3.36101C21.497 4.21901 21.884 5.31099 22.069 6.68799C22.25 8.03099 22.25 9.75199 22.25 11.943V12.057C22.25 14.248 22.25 15.969 22.069 17.312C21.884 18.689 21.497 19.781 20.639 20.639C19.781 21.497 18.689 21.884 17.312 22.069C15.969 22.25 14.248 22.25 12.057 22.25H11.943C9.75199 22.25 8.03099 22.25 6.68799 22.069C5.31099 21.884 4.21901 21.497 3.36101 20.639C2.50301 19.781 2.11601 18.689 1.93101 17.312C1.75001 15.969 1.75 14.248 1.75 12.057V11.943C1.75 9.75199 1.75001 8.03099 1.93101 6.68799C2.11601 5.31099 2.50301 4.21901 3.36101 3.36101C4.21901 2.50301 5.31099 2.11601 6.68799 1.93101C8.03099 1.75001 9.75199 1.75 11.943 1.75H12.057ZM16.676 8.26299C17.083 8.63599 17.11 9.269 16.737 9.676L11.237 15.676C11.053 15.877 10.794 15.994 10.522 16C10.249 16.006 9.98599 15.9 9.79299 15.707L7.29299 13.207C6.90199 12.817 6.90199 12.183 7.29299 11.793C7.68299 11.402 8.31701 11.402 8.70701 11.793L10.469 13.554L15.263 8.324C15.636 7.917 16.269 7.88999 16.676 8.26299Z" fill={`url(#checkGrad-${i})`}/>
                      </svg>
                    )}
                    {step.label === "Monitor" && (
                      /* 05.svg - chart/monitor */
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="monitorGrad" x1="22.5" y1="12.25" x2="2" y2="12.25" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                          </linearGradient>
                        </defs>
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 4.75C2 3.23122 3.23122 2 4.75 2H19.75C21.2688 2 22.5 3.23122 22.5 4.75V19.75C22.5 21.2688 21.2688 22.5 19.75 22.5H4.75C3.23122 22.5 2 21.2688 2 19.75V4.75ZM17.25 12.5C17.6642 12.5 18 12.8358 18 13.25V18.25C18 18.6642 17.6642 19 17.25 19C16.8358 19 16.5 18.6642 16.5 18.25V13.25C16.5 12.8358 16.8358 12.5 17.25 12.5ZM12.25 14.5C12.6642 14.5 13 14.8358 13 15.25V18.25C13 18.6642 12.6642 19 12.25 19C11.8358 19 11.5 18.6642 11.5 18.25V15.25C11.5 14.8358 11.8358 14.5 12.25 14.5ZM7.25 15.5C7.66421 15.5 8 15.8358 8 16.25V18.25C8 18.6642 7.66421 19 7.25 19C6.83579 19 6.5 18.6642 6.5 18.25V16.25C6.5 15.8358 6.83579 15.5 7.25 15.5ZM15.25 5.5C14.9467 5.5 14.6732 5.68273 14.5571 5.96299C14.441 6.24324 14.5052 6.56583 14.7197 6.78033L15.6808 7.74146C15.2658 8.09829 14.77 8.49013 14.2001 8.88197C12.2782 10.2033 9.54989 11.5 6.25 11.5C5.83579 11.5 5.5 11.8358 5.5 12.25C5.5 12.6642 5.83579 13 6.25 13C9.95011 13 12.9718 11.5467 15.0499 10.118C15.7083 9.66539 16.2757 9.21276 16.7442 8.80488L17.7197 9.78033C17.9342 9.99483 18.2568 10.059 18.537 9.94291C18.8173 9.82682 19 9.55335 19 9.25V6.25C19 5.83579 18.6642 5.5 18.25 5.5H15.25Z" fill="url(#monitorGrad)"/>
                      </svg>
                    )}
                    <span className="text-[#1e293b] text-base font-medium">{step.label}</span>
                  </div>
                  {i < 4 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </React.Fragment>
              ))}
              <div className="w-px h-5 bg-gray-200 mx-1" />
              <button className="text-[#0088cc] text-base font-medium px-5 py-2 rounded-full border border-[#0088cc]/30 hover:bg-[#0088cc]/5 transition-colors">
                View Process
              </button>
            </div>
          </div>
          </ScrollReveal>

          {/* ============ ITEM 1: ADA & WCAG Compliance ============ */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            {/* Left - Text content */}
            <ScrollReveal animation="fade-in-left">
            <div>
              <h3 className="text-[#0b0f1a] text-2xl md:text-3xl lg:text-[32px] font-bold mb-5">
                ADA &amp; WCAG Compliance
              </h3>
              <div className="space-y-3 mb-7">
                {[
                  "Verify WCAG 2.2 AA & ADA Standards",
                  "Reduce Legal Exposure & Risk",
                  "Continues Accessibility Monitoring",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                      <path d="M5 13l4 4L19 7" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-600 text-[16px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-5">
                <button className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
                  Start Free Scan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <a href="#" className="flex items-center gap-1.5 text-[#0088cc] text-sm font-medium hover:underline mb-6">
                View Compliance Report
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="#0088cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              {/* Compliance badges image */}
              <Image
                src="/images/logos/logo.jpg"
                alt="WCAG 2.2, ADA, SCO Compliance Badges"
                width={520}
                height={72}
                className="h-[60px] md:h-[68px] w-auto object-contain"
              />
            </div>
            </ScrollReveal>

            {/* Right - Dashboard image */}
            <ScrollReveal animation="fade-in-right" delay={200}>
            <div className="relative overflow-visible">
              <Image
                src="/images/image-158.png"
                alt="ADA & WCAG Compliance Dashboard"
                width={700}
                height={490}
                className="w-full h-auto rounded-2xl"
              />
              {/* Floating AI badge - half outside, half inside image, top-right corner */}
              <div
                className="absolute z-10 rounded-2xl px-5 py-4 right-5"
                style={{
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  top: "-32px",
                }}
              >
                <div className="text-white text-sm font-medium mb-1">AI Aided Audit</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-3xl font-bold leading-tight">800+</span>
                  <span className="text-white/80 text-xs">Issues<br/>Scanned</span>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* ============ ITEM 2: Reduce Legal Risk ============ */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            {/* Left - Image */}
            <ScrollReveal animation="fade-in-left">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/dashboard-risk.png"
                alt="ADA Risk Level Dashboard"
                width={700}
                height={490}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            </ScrollReveal>

            {/* Right - Text content */}
            <ScrollReveal animation="fade-in-right" delay={200}>
            <div className="order-1 lg:order-2 lg:pl-4">
              <h3 className="text-[#0b0f1a] text-2xl md:text-3xl lg:text-[32px] font-bold mb-5">
                Reduce Legal Risk
              </h3>
              <div className="space-y-3 mb-7">
                {[
                  "Legal-Ready Audit Reports",
                  "Manual Verification by Experts",
                  "Full Audit Trail & Documentation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                      <path d="M5 13l4 4L19 7" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-600 text-[16px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-5">
                <button className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
                  Start Free Scan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <a href="#" className="flex items-center gap-1.5 text-[#0088cc] text-sm font-medium hover:underline">
                Get Compliance Report
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="#0088cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            </ScrollReveal>
          </div>

          {/* ============ ITEM 3: Fast & Reliable Fixes ============ */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Text content */}
            <ScrollReveal animation="fade-in-left">
            <div>
              <h3 className="text-[#0b0f1a] text-2xl md:text-3xl lg:text-[32px] font-bold mb-5">
                Fast &amp; Reliable Fixes
              </h3>
              <div className="space-y-3 mb-7">
                {[
                  "Expert Remediation Guidance",
                  "WCAG-Aligned Code Fixes",
                  "Retest & Certification",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                      <path d="M5 13l4 4L19 7" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-600 text-[16px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-5">
                <button className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
                  View Accessibility Score
                </button>
              </div>
            </div>
            </ScrollReveal>

            {/* Right - Chart image */}
            <ScrollReveal animation="fade-in-right" delay={200}>
            <div className="-mx-4 md:mx-0">
              <Image
                src="/images/fixes-chart.png"
                alt="Accessibility Issues Over Time"
                width={900}
                height={640}
                className="w-full h-auto rounded-none md:rounded-2xl"
              />
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySolutions;
