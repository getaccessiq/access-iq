"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

type FeatureCard = {
  title: string;
  text: string;
  cta: string;
  icon: React.ReactNode;
};

type RiskItem = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

type AuditDeliverablesAndRiskProps = {
  previewImageUrl?: string;
  primaryCtaHref?: string;
  sampleReportHref?: string;
};

const checklistItems = [
  "Certified Experts",
  "Legal-ready reports",
  "Manual Verification",
  "Engineering-ready output",
] as const;

const deliverableTrust = [
  "WCAG 2.2 AA aligned",
  "Human-reviewed findings",
  "Remediation-ready structure",
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
  "WCAG 2.2 AA mapping",
  "Evidence-backed findings",
  "Engineering-ready remediation",
  "Legal-ready documentation",
] as const;

const reportMeta = [
  "Severity grouping",
  "Evidence package",
  "Remediation workflow",
] as const;

const previewMeta = [
  {
    label: "Severity",
    text: "Prioritized by legal and usability impact.",
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

const riskItems: RiskItem[] = [
  {
    title: "The hidden legal risk",
    text: "Most businesses underestimate how quickly accessibility issues can turn into legal exposure. A single complaint can trigger urgent remediation work, internal disruption, and significant cost.",
    icon: <RiskIcon />,
  },
  {
    title: "Why overlays fall short",
    text: "Overlay tools may look helpful on the surface, but they rarely solve structural accessibility issues. Real compliance requires code-level fixes, manual testing, and documented remediation.",
    icon: <OverlayIcon />,
  },
  {
    title: "What a real audit gives you",
    text: "A strong audit gives your team prioritized findings, technical evidence, and a practical remediation path. It becomes a working document for legal, product, design, and engineering stakeholders.",
    icon: <DocumentIcon />,
  },
];

const stats = [
  { value: "WCAG 2.2 AA", label: "Mapped findings" },
  { value: "Human verified", label: "Expert review" },
  { value: "Evidence ready", label: "Screens + repro steps" },
] as const;

export default function AuditDeliverablesAndRisk({
  previewImageUrl = "/images/chart-small.png",
  primaryCtaHref = "/contact",
  sampleReportHref = "/sample-report",
}: AuditDeliverablesAndRiskProps) {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-20 text-slate-900 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(255,255,255,0.95), transparent 24%),
            radial-gradient(circle at 100% 0%, rgba(219,238,247,0.78), transparent 30%),
            radial-gradient(circle at 50% 100%, rgba(225,239,247,0.45), transparent 38%),
            linear-gradient(180deg, rgba(244,247,251,1) 0%, rgba(239,244,249,1) 100%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <div className="space-y-12">
          {/* SECTION 1 */}
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[36px] border border-white/75 bg-[linear-gradient(180deg,rgba(250,252,255,0.98),rgba(243,247,251,0.96))] p-6 shadow-[0_30px_100px_rgba(148,163,184,0.18),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-[56%] -translate-x-1/2"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.18) 42%, transparent 78%)",
                  filter: "blur(20px)",
                }}
              />

              <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:gap-10">
                {/* LEFT */}
                <div className="min-w-0">
                  <span className="inline-flex rounded-full border border-[#d9e2ef] bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3b82f6] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                    Deliverables
                  </span>

                  <h2 className="mt-5 text-3xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#0b1733] sm:text-4xl lg:text-[48px]">
                    What You <span className="text-[#3294ff]">Get</span>
                  </h2>

                  <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-slate-600 sm:text-[16px]">
                    Detailed findings mapped to WCAG criteria, with clear priorities,
                    evidence, and practical next steps for your team.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {checklistItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 rounded-[16px] border border-[#dce6ef] bg-white/80 px-3 py-3 text-[14px] font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.035)] sm:text-[15px]"
                      >
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e6fbf7] text-[#14c8ba] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                          <CheckIcon />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {deliverableTrust.map((item) => (
                      <span
                        key={item}
                        className="inline-flex rounded-full border border-[#d9e2ef] bg-white/80 px-3 py-1.5 text-[11px] font-medium text-slate-600 shadow-[0_6px_14px_rgba(15,23,42,0.02)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={primaryCtaHref}
                      className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#1fd2bf_0%,#1297f0_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(20,151,240,0.24)] transition duration-200 hover:scale-[1.01] hover:shadow-[0_20px_46px_rgba(20,151,240,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1297f0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f7fb]"
                    >
                      Book Expert Audit
                    </Link>
                  </div>

                  <div className="mt-8 overflow-hidden rounded-[26px] border border-[#d8e2ee] bg-[linear-gradient(180deg,#f9fbff_0%,#eef3f8_100%)] shadow-[0_20px_48px_rgba(148,163,184,0.14)]">
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
                      <div className="overflow-hidden rounded-[18px] border border-[#25d0cf]/50 bg-[linear-gradient(180deg,#122754_0%,#0d1b3f_100%)] p-[5px] shadow-[0_0_0_1px_rgba(37,208,207,0.12),0_20px_50px_rgba(29,78,216,0.16)]">
                        <div className="relative h-[260px] overflow-hidden rounded-[14px] border border-[#53bffb]/25 bg-[#0f1b3f] sm:h-[300px] lg:h-[320px]">
                          <img
                            src={previewImageUrl}
                            alt="Accessibility audit dashboard preview"
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,40,0.04),rgba(8,15,40,0.22))]" />
                        </div>
                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {previewMeta.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-[16px] border border-[#dce6f0] bg-[linear-gradient(180deg,#fbfcfe_0%,#f4f7fb_100%)] px-4 py-4 shadow-[0_8px_18px_rgba(15,23,42,0.025)]"
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3b82f6]">
                              {item.label}
                            </p>
                            <p className="mt-2 text-[14px] leading-6 text-slate-600">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="min-w-0 lg:pt-1">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <article className="relative sm:col-span-2 min-h-[420px] overflow-hidden rounded-[28px] border border-[#0a6d72]/18 bg-[linear-gradient(135deg,#0b5b64_0%,#0b6d73_34%,#18836a_100%)] p-6 text-white shadow-[0_28px_80px_rgba(16,94,104,0.26)]">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background: `
                            radial-gradient(circle at 0% 0%, rgba(255,255,255,0.06), transparent 28%),
                            radial-gradient(circle at 100% 0%, rgba(120,150,255,0.14), transparent 24%),
                            radial-gradient(circle at 50% 100%, rgba(255,255,255,0.08), transparent 36%)
                          `,
                        }}
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/16"
                      />

                      <div className="relative">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                          <ReportIcon />
                        </div>

                        <h3 className="mt-4 text-[24px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[28px]">
                          Audit Report
                        </h3>

                        <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-white/88 sm:text-[16px]">
                          Certified findings with severity, impact, and clear remediation
                          paths for legal, product, and engineering teams.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {reportPills.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/16 bg-white/[0.06] px-3 py-2 text-[11px] font-medium text-white/88 backdrop-blur-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 grid gap-2 sm:grid-cols-3">
                          {reportMeta.map((item) => (
                            <div
                              key={item}
                              className="rounded-[14px] border border-white/10 bg-white/[0.04] px-3 py-3 text-[11px] font-medium text-white/76"
                            >
                              {item}
                            </div>
                          ))}
                        </div>

                        <div className="mt-5">
                          <Link
                            href={sampleReportHref}
                            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d6a6f]"
                          >
                            View Sample Report
                          </Link>
                        </div>
                      </div>
                    </article>

                    {featureCards.map((card, index) => (
                      <article
                        key={card.title}
                        className={`rounded-[24px] border p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] ${
                          index === 0
                            ? "border-[#9fe5dc] bg-[linear-gradient(180deg,#f2fdfa_0%,#e7f7f4_100%)]"
                            : "border-[#b7ece7] bg-[linear-gradient(180deg,#eefbf9_0%,#e8f6f5_100%)]"
                        }`}
                      >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#cff5ef] text-[#22c8bc] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                          {card.icon}
                        </div>

                        <h3 className="mt-3 min-h-[56px] text-[20px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#11203a]">
                          {card.title}
                        </h3>

                        <p className="mt-1.5 text-[14px] leading-6 text-slate-600">
                          {card.text}
                        </p>

                        <div className="mt-4">
                          <span className="inline-flex rounded-full border border-[#b9e9e3] bg-white/75 px-3 py-1.5 text-[11px] font-medium text-[#4a8dbd]">
                            {card.cta}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* SECTION 2 */}
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[38px] border border-white/75 bg-[linear-gradient(180deg,rgba(250,252,255,0.98),rgba(243,247,251,0.96))] shadow-[0_30px_100px_rgba(148,163,184,0.18),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90"
              />
              <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
                <div className="mx-auto max-w-[980px] text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d9e2ef] bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3b82f6] shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                    <span className="h-2 w-2 rounded-full bg-[#38bdf8]" aria-hidden="true" />
                    Audit confidence
                  </span>

                  <h2 className="mt-5 text-3xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#0b1733] sm:text-4xl lg:text-[46px]">
                    Why accessibility audits{" "}
                    <span className="bg-[linear-gradient(90deg,#18c8bf_0%,#3294ff_100%)] bg-clip-text text-transparent">
                      matter
                    </span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-[820px] text-[15px] leading-7 text-slate-600 sm:text-[16px]">
                    Strong accessibility audits do more than flag issues. They reduce
                    uncertainty, surface legal and usability risks, and give your team
                    a clear path toward remediation and long-term compliance.
                  </p>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {riskItems.map((item) => (
                    <article
                      key={item.title}
                      className="group relative overflow-hidden rounded-[28px] border border-[#dce6ef] bg-[linear-gradient(180deg,#ffffff_0%,#f5f9fc_100%)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]"
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/95"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-100/25 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                      />

                      <div className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-[18px] border border-[#d9f5ef] bg-[linear-gradient(180deg,#ebfffb_0%,#dff7f3_100%)] text-[#16c5bb] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_24px_rgba(22,197,187,0.10)]">
                        {item.icon}
                      </div>

                      <h3 className="mt-5 text-[20px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#11203a]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-10 overflow-hidden rounded-[32px] border border-[#0a6d72]/10 bg-[linear-gradient(135deg,#0a5962_0%,#0d6a72_34%,#17836c_100%)] text-white shadow-[0_34px_90px_rgba(16,94,104,0.24)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `
                        radial-gradient(circle at 0% 0%, rgba(255,255,255,0.05), transparent 28%),
                        radial-gradient(circle at 100% 0%, rgba(120,150,255,0.14), transparent 24%),
                        radial-gradient(circle at 50% 100%, rgba(255,255,255,0.08), transparent 36%)
                      `,
                    }}
                  />
                  <div className="relative grid gap-8 px-6 py-6 sm:px-7 sm:py-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-8">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/84 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-white/85" aria-hidden="true" />
                        Legal-ready reporting
                      </span>

                      <h3 className="mt-4 max-w-[620px] text-[24px] font-semibold tracking-[-0.045em] text-white sm:text-[32px]">
                        Documentation your team can act on
                      </h3>

                      <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-white/84 sm:text-[16px]">
                        Every audit should help your organization move faster, not create
                        more uncertainty. That means clear severity mapping, reproducible
                        evidence, practical remediation guidance, and a structure that works
                        for engineering, legal, and leadership teams alike.
                      </p>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={primaryCtaHref}
                          className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1a2a] shadow-[0_14px_38px_rgba(255,255,255,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#147a7e]"
                        >
                          Book Expert Audit
                          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        <Link
                          href={sampleReportHref}
                          className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/16 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:border-white/24 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/24 focus-visible:ring-offset-2 focus-visible:ring-offset-[#147a7e]"
                        >
                          View Sample Report
                        </Link>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                      {stats.map((item) => (
                        <div
                          key={item.value}
                          className="rounded-[22px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-sm"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/62">
                            {item.label}
                          </p>
                          <p className="mt-2 text-[20px] font-semibold tracking-[-0.03em] text-white">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
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

function ArrowUpRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
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

function RiskIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    </svg>
  );
}

function OverlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="m8 20 4-4 4 4" />
      <path d="M12 16v4" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  );
}