"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import AnimatedGradient from "../AnimatedGradient";

interface ScanLoadingViewProps {
  url: string;
}

const CHECKLIST = [
  "Checking color contrast",
  "Form accessibility analysis",
  "Keyboard navigation verification",
  "Semantic structure analysis",
] as const;

const CHECKLIST_DELAYS = [2000, 6000, 11000, 17000] as const;
const MAX_PROGRESS_WIDTH = "90%";

export default function ScanLoadingView({ url }: ScanLoadingViewProps) {
  const [elapsed, setElapsed] = useState(0);
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);

  const pausedRef = useRef(false);
  const progressRef = useRef<HTMLDivElement | null>(null);

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
        setCompletedItems((prev) =>
          prev.includes(index) ? prev : [...prev, index]
        );
      }, delay)
    );

    return () => timeouts.forEach((timeout) => window.clearTimeout(timeout));
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (progressRef.current) {
        progressRef.current.style.width = MAX_PROGRESS_WIDTH;
      }
    }, 100);

    return () => window.clearTimeout(timeout);
  }, []);

  const formattedUrl = useMemo(() => {
    if (!url) return "your website";
    return url.replace(/^https?:\/\//i, "");
  }, [url]);

  const formatTime = (ms: number) => {
    const totalSec = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSec / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSec % 60).toString().padStart(2, "0");
    const millis = (ms % 1000).toString().padStart(3, "0");

    return `${minutes}:${seconds}:${millis}`;
  };

  return (
    <div className="min-h-screen bg-[#06101a]">
      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit-a {
          from { transform: rotate(0deg) translateX(82px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(82px) rotate(-360deg); }
        }

        @keyframes orbit-b {
          from { transform: rotate(130deg) translateX(58px) rotate(-130deg); }
          to { transform: rotate(490deg) translateX(58px) rotate(-490deg); }
        }

        @keyframes orbit-c {
          from { transform: rotate(255deg) translateX(44px) rotate(-255deg); }
          to { transform: rotate(615deg) translateX(44px) rotate(-615deg); }
        }

        @keyframes orbit-d {
          from { transform: rotate(50deg) translateX(70px) rotate(-50deg); }
          to { transform: rotate(410deg) translateX(70px) rotate(-410deg); }
        }

        @keyframes orbit-e {
          from { transform: rotate(310deg) translateX(36px) rotate(-310deg); }
          to { transform: rotate(670deg) translateX(36px) rotate(-670deg); }
        }

        .sweep-g {
          animation: radar-sweep 3s linear infinite;
          transform-origin: 110px 110px;
        }

        .dot-oa {
          animation: orbit-a 4.5s linear infinite;
          transform-origin: 110px 110px;
        }

        .dot-ob {
          animation: orbit-b 6s linear infinite;
          transform-origin: 110px 110px;
        }

        .dot-oc {
          animation: orbit-c 5s linear infinite;
          transform-origin: 110px 110px;
        }

        .dot-od {
          animation: orbit-d 7s linear infinite;
          transform-origin: 110px 110px;
        }

        .dot-oe {
          animation: orbit-e 3.8s linear infinite;
          transform-origin: 110px 110px;
        }

        .paused-anim * {
          animation-play-state: paused !important;
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#06101a]">
        <AnimatedGradient />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, black 38%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, black 38%, transparent 82%)",
          }}
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[8%] h-[360px] w-[360px] rounded-full bg-[#18d4c0]/10 blur-[120px]" />
          <div className="absolute right-[-8%] top-[10%] h-[380px] w-[380px] rounded-full bg-[#229dff]/10 blur-[140px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-4 pb-8 pt-[96px] text-center md:pt-[110px] lg:pt-[120px]">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(8,12,24,0.84), rgba(10,18,34,0.72))",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 1v12M1 7h12M2.5 2.5l9 9M11.5 2.5l-9 9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[13px] font-medium tracking-[-0.01em] text-white">
              Scanning in progress
            </span>
          </div>

          <h1 className="mb-2 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[36px]">
            Analyzing your website
          </h1>

          <p className="mb-5 max-w-[760px] text-[14px] text-white/72 md:text-[15px]">
            Running an automated accessibility scan for{" "}
            <span className="font-medium text-white">{formattedUrl}</span>
          </p>

          <div
            className="font-mono font-bold leading-none tracking-[0.12em] text-white"
            style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
          >
            {formatTime(elapsed)}
          </div>
        </div>
      </section>

      <section
        className="relative bg-[#f8fafc] pt-8 pb-16"
        style={{
          borderRadius: "30px 30px 0 0",
          marginTop: "-12px",
          zIndex: 2,
        }}
      >
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm md:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Live scan
                  </p>
                  <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#0b0f1a]">
                    Accessibility scan console
                  </h2>
                </div>

                <button
                  onClick={() => setPaused((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-600 transition-all hover:border-slate-400 hover:bg-slate-50"
                  type="button"
                >
                  {paused ? (
                    <>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                        <polygon points="2,1 12,6.5 2,12" fill="currentColor" />
                      </svg>
                      Resume animation
                    </>
                  ) : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                        <rect x="1.5" y="1.5" width="3.5" height="10" rx="1" fill="currentColor" />
                        <rect x="8" y="1.5" width="3.5" height="10" rx="1" fill="currentColor" />
                      </svg>
                      Pause animation
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-5">
                  <svg
                    width="240"
                    height="240"
                    viewBox="0 0 220 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={paused ? "paused-anim" : ""}
                    aria-hidden="true"
                  >
                    <defs>
                      <radialGradient id="bgGlow" cx="42%" cy="56%" r="55%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.30" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </radialGradient>

                      <radialGradient
                        id="sweepGrad"
                        cx="50%"
                        cy="100%"
                        r="100%"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                        <stop offset="60%" stopColor="#00d4aa" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    <circle cx="110" cy="110" r="102" stroke="#93c5fd" strokeWidth="1.2" fill="white" />
                    <circle cx="110" cy="110" r="78" stroke="#bfdbfe" strokeWidth="0.8" fill="none" />
                    <circle cx="110" cy="110" r="54" stroke="#bfdbfe" strokeWidth="0.8" fill="none" />
                    <circle cx="110" cy="110" r="30" stroke="#bfdbfe" strokeWidth="0.8" fill="none" />

                    <line x1="8" y1="110" x2="212" y2="110" stroke="#bfdbfe" strokeWidth="0.6" />
                    <line x1="110" y1="8" x2="110" y2="212" stroke="#bfdbfe" strokeWidth="0.6" />

                    <circle cx="110" cy="110" r="102" fill="url(#bgGlow)" />

                    <g className="sweep-g">
                      <path
                        d="M110 110 L110 8 A102 102 0 0 1 198 161 Z"
                        fill="url(#sweepGrad)"
                        opacity="0.5"
                      />
                      <line
                        x1="110"
                        y1="110"
                        x2="110"
                        y2="8"
                        stroke="#00d4aa"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.8"
                      />
                    </g>

                    <circle cx="155" cy="78" r="4.5" fill="#22c55e" opacity="0.9" />
                    <circle cx="172" cy="108" r="3.5" fill="#3b82f6" opacity="0.8" />
                    <circle cx="68" cy="88" r="3" fill="#3b82f6" opacity="0.7" />
                    <circle cx="82" cy="155" r="3" fill="#22c55e" opacity="0.7" />
                    <circle cx="145" cy="158" r="2.5" fill="#3b82f6" opacity="0.6" />
                    <circle cx="110" cy="35" r="2.5" fill="#06b6d4" opacity="0.8" />

                    <circle cx="110" cy="110" r="22" fill="#3b82f6" opacity="0.08">
                      <animate
                        attributeName="opacity"
                        values="0.06;0.16;0.06"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    <circle cx="110" cy="110" r="6.5" fill="#3b82f6" />
                    <circle cx="110" cy="110" r="3" fill="white" />

                    <circle cx="110" cy="28" r="5" fill="#22c55e" className="dot-oa" />
                    <circle cx="110" cy="52" r="3.5" fill="#3b82f6" className="dot-ob" />
                    <circle cx="110" cy="66" r="4" fill="#22c55e" opacity="0.85" className="dot-oc" />
                    <circle cx="110" cy="40" r="3" fill="#06b6d4" opacity="0.8" className="dot-od" />
                    <circle cx="110" cy="74" r="2.5" fill="#3b82f6" opacity="0.7" className="dot-oe" />
                  </svg>
                </div>

                <div className="w-full max-w-sm">
                  <div className="mb-2 flex items-center justify-between text-[12px] font-medium text-slate-500">
                    <span>Scan progress</span>
                    <span>{Math.min(Math.round((elapsed / 30000) * 100), 90)}%</span>
                  </div>

                  <div className="mb-2 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      ref={progressRef}
                      className="h-full rounded-full"
                      style={{
                        width: "0%",
                        background: "linear-gradient(90deg, #00d4aa, #0088cc)",
                        transition: "width 30s linear",
                      }}
                    />
                  </div>

                  <div className="flex justify-between">
                    {["0%", "50%", "100%"].map((label) => (
                      <div key={label} className="flex flex-col items-center">
                        <div className="h-2 w-px bg-slate-300" />
                        <span className="mt-1 text-[11px] text-slate-400">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm md:p-6">
              <div className="mb-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Current tasks
                </p>
                <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#0b0f1a]">
                  Live validation checks
                </h3>
                <p className="mt-2 text-[14px] leading-7 text-slate-500">
                  We review key accessibility signals in real time while preparing your scan summary.
                </p>
              </div>

              <div className="space-y-3">
                {CHECKLIST.map((item, index) => {
                  const isDone = completedItems.includes(index);
                  const isLast = index === CHECKLIST.length - 1;
                  const isActive =
                    !isDone && (index === 0 || completedItems.includes(index - 1));

                  if (isLast && !isDone) {
                    return (
                      <div
                        key={item}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                            style={{
                              background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                            }}
                          >
                            N
                          </div>
                          <span className="text-[14px] font-medium text-[#0b0f1a]">
                            {item}
                          </span>
                        </div>
                        <span className="text-[14px] tracking-widest text-slate-400">···</span>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3"
                    >
                      {isDone ? (
                        <div
                          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                          style={{
                            background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                          }}
                        >
                          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                            <path
                              d="M1 4.5L4 7.5L10 1.5"
                              stroke="white"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div
                          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2"
                          style={{ borderColor: isActive ? "#00d4aa" : "#e5e7eb" }}
                        >
                          {isActive ? (
                            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00d4aa]" />
                          ) : null}
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-[14px] font-medium ${
                            isDone || isActive ? "text-[#0b0f1a]" : "text-slate-400"
                          }`}
                        >
                          {item}
                        </p>
                        <p className="mt-0.5 text-[12px] text-slate-400">
                          {isDone
                            ? "Completed"
                            : isActive
                            ? "Currently running"
                            : "Pending"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50/70 px-4 py-4">
                <p className="text-[13px] leading-6 text-slate-600">
                  Your initial scan result is being prepared. Manual expert review can uncover additional WCAG issues beyond automated detection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}