"use client";

import React, { useState } from "react";
import AnimatedGradient from "../AnimatedGradient";
import ScrollReveal from "../ScrollReveal";

interface ScanHeroProps {
  onScan: (url: string) => void;
  error?: string;
}

const methodologyItems = [
  "Color contrast and readability",
  "Form labels and error handling",
  "Semantic structure and ARIA usage",
  "Keyboard navigation and focus visibility",
  "Alternative text for meaningful images",
  "Screen reader compatibility signals",
] as const;

export default function ScanHero({ onScan, error }: ScanHeroProps) {
  const [url, setUrl] = useState("");
  const [validationError, setValidationError] = useState("");
  const [showMethodology, setShowMethodology] = useState(false);

  const displayError = validationError || error;

  const validateUrl = (value: string): string | null => {
    let trimmed = value.trim();

    if (!trimmed) {
      return "Please enter a website URL.";
    }

    if (!/^https?:\/\//i.test(trimmed)) {
      trimmed = `https://${trimmed}`;
    }

    try {
      const parsed = new URL(trimmed);
      if (!parsed.hostname || !parsed.hostname.includes(".")) {
        return "Please enter a valid domain, for example example.com.";
      }
      return null;
    } catch {
      return "Please enter a valid domain, for example example.com.";
    }
  };

  const getNormalizedUrl = (value: string): string => {
    const trimmed = value.trim();
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  };

  const handleSubmit = () => {
    const errorMessage = validateUrl(url);

    if (errorMessage) {
      setValidationError(errorMessage);
      return;
    }

    setValidationError("");
    onScan(getNormalizedUrl(url));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (validationError) {
      setValidationError("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleToggleMethodology = () => {
    setShowMethodology((prev) => !prev);
  };

  return (
    <section
      className="relative overflow-hidden bg-[#06101a]"
      aria-labelledby="scan-hero-heading"
    >
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        <AnimatedGradient />
      </div>

      {/* Ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,20,0.14)_0%,rgba(2,8,20,0)_26%,rgba(2,8,20,0.18)_100%)]" />
        <div className="absolute left-[-10%] top-[4%] h-[430px] w-[430px] rounded-full bg-[#18d4c0]/10 blur-[125px]" />
        <div className="absolute right-[-8%] top-[8%] h-[450px] w-[450px] rounded-full bg-[#229dff]/10 blur-[145px]" />
        <div className="absolute left-1/2 top-[4%] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-[#1fcfff]/8 blur-[115px] md:h-[300px] md:w-[300px]" />
      </div>

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
          maskImage:
            "radial-gradient(ellipse 60% 42% at 50% 22%, black 0%, rgba(0,0,0,0.92) 38%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 42% at 50% 22%, black 0%, rgba(0,0,0,0.92) 38%, transparent 82%)",
        }}
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-4 pb-10 pt-[88px] md:px-6 md:pb-12 md:pt-[96px] lg:px-8 lg:pb-14 lg:pt-[108px]">
          <div className="flex min-h-[560px] items-center justify-center md:min-h-[600px] lg:min-h-[640px]">
            <div className="w-full max-w-[1160px] text-center">
              {/* Heading */}
              <ScrollReveal animation="fade-in-up" delay={80}>
                <h1
                  id="scan-hero-heading"
                  className="mx-auto max-w-[1080px] text-balance text-[40px] font-semibold leading-[0.93] tracking-[-0.052em] text-white sm:text-[54px] md:text-[66px] xl:text-[80px]"
                >
                  Is your website accessible?
                  <br />
                  Get instant insights.
                </h1>

                <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/95 to-sky-400/0 sm:w-28" />

                <h2 className="mt-5 text-[18px] font-semibold tracking-[-0.02em] text-[#47d7ff] md:text-[24px]">
                  Scan your website in seconds.
                </h2>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fade-in-up" delay={150}>
                <p className="mx-auto mt-5 max-w-[920px] text-[16px] leading-[1.72] text-white/78 md:text-[18px]">
                  Get a fast accessibility snapshot of your website and uncover
                  issues that may affect usability, compliance, and conversion.
                  Built to give teams a clear starting point before a full expert review.
                </p>
              </ScrollReveal>

              {/* Trust line */}
              <ScrollReveal animation="fade-in-up" delay={220}>
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center rounded-full border border-cyan-400/14 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(34,211,238,0.04))] px-4 py-2 text-[12px] font-medium tracking-[-0.01em] text-cyan-50/85 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-5 sm:text-[13px]">
                    Free scan • No signup required • Best paired with expert validation
                  </div>
                </div>
              </ScrollReveal>

              {/* Scan form */}
              <ScrollReveal animation="fade-in-up" delay={280} className="mt-8 md:mt-10">
                <div className="mx-auto w-full max-w-[720px]">
                  <div className="relative">
                    <div
                      className="pointer-events-none absolute -inset-[10px] rounded-[34px] sm:rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(34,217,201,0.22), rgba(37,190,255,0.24))",
                        filter: "blur(20px)",
                      }}
                    />

                    <div
                      className="relative rounded-[32px] border p-2 shadow-[0_22px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl sm:rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(8,16,28,0.96), rgba(7,13,24,0.91))",
                        borderColor: displayError
                          ? "rgba(248,113,113,0.65)"
                          : "rgba(255,255,255,0.12)",
                      }}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <div className="relative flex-1">
                          <input
                            type="url"
                            value={url}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Enter your website URL"
                            aria-label="Website URL"
                            aria-invalid={Boolean(displayError)}
                            className="h-[58px] w-full rounded-[18px] bg-transparent px-5 text-[14px] text-white outline-none placeholder:text-white/34 sm:h-[64px] sm:rounded-full sm:px-9 sm:text-[15px]"
                          />
                          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-white/10 sm:block" />
                        </div>

                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="inline-flex h-[56px] items-center justify-center gap-2 rounded-full px-6 text-[14px] font-semibold tracking-[-0.01em] text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_48px_rgba(36,191,255,0.32)] sm:h-[60px] sm:px-8 sm:text-[15px]"
                          style={{
                            background:
                              "linear-gradient(135deg, #22d9c9 0%, #25beff 100%)",
                            boxShadow: "0 16px 40px rgba(36,191,255,0.22)",
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M7 1v4M7 9v4M1 7h4M9 7h4"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          Start Free Scan
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2 6h8M7 3l3 3-3 3"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {displayError && (
                    <p className="mt-3 text-center text-[13px] text-red-400">
                      {displayError}
                    </p>
                  )}
                </div>
              </ScrollReveal>

              {/* Methodology toggle */}
              <ScrollReveal
                animation="fade-in-up"
                delay={340}
                className="mt-5 flex flex-col items-center"
              >
                <button
                  type="button"
                  onClick={handleToggleMethodology}
                  className="group inline-flex items-center gap-2 rounded-full border border-transparent px-2 py-1 text-[15px] font-medium text-cyan-300 transition-colors hover:text-white"
                  aria-expanded={showMethodology}
                  aria-controls="scan-methodology-panel"
                >
                  <span>What’s included in the analysis?</span>
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    className="transition-transform duration-300"
                    style={{
                      transform: showMethodology ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id="scan-methodology-panel"
                  className="w-full max-w-[900px] overflow-hidden"
                  style={{
                    maxHeight: showMethodology ? "780px" : "0px",
                    opacity: showMethodology ? 1 : 0,
                    marginTop: showMethodology ? "18px" : "0px",
                    transition:
                      "max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease, margin-top 0.35s ease",
                  }}
                >
                  <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-[1px] shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
                    <div className="rounded-[27px] bg-[linear-gradient(180deg,rgba(8,14,26,0.98),rgba(7,11,21,0.96))] px-5 py-6 text-left backdrop-blur-2xl sm:px-7 sm:py-7">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="mb-2 text-[13px] font-medium uppercase tracking-[0.16em] text-cyan-300/75">
                            Methodology
                          </p>
                          <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[28px]">
                            What the free scan reviews
                          </h3>
                        </div>

                        <div className="rounded-full border border-cyan-400/15 bg-cyan-400/6 px-3 py-1.5 text-[12px] font-medium text-cyan-100/80">
                          Snapshot, not a full manual audit
                        </div>
                      </div>

                      <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-white/62 sm:text-[15px]">
                        We evaluate a focused set of high-impact accessibility signals
                        based on WCAG principles. This gives you a fast snapshot of
                        likely issues, but it does not replace a full expert audit
                        with manual verification.
                      </p>

                      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {methodologyItems.map((item, i) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4"
                            style={{
                              transform: showMethodology ? "translateY(0)" : "translateY(10px)",
                              opacity: showMethodology ? 1 : 0,
                              transition: `transform 0.35s ease ${0.14 + i * 0.05}s, opacity 0.35s ease ${0.14 + i * 0.05}s`,
                            }}
                          >
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/12 ring-1 ring-cyan-300/20">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 14 14"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path
                                  d="M2 7l3.5 3.5L12 3"
                                  stroke="#22d3ee"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <span className="text-[13px] leading-6 text-white/78 sm:text-[14px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-2xl border border-cyan-400/12 bg-cyan-400/5 px-4 py-4 text-[13px] leading-6 text-cyan-100/78 sm:text-[14px]">
                        For legal-grade validation, remediation planning, and issue
                        documentation, pair the free scan with an expert accessibility audit.
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="h-10 bg-[#06101a] md:h-14 lg:h-16" />
      </div>
    </section>
  );
}