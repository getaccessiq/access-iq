"use client";

import React from "react";
import AnimatedGradient from "../AnimatedGradient";

const PricingHero = () => {
  return (
    <div className="relative overflow-hidden bg-[#0a0e1a]">
      <AnimatedGradient />

      <div className="relative z-10">
        <div className="pt-[120px] pb-16">
          <div className="container mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-7">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                  fill="none"
                  stroke="#00d4aa"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#00d4aa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white text-[13px] font-medium">
                Transparent Pricing
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[34px] md:text-[42px] lg:text-[50px] font-bold leading-[1.15] text-white mb-6 tracking-tight max-w-3xl mx-auto">
              Simple,Transparent Pricing{" "}
              {/*<br className="hidden md:block" />
              Less Than One Lawsuit*/}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Expert guidance through every accessibility regulation — from
              federal contracts to Title III lawsuits. Achieve sustainable
              compliance with comprehensive standards coverage.
            </p>

            {/* Feature badges */}
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              {[
                { icon: "manual", label: "Manual Testing" },
                { icon: "users", label: "Real User Scenarios" },
                { icon: "overlay", label: "No Overlays" },
                { icon: "false", label: "No False Scenarios" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,212,170,0.15), rgba(0,136,204,0.15))",
                      border: "1px solid rgba(0,212,170,0.2)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#00d4aa"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
