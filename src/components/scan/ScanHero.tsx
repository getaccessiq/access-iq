"use client";

import React, { useId, useState } from "react";
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

  const inputId = useId();
  const errorId = useId();
  const methodologyId = useId();

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

  const normalizeUrl = (value: string): string => {
    const trimmed = value.trim();
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    const nextError = validateUrl(url);

    if (nextError) {
      setValidationError(nextError);
      return;
    }

    setValidationError("");
    onScan(normalizeUrl(url));
  };

  const handleToggleMethodology = () => {
    setShowMethodology((prev) => !prev);
  };

  return (
    <section
      className="relative overflow-hidden bg-[#06101a]"
      aria-labelledby="scan-hero-heading"
    >
      {/* Animated background */}
      <div aria-hidden="true" className="absolute inset-0">
        <AnimatedGradient />
      </div>

      {/* Ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,20,0.16)_0%,rgba(2,8,20,0)_26%,rgba(2,8,20,0.2)_100%)]" />
        <div className="absolute left-[-10%] top-[4%] h-[380px] w-[380px] rounded-full bg-[#18d4c0]/10 blur-[120px] md:h-[440px] md:w-[440px]" />
        <div className="absolute right-[-8%] top-[8%] h-[380px] w-[380px] rounded-full bg-[#229dff]/10 blur-[130px] md:h-[460px] md:w-[460px]" />
        <div className="absolute left-1/2 top-[6%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#1fcfff]/8 blur-[110px] md:h-[300px] md:w-[300px]" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 72% 62% at 50% 32%, black 32%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 72% 62% at 50% 32%, black 32%, transparent 82%)",
        }}
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-[1440px] px-4 pb-12 pt-[88px] sm:px-6 md:pb-14 md:pt-[100px] lg:px-8 lg:pb-16 lg:pt-[112px]">
          <div className="flex min-h-[calc(100svh-88px)] items-center justify-center md:min-h-[calc(100svh-100px)] lg:min-h-[calc(100svh-112px)]">
            <div className="w-full max-w-[1120px] text-center">
              {/* Heading */}
              <ScrollReveal animation="fade-in-up" delay={80}>
                <h1
                  id="scan-hero-heading"
                  className="mx-auto max-w-[1100px] text-balance text-[40px] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[80px]"
                >
                  Is your website accessible?
                  <br />
                  Get instant insights.
                </h1>

                <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/95 to-sky-400/0 sm:w-28" />

                <p className="mt-5 text-[18px] font-semibold tracking-[-0.02em] text-[#47d7ff] md:text-[22px]">
                  Scan your website in seconds.
                </p>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fade-in-up" delay={150}>
                <p className="mx-auto mt-5 max-w-[900px] text-pretty text-[16px] leading-[1.75] text-white/80 md:text-[18px]">
                  Get a fast accessibility snapshot of your website and uncover
                  issues that may affect usability, compliance, and conversion.
                  Built to give teams a clear starting point before a full expert review.
                </p>
              </ScrollReveal>

              {/* Trust pill */}
              <ScrollReveal animation="fade-in-up" delay={220}>
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex max-w-full items-center rounded-full border border-cyan-400/14 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(34,211,238,0.04))] px-4 py-2 text-[12px] font-medium tracking-[-0.01em] text-cyan-50/90 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-5 sm:text-[13px]">
                    <span className="truncate">
                      Free scan • No signup required • Best paired with expert validation
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Form */}
              <ScrollReveal animation="fade-in-up" delay={300} className="mt-8 md:mt-10">
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mx-auto w-full max-w-[760px]"
                  aria-describedby={displayError ? errorId : undefined}
                >
                  <label htmlFor={inputId} className="sr-only">
                    Website URL
                  </label>

                  <div className="relative">
                    <div
                      className="pointer-events-none absolute -inset-[10px] rounded-[34px] sm:rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(34,217,201,0.20), rgba(37,190,255,0.22))",
                        filter: "blur(18px)",
                      }}
                    />

                    <div
                      className="relative rounded-[30px] border p-2 shadow-[0_18px_50px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl sm:rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(8,16,28,0.95), rgba(7,13,24,0.90))",
                        borderColor: displayError
                          ? "rgba(248,113,113,0.70)"
                          : "rgba(255,255,255,0.12)",
                      }}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <div className="relative flex-1">
                          <input
                            id={inputId}
                            type="url"
                            inputMode="url"
                            autoComplete="url"
                            spellCheck={false}
                            value={url}
                            onChange={(e) => {
                              setUrl(e.target.value);
                              if (validationError) setValidationError("");
                            }}
                            placeholder="Enter your website URL"
                            aria-invalid={Boolean(displayError)}
                            aria-describedby={displayError ? errorId : undefined}
                            className="h-[58px] w-full rounded-[18px] bg-transparent px-6 text-[15px] font-medium tracking-[-0.01em] text-white outline-none placeholder:text-white/34 focus-visible:ring-2 focus-visible:ring-cyan-300/80 sm:h-[64px] sm:rounded-full sm:px-7 sm:text-[16px]"
                          />

                          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-white/10 sm:block" />
                        </div>

                        <button
                          type="submit"
                          className="inline-flex h-[56px] min-w-[190px] items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold tracking-[-0.01em] text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_18px_42px_rgba(36,191,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06101a] sm:h-[60px] sm:px-8"
                          style={{
                            background:
                              "linear-gradient(135deg, #22d9c9 0%, #25beff 100%)",
                            boxShadow: "0 12px 34px rgba(36,191,255,0.22)",
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

                  <div
                    id={errorId}
                    aria-live="polite"
                    className="min-h-[24px]"
                  >
                    {displayError ? (
                      <p className="mt-3 text-center text-[13px] text-red-400">
                        {displayError}
                      </p>
                    ) : null}
                  </div>
                </form>
              </ScrollReveal>

              {/* Methodology toggle */}
              <ScrollReveal animation="fade-in-up" delay={360} className="mt-3 flex flex-col items-center">
                <button
                  type="button"
                  onClick={handleToggleMethodology}
                  className="group inline-flex items-center gap-2 rounded-full px-2 py-2 text-[15px] font-semibold text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06101a]"
                  aria-expanded={showMethodology}
                  aria-controls={methodologyId}
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
                  id={methodologyId}
                  className="w-full max-w-[900px] overflow-hidden"
                  style={{
                    maxHeight: showMethodology ? "820px" : "0px",
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

                      <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-white/65 sm:text-[15px]">
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
                            <span className="text-[13px] leading-6 text-white/80 sm:text-[14px]">
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