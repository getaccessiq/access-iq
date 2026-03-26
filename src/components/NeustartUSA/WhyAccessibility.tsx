"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

type BenefitCard = {
  title: string;
  description: string;
  type: "gauge" | "chart" | "growth";
};

const benefitCards: BenefitCard[] = [
  {
    title: "Reach 25% more users instantly",
    description:
      "1 in 4 people lives with a disability. If your website isn’t accessible, you’re excluding a major audience and leaving revenue behind.",
    type: "gauge",
  },
  {
    title: "Better experience for every user",
    description:
      "Accessibility improvements increase clarity, usability, and conversion — not just for a few users, but for everyone visiting your site.",
    type: "chart",
  },
  {
    title: "Build a stronger, more trusted brand",
    description:
      "Inclusive digital experiences signal quality, responsibility, and long-term thinking — the kind of trust modern buyers reward.",
    type: "growth",
  },
];

export default function AccessibilityWhy() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] text-[#0b1220]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,153,255,0.06),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#d7deea] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
              Why accessibility matters
            </span>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#0b1220] sm:text-4xl lg:text-5xl">
              Accessibility isn’t optional anymore — it’s a growth and risk
              decision.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5b667a] sm:text-base">
              Reach more users, improve experience, and reduce legal exposure
              with a more accessible digital presence.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {benefitCards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.08}>
              <article className="rounded-[28px] border border-[#e4eaf3] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  {card.type === "gauge" && <GaugeVisual />}
                  {card.type === "chart" && <ChartVisual />}
                  {card.type === "growth" && <GrowthVisual />}
                </div>

                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0b1220]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5f6b7f]">
                  {card.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GaugeVisual() {
  return (
    <div className="flex h-[120px] items-center justify-center rounded-[20px] bg-[#eef4fb]">
      <div className="relative h-20 w-32">
        <div className="absolute inset-0 rounded-t-full border-[8px] border-b-0 border-[#d8e0ea]" />
        <div
          className="absolute inset-0 rounded-t-full border-[8px] border-b-0 border-transparent border-l-[#1098f7] border-t-[#1098f7]"
          style={{ clipPath: "inset(0 40% 0 0)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
          <span className="text-[10px] font-medium text-[#7a8799]">Of users</span>
          <span className="text-2xl font-semibold text-[#0b1220]">25%</span>
        </div>
      </div>
    </div>
  );
}

function ChartVisual() {
  return (
    <div className="relative h-[120px] overflow-hidden rounded-[20px] bg-[#eef4fb] p-4">
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="why-chart-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#00a8ff" />
          </linearGradient>
        </defs>
        <path
          d="M8 70 C 50 50, 70 45, 105 55 S 170 68, 205 54 S 260 42, 312 24"
          fill="none"
          stroke="url(#why-chart-line)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/80 bg-white px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div className="text-2xl font-semibold text-[#0b1220]">2.5x</div>
        <div className="text-[10px] font-medium text-[#7a8799]">
          higher engagement
        </div>
      </div>
    </div>
  );
}

function GrowthVisual() {
  return (
    <div className="relative h-[120px] overflow-hidden rounded-[20px] bg-[#eef4fb] p-4">
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="growth-fill-neustart" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#8ef0d0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#b7ecff" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="growth-line-neustart" x1="0" x2="1">
            <stop offset="0%" stopColor="#00a8ff" />
            <stop offset="100%" stopColor="#00d4aa" />
          </linearGradient>
        </defs>

        <path
          d="M10 88 C 48 84, 76 74, 112 60 S 180 36, 224 25 S 278 14, 310 10 L 310 120 L 10 120 Z"
          fill="url(#growth-fill-neustart)"
        />
        <path
          d="M10 88 C 48 84, 76 74, 112 60 S 180 36, 224 25 S 278 14, 310 10"
          fill="none"
          stroke="url(#growth-line-neustart)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <text
          x="14"
          y="22"
          fill="#7a8799"
          fontSize="10"
          fontWeight="500"
        >
          inclusive
        </text>
        <text
          x="14"
          y="48"
          fill="#0b1220"
          fontSize="28"
          fontWeight="700"
        >
          100%
        </text>
      </svg>
    </div>
  );
}