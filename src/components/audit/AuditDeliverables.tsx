"use client";

import React from "react";
import Link from "next/link";

type FeatureCard = {
  title: string;
  text: string;
  cta: string;
  icon: React.ReactNode;
};

type DeliverablesVariantTwoProps = {
  previewImageUrl?: string;
  primaryCtaHref?: string;
  sampleReportHref?: string;
};

const checklistItems = [
  "Certified Experts",
  "Legal-ready reports",
  "Manual Verification",
] as const;

const featureCards: FeatureCard[] = [
  {
    title: "Repro Steps & Evidence",
    text: "Screenshots, code references, and exact reproduction steps for every issue.",
    cta: "Review sample evidence",
    icon: <EvidenceIcon />,
  },
  {
    title: "Executive Summary",
    text: "A clear overview of scope, priorities, and next steps for stakeholders.",
    cta: "Stakeholder-ready overview",
    icon: <SummaryIcon />,
  },
  {
    title: "Verification Path",
    text: "A structured workflow to confirm fixes and document progress.",
    cta: "Validation-ready workflow",
    icon: <VerificationIcon />,
  },
  {
    title: "Priority Mapping",
    text: "Clear severity grouping so teams know what to fix first and why it matters.",
    cta: "Risk-based prioritization",
    icon: <PriorityIcon />,
  },
];

const reportPills = [
  "Severity-based prioritization",
  "Remediation-ready detail",
  "Executive stakeholder clarity",
] as const;

const previewMeta = [
  {
    label: "Severity",
    text: "Prioritized by legal and usability impact, focusing on critical issues.",
  },
  {
    label: "Evidence",
    text: "Repro steps, screenshots, and code context.",
  },
  {
    label: "Remediation",
    text: "Practical guidance your team can implement.",
  },
] as const;

export default function AccessiveVariantTwoSection({
  previewImageUrl = "/images/chart-small.png",
  primaryCtaHref = "/contact",
  sampleReportHref = "/sample-report",
}: DeliverablesVariantTwoProps) {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-20 text-slate-900 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.9), transparent 28%), radial-gradient(circle at 100% 0%, rgba(219,238,247,0.9), transparent 30%), linear-gradient(180deg, rgba(244,247,251,1) 0%, rgba(242,246,250,1) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <div className="rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(248,250,253,0.98),rgba(241,245,249,0.96))] p-6 shadow-[0_24px_80px_rgba(148,163,184,0.18)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-start lg:gap-10">
            <div className="min-w-0">
              <span className="inline-flex rounded-full border border-[#d9e2ef] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3b82f6] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                Deliverables
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#0b1733] sm:text-5xl">
                What You <span className="text-[#3294ff]">Get</span>
              </h2>

              <p className="mt-4 max-w-[680px] text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                Detailed findings mapped to WCAG criteria, with clear priorities,
                evidence, and practical next steps for your team.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                {checklistItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-slate-700 sm:text-[15px]"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e6fbf7] text-[#14c8ba]">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <Link
                  href={primaryCtaHref}
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#1fd2bf_0%,#1297f0_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(20,151,240,0.22)] transition duration-200 hover:scale-[1.01] hover:shadow-[0_18px_38px_rgba(20,151,240,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1297f0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f7fb]"
                >
                  Book Expert Audit
                </Link>
              </div>

              <div className="mt-8 overflow-hidden rounded-[24px] border border-[#d8e2ee] bg-[linear-gradient(180deg,#f8fbff_0%,#eef3f8_100%)] shadow-[0_16px_42px_rgba(148,163,184,0.14)]">
                <div className="flex items-center justify-between border-b border-[#dde5ef] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6f61]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbf47]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4cc94d]" />
                  </div>

                  <p className="text-center text-[11px] font-semibold tracking-wide text-slate-500 sm:text-[12px]">
                    Accessibility Audit Preview
                  </p>

                  <div className="w-8" aria-hidden="true" />
                </div>

                <div className="p-4 sm:p-5">
                  <div className="overflow-hidden rounded-[18px] border border-[#25d0cf]/50 bg-[linear-gradient(180deg,#122754_0%,#0d1b3f_100%)] p-[5px] shadow-[0_0_0_1px_rgba(37,208,207,0.12),0_18px_45px_rgba(29,78,216,0.15)]">
                    <div className="relative h-[260px] sm:h-[300px] lg:h-[320px] overflow-hidden rounded-[14px] border ...">
                      <img
                        src={previewImageUrl}
                        alt="Accessibility audit dashboard preview"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,40,0.06),rgba(8,15,40,0.2))]" />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {previewMeta.map((item) => (
                      <article
                        key={item.label}
                        className="rounded-[16px] border border-[#dce6f0] bg-[linear-gradient(180deg,#fbfcfe_0%,#f3f6fa_100%)] px-4 py-4"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3b82f6]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 lg:pt-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="sm:col-span-2 overflow-hidden rounded-[24px] border border-[#0a6d72]/18 bg-[linear-gradient(135deg,#0b5b64_0%,#0b6d73_36%,#18836a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(16,94,104,0.24)]">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <ReportIcon />
                  </div>

                  <h3 className="mt-5 text-[26px] font-semibold tracking-[-0.04em] sm:text-[28px]">
                    Audit Report
                  </h3>

                  <p className="mt-3 max-w-[520px] text-[15px] leading-7 text-white/88 sm:text-[16px]">
                    Certified findings with severity, impact, and clear remediation
                    guidance for legal, product, and engineering teams.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {reportPills.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/14 bg-white/[0.05] px-3 py-2 text-[11px] font-medium text-white/88 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={sampleReportHref}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d6a6f]"
                    >
                      View Sample Report
                    </Link>
                  </div>
                </article>

                {featureCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[22px] border border-[#b7ece7] bg-[linear-gradient(180deg,#eefbf9_0%,#e8f6f5_100%)] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(15,23,42,0.07)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#cff5ef] text-[#22c8bc]">
                      {card.icon}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#11203a]">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {card.text}
                    </p>

                    <div className="mt-4">
                      <span className="inline-flex rounded-full border border-[#b9e9e3] bg-white/70 px-3 py-1.5 text-[11px] font-medium text-[#4a8dbd]">
                        {card.cta}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

function SummaryIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </svg>
  );
}

function VerificationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="m9.5 12 1.8 1.8 3.7-4" />
    </svg>
  );
}

function PriorityIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4a8 8 0 1 0 8 8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}