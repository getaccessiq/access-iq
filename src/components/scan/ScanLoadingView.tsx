"use client";

import React, { useEffect, useMemo, useState } from "react";
import AnimatedGradient from "../AnimatedGradient";

interface ScanLoadingViewProps {
  url: string;
}

const CHECKLIST = [
  "Initializing environment",
  "Checking color contrast",
  "Analyzing forms",
  "Preparing summary",
] as const;

const CHECKLIST_DELAYS = [700, 2200, 4300, 6500] as const;
const TARGET_DURATION_MS = 8000;
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

function FinalizingDot({ label }: { label: string }) {
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
      style={{
        background: "linear-gradient(135deg, #00d4aa, #0088cc)",
        boxShadow: "0 10px 24px rgba(0,212,170,0.20)",
      }}
      aria-hidden="true"
    >
      {label.charAt(0).toUpperCase()}
    </div>
  );
}

function PlaceholderDot() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white/14" />
  );
}

function CompactRadar() {
  return (
    <>
      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit-a {
          from { transform: rotate(0deg) translateX(52px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(52px) rotate(-360deg); }
        }

        @keyframes orbit-b {
          from { transform: rotate(110deg) translateX(36px) rotate(-110deg); }
          to { transform: rotate(470deg) translateX(36px) rotate(-470deg); }
        }

        @keyframes orbit-c {
          from { transform: rotate(250deg) translateX(28px) rotate(-250deg); }
          to { transform: rotate(610deg) translateX(28px) rotate(-610deg); }
        }

        .compact-sweep {
          animation: radar-sweep 3s linear infinite;
          transform-origin: 76px 76px;
        }

        .compact-dot-a {
          animation: orbit-a 4.6s linear infinite;
          transform-origin: 76px 76px;
        }

        .compact-dot-b {
          animation: orbit-b 5.8s linear infinite;
          transform-origin: 76px 76px;
        }

        .compact-dot-c {
          animation: orbit-c 4.2s linear infinite;
          transform-origin: 76px 76px;
        }
      `}</style>

      <svg
        width="168"
        height="168"
        viewBox="0 0 152 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
          cx="76"
          cy="76"
          r="68"
          stroke="#60a5fa"
          strokeWidth="1.2"
          fill="rgba(255,255,255,0.02)"
        />
        <circle cx="76" cy="76" r="47" stroke="#60a5fa" strokeOpacity="0.55" strokeWidth="0.8" />
        <circle cx="76" cy="76" r="26" stroke="#60a5fa" strokeOpacity="0.45" strokeWidth="0.8" />
        <line x1="8" y1="76" x2="144" y2="76" stroke="#60a5fa" strokeOpacity="0.32" strokeWidth="0.7" />
        <line x1="76" y1="8" x2="76" y2="144" stroke="#60a5fa" strokeOpacity="0.32" strokeWidth="0.7" />

        <circle cx="76" cy="76" r="68" fill="url(#compactGlow)" />

        <g className="compact-sweep">
          <path
            d="M76 76 L76 8 A68 68 0 0 1 135 110 Z"
            fill="url(#compactSweepGrad)"
            opacity="0.55"
          />
          <line
            x1="76"
            y1="76"
            x2="76"
            y2="8"
            stroke="#22d3ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>

        <circle cx="106" cy="50" r="4" fill="#22c55e" opacity="0.95" />
        <circle cx="112" cy="78" r="3.2" fill="#3b82f6" opacity="0.82" />
        <circle cx="50" cy="58" r="2.8" fill="#3b82f6" opacity="0.75" />
        <circle cx="56" cy="103" r="2.8" fill="#22c55e" opacity="0.78" />

        <circle cx="76" cy="76" r="15" fill="#3b82f6" opacity="0.08" />
        <circle cx="76" cy="76" r="5.5" fill="#3b82f6" />
        <circle cx="76" cy="76" r="2.4" fill="white" />

        <circle cx="76" cy="22" r="4.2" fill="#22c55e" className="compact-dot-a" />
        <circle cx="76" cy="38" r="3.4" fill="#3b82f6" className="compact-dot-b" />
        <circle cx="76" cy="46" r="2.8" fill="#06b6d4" className="compact-dot-c" />
      </svg>
    </>
  );
}

export default function ScanLoadingView({ url }: ScanLoadingViewProps) {
  const [elapsed, setElapsed] = useState(0);
  const [completedItems, setCompletedItems] = useState<number[]>([]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setElapsed((prev) => prev + 50);
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
          <div className="absolute left-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#18d4c0]/10 blur-[120px]" />
          <div className="absolute right-[-8%] top-[10%] h-[340px] w-[340px] rounded-full bg-[#229dff]/10 blur-[130px]" />
          <div className="absolute left-1/2 top-[150px] h-[200px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1160px] items-center px-4 py-[88px] sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="mx-auto max-w-[1040px]">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(8,12,24,0.84),rgba(10,18,34,0.72))] px-5 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_32px_rgba(0,0,0,0.22)] backdrop-blur-md">
                  <SparklesIcon />
                  <span className="text-[13px] font-medium tracking-[-0.01em] text-white">
                    Scanning in progress
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h1 className="mb-2 text-[32px] font-semibold tracking-[-0.045em] text-white md:text-[44px]">
                  Analyzing your website
                </h1>

                <p className="mx-auto mb-3 max-w-[680px] text-[14px] leading-6 text-white/76 md:text-[15px]">
                  Running an automated accessibility scan for{" "}
                  <span className="font-semibold text-white">{formattedUrl}</span>
                </p>

                <div
                  className="font-mono font-bold leading-none tracking-[0.12em] text-white"
                  style={{
                    fontSize: "clamp(34px, 4.8vw, 56px)",
                    textShadow: "0 0 30px rgba(34,211,238,0.08)",
                  }}
                >
                  {formatTime(elapsed)}
                </div>

                <p className="mx-auto mt-2 max-w-[520px] text-[12px] leading-5 text-cyan-50/56">
                  {shortStatus}
                </p>
              </div>

              <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="flex h-full flex-col rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,30,0.9),rgba(7,13,24,0.82))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
                  <div className="mb-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200/45">
                      Live scan
                    </p>
                    <h2 className="mt-1.5 text-[20px] font-semibold tracking-[-0.03em] text-white">
                      Accessibility console
                    </h2>
                  </div>

                  <div className="flex flex-1 flex-col items-center justify-center">
                    <div className="mb-3 rounded-[22px] border border-white/8 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.14),rgba(255,255,255,0.01)_58%)] px-3 py-3">
                      <CompactRadar />
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
                            background:
                              "linear-gradient(90deg, #00d4aa, #22d3ee 55%, #0088cc)",
                            boxShadow:
                              "0 0 12px rgba(0,212,170,0.40), 0 0 30px rgba(0,212,170,0.18)",
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

                <div className="flex h-full flex-col rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,30,0.9),rgba(7,13,24,0.82))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
                  <div className="mb-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200/45">
                      Current tasks
                    </p>
                    <h3 className="mt-1.5 text-[20px] font-semibold tracking-[-0.03em] text-white">
                      Live validation checks
                    </h3>
                  </div>

                  <div className="grid flex-1 gap-2.5">
                    {CHECKLIST.map((item, index) => {
                      const isDone = completedItems.includes(index);
                      const isActive = index === activeIndex;
                      const isLastPending = index === CHECKLIST.length - 1 && !isDone;

                      return (
                        <div
                          key={item}
                          className={cn(
                            "flex min-h-[74px] items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
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
                            <FinalizingDot label={item} />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}