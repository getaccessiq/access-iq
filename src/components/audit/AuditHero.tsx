"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "../AnimatedGradient";
import ScrollReveal from "../ScrollReveal";

const AuditHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Animated gradient background */}
      <AnimatedGradient />

      {/* Content layer */}
      <div className="relative z-10">
        {/* Hero main content - split layout */}
        <div className="container mx-auto pt-[120px] pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-6 items-center min-h-[540px]">
            {/* Left side - Text content */}
            <ScrollReveal animation="fade-in-up" duration={800}>
            <div>
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-7">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="auditBadgeGrad0" x1="14.6654" y1="8.00065" x2="1.33203" y2="8.00065" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                    </linearGradient>
                    <linearGradient id="auditBadgeGrad1" x1="10.6654" y1="8.00065" x2="5.33203" y2="8.00065" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                    </linearGradient>
                    <linearGradient id="auditBadgeGrad2" x1="14.6654" y1="8.5" x2="1.33203" y2="8.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                    </linearGradient>
                  </defs>
                  <path d="M7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z" stroke="url(#auditBadgeGrad0)" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.9987 1.33398C6.28685 3.13142 5.33203 5.51848 5.33203 8.00065C5.33203 10.4828 6.28685 12.8699 7.9987 14.6673C9.71054 12.8699 10.6654 10.4828 10.6654 8.00065C10.6654 5.51848 9.71054 3.13142 7.9987 1.33398Z" stroke="url(#auditBadgeGrad1)" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.33203 8H14.6654" stroke="url(#auditBadgeGrad2)" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white text-[13px] font-medium">
                  Expert-Led Accessibility Audit
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-[34px] md:text-[42px] lg:text-[50px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
                Expert Accessibility Audit.
                <br />
                Verified. Defensible.
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-[17px] leading-[1.7] mb-8 max-w-[540px]">
                Human-led WCAG 2.1 AA audits with verified reports, legal-ready
                evidence, and a remediation roadmap your engineering team can
                trust.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <button className="bg-gradient-to-r from-[#00d4aa] to-[#0088cc] text-white text-[14px] font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#00d4aa]/20">
                  Book Expert Audit
                </button>
                <button className="text-white text-[14px] font-medium px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.03] transition-all">
                  View Sample Report
                </button>
              </div>

              {/* Compliance badges */}
              <div className="flex items-center gap-6 flex-wrap mb-6">
                {[
                  "ADA",
                  "WCAG 2.1 AA",
                  "Section 508",
                  "EN 301 549",
                ].map((badge, i) => (
                  <div key={badge} className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`abg0-${i}`} x1="14.6693" y1="7.99998" x2="1.33594" y2="7.99998" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2865C7"/>
                          <stop offset="1" stopColor="#24A9AC"/>
                        </linearGradient>
                        <linearGradient id={`abg1-${i}`} x1="10" y1="7.99998" x2="6" y2="7.99998" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2865C7"/>
                          <stop offset="1" stopColor="#24A9AC"/>
                        </linearGradient>
                      </defs>
                      <path d="M12.6629 12.6666H12.6693M12.6629 12.6666C12.2478 13.0783 11.4955 12.9758 10.9679 12.9758C10.3203 12.9758 10.0084 13.1024 9.5462 13.5646C9.15267 13.9582 8.62507 14.6666 8.0026 14.6666C7.38014 14.6666 6.85254 13.9582 6.45898 13.5646C5.99679 13.1024 5.68493 12.9758 5.03731 12.9758C4.50972 12.9758 3.75739 13.0783 3.34226 12.6666C2.92381 12.2517 3.02679 11.4962 3.02679 10.9652C3.02679 10.2942 2.88004 9.98571 2.40219 9.50785C1.69136 8.79705 1.33595 8.44158 1.33594 7.99998C1.33594 7.55831 1.69135 7.20291 2.40217 6.49209C2.82874 6.06553 3.02679 5.64283 3.02679 5.03469C3.02679 4.50708 2.92426 3.75474 3.33594 3.33961C3.75089 2.92117 4.50634 3.02415 5.03732 3.02415C5.64545 3.02415 6.06815 2.82611 6.4947 2.39956C7.20554 1.68873 7.56094 1.33331 8.0026 1.33331C8.44427 1.33331 8.79967 1.68873 9.51047 2.39956C9.93694 2.82603 10.3596 3.02415 10.9679 3.02415C11.4955 3.02415 12.2479 2.92163 12.663 3.33331C13.0814 3.74827 12.9784 4.50371 12.9784 5.03469C12.9784 5.7057 13.1252 6.01423 13.603 6.49209C14.3139 7.20291 14.6693 7.55831 14.6693 7.99998C14.6693 8.44158 14.3139 8.79705 13.603 9.50785C13.1251 9.98571 12.9784 10.2942 12.9784 10.9652C12.9784 11.4962 13.0814 12.2517 12.6629 12.6666Z" stroke={`url(#abg0-${i})`}/>
                      <path d="M6 8.59525C6 8.59525 6.8 9.02978 7.2 9.66665C7.2 9.66665 8.4 7.16665 10 6.33331" stroke={`url(#abg1-${i})`}/>
                    </svg>
                    <span className="text-gray-300 text-[13px] font-medium">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats row - checkmark badges */}
              <div className="flex items-center gap-6 flex-wrap">
                {[
                  "Legal-Ready Reports",
                  "Verified Experts",
                  "Manual Verification",
                ].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.057 1.75C14.248 1.75 15.969 1.75001 17.312 1.93101C18.689 2.11601 19.781 2.50301 20.639 3.36101C21.497 4.21901 21.884 5.31099 22.069 6.68799C22.25 8.03099 22.25 9.75199 22.25 11.943V12.057C22.25 14.248 22.25 15.969 22.069 17.312C21.884 18.689 21.497 19.781 20.639 20.639C19.781 21.497 18.689 21.884 17.312 22.069C15.969 22.25 14.248 22.25 12.057 22.25H11.943C9.75199 22.25 8.03099 22.25 6.68799 22.069C5.31099 21.884 4.21901 21.497 3.36101 20.639C2.50301 19.781 2.11601 18.689 1.93101 17.312C1.75001 15.969 1.75 14.248 1.75 12.057V11.943C1.75 9.75199 1.75001 8.03099 1.93101 6.68799C2.11601 5.31099 2.50301 4.21901 3.36101 3.36101C4.21901 2.50301 5.31099 2.11601 6.68799 1.93101C8.03099 1.75001 9.75199 1.75 11.943 1.75H12.057ZM16.676 8.26299C17.083 8.63599 17.11 9.269 16.737 9.676L11.237 15.676C11.053 15.877 10.794 15.994 10.522 16C10.249 16.006 9.98599 15.9 9.79299 15.707L7.29299 13.207C6.90199 12.817 6.90199 12.183 7.29299 11.793C7.68299 11.402 8.31701 11.402 8.70701 11.793L10.469 13.554L15.263 8.324C15.636 7.917 16.269 7.88999 16.676 8.26299Z" fill="white"/>
                    </svg>
                    <span className="text-gray-300 text-[13px] font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>

            {/* Right side - Dashboard image */}
            <ScrollReveal animation="fade-in-right" delay={300} duration={800}>
            <div className="relative">
              <Image
                src="/images/Compliance Page MAckBook.png"
                alt="AccessIQ Audit Dashboard"
                width={1200}
                height={860}
                className="w-full h-auto lg:scale-125 origin-center"
                priority
              />
            </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom spacer for the curved white section overlap */}
        <div className="h-4" />
      </div>
    </section>
  );
};

export default AuditHero;
