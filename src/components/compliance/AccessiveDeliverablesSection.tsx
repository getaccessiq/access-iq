"use client";

import React from "react";
import Link from "next/link";

type Deliverable = {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const deliverables: Deliverable[] = [
  {
    eyebrow: "Certified output",
    title: "Accessibility Report",
    description:
      "A structured report with prioritized findings, WCAG references, issue severity, and clear next steps for your team.",
    icon: <ReportIcon />,
  },
  {
    eyebrow: "Evidence included",
    title: "Screenshots & Examples",
    description:
      "Each issue includes visual proof and context so stakeholders can quickly understand what is broken and why it matters.",
    icon: <EvidenceIcon />,
  },
  {
    eyebrow: "Developer-ready",
    title: "Remediation Guidance",
    description:
      "Clear implementation notes help product and engineering teams move from issue discovery to practical fixes faster.",
    icon: <CodeIcon />,
  },
  {
    eyebrow: "Executive clarity",
    title: "Executive Summary",
    description:
      "A concise overview built for leadership, legal, and stakeholders who need clarity without technical overload.",
    icon: <SummaryIcon />,
  },
  {
    eyebrow: "Risk-first view",
    title: "Priority Mapping",
    description:
      "We help your team focus first on the issues with the highest compliance, usability, and business impact.",
    icon: <PriorityIcon />,
  },
  {
    eyebrow: "Next-step planning",
    title: "Re-Test Strategy",
    description:
      "Where needed, we outline validation and follow-up recommendations so improvements can be verified with confidence.",
    icon: <RetestIcon />,
  },
];

export default function AccessiveDeliverablesSection() {
  return (
    <section
      aria-labelledby="deliverables-title"
      className="relative overflow-hidden bg-[#06101a] py-20 text-white sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,26,0.92)_0%,rgba(6,16,26,0.98)_100%)]" />
        <div className="absolute left-[-10%] top-[8%] h-[320px] w-[320px] rounded-full bg-cyan-400/8 blur-[120px]" />
        <div className="absolute right-[-8%] top-[18%] h-[360px] w-[360px] rounded-full bg-teal-300/8 blur-[140px]" />
        <div className="absolute left-1/2 top-[42%] h-[280px] w-[540px] -translate-x-1/2 rounded-full bg-sky-400/5 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.08)] backdrop-blur-sm">
            Deliverables
          </div>

          <h2
            id="deliverables-title"
            className="mx-auto mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-[52px] lg:leading-[1.04]"
          >
            What your team
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              actually receives
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            You do not just receive a scan export. You get structured,
            decision-ready deliverables built for legal, product, design, and
            engineering teams that need to act with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {deliverables.map((item) => (
            <article
              key={item.title}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_54px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-300 hover:border-cyan-300/20 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.024))] hover:shadow-[0_24px_72px_rgba(0,0,0,0.28)] sm:p-7"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.05),transparent_28%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
              />

              <div className="relative flex h-full flex-col">
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[18px] border border-cyan-300/20 bg-cyan-400/10 text-cyan-100 shadow-[0_12px_28px_rgba(34,211,238,0.06)]"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                  {item.eyebrow}
                </p>

                <h3 className="mt-3 text-[24px] font-semibold leading-[1.08] tracking-[-0.035em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-300 sm:leading-8">
                  {item.description}
                </p>

                <div className="mt-6 flex-1" />

                <div className="pt-5">
                  <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.022))] p-[1px] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
          <div className="relative rounded-[31px] bg-[linear-gradient(180deg,rgba(8,14,24,0.96),rgba(7,13,22,0.98))] px-5 py-7 backdrop-blur-2xl sm:px-8 sm:py-8 lg:px-10 lg:py-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.06),transparent_28%)]"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                  Built for action
                </p>

                <h3 className="mt-3 text-[25px] font-semibold tracking-[-0.04em] text-white sm:text-[30px] lg:text-[34px]">
                  Clear documentation for legal, product, and engineering teams.
                </h3>

                <p className="mt-4 max-w-[64ch] text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Every deliverable is designed to reduce ambiguity, accelerate remediation, and help your organization move from findings to measurable accessibility progress.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:shrink-0 lg:justify-end">
                <Link
                  href="/sample-report"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/90 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/5 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06101a]"
                >
                  View Sample Report
                  <span className="ml-2 text-white/60" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-gradient-to-r from-[#22d9c9] to-[#25beff] px-6 py-3 text-sm font-semibold text-[#06101a] shadow-[0_14px_34px_rgba(36,191,255,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(36,191,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06101a]"
                >
                  Book Expert Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3.75H15.5L19.25 7.5V19A1.75 1.75 0 0 1 17.5 20.75H8A1.75 1.75 0 0 1 6.25 19V5.5A1.75 1.75 0 0 1 8 3.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 3.75V7.5H18.25M9 11H15.5M9 14.5H15.5M9 18H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 14L10.5 11.5L13 14L16.5 10.5L20 14M8 9H8.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.5 8L4.5 12L8.5 16M15.5 8L19.5 12L15.5 16M13.5 5L10.5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SummaryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 5.5H18M6 10H18M6 14.5H13M6 19H11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PriorityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.5L18.5 8.25V15.75L12 19.5L5.5 15.75V8.25L12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.5V12.25L14.5 13.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RetestIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 7V11H16M4 17V13H8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 10A6.5 6.5 0 0 0 6.8 7.8L4 10M6.5 14A6.5 6.5 0 0 0 17.2 16.2L20 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}