"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function CertificationPortal() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 sm:py-28">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9fbff] to-[#f4f7fb]" />
        <div className="absolute left-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute right-[-8%] top-[15%] h-[320px] w-[320px] rounded-full bg-blue-200/25 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <ScrollReveal animation="fade-in-up">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              Certification Portal
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0b1220] sm:text-4xl lg:text-[52px]">
              Your certification portal
              <span className="block bg-gradient-to-r from-[#0b1220] via-[#0ea5c6] to-[#22d9c9] bg-clip-text text-transparent">
                and continuous monitoring
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Access audit records, compliance status, issue tracking, and
              continuous monitoring in one unified system built for real teams.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                "Reduce legal risk",
                "Meet WCAG 2.2 AA",
                "Stay compliant continuously",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-[0_8px_20px_rgba(15,23,42,0.04)] sm:text-sm"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* MAIN GRID */}
        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT - DUMMY PLACEHOLDER */}
          <ScrollReveal animation="fade-in-left">
            <div className="relative h-full">
              <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_62%)] blur-3xl" />

              <div className="relative flex h-full min-h-[540px] overflow-hidden rounded-[34px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="relative flex w-full flex-1 overflow-hidden rounded-[26px] border border-slate-200 bg-[linear-gradient(135deg,#eef7fb_0%,#f8fbff_45%,#edf8f5_100%)]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,190,255,0.14),transparent_30%)]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute left-6 right-6 top-6 h-10 rounded-2xl border border-white/70 bg-white/70 shadow-[0_8px_20px_rgba(15,23,42,0.04)] backdrop-blur-sm"
                  />

                  <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <MiniStat label="Status" value="WCAG Ready" />
                      <MiniStat label="Score" value="94%" />
                      <MiniStat label="Issues" value="12 Open" />
                    </div>

                    <div className="mt-8 grid flex-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                      <div className="rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                          Portal Preview
                        </div>
                        <h3 className="mt-3 text-xl font-semibold text-[#0b1220] sm:text-2xl">
                          Dashboard placeholder
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                          Replace this block later with your real certification
                          portal screenshot. The size is already optimized for
                          layout balance.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          <SoftPanel title="Audit history" />
                          <SoftPanel title="Issue tracking" />
                          <SoftPanel title="Compliance log" />
                          <SoftPanel title="Monthly reports" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <SoftCard title="Monitoring feed" text="Alerts, re-checks, and issue updates in one place." />
                        <SoftCard title="Team visibility" text="Built for product, legal, compliance, and engineering." />
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 sm:text-sm">
                      <span className="rounded-full bg-white/70 px-3 py-1.5">
                        Product preview
                      </span>
                      <span className="rounded-full bg-white/70 px-3 py-1.5">
                        Replace with real screenshot
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE */}
          <ScrollReveal animation="fade-in-right">
            <div className="flex h-full flex-col gap-6">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <FeatureCard
                  title="Audit ID & certification"
                  text="Full audit reference with compliance status, issue overview, and report access."
                />

                <FeatureCard
                  title="Continuous monitoring"
                  text="Detect new accessibility issues automatically as your product evolves."
                />
              </div>

              <div className="relative flex-1 rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Visibility & Governance
                </p>

                <h3 className="mt-3 text-[24px] font-semibold leading-tight text-[#0b1220]">
                  One place to track accessibility progress.
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  Centralize audit history, compliance status, and monitoring
                  insights across your entire accessibility workflow.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Audit history and current status",
                    "Monitoring visibility across your site",
                    "Shared access for internal teams",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-[#0b1220] transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Request Access
                  </Link>

                  <Link
                    href="/pricing"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-[#22d9c9] to-[#25beff] px-6 py-2.5 text-sm font-semibold text-[#06101a] shadow-[0_10px_30px_rgba(36,191,255,0.25)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    View Plans
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* FEATURE CARD */
function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-700">
        <span aria-hidden="true">◔</span>
      </div>

      <h4 className="text-[16px] font-semibold text-[#0b1220]">{title}</h4>

      <p className="mt-2 text-[14px] leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] border border-white/70 bg-white/70 px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-sm">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-[#0b1220] sm:text-[15px]">
        {value}
      </div>
    </div>
  );
}

function SoftPanel({ title }: { title: string }) {
  return (
    <div className="rounded-[16px] border border-slate-200 bg-[#f8fbfd] px-4 py-4 text-sm font-medium text-slate-600">
      {title}
    </div>
  );
}

function SoftCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/70 bg-white/75 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-sm">
      <div className="text-sm font-semibold text-[#0b1220]">{title}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}