"use client";

import React, { useState } from "react";
import Image from "next/image";
import AnimatedGradient from "../AnimatedGradient";
import ScrollReveal from "../ScrollReveal";

interface ScanHeroProps {
  onScan: (url: string) => void;
  error?: string;
}

const ScanHero = ({ onScan, error }: ScanHeroProps) => {
  const [url, setUrl] = useState("");
  const [validationError, setValidationError] = useState("");
  const [showMethodology, setShowMethodology] = useState(false);

  const validateAndSubmit = () => {
    let trimmed = url.trim();
    if (!trimmed) {
      setValidationError("Please enter a website URL.");
      return;
    }
    // Auto-prepend https:// if no protocol present
    if (!/^https?:\/\//i.test(trimmed)) {
      trimmed = "https://" + trimmed;
    }
    // Validate it's a real URL with a hostname containing a dot (any TLD)
    try {
      const parsed = new URL(trimmed);
      if (!parsed.hostname.includes(".")) {
        setValidationError("Please enter a valid domain (e.g. example.com)");
        return;
      }
    } catch {
      setValidationError("Please enter a valid domain (e.g. example.com)");
      return;
    }
    setValidationError("");
    onScan(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") validateAndSubmit();
  };

  const displayError = validationError || error;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Animated gradient background */}
      <AnimatedGradient />

      {/* Grid pattern — visible in center, fades at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-[88px] pb-20">

        {/* Badge */}
        <ScrollReveal animation="fade-in-up" delay={100}>
          <div className="inline-flex rounded-full p-[1px] mb-7" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full" style={{ background: "#080c18" }}>
              <Image
                src="/images/Group 1.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
              <span className="text-white text-[13px] font-medium">Trusted Accessibility Experts</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal animation="fade-in-up" delay={200}>
          <h1 className="text-[40px] md:text-[54px] lg:text-[64px] font-bold leading-[1.1] text-white mb-5 tracking-tight">
            Is your website accessible?<br />Find out in real time
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal animation="fade-in-up" delay={300}>
          <p className="text-gray-200 text-[15px] md:text-[16px] leading-[1.75] mb-10 max-w-[680px]">
            Every click counts. But not everyone can click. Get your accessibility score instantly and discover how inaccessible design could be costing you users and revenue.
          </p>
        </ScrollReveal>

        {/* Combined input + button */}
        <ScrollReveal animation="fade-in-up" delay={400} className="w-full flex justify-center px-4">
          <div className="w-full max-w-[80%] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[540px] mb-3">
            <div className="relative w-full">
              {/* Glow behind the box */}
              <div
                className="absolute -inset-[6px] rounded-full pointer-events-none z-0"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,170,0.35), rgba(0,136,204,0.35))",
                  filter: "blur(14px)",
                }}
              />
              {/* Input + button container — stacks on mobile */}
              <div
                className="relative z-10 flex flex-col sm:flex-row sm:items-center rounded-2xl sm:rounded-full"
                style={{
                  background: "rgba(8, 12, 24, 0.88)",
                  border: displayError ? "1px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <input
                  type="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (validationError) setValidationError("");
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your website URL"
                  className="flex-1 min-w-0 px-7 py-4 bg-transparent text-white text-[14px] outline-none placeholder-gray-500"
                />
                <div className="p-2 flex-shrink-0">
                  <button
                    onClick={validateAndSubmit}
                    className="w-full sm:w-auto text-white text-[14px] font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v4M7 9v4M1 7h4M9 7h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Start Free Scan
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Error message */}
            {displayError && (
              <p className="mt-2 text-red-400 text-[13px] text-center">{displayError}</p>
            )}
          </div>
        </ScrollReveal>

        {/* Sub-link toggle */}
        <ScrollReveal animation="fade-in-up" delay={500} className="w-full flex flex-col items-center px-4">
          <button
            onClick={() => setShowMethodology((v) => !v)}
            className="text-gray-200 hover:text-white transition-colors flex items-center gap-1.5 mb-5"
          >
            <span className="text-[15px] md:text-[16px]">What&apos;s included in the analysis?</span>
            <svg
              width="10" height="7" viewBox="0 0 10 7" fill="none"
              className="transition-transform duration-300"
              style={{ transform: showMethodology ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Methodology panel — animated */}
          <div
            className="w-full max-w-[680px] overflow-hidden"
            style={{
              maxHeight: showMethodology ? "600px" : "0px",
              opacity: showMethodology ? 1 : 0,
              marginBottom: showMethodology ? "16px" : "0px",
              transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease, margin-bottom 0.45s ease",
            }}
          >
            <div className="rounded-2xl p-[1.5px]" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
              <div className="rounded-2xl bg-white px-7 py-7">
                {/* Header — slides in */}
                <p
                  className="text-gray-500 text-[15px] font-medium mb-2"
                  style={{
                    transform: showMethodology ? "translateY(0)" : "translateY(-8px)",
                    opacity: showMethodology ? 1 : 0,
                    transition: "transform 0.35s ease 0.08s, opacity 0.35s ease 0.08s",
                  }}
                >
                  Scoring methodology
                </p>
                <h3
                  className="text-[#0b0f1a] text-[22px] font-bold mb-2"
                  style={{
                    transform: showMethodology ? "translateY(0)" : "translateY(-8px)",
                    opacity: showMethodology ? 1 : 0,
                    transition: "transform 0.35s ease 0.12s, opacity 0.35s ease 0.12s",
                  }}
                >
                  How we calculate your accessibility score
                </h3>
                <p
                  className="text-[14px] mb-5"
                  style={{
                    color: "#00a88c",
                    transform: showMethodology ? "translateY(0)" : "translateY(-8px)",
                    opacity: showMethodology ? 1 : 0,
                    transition: "transform 0.35s ease 0.16s, opacity 0.35s ease 0.16s",
                  }}
                >
                  We analyze your site according to WCAG 2.1 level AA standards, evaluating:
                </p>

                {/* 2×3 grid — each item staggers in */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Color contrast and readability",
                    "Form labels and error handling",
                    "Semantic structure and ARIA Labels",
                    "Keyboard navigation and focus indicators",
                    "Alternative text for images",
                    "Screen reader compatibility",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl px-4 py-3"
                      style={{
                        background: "#f4f6f9",
                        transform: showMethodology ? "translateY(0)" : "translateY(10px)",
                        opacity: showMethodology ? 1 : 0,
                        transition: `transform 0.35s ease ${0.2 + i * 0.05}s, opacity 0.35s ease ${0.2 + i * 0.05}s`,
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-[2px]">
                        <path d="M2 7l3.5 3.5L12 3" stroke="#00d4aa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[#0b0f1a] text-[13px] text-left">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ScanHero;