"use client";

import React from "react";
import ScrollReveal from "../ScrollReveal";

const WhyAccessibility = () => {
  return (
    <section
      id="why-accessibility"
      className="relative bg-white"
      style={{
        borderRadius: "24px 24px 0 0",
        marginTop: "-24px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="py-20 md:py-28">
        <div className="container mx-auto">
          {/* Header */}
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#0b0f1a] leading-tight mb-4">
                Why accessibility is so vital
              </h2>
              <p className="text-gray-400 text-base whitespace-nowrap">
                We provide, ingover pod and assstive technology compliance status.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards */}
          <ScrollReveal animation="fade-in-up" delay={200} stagger>
            <div className="grid md:grid-cols-3 gap-6">

              {/* Card 1 — 25% Gauge */}
              <div className="rounded-2xl p-6 border border-gray-100" style={{ background: "#f4f6f9" }}>
                {/* Gauge chart area */}
                <div className="flex items-center justify-center mb-6 h-[140px]">
                  <div className="relative">
                    <svg width="180" height="110" viewBox="0 0 180 110" fill="none">
                      {/* Background arc */}
                      <path
                        d="M 20 100 A 70 70 0 0 1 160 100"
                        stroke="#e5e7eb"
                        strokeWidth="14"
                        fill="none"
                        strokeLinecap="round"
                      />
                      {/* Filled arc — 25% of semicircle */}
                      <path
                        d="M 20 100 A 70 70 0 0 1 69 36"
                        stroke="url(#gaugeGrad)"
                        strokeWidth="14"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gaugeGrad" x1="20" y1="100" x2="160" y2="100" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0088cc" />
                          <stop offset="1" stopColor="#00d4aa" />
                        </linearGradient>
                      </defs>
                      {/* Labels inside */}
                      <text x="90" y="78" textAnchor="middle" fill="#9ca3af" fontSize="12" fontFamily="Inter, sans-serif">Of users</text>
                      <text x="90" y="100" textAnchor="middle" fill="#111827" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif">25%</text>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[#0b0f1a] text-xl font-bold mb-3">Increase Reach</h3>
                <p className="text-gray-500 text-sm leading-relaxed">One in four people live with some form of disability. Don&apos;t leave them behind.</p>
              </div>

              {/* Card 2 — 2.5x Line chart */}
              <div className="rounded-2xl p-6 border border-gray-100" style={{ background: "#f4f6f9" }}>
                {/* Chart area */}
                <div className="relative mb-6 h-[140px] flex items-center justify-center">
                  {/* Background chart */}
                  <svg width="100%" height="110" viewBox="0 0 300 110" preserveAspectRatio="none" fill="none" className="absolute inset-0">
                    <polyline
                      points="0,80 40,60 80,70 120,45 160,55 200,35 240,50 300,25"
                      stroke="#4ade80"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  {/* Floating mini card */}
                  <div className="relative z-10 bg-white rounded-xl shadow-md px-5 py-3 text-left">
                    <div className="text-[#0b0f1a] text-2xl font-bold leading-none mb-1">2.5x</div>
                    <div className="text-gray-400 text-xs">higher engagement</div>
                  </div>
                </div>
                <h3 className="text-[#0b0f1a] text-xl font-bold mb-3">Better UX for All</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Accessible design makes your site more usable for everyone, not just people with disabilities.</p>
              </div>

              {/* Card 3 — 100% Area chart */}
              <div className="rounded-2xl p-6 border border-gray-100" style={{ background: "#f4f6f9" }}>
                {/* Chart area */}
                <div className="relative mb-6 h-[140px] overflow-hidden rounded-xl">
                  {/* Area chart */}
                  <svg width="100%" height="140" viewBox="0 0 300 140" preserveAspectRatio="none" fill="none" className="absolute inset-0">
                    <path
                      d="M0,110 C40,100 80,90 120,70 C160,50 200,30 240,20 C260,15 280,10 300,5 L300,140 L0,140 Z"
                      fill="url(#areaFill)"
                      opacity="0.4"
                    />
                    <path
                      d="M0,110 C40,100 80,90 120,70 C160,50 200,30 240,20 C260,15 280,10 300,5"
                      stroke="url(#areaStroke)"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="140" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00d4aa" />
                        <stop offset="1" stopColor="#00d4aa" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="areaStroke" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00d4aa" />
                        <stop offset="1" stopColor="#0088cc" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Labels overlay */}
                  <div className="relative z-10 p-4">
                    <div className="text-gray-400 text-xs mb-1">inclusive</div>
                    <div className="text-[#0b0f1a] text-2xl font-bold">100%</div>
                  </div>
                </div>
                <h3 className="text-[#0b0f1a] text-xl font-bold mb-3">Stronger Brand</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Inclusive design helps you be found by more people, more often.</p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyAccessibility;