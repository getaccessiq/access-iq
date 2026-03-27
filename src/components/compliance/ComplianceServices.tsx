"use client";

import React from "react";
import ScrollReveal from "../ScrollReveal";

type ServiceItem = {
  title: string;
  description: string;
  badge: string;
  featured?: boolean;
  icon: React.ReactNode;
};

const services: ServiceItem[] = [
  {
    title: "Accessibility Audits",
    description:
      "Human-led audits that uncover real accessibility barriers, usability blockers, and compliance gaps across your most important pages and user flows.",
    badge: "Certified Reports",
    icon: <AuditIcon />,
  },
  {
    title: "Remediation Solutions",
    description:
      "Our accessibility engineers fix issues directly in your codebase with manual verification, practical implementation guidance, and WCAG-aligned execution.",
    badge: "Manual Verification",
    featured: true,
    icon: <RemediationIcon />,
  },
  {
    title: "Continuous Monitoring",
    description:
      "Ongoing scans and expert oversight help you maintain compliance, catch regressions early, and stay ahead of accessibility risk over time.",
    badge: "Continuous Tracking",
    icon: <MonitoringIcon />,
  },
];

export default function ComplianceServices() {
  return (
    <section
      aria-labelledby="compliance-services-title"
      className="relative z-[2] -mt-6 overflow-hidden rounded-t-[28px] bg-[#f5f7fb] text-[#0b1220] sm:-mt-8 sm:rounded-t-[32px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7f9fc_0%,#f3f6fb_100%)]" />
        <div className="absolute left-[-10%] top-10 h-64 w-64 rounded-full bg-cyan-500/6 blur-3xl" />
        <div className="absolute right-[-10%] top-24 h-72 w-72 rounded-full bg-sky-500/6 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(11,18,32,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(11,18,32,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <ScrollReveal animation="fade-in-up">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-cyan-500/15 bg-cyan-500/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
              Compliance Services
            </div>

            <h2
              id="compliance-services-title"
              className="mx-auto mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-[#0b1220] sm:text-4xl lg:text-[48px] lg:leading-[1.04]"
            >
              Practical services built for
              <span className="block bg-gradient-to-r from-[#0b1220] via-[#0f5f8a] to-[#00a7c8] bg-clip-text text-transparent">
                real accessibility compliance
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              From expert audits to remediation and continuous monitoring, we
              help teams reduce accessibility risk with services built for real
              implementation and long-term compliance.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={150} stagger>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className={`group relative flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border transition-all duration-300 ${
                  service.featured
                    ? "border-transparent bg-[linear-gradient(135deg,#0b2230_0%,#0d3c4c_38%,#0f5d67_100%)] text-white shadow-[0_20px_60px_rgba(6,22,34,0.22)]"
                    : "border-slate-200/80 bg-white/90 text-[#0b1220] shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 ${
                    service.featured
                      ? "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.14),transparent_30%)]"
                      : "bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.05),transparent_28%)]"
                  }`}
                />

                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-px ${
                    service.featured
                      ? "bg-white/20"
                      : "bg-slate-200/70"
                  }`}
                />

                <div className="relative flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      aria-hidden="true"
                      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border ${
                        service.featured
                          ? "border-white/15 bg-white/10 text-white"
                          : "border-cyan-500/15 bg-cyan-500/[0.07] text-cyan-700"
                      }`}
                    >
                      {service.icon}
                    </div>

                    {service.featured ? (
                      <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                        Most Popular
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-6">
                    <h3
                      className={`text-[24px] font-semibold leading-[1.08] tracking-[-0.03em] ${
                        service.featured ? "text-white" : "text-[#0b1220]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-4 text-[15px] leading-7 ${
                        service.featured ? "text-white/82" : "text-slate-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex-1" />

                  <div className="pt-6">
                    <div
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold ${
                        service.featured
                          ? "bg-white text-[#0b2230]"
                          : "bg-gradient-to-r from-[#19d7c3] to-[#25beff] text-[#06101a]"
                      }`}
                    >
                      <CheckIcon />
                      <span>{service.badge}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
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
        d="M5 13L9 17L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AuditIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M14 12.5H30M14 20.5H24"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M22 42.5H13.5C10.9 42.5 9.1 41.9 7.8 40.7C6.6 39.4 6 37.6 6 35V13C6 10.4 6.6 8.6 7.8 7.3C9.1 6.1 10.9 5.5 13.5 5.5H28.5C31.1 5.5 32.9 6.1 34.2 7.3C35.4 8.6 36 10.4 36 13V22"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.5 42.5C38.1944 42.5 42 38.6944 42 34C42 29.3056 38.1944 25.5 33.5 25.5C28.8056 25.5 25 29.3056 25 34C25 38.6944 28.8056 42.5 33.5 42.5Z"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M30.5 34L32.5 36L36.5 32"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RemediationIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M17 17L11 24L17 31"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 17L37 24L31 31"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 11L21 37"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect
        x="5.5"
        y="5.5"
        width="37"
        height="37"
        rx="10"
        stroke="currentColor"
        strokeWidth="2.2"
        opacity="0.45"
      />
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 20.3048 9.252 16.902 11.359 14.193"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M8 10V18H16"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 16V24L29.5 27.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}