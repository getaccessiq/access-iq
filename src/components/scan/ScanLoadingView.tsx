"use client";

import React, { useEffect, useRef, useState } from "react";
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

export default function ScanLoadingView({ url }: ScanLoadingViewProps) {
  const [elapsed, setElapsed] = useState(0);
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedRef.current) {
        setElapsed((prev) => prev + 50);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

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
        progressRef.current.style.width = "90%";
      }
    }, 100);

    return () => window.clearTimeout(timeout);
  }, []);

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
    <>
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

        .sweep-g { animation: radar-sweep 3s linear infinite; transform-origin: 110px 110px; }
        .dot-oa { animation: orbit-a 4.5s linear infinite; transform-origin: 110px 110px; }
        .dot-ob { animation: orbit-b 6s linear infinite; transform-origin: 110px 110px; }
        .dot-oc { animation: orbit-c 5s linear infinite; transform-origin: 110px 110px; }
        .dot-od { animation: orbit-d 7s linear infinite; transform-origin: 110px 110px; }
        .dot-oe { animation: orbit-e 3.8s linear infinite; transform-origin: 110px 110px; }
        .paused-anim * { animation-play-state: paused !important; }
      `}</style>

      <section className="relative overflow-hidden bg-[#0a0e1a]">
        <AnimatedGradient />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 80%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center px-4 pt-[88px] pb-8 text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-5 py-2"
            style={{
              background: "rgba(8,12,24,0.8)",
              border: "1px solid rgba(255,255,255,0.18)",
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
            <span className="text-[13px] font-medium text-white">
              Scanning in progress
            </span>
          </div>

          <p className="mb-1 text-[18px] font-medium text-white md:text-[20px]">
            Analyzing your website
          </p>

          <p className="mb-4 text-[14px] text-gray-300 md:text-[15px]">
            Scanning: <span className="text-white">{url}</span>
          </p>

          <div
            className="font-mono text-white font-bold tracking-widest leading-none"
            style={{ fontSize: "clamp(36px, 6vw, 56px)" }}
          >
            {formatTime(elapsed)}
          </div>
        </div>
      </section>

      <section
        className="relative bg-white pb-24 pt-16"
        style={{
          borderRadius: "24px 24px 0 0",
          marginTop: "-24px",
          zIndex: 2,
          position: "relative",
        }}
      >
        <div className="flex flex-col items-center px-4 text-center">
          <div className="mb-8">
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
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.0" />
                  <stop offset="60%" stopColor="#00d4aa" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.0" />
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

          <button
            onClick={() => setPaused((prev) => !prev)}
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-2.5 text-[13px] text-gray-600 transition-colors hover:border-gray-500"
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

          <div className="mb-12 w-full max-w-sm">
            <div className="mb-1 h-1.5 overflow-hidden rounded-full bg-gray-200">
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
              <div className="flex flex-col items-center">
                <div className="h-2 w-px bg-gray-300" />
                <span className="mt-0.5 text-[11px] text-gray-400">0%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-2 w-px bg-gray-300" />
                <span className="mt-0.5 text-[11px] text-gray-400">50%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-2 w-px bg-gray-300" />
                <span className="mt-0.5 text-[11px] text-gray-400">100%</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xs space-y-4 text-left">
            {CHECKLIST.map((item, index) => {
              const isDone = completedItems.includes(index);
              const isLast = index === CHECKLIST.length - 1;
              const isActive = !isDone && (index === 0 || completedItems.includes(index - 1));

              if (isLast && !isDone) {
                return (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                        style={{
                          background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                        }}
                      >
                        N
                      </div>
                      <span className="text-[14px] text-[#0b0f1a]">{item}</span>
                    </div>
                    <span className="tracking-widest text-[14px] text-gray-400">···</span>
                  </div>
                );
              }

              return (
                <div key={item} className="flex items-center gap-3">
                  {isDone ? (
                    <div
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
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
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2"
                      style={{ borderColor: isActive ? "#00d4aa" : "#e5e7eb" }}
                    >
                      {isActive ? (
                        <div className="h-2 w-2 rounded-full bg-[#00d4aa] animate-pulse" />
                      ) : null}
                    </div>
                  )}

                  <span
                    className={`text-[14px] ${
                      isDone || isActive ? "text-[#0b0f1a]" : "text-gray-400"
                    }`}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}