"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

type AuditCheck = {
  title: string;
  description: string;
  eyebrow: string;
  icon: React.ReactNode;
};

const auditChecks: AuditCheck[] = [
  {
    eyebrow: "Assistive technology",
    title: "Screen Reader Testing",
    description:
      "We manually validate content structure, labels, announcements, and interactive behavior with real assistive technology — not just automated rules.",
    icon: <EyeIcon />,
  },
  {
    eyebrow: "Navigation logic",
    title: "Keyboard Navigation",
    description:
      "We test menus, dialogs, forms, and key user journeys with keyboard-only navigation to uncover blockers scanners often miss.",
    icon: <KeyboardIcon />,
  },
  {
    eyebrow: "Business-critical UX",
    title: "Forms & Critical Flows",
    description:
      "From lead forms to booking and checkout paths, we verify whether users can actually complete the actions your business depends on.",
    icon: <FlowIcon />,
  },
  {
    eyebrow: "Compliance exposure",
    title: "Legal Risk Review",
    description:
      "We identify accessibility issues that create meaningful ADA and WCAG risk, then prioritize what needs immediate remediation first.",
    icon: <ShieldIcon />,
  },
];

const metricTiles = [
  {
    value: "Manual",
    label: "Expert-led review",
    description: "Validated by specialists, not just automated output.",
  },
  {
    value: "Critical",
    label: "Conversion flows",
    description: "Forms, dialogs, navigation, and user journeys tested in practice.",
  },
  {
    value: "Real",
    label: "Assistive technology",
    description: "Screen-reader and keyboard behavior reviewed directly.",
  },
  {
    value: "Prioritized",
    label: "Remediation path",
    description: "Developer-ready findings focused on impact and urgency.",
  },
] as const;

export default function AccessiveManualAuditSection() {
  return (
    <section className="relative overflow-hidden bg-[#06101a] py-20 text-white sm:py-24 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,26,0.92)_0%,rgba(6,16,26,0.98)_100%)]" />
        <div className="absolute left-[-12%] top-[6%] h-[320px] w-[320px] rounded-full bg-cyan-400/7 blur-[120px]" />
        <div className="absolute right-[-8%] top-[14%] h-[360px] w-[360px] rounded-full bg-teal-300/7 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:42px_42px]" />
        
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up" duration={700}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.08)] backdrop-blur-sm">
              Manual Accessibility Audit
            </div>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-[54px] lg:leading-[1.02]">
              We audit for humans,
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                not just algorithms
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              Real accessibility means verifying whether critical experiences work in practice.
              Our experts manually test the parts of your website automated tools alone cannot validate.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-7">
          <ScrollReveal animation="fade-in-up" duration={700}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_72px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-all duration-300 hover:border-white/14 hover:shadow-[0_28px_84px_rgba(0,0,0,0.30)] sm:p-7 lg:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.07),transparent_30%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12"
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      Why manual testing matters
                    </p>

                    <h3 className="mt-4 max-w-[14ch] text-[28px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[34px] lg:text-[36px]">
                      Automated scans miss the barriers that stop real users.
                    </h3>

                    <p className="mt-5 max-w-[60ch] text-[15px] leading-7 text-slate-200 sm:text-base sm:leading-8">
                      Accessibility is not just a checklist. A page can look fine in a scanner
                      and still fail for keyboard users, screen-reader users, and people navigating
                      complex forms or modal flows.
                    </p>
                  </div>

                  <div className="hidden shrink-0 lg:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-cyan-300/25 bg-cyan-400/10 text-cyan-200 shadow-[0_14px_32px_rgba(34,211,238,0.08)]">
                      <SparkPanelIcon />
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {metricTiles.map((item) => (
                    <MetricTile
                      key={item.value}
                      value={item.value}
                      label={item.label}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            {auditChecks.slice(0, 2).map((item) => (
              <ScrollReveal key={item.title} animation="fade-in-up" duration={700}>
                <AuditCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {auditChecks.slice(2).map((item) => (
            <ScrollReveal key={item.title} animation="fade-in-up" duration={700}>
              <AuditCard item={item} />
            </ScrollReveal>
          ))}

          <ScrollReveal animation="fade-in-up" duration={700} className="md:col-span-2">
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.042),rgba(255,255,255,0.02))] p-[1px] shadow-[0_22px_72px_rgba(0,0,0,0.22)]">
              <div className="relative rounded-[29px] bg-[linear-gradient(180deg,rgba(8,14,24,0.96),rgba(7,13,22,0.98))] px-5 py-6 backdrop-blur-2xl sm:px-8 sm:py-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.07),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.05),transparent_28%)]"
                />

                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      Outcome
                    </p>

                    <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.04em] text-white sm:text-[30px]">
                      A clear remediation plan your team can execute.
                    </h3>

                    <p className="mt-4 max-w-[62ch] text-[15px] leading-7 text-slate-200 sm:text-base sm:leading-8">
                      You get prioritized findings, developer-ready evidence, and a practical
                      roadmap to reduce accessibility risk across your most important user flows.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
                    <Link
                      href="/sample-report"
                      className="inline-flex items-center justify-center text-sm font-medium text-white/90 transition-colors duration-300 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06101a]"
                    >
                      View Sample Report
                      <span className="ml-2 text-white/60">→</span>
                    </Link>

                    <div className="hidden h-9 w-px bg-white/10 sm:block" aria-hidden="true" />

                    <Link
                      href="/contact"
                      className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-gradient-to-r from-[#22d9c9] to-[#25beff] px-6 py-3 text-sm font-semibold text-[#06101a] shadow-[0_14px_34px_rgba(36,191,255,0.20)] transition-all duration-300 hover:shadow-[0_18px_42px_rgba(36,191,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06101a]"
                    >
                      Book Expert Audit
                    </Link>
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

function AuditCard({ item }: { item: AuditCheck }) {
  return (
    <article className="relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_54px_rgba(0,0,0,0.20)] backdrop-blur-2xl transition-all duration-300 hover:border-white/14 hover:shadow-[0_22px_64px_rgba(0,0,0,0.28)] sm:min-h-[240px] sm:p-6 lg:min-h-[248px] lg:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.07),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.05),transparent_28%)]"
      />

      <div className="relative">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[18px] border border-cyan-300/25 bg-cyan-400/10 text-cyan-200 shadow-[0_12px_28px_rgba(34,211,238,0.07)]">
          {item.icon}
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
          {item.eyebrow}
        </p>

        <h3 className="mt-3 text-[23px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[25px]">
          {item.title}
        </h3>

        <p className="mt-4 text-[15px] leading-7 text-slate-200 sm:leading-8">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function MetricTile({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-[#091426]/68 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-300 hover:border-white/12 hover:bg-[#0a182a]/78">
      <div className="text-[24px] font-semibold tracking-[-0.035em] text-white">
        {value}
      </div>
      <div className="mt-1.5 text-sm font-semibold text-cyan-100">{label}</div>
      <p className="mt-2.5 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}

function SparkPanelIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L13.9 8.1L19 10L13.9 11.9L12 17L10.1 11.9L5 10L10.1 8.1L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12C4.8 7.5 8.1 5.25 12 5.25C15.9 5.25 19.2 7.5 22 12C19.2 16.5 15.9 18.75 12 18.75C8.1 18.75 4.8 16.5 2 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function KeyboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7 10h1M10 10h1M13 10h1M16 10h1M7 13h7M16 13h1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M11 7.5h2a2 2 0 0 1 2 2v1.5M12.5 13H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L19 5.75V10.25C19 14.6 16.25 18.2 12 20C7.75 18.2 5 14.6 5 10.25V5.75L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 12L11.2 13.95L14.9 10.25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}