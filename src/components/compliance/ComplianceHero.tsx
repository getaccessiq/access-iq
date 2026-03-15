"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "../AnimatedGradient";
import ScrollReveal from "../ScrollReveal";

const complianceStandards = ["ADA", "WCAG 2.1 AA", "Section 508", "EN 301 549"];

const ComplianceHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050b1a]">
      <AnimatedGradient />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[14%] h-[420px] w-[420px] rounded-full bg-[#00d4aa]/10 blur-[120px]" />
        <div className="absolute left-[18%] top-[42%] h-[280px] w-[280px] rounded-full bg-[#00d4aa]/8 blur-[100px]" />
        <div className="absolute right-[-6%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#1d6bff]/10 blur-[150px]" />
        <div className="absolute right-[18%] bottom-[18%] h-[320px] w-[320px] rounded-full bg-[#00d4aa]/6 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto pt-[100px] pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-8 items-center min-h-[620px]">
            {/* LEFT CONTENT */}
            <ScrollReveal animation="fade-in-up" duration={800}>
              <div className="max-w-[680px]">
                {/* ========================= CLEAN COMPLIANCE HERO START ========================= */}
                <div className="inline-flex items-center gap-3 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] px-5 py-3 mb-7 shadow-[0_8px_30px_rgba(0,212,170,0.06)]">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#00d4aa]/30 bg-[#00d4aa]/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L4 6v6c0 5 3.4 9.7 8 10.9 4.6-1.2 8-5.9 8-10.9V6l-8-4z"
                        stroke="#00d4aa"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-[14px] md:text-[15px] font-medium tracking-[-0.01em]">
                    Prevent ADA Lawsuits Before They Happen
                  </span>
                </div>

                <h1 className="text-[38px] md:text-[44px] lg:text-[50px] font-bold leading-[1.08] tracking-[-0.02em] text-white mb-7 max-w-[720px]">
                  ADA &amp; WCAG Compliance
                  <br />
                  Without Legal Risk.
                </h1>

                <p className="text-white/82 text-[18px] md:text-[19px] leading-[1.6] mb-8 max-w-[620px]">
                  Protect your website from ADA lawsuits with expert audits and
                  remediation to ensure WCAG and ADA compliance.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <button className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#00d4aa] to-[#0f8bff] px-8 md:px-10 py-3.5 text-[15px] md:text-[16px] font-semibold text-white shadow-[0_16px_42px_rgba(0,212,170,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(0,212,170,0.34)]">
                    <span className="relative z-10">
                      Book Accessibility Audit
                    </span>
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,transparent_38%,transparent_100%)]" />
                  </button>

                  <button className="rounded-full border border-white/15 px-8 md:px-9 py-3.5 text-[15px] md:text-[16px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.03]">
                    View Sample Report
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-9 text-white/88">
                  <div className="flex h-6 w-6 items-center justify-center shrink-0">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3l9 16H3L12 3z"
                        stroke="#fbbf24"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 9v4"
                        stroke="#fbbf24"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="16.5" r="1" fill="#fbbf24" />
                    </svg>
                  </div>
                  <span className="text-[16px] md:text-[17px] leading-relaxed">
                    Over 4,000 ADA website lawsuits are filed every year in the U.S.
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {complianceStandards.map((badge) => (
                    <div
                      key={badge}
                      className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.02] px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full border border-[#00d4aa]/30 bg-[#00d4aa]/10">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="#00d4aa"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white text-[14px] md:text-[15px] font-medium">
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>
                {/* ========================== CLEAN COMPLIANCE HERO END ========================== */}
              </div>
            </ScrollReveal>

            {/* RIGHT VISUAL */}
            <ScrollReveal animation="fade-in-right" delay={300} duration={800}>
              <div className="relative flex items-center justify-center lg:justify-end min-h-[540px]">
                {/* background glow */}
                <div className="pointer-events-none absolute right-[0%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#67d9ff]/8 blur-[120px]" />
                <div className="pointer-events-none absolute right-[10%] bottom-[8%] h-[260px] w-[820px] rounded-full bg-[#00d4aa]/14 blur-[90px]" />
                <div className="pointer-events-none absolute right-[2%] bottom-[5%] h-[260px] w-[860px] rounded-full bg-[#2b8cff]/18 blur-[90px]" />
                <div className="pointer-events-none absolute right-[10%] bottom-[8%] h-[180px] w-[680px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.42)_0%,rgba(21,137,255,0.24)_38%,rgba(21,137,255,0.10)_58%,transparent_76%)] blur-[12px]" />

                <div className="relative w-full max-w-[1050px]">
                  <Image
                    src="/images/Compliance Page MAckBook.png"
                    alt="Compliance Dashboard"
                    width={1200}
                    height={860}
                    className="relative z-10 w-full h-auto lg:scale-[1.18] origin-center drop-shadow-[0_55px_120px_rgba(0,0,0,0.65)]"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="h-16" />
      </div>
    </section>
  );
};

export default ComplianceHero;