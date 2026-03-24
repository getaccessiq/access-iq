"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

type Deliverable = {
  icon: React.ReactNode;
  title: string;
  description: string;
  meta?: string;
  variant: "feature" | "highlight";
};

const checklistItems = [
  "Certified Experts",
  "Legal-ready reports",
  "Manual Verification",
] as const;

const deliverables: Deliverable[] = [
  {
    icon: <AuditReportIcon />,
    title: "Audit Report",
    description:
      "Certified findings with severity, impact, and clear remediation guidance for legal, product, and engineering teams.",
    variant: "highlight",
  },
  {
    icon: <EvidenceIcon />,
    title: "Repro Steps & Evidence",
    description:
      "Screenshots, code references, and exact reproduction steps for every issue.",
    meta: "Evidence-ready output",
    variant: "feature",
  },
  {
    icon: <SummaryIcon />,
    title: "Executive Summary",
    description:
      "A clear overview of scope, priorities, and next steps for stakeholders.",
    meta: "Stakeholder-ready overview",
    variant: "feature",
  },
  {
    icon: <VerificationIcon />,
    title: "Verification Path",
    description:
      "A structured workflow to confirm implemented fixes and document validation progress.",
    meta: "Validation-ready workflow",
    variant: "feature",
  },
  {
    icon: <PriorityIcon />,
    title: "Priority Mapping",
    description:
      "Clear severity grouping so teams know what to fix first, what carries the highest risk, and what should be addressed next.",
    meta: "Risk-based prioritization",
    variant: "feature",
  },
];

const previewStats = [
  {
    label: "Severity",
    text: "Prioritized by legal and usability impact",
  },
  {
    label: "Evidence",
    text: "Repro steps, screenshots, and code context",
  },
  {
    label: "Remediation",
    text: "Practical guidance your team can implement",
  },
] as const;

export default function WhatYouGet() {
  const highlightCard = deliverables.find((item) => item.variant === "highlight");
  const featureCards = deliverables.filter((item) => item.variant === "feature");

  return (
    <section
      aria-labelledby="what-you-get-title"
      className="relative overflow-hidden bg-[#f8f9fb]"
      style={{
        borderRadius: "24px 24px 0 0",
        marginTop: "-24px",
        zIndex: 2,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(13,127,232,0.06), transparent 26%), radial-gradient(circle at 88% 14%, rgba(0,212,170,0.07), transparent 22%)",
        }}
      />

      <div className="py-16 md:py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] xl:gap-8">
            <ScrollReveal animation="fade-in-left" duration={800}>
              <div className="max-w-[760px]">
                <div className="inline-flex items-center rounded-full border border-[#0d7fe8]/12 bg-white px-3 py-1.5 shadow-[0_8px_24px_rgba(11,15,26,0.05)]">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0d7fe8]">
                    Deliverables
                  </span>
                </div>

                <h2
                  id="what-you-get-title"
                  className="mt-5 text-3xl font-bold leading-tight text-[#0b0f1a] md:text-4xl lg:text-[46px]"
                >
                  What You <span className="text-[#0d7fe8]">Get</span>
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 md:text-[17px]">
                  Detailed findings mapped to WCAG criteria, with clear priorities,
                  evidence, and practical next steps for your team.
                </p>

                <div className="mt-7 flex flex-col gap-5">
                  <ul
                    className="grid gap-3 sm:grid-cols-3 sm:gap-x-5"
                    aria-label="What is included"
                  >
                    {checklistItems.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span
                          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e9fbf6] text-[#00a37a]"
                          aria-hidden="true"
                        >
                          <CheckIcon />
                        </span>
                        <span className="text-[15px] font-medium text-gray-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,136,204,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7fe8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f9fb]"
                      style={{
                        background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                      }}
                      aria-label="Book an expert accessibility audit"
                    >
                      Book Expert Audit
                    </Link>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-[28px] border border-[#d9e5f3] bg-white shadow-[0_30px_80px_rgba(11,15,26,0.08)]">
                  <div className="flex items-center justify-between border-b border-[#edf2f7] bg-[linear-gradient(180deg,#ffffff,#f9fbfd)] px-4 py-3">
                    <div className="flex items-center gap-2" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <p className="text-xs font-semibold tracking-wide text-[#5a6472]">
                      Accessibility Audit Preview
                    </p>
                    <div className="w-12" aria-hidden="true" />
                  </div>

                  <div className="p-3 sm:p-4">
                    <Image
                      src="/images/vector-27.png"
                      alt="Preview of an accessibility audit report with structured findings and remediation details"
                      width={700}
                      height={490}
                      className="h-auto w-full rounded-[20px] border border-[#d6e2ef]"
                    />
                  </div>

                  <div className="grid gap-3 border-t border-[#edf2f7] bg-[#fcfdff] px-4 py-4 sm:grid-cols-3">
                    {previewStats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[#e7eef6] bg-white px-4 py-3"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0d7fe8]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-[#4c5664]">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-right" delay={150} duration={800} stagger>
              <div className="grid gap-4 sm:grid-cols-2 xl:gap-5">
                {highlightCard ? (
                  <article className="relative overflow-hidden rounded-[24px] border border-transparent bg-[linear-gradient(150deg,#0a3040_0%,#0b4d50_35%,#0c5f58_65%,#0d6e62_100%)] text-white shadow-[0_22px_60px_rgba(6,79,89,0.24)] sm:col-span-2">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(circle at top right, rgba(255,255,255,0.14), transparent 28%)",
                      }}
                    />

                    <div className="relative p-5 sm:p-6">
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                        {highlightCard.icon}
                      </div>

                      <h3 className="text-[20px] font-bold leading-tight text-white">
                        {highlightCard.title}
                      </h3>

                      <p className="mt-3 max-w-[62ch] text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
                        {highlightCard.description}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {[
                          "Severity-based prioritization",
                          "Remediation-ready detail",
                          "Executive stakeholder clarity",
                        ].map((point) => (
                          <div
                            key={point}
                            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/88"
                          >
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ) : null}

                {featureCards.map((item) => (
                  <article
                    key={item.title}
                    className="flex h-full min-h-[240px] flex-col rounded-[24px] border border-[rgba(0,212,170,0.16)] bg-[linear-gradient(135deg,#ecfbf7,#e6f8fb)] p-5 text-[#0b0f1a] shadow-[0_14px_34px_rgba(11,15,26,0.04)] transition-all duration-300 hover:-translate-y-1 sm:p-6"
                  >
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(0,212,170,0.12)] text-[#0d7fe8]">
                      {item.icon}
                    </div>

                    <h3 className="text-[18px] font-bold leading-tight text-[#0b0f1a]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-gray-700 sm:text-[15px]">
                      {item.description}
                    </p>

                    {item.meta ? (
                      <div className="mt-auto pt-5">
                        <span className="inline-flex rounded-full border border-[#0d7fe8]/12 bg-white/70 px-3 py-1 text-[12px] font-medium text-[#0d7fe8]">
                          {item.meta}
                        </span>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AuditReportIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M15.8253 24.5861L4.84526 33.9457C1.89888 36.4077 1.69873 40.8679 4.4146 43.5839C7.1305 46.2997 11.5909 46.0995 14.0528 43.1531L23.4122 32.1733C22.101 31.0199 20.7464 29.7727 19.4873 28.5137C18.2274 27.2537 16.9794 25.8981 15.8253 24.5861Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.1058 2.98642C25.6656 3.5971 25.6242 4.54596 25.0136 5.10574L24.8184 5.28474C25.4502 5.77834 26.2858 6.4408 27.2382 7.21994C29.35 8.94782 32.06 11.2694 34.3966 13.6059C36.733 15.9425 39.0546 18.6525 40.7826 20.7644C41.5564 21.7102 42.215 22.5408 42.7076 23.1712L42.9394 22.9394C43.5252 22.3536 44.4748 22.3536 45.0606 22.9394C45.6464 23.5252 45.6464 24.4748 45.0606 25.0606L33.0606 37.0606C32.4748 37.6464 31.5252 37.6464 30.9394 37.0606C30.3536 36.4748 30.3536 35.5252 30.9394 34.9394L31.1738 34.705C30.5434 34.2124 29.7128 33.5538 28.767 32.78C26.6552 31.052 23.9452 28.7304 21.6086 26.394C19.272 24.0574 16.9505 21.3474 15.2226 19.2355C14.3562 18.1766 13.6342 17.262 13.1281 16.6113C13.0232 16.4765 12.9276 16.353 12.8418 16.2418C12.236 16.6536 11.4039 16.5696 10.8943 16.0136C10.3345 15.4029 10.3757 14.4541 10.9864 13.8943L22.9864 2.89428C23.5972 2.33448 24.546 2.37574 25.1058 2.98642Z"
        fill="white"
      />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.624 3.86118C31.9372 3.49996 28.4958 3.49998 24.1144 3.5H23.8856C19.5042 3.49998 16.0629 3.49996 13.376 3.86118C10.6227 4.23136 8.43822 5.00544 6.72182 6.72182C5.00544 8.43822 4.23136 10.6227 3.86118 13.376C3.49996 16.0629 3.49998 19.5042 3.5 23.8856V24.1144C3.49998 28.4958 3.49996 31.9372 3.86118 34.624C4.23136 37.3772 5.00544 39.5618 6.72182 41.2782C8.43822 42.9946 10.6227 43.7686 13.376 44.1388C16.0629 44.5 19.5042 44.5 23.8856 44.5H24.1144C28.4958 44.5 31.9372 44.5 34.624 44.1388C37.3772 43.7686 39.5618 42.9946 41.2782 41.2782C42.9946 39.5618 43.7686 37.3772 44.1388 34.624C44.5 31.9372 44.5 28.4958 44.5 24.1144V23.8856C44.5 19.5042 44.5 16.0629 44.1388 13.376C43.7686 10.6227 42.9946 8.43822 41.2782 6.72182C39.5618 5.00544 37.3772 4.23136 34.624 3.86118ZM15.5 26C15.5 25.1716 14.8284 24.5 14 24.5C13.1716 24.5 12.5 25.1716 12.5 26V34C12.5 34.8284 13.1716 35.5 14 35.5C14.8284 35.5 15.5 34.8284 15.5 34V26ZM24 12.5C24.8284 12.5 25.5 13.1716 25.5 14V34C25.5 34.8284 24.8284 35.5 24 35.5C23.1716 35.5 22.5 34.8284 22.5 34V14C22.5 13.1716 23.1716 12.5 24 12.5ZM35.5 22C35.5 21.1716 34.8284 20.5 34 20.5C33.1716 20.5 32.5 21.1716 32.5 22V34C32.5 34.8284 33.1716 35.5 34 35.5C34.8284 35.5 35.5 34.8284 35.5 34V22Z"
        fill="url(#premiumEvidenceGrad)"
        fillOpacity="0.88"
      />
      <defs>
        <linearGradient
          id="premiumEvidenceGrad"
          x1="47.2105"
          y1="24"
          x2="3.49996"
          y2="24.015"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SummaryIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M32.5918 2.25C33.6454 2.25048 34.4996 3.10454 34.5 4.1582V5.75H36C39.0376 5.75 41.5 8.21244 41.5 11.25V39.75C41.5 42.7876 39.0376 45.25 36 45.25H12C8.96244 45.25 6.5 42.7876 6.5 39.75V11.25C6.5 8.21244 8.96244 5.75 12 5.75H13.5V4.1582C13.5005 3.10454 14.3545 2.25048 15.4082 2.25C16.4623 2.25 17.3179 3.10424 17.3184 4.1582V5.75H22.0918V4.1582C22.0922 3.10424 22.946 2.25 24 2.25C25.054 2.25 25.9078 3.10424 25.9082 4.1582V5.75H30.6816V4.1582C30.6822 3.10424 31.5378 2.25 32.5918 2.25ZM38.5 37.748C37.3426 38.6178 35.9266 39.162 34.3868 39.2402L34 39.25H14C12.3115 39.25 10.7535 38.6916 9.5 37.75V39.75C9.5 41.1308 10.6193 42.25 12 42.25H36C37.3808 42.25 38.5 41.1308 38.5 39.75V37.748ZM16 26.25C15.1716 26.25 14.5 26.9216 14.5 27.75C14.5 28.5784 15.1716 29.25 16 29.25H24C24.8284 29.25 25.5 28.5784 25.5 27.75C25.5 26.9216 24.8284 26.25 24 26.25H16ZM16 18.25C15.1716 18.25 14.5 18.9216 14.5 19.75C14.5 20.5784 15.1716 21.25 16 21.25H32C32.8284 21.25 33.5 20.5784 33.5 19.75C33.5 18.9216 32.8284 18.25 32 18.25H16Z"
        fill="url(#premiumSummaryGrad)"
        fillOpacity="0.88"
      />
      <defs>
        <linearGradient
          id="premiumSummaryGrad"
          x1="43.8138"
          y1="23.75"
          x2="6.49997"
          y2="23.7604"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function VerificationIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 2.5C27.6488 2.5 22.5 7.64872 22.5 14C22.5 20.3512 27.6488 25.5 34 25.5C40.3512 25.5 45.5 20.3512 45.5 14C45.5 7.64872 40.3512 2.5 34 2.5ZM38.5008 12.4143C39.2816 12.1378 39.6906 11.2805 39.414 10.4996C39.1374 9.71874 38.2802 9.3099 37.4992 9.58646C36.535 9.92798 35.6398 10.5677 34.8822 11.232C34.1092 11.91 33.3926 12.6915 32.7894 13.4145C32.497 13.7649 32.227 14.1068 31.9856 14.4238C31.8092 14.2587 31.6324 14.1193 31.457 14.0023L31.4466 13.9954C31.13 13.7842 30.7044 13.5004 30 13.5004C29.1716 13.5004 28.5 14.172 28.5 15.0004C28.5 15.7498 29.0496 16.3709 29.7678 16.4825C29.775 16.4868 29.7834 16.4921 29.793 16.4985C29.9044 16.5727 30.2474 16.8492 30.6584 17.6712C30.9002 18.1548 31.3834 18.4708 31.9232 18.4984C32.463 18.5261 32.9764 18.2604 33.2664 17.8043C33.592 17.343 34.552 15.9848 35.093 15.3363C35.6368 14.6843 36.2438 14.0283 36.8604 13.4875C37.4926 12.9331 38.0532 12.5728 38.5008 12.4143Z"
        fill="url(#premiumVerificationGradA)"
        fillOpacity="0.88"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.1648 2.50168C21.72 5.15266 19.5 9.31708 19.5 14C19.5 22.0082 25.9918 28.5 34 28.5C36.745 28.5 39.3118 27.7372 41.5 26.4122V28.1186C41.5 31.7892 41.5 34.7054 41.175 36.9896C40.8388 39.3506 40.1294 41.2548 38.549 42.7474C36.9808 44.2284 35.0002 44.883 32.5424 45.1952C30.1412 45.5 27.0682 45.5 23.1666 45.5H20.8334C16.9317 45.5 13.8588 45.5 11.4577 45.1952C8.99974 44.883 7.0193 44.2284 5.45104 42.7474C3.87068 41.2548 3.1612 39.3506 2.8251 36.9896C2.49994 34.7054 2.49996 31.7892 2.5 28.1186V19.8814C2.49996 16.2108 2.49994 13.2946 2.8251 11.0104C3.1612 8.64936 3.8707 6.74518 5.45104 5.25262C7.0193 3.7715 8.99974 3.11694 11.4577 2.80484C13.8588 2.49996 16.9317 2.49998 20.8334 2.5H23.1666C23.8584 2.5 24.5244 2.5 25.1648 2.50168ZM10 26C10 24.8954 10.8954 24 12 24H18.2165C19.3211 24 20.2166 24.8954 20.2166 26C20.2166 27.1046 19.3211 28 18.2165 28H12C10.8954 28 10 27.1046 10 26ZM12 32C10.8954 32 10 32.8954 10 34C10 35.1046 10.8954 36 12 36H28C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32H12Z"
        fill="url(#premiumVerificationGradB)"
        fillOpacity="0.88"
      />
      <defs>
        <linearGradient
          id="premiumVerificationGradA"
          x1="47.0205"
          y1="14"
          x2="22.5"
          y2="14.0084"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
        <linearGradient
          id="premiumVerificationGradB"
          x1="44.0783"
          y1="24"
          x2="2.49996"
          y2="24.0129"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PriorityIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM22 14C22 12.8954 22.8954 12 24 12C25.1046 12 26 12.8954 26 14V24C26 24.5304 25.7893 25.0391 25.4142 25.4142C25.0391 25.7893 24.5304 26 24 26H16C14.8954 26 14 25.1046 14 24C14 22.8954 14.8954 22 16 22H22V14Z"
        fill="url(#priorityGrad)"
        fillOpacity="0.9"
      />
      <defs>
        <linearGradient
          id="priorityGrad"
          x1="44"
          y1="24"
          x2="4"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
    </svg>
  );
}