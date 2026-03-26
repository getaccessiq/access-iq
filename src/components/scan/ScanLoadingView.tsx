"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import AnimatedGradient from "../AnimatedGradient";

interface ScanLoadingViewProps {
  url: string;
}

const CHECKLIST = [
  "Initializing environment",
  "Checking color contrast",
  "Analyzing forms",
  "Verifying keyboard access",
  "Reviewing structure",
  "Preparing summary",
] as const;

const CHECKLIST_DELAYS = [900, 2400, 4200, 5800, 7200, 9000] as const;
const TARGET_DURATION_MS = 10000;
const MAX_PROGRESS_PERCENT = 94;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatTime(ms: number) {
  const totalSec = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSec / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSec % 60).toString().padStart(2, "0");
  const millis = (ms % 1000).toString().padStart(3, "0");

  return `${minutes}:${seconds}:${millis}`;
}

function SparklesIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1.5L7.9 4.1L10.5 5L7.9 5.9L7 8.5L6.1 5.9L3.5 5L6.1 4.1L7 1.5Z"
        fill="white"
      />
      <path
        d="M11 8.5L11.45 9.8L12.75 10.25L11.45 10.7L11 12L10.55 10.7L9.25 10.25L10.55 9.8L11 8.5Z"
        fill="white"
        opacity="0.85"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="3.5" height="10" rx="1" fill="currentColor" />
      <rect x="8" y="1.5" width="3.5" height="10" rx="1" fill="currentColor" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <polygon points="2,1 12,6.5 2,12" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
      <path
        d="M1 4.5L4 7.5L10 1.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ActiveDot() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#22d3ee]">
      <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#22d3ee]" />
    </div>
  );
}

function FinalizingDot() {
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
      style={{
        background: "linear-gradient(135deg, #00d4aa, #0088cc)",
        boxShadow: "0 10px 24px rgba(0,212,170,0.20)",
      }}
    >
      N
    </div>
  );
}

function PlaceholderDot() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white/14" />
  );
}

function CompactRadar({ paused }: { paused: boolean }) {
  return (
    <>
      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit-a {
          from { transform: rotate(0deg) translateX(58px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(58px) rotate(-360deg); }
        }

        @keyframes orbit-b {
          from { transform: rotate(110deg) translateX(40px) rotate(-110deg); }
          to { transform: rotate(470deg) translateX(40px) rotate(-470deg); }
        }

        @keyframes orbit-c {
          from { transform: rotate(250deg) translateX(32px) rotate(-250deg); }
          to { transform: rotate(610deg) translateX(32px) rotate(-610deg); }
        }

        .compact-sweep {
          animation: radar-sweep 3s linear infinite;
          transform-origin: 80px 80px;
        }

        .compact-dot-a {
          animation: orbit-a 4.6s linear infinite;
          transform-origin: 80px 80px;
        }

        .compact-dot-b {
          animation: orbit-b 5.8s linear infinite;
          transform-origin: 80px 80px;
        }

        .compact-dot-c {
          animation: orbit-c 4.2s linear infinite;
          transform-origin: 80px 80px;
        }

        .compact-paused * {
          animation-play-state: paused !important;
        }
      `}</style>

      <svg
        width="180"
        height="180"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={paused ? "compact-paused" : ""}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="compactGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#3b82f6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>

          <radialGradient
            id="compactSweepGrad"
            cx="50%"
            cy="100%"
            r="100%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="60%" stopColor="#00d4aa" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="80"
          cy="80"
          r="72"
          stroke="#60a5fa"
          strokeWidth="1.2"
          fill="rgba(255,255,255,0.02)"
        />
        <circle cx="80" cy="80" r="50" stroke="#60a5fa" strokeOpacity="0.55" strokeWidth="0.8" />
        <circle cx="80" cy="80" r="28" stroke="#60a5fa" strokeOpacity="0.45" strokeWidth="0.8" />
        <line x1="8" y1="80" x2="152" y2="80" stroke="#60a5fa" strokeOpacity="0.32" strokeWidth="0.7" />
        <line x1="80" y1="8" x2="80" y2="152" stroke="#60a5fa" strokeOpacity="0.32" strokeWidth="0.7" />

        <circle cx="80" cy="80" r="72" fill="url(#compactGlow)" />

        <g className="compact-sweep">
          <path
            d="M80 80 L80 8 A72 72 0 0 1 142 116 Z"
            fill="url(#compactSweepGrad)"
            opacity="0.55"
          />
          <line
            x1="80"
            y1="80"
            x2="80"
            y2="8"
            stroke="#22d3ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>

        <circle cx="111" cy="54" r="4" fill="#22c55e" opacity="0.95" />
        <circle cx="118" cy="82" r="3.2" fill="#3b82f6" opacity="0.82" />
        <circle cx="52" cy="60" r="2.8" fill="#3b82f6" opacity="0.75" />
        <circle cx="58" cy="108" r="2.8" fill="#22c55e" opacity="0.78" />

        <circle cx="80" cy="80" r="16" fill="#3b82f6" opacity="0.08" />
        <circle cx="80" cy="80" r="5.5" fill="#3b82f6" />
        <circle cx="80" cy="80" r="2.4" fill="white" />

        <circle cx="80" cy="22" r="4.5" fill="#22c55e" className="compact-dot-a" />
        <circle cx="80" cy="40" r="3.5" fill="#3b82f6" className="compact-dot-b" />
        <circle cx="80" cy="48" r="2.8" fill="#06b6d4" className="compact-dot-c" />
      </svg>
    </>
  );
}

export default function ScanLoadingView({ url }: ScanLoadingViewProps) {
  const [elapsed, setElapsed] = useState(0);
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);

  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!pausedRef.current) {
        setElapsed((prev) => prev + 50);
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeouts = CHECKLIST_DELAYS.map((delay, index) =>
      window.setTimeout(() => {
        setCompletedItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
      }, delay)
    );

    return () => timeouts.forEach((timeout) => window.clearTimeout(timeout));
  }, []);

  const formattedUrl = useMemo(() => {
    if (!url) return "your website";
    return url.replace(/^https?:\/\//i, "");
  }, [url]);

  const progress = Math.min(
    Math.round((elapsed / TARGET_DURATION_MS) * 100),
    MAX_PROGRESS_PERCENT
  );

  const activeIndex = CHECKLIST.findIndex((_, index) => {
    const isDone = completedItems.includes(index);
    const prevDone = index === 0 || completedItems.includes(index - 1);
    return !isDone && prevDone;
  });

  const shortStatus =
    activeIndex >= 0 ? CHECKLIST[activeIndex] : "Finalizing accessibility summary";

  return (
    <div className="min-h-screen overflow-hidden bg-[#06101a]">
      <section className="relative min-h-screen overflow-hidden">
        <AnimatedGradient />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 78% 72% at 50% 30%, black 36%, transparent 84%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 72% at 50% 30%, black 36%, transparent 84%)",
          }}
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#18d4c0]/10 blur-[120px]" />
          <div className="absolute right-[-8%] top-[10%] h-[360px] w-[360px] rounded-full bg-[#229dff]/10 blur-[130px]" />
          <div className="absolute left-1/2 top-[160px] h-[220px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] items-center px-4 pb-8 pt-[96px] sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="mx-auto max-w-[980px]">
              <div className="mb-5 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(8,12,24,0.84),rgba(10,18,34,0.72))] px-5 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_32px_rgba(0,0,0,0.22)] backdrop-blur-md">
                  <SparklesIcon />
                  <span className="text-[13px] font-medium tracking-[-0.01em] text-white">
                    Scanning in progress
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h1 className="mb-3 text-[34px] font-semibold tracking-[-0.045em] text-white md:text-[48px]">
                  Analyzing your website
                </h1>

                <p className="mx-auto mb-4 max-w-[720px] text-[15px] leading-7 text-white/76 md:text-[16px]">
                  Running an automated accessibility scan for{" "}
                  <span className="font-semibold text-white">{formattedUrl}</span>
                </p>

                <div
                  className="font-mono font-bold leading-none tracking-[0.12em] text-white"
                  style={{
                    fontSize: "clamp(38px, 5vw, 62px)",
                    textShadow: "0 0 30px rgba(34,211,238,0.08)",
                  }}
                >
                  {formatTime(elapsed)}
                </div>

                <p className="mx-auto mt-3 max-w-[560px] text-[13px] leading-6 text-cyan-50/56">
                  {shortStatus}
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,30,0.9),rgba(7,13,24,0.82))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan-200/45">
                        Live scan
                      </p>
                      <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-white">
                        Accessibility console
                      </h2>
                    </div>

                    <button
                      onClick={() => setPaused((prev) => !prev)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-white/78 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                      type="button"
                    >
                      {paused ? (
                        <>
                          <PlayIcon />
                          Resume
                        </>
                      ) : (
                        <>
                          <PauseIcon />
                          Pause
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4 rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.14),rgba(255,255,255,0.01)_58%)] px-3 py-3">
                      <CompactRadar paused={paused} />
                    </div>

                    <div className="w-full max-w-[320px]">
                      <div className="mb-2 flex items-center justify-between text-[12px] font-medium text-white/62">
                        <span>Scan progress</span>
                        <span>{progress}%</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${progress}%`,
                            background: "linear-gradient(90deg, #00d4aa, #22d3ee 55%, #0088cc)",
                            boxShadow: "0 0 12px rgba(0,212,170,0.40), 0 0 30px rgba(0,212,170,0.18)",
                          }}
                        />
                      </div>

                      <div className="mt-2 flex justify-between text-[11px] text-white/36">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,30,0.9),rgba(7,13,24,0.82))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
                  <div className="mb-4">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan-200/45">
                      Current tasks
                    </p>
                    <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-white">
                      Live validation checks
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {CHECKLIST.map((item, index) => {
                      const isDone = completedItems.includes(index);
                      const isActive = index === activeIndex;
                      const isLastPending = index === CHECKLIST.length - 1 && !isDone;

                      return (
                        <div
                          key={item}
                          className={cn(
                            "flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
                            isActive
                              ? "border border-cyan-300/30 bg-cyan-400/[0.06] shadow-[0_10px_24px_rgba(34,211,238,0.08)]"
                              : "border border-white/8 bg-white/[0.03]"
                          )}
                        >
                          {isDone ? (
                            <div
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                              style={{
                                background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                                boxShadow: "0 10px 24px rgba(0,212,170,0.20)",
                              }}
                            >
                              <CheckIcon />
                            </div>
                          ) : isActive ? (
                            <ActiveDot />
                          ) : isLastPending ? (
                            <FinalizingDot />
                          ) : (
                            <PlaceholderDot />
                          )}

                          <div className="min-w-0 flex-1">
                            <p
                              className={cn(
                                "text-[14px] font-medium",
                                isDone || isActive ? "text-white" : "text-white/38"
                              )}
                            >
                              {item}
                            </p>
                            <p className="mt-0.5 text-[12px] text-white/42">
                              {isDone
                                ? "Completed"
                                : isActive
                                ? "Currently running"
                                : "Pending"}
                            </p>
                          </div>

                          {isLastPending ? (
                            <span className="text-[14px] tracking-widest text-white/30">···</span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06] px-4 py-3.5">
                    <p className="text-[13px] leading-6 text-cyan-50/72">
                      Your initial scan result is being prepared. Manual review can uncover additional WCAG issues beyond automated detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}