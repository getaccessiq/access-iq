"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "../AnimatedGradient";

interface Violation {
  id: string;
  description: string;
  help: string;
  helpUrl: string;
  impact: "critical" | "serious" | "moderate" | "minor" | null;
  nodes: Array<{ html: string; target: string[] }>;
}

interface ImpactCounts {
  critical: number;
  serious: number;
  moderate: number;
  minor: number;
  total: number;
}

interface ScanResultsProps {
  results: {
    url: string;
    scannedAt: string;
    counts: ImpactCounts;
    violations: Violation[];
    passes: number;
    incomplete: number;
  };
  onRescan: () => void;
}

type LawBadge = {
  text: string;
  bg: string;
  color: string;
  border?: string;
};

type LawItem = {
  showFlag: boolean;
  borderColor: string;
  badges: LawBadge[];
  title: React.ReactNode;
  desc: string;
  cta: string;
};

type StatusLevel = "EXCELLENT" | "NEEDS_IMPROVEMENT" | "HIGH_RISK";

interface StatusTier {
  level: StatusLevel;
  color: string;
  colorEnd: string;
  label: string;
  badge: string;
  badgeBg: string;
  desc: string;
  cta: string;
}

const IMPACT_STYLE: Record<
  "critical" | "serious" | "moderate" | "minor",
  {
    borderColor: string;
    iconColor: string;
    badgeBg: string;
    badgeText: string;
    label: string;
    softBg: string;
    softBorder: string;
  }
> = {
  critical: {
    borderColor: "#ef4444",
    iconColor: "#ef4444",
    badgeBg: "#ef4444",
    badgeText: "#ffffff",
    label: "High priority",
    softBg: "rgba(239,68,68,0.05)",
    softBorder: "rgba(239,68,68,0.18)",
  },
  serious: {
    borderColor: "#f59e0b",
    iconColor: "#f59e0b",
    badgeBg: "#f59e0b",
    badgeText: "#ffffff",
    label: "High priority",
    softBg: "rgba(245,158,11,0.05)",
    softBorder: "rgba(245,158,11,0.18)",
  },
  moderate: {
    borderColor: "#ca8a04",
    iconColor: "#ca8a04",
    badgeBg: "#ca8a04",
    badgeText: "#ffffff",
    label: "Medium priority",
    softBg: "rgba(202,138,4,0.05)",
    softBorder: "rgba(202,138,4,0.18)",
  },
  minor: {
    borderColor: "#2563eb",
    iconColor: "#2563eb",
    badgeBg: "#2563eb",
    badgeText: "#ffffff",
    label: "Low priority",
    softBg: "rgba(37,99,235,0.05)",
    softBorder: "rgba(37,99,235,0.18)",
  },
};

const LAWS: LawItem[] = [
  {
    showFlag: true,
    borderColor: "#3b82f6",
    badges: [
      { text: "ADA", bg: "#3559b7", color: "#ffffff" },
      { text: "Federal Law", bg: "#eef2ff", color: "#3559b7" },
    ],
    title: (
      <>
        <span className="font-semibold text-[#0b0f1a]">ADA</span>{" "}
        <span className="text-gray-500">· Americans with Disabilities Act</span>
      </>
    ),
    desc: "Applies to most U.S. businesses. Non-compliance can result in lawsuits, financial penalties, and significant reputational damage.",
    cta: "Talk to an ADA expert",
  },

  {
    showFlag: true,
    borderColor: "#3b82f6",
    badges: [
      { text: "Section 508", bg: "#3559b7", color: "#ffffff" },
      { text: "Federal Agencies", bg: "#eef2ff", color: "#3559b7" },
    ],
    title: (
      <span className="font-semibold text-[#0b0f1a]">
        Section 508 requirements
      </span>
    ),
    desc: "Applies to federal agencies and contractors. Required for government-related digital services and procurement.",
    cta: "Contact a 508 specialist",
  },

  {
    showFlag: true,
    borderColor: "#3b82f6",
    badges: [
      { text: "ACA", bg: "#3559b7", color: "#ffffff" },
      { text: "Aviation", bg: "#eef2ff", color: "#3559b7" },
    ],
    title: (
      <>
        <span className="font-semibold text-[#0b0f1a]">ACA</span>{" "}
        <span className="text-gray-500">· Air Carrier Access Act</span>
      </>
    ),
    desc: "Applies to airlines and travel platforms. Accessibility is required across booking flows, apps, and self-service kiosks.",
    cta: "Talk to an accessibility expert",
  },

  {
    showFlag: false,
    borderColor: "#3b82f6",
    badges: [
      { text: "State Laws", bg: "#3559b7", color: "#ffffff" },
      { text: "High-risk states", bg: "#fef2f2", color: "#ef4444" },
    ],
    title: (
      <span className="font-semibold text-[#0b0f1a]">
        State-level accessibility laws
      </span>
    ),
    desc: "State regulations increase legal exposure, especially in high-risk states like California and New York.",
    cta: "Assess your legal risk",
  },
];

function getStatus(counts: ImpactCounts): StatusTier {
  if (counts.critical >= 1 || counts.serious > 5) {
    return {
      level: "HIGH_RISK",
      color: "#ef4444",
      colorEnd: "#f87171",
      label: "High ADA Compliance Risk",
      badge: "High Risk",
      badgeBg: "linear-gradient(135deg, #fb7185, #ef4444)",
      desc: "Critical accessibility barriers detected. Your website may not comply with WCAG and ADA requirements.",
      cta: "Request a professional WCAG audit to reduce legal risk.",
    };
  }

  if (counts.critical === 0 && counts.serious === 0 && counts.moderate <= 3) {
    return {
      level: "EXCELLENT",
      color: "#00d4aa",
      colorEnd: "#0088cc",
      label: "Strong Accessibility Signal",
      badge: "Excellent",
      badgeBg: "linear-gradient(135deg, #00d4aa, #0ea5e9)",
      desc: "No critical barriers were detected in this automated pass. That is a strong signal, although manual testing is still required for full compliance confidence.",
      cta: "",
    };
  }

  return {
    level: "NEEDS_IMPROVEMENT",
    color: "#f59e0b",
    colorEnd: "#eab308",
    label: "Needs Improvement",
    badge: "Needs Improvement",
    badgeBg: "linear-gradient(135deg, #f59e0b, #eab308)",
    desc: "Accessibility issues were detected during automated testing. Some barriers may affect users with disabilities and create avoidable business risk.",
    cta: "Fix issues now or request a professional accessibility audit.",
  };
}

function formatDateTime(value: string) {
  const date = new Date(value);

  return {
    date: date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}

function InfoCircleIcon({ color }: { color: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.7" />
      <path d="M10 9v4" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="10" cy="6.2" r="0.9" fill={color} />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 2.2h10a.8.8 0 01.8.8v5.7a.8.8 0 01-.8.8H5.4L2 11.9V3a.8.8 0 01.8-.8z"
        stroke="white"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="11" height="10" rx="1.5" stroke="#6b7280" strokeWidth="1.2" />
      <path d="M4 1v2M9 1v2" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M1 5h11" stroke="#6b7280" strokeWidth="1.2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7L5.5 10.5L12 3.5"
        stroke="#00d4aa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M1 7a6 6 0 0111.5-2.3M13 7a6 6 0 01-11.5 2.3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 1.5v3.2h-3.2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 12.5V9.3h3.2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2 6h8M7 3l3 3-3 3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LawIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v18M3 8l4 8H3l4-8zM17 8l4 8h-8l4-8z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 21h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function USFlagIcon() {
  const stripeH = 14 / 13;

  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 20 14"
      aria-label="US flag"
      className="shrink-0 rounded-[2px]"
    >
      {Array.from({ length: 13 }, (_, i) => (
        <rect
          key={i}
          x="0"
          y={i * stripeH}
          width="20"
          height={stripeH}
          fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
        />
      ))}
      <rect x="0" y="0" width="8" height={stripeH * 7} fill="#3C3B6E" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={1.3 + col * 2.7}
            cy={1.2 + row * 2}
            r="0.7"
            fill="white"
          />
        ))
      )}
    </svg>
  );
}

function NeedsImprovementIcon() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" fill="rgba(234,179,8,0.08)" />
      <circle cx="50" cy="50" r="36" fill="rgba(234,179,8,0.15)" />
      <path
        d="M50 28L73 68H27L50 28Z"
        fill="#eab308"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="47.5" y="40" width="5" height="16" rx="2.5" fill="white" />
      <circle cx="50" cy="62" r="3" fill="white" />
    </svg>
  );
}

function TrendDownIcon({ color }: { color: string }) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
      style={{
        background: `${color}14`,
        borderColor: `${color}22`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04)`,
      }}
      aria-hidden="true"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M2 5l5 6 3-3 6 7"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 15h3v-3"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function PremiumButton({
  children,
  href,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
}) {
  const styles =
    variant === "primary"
      ? {
          background: "linear-gradient(135deg, #00d4aa, #0ea5e9)",
          boxShadow: "0 12px 26px rgba(34,211,238,0.16)",
        }
      : variant === "danger"
      ? {
          background: "linear-gradient(135deg, #fb7185, #ef4444)",
          boxShadow: "0 12px 26px rgba(239,68,68,0.14)",
        }
      : {
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        };

  const className =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1120]";

  if (href) {
    return (
      <a href={href} className={className} style={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className} style={styles}>
      {children}
    </button>
  );
}

function ScoreDisplay({ status }: { status: StatusTier }) {
  const borderStyle =
    status.level === "HIGH_RISK"
      ? {
          border: "1px solid rgba(248,113,113,0.24)",
          background: "linear-gradient(180deg, rgba(239,68,68,0.06), rgba(239,68,68,0.03))",
        }
      : status.level === "EXCELLENT"
      ? {
          background: "linear-gradient(135deg, #00d4aa, #0ea5e9)",
          border: "none",
        }
      : {
          background: "linear-gradient(135deg, #f59e0b, #eab308)",
          border: "none",
        };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-5 w-full rounded-[24px] p-[1.5px]" style={borderStyle}>
        <div className="flex w-full flex-col items-center rounded-[22px] bg-[#0d1628] px-5 py-8 sm:px-6 sm:py-9">
          {status.level === "HIGH_RISK" && (
            <Image
              src="/images/Frame 2147230107.png"
              alt="High risk alert"
              width={100}
              height={100}
              className="mb-4 h-[90px] w-[90px] object-contain sm:h-[100px] sm:w-[100px]"
            />
          )}

          {status.level === "EXCELLENT" && (
            <Image
              src="/images/Frame 2147230108.png"
              alt="Excellent accessibility status"
              width={100}
              height={100}
              className="mb-4 h-[90px] w-[90px] object-contain sm:h-[100px] sm:w-[100px]"
            />
          )}

          {status.level === "NEEDS_IMPROVEMENT" && (
            <div className="mb-4">
              <NeedsImprovementIcon />
            </div>
          )}

          <p className="text-center text-[20px] font-semibold tracking-[-0.02em] text-white sm:text-[22px]">
            {status.label}
          </p>
        </div>
      </div>

      <span
        className="mb-4 rounded-full px-5 py-2 text-[12px] font-semibold tracking-[0.01em] text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]"
        style={{ background: status.badgeBg }}
      >
        {status.badge}
      </span>

      <p className="max-w-[330px] text-center text-[13px] leading-relaxed text-gray-300">
        {status.desc}
      </p>
    </div>
  );
}

export default function ScanResults({ results, onRescan }: ScanResultsProps) {
  const { url, scannedAt, counts, violations, passes } = results;
  const status = getStatus(counts);
  const { date, time } = formatDateTime(scannedAt);

  const visitorsImpacted = Math.max(
    Math.round((violations.length * 1200 + 5000) / 100) * 100,
    0
  );

  const issueStats = [
    { label: "Critical", value: counts.critical, color: "#ef4444" },
    { label: "Serious", value: counts.serious, color: "#f59e0b" },
    { label: "Moderate", value: counts.moderate, color: "#ca8a04" },
    { label: "Minor", value: counts.minor, color: "#2563eb" },
    { label: "Total", value: counts.total, color: "#475569" },
  ];

  const impactCardBg =
    status.level === "HIGH_RISK"
      ? "rgba(239,68,68,0.08)"
      : status.level === "NEEDS_IMPROVEMENT"
      ? "rgba(245,158,11,0.08)"
      : "rgba(0,212,170,0.08)";

  const impactCardBorder =
    status.level === "HIGH_RISK"
      ? "1px solid rgba(239,68,68,0.24)"
      : status.level === "NEEDS_IMPROVEMENT"
      ? "1px solid rgba(245,158,11,0.24)"
      : "1px solid rgba(0,212,170,0.24)";

  return (
    <main className="bg-[#07101c]">
      <section className="relative overflow-hidden bg-[#07101c] pb-10 pt-[72px] sm:pb-14 sm:pt-[84px]">
        <AnimatedGradient />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 82% 82% at 50% 26%, black 42%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 82% 82% at 50% 26%, black 42%, transparent 82%)",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-400/[0.05] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
          <header className="mb-7 flex flex-col items-center pt-2 text-center sm:mb-8 sm:pt-3">
            <div
              className="mb-4 mt-4 inline-flex rounded-full p-[1px] shadow-[0_0_22px_rgba(0,212,170,0.08)]"
              style={{ background: "linear-gradient(135deg, #00d4aa, #0ea5e9)" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#091120]/95 px-4 py-2 backdrop-blur-xl sm:px-5">
                <CheckIcon />
                <span className="text-[13px] font-semibold text-white">Scan Complete</span>
              </div>
            </div>



            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="max-w-3xl break-words text-[14px] text-gray-300">
                Scanning: <span className="font-medium text-white">{url}</span>
              </p>

              <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-center text-[13px] text-gray-400">
                <CalendarIcon />
                <span>
                  Analyzed on {date} at {time}
                </span>
              </p>
            </div>
          </header>

          <div className="mx-auto mb-6 grid max-w-5xl gap-5 md:grid-cols-[1.05fr_0.95fr]">
            <section
              aria-labelledby="scan-impact-title"
              className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,17,32,0.98),rgba(10,14,25,0.98))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <TrendDownIcon color={status.color} />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Commercial impact
                  </p>
                  <h2
                    id="scan-impact-title"
                    className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-white"
                  >
                    The invisible costs of accessibility gaps
                  </h2>
                </div>
              </div>

              <p className="mb-5 text-[14px] leading-relaxed text-gray-300">
                Accessibility issues do not only affect compliance. They can also reduce trust,
                weaken conversion, lower retention, and create unnecessary legal exposure.
              </p>

              <div
                className="mb-4 rounded-2xl p-4 sm:p-5"
                style={{
                  background: impactCardBg,
                  border: impactCardBorder,
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04), 0 16px 34px ${status.color}10`,
                }}
              >
                <p className="mb-1 flex flex-wrap items-end gap-x-2 gap-y-1">
                  <span
                    className="text-[30px] font-semibold tracking-[-0.03em] sm:text-[38px]"
                    style={{ color: status.color }}
                  >
                    {visitorsImpacted.toLocaleString()}
                  </span>
                  <span className="pb-1 text-[13px] text-gray-300">users lost / month</span>
                </p>

                <p className="text-[13px] leading-relaxed text-gray-300">
                  With {(passes + violations.length).toLocaleString()} estimated monthly visitors,
                  your site could be excluding approximately {visitorsImpacted.toLocaleString()}{" "}
                  users due to digital barriers.
                </p>
              </div>

              <div className="mb-5 rounded-2xl border border-sky-400/20 bg-sky-400/[0.06] p-4 sm:p-5">
                <p className="text-[13px] leading-relaxed text-gray-300">
                  Every excluded user can mean lower revenue, weaker engagement, reduced brand
                  trust, and a poorer experience for real customers.
                </p>
              </div>

              {status.cta ? (
                <p className="mb-5 text-[13px] font-medium" style={{ color: status.color }}>
                  {status.cta}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <PremiumButton onClick={onRescan} variant="secondary">
                  <RefreshIcon />
                  Scan again
                </PremiumButton>

                {status.level !== "EXCELLENT" ? (
                  <PremiumButton
                    href="/contact"
                    variant={status.level === "HIGH_RISK" ? "danger" : "primary"}
                  >
                    Solve the issue
                    <ArrowRightIcon />
                  </PremiumButton>
                ) : null}
              </div>
            </section>

            <section
              aria-labelledby="scan-status-title"
              className="flex items-center justify-center rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,17,32,0.98),rgba(10,14,25,0.98))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-6"
            >
              <div className="sr-only" id="scan-status-title">
                Accessibility status summary
              </div>
              <ScoreDisplay status={status} />
            </section>
          </div>
        </div>
      </section>

      <section
        className="relative bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_34%,#ffffff_100%)] pb-20 sm:pb-24"
        style={{
          borderRadius: "28px 28px 0 0",
          marginTop: "-28px",
          zIndex: 2,
          position: "relative",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6 sm:pt-24">
          <section aria-labelledby="issue-breakdown-title" className="mb-14">
            <div className="mb-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Summary
              </p>
              <h2
                id="issue-breakdown-title"
                className="mt-2 text-[28px] font-semibold tracking-[-0.03em] text-[#0b0f1a] sm:text-[34px]"
              >
                Issue Breakdown
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {issueStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border bg-white p-4 text-center shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
                  style={{
                    borderColor: `${item.color}22`,
                    background: `linear-gradient(180deg, ${item.color}06 0%, rgba(255,255,255,0.98) 100%)`,
                  }}
                >
                  <p
                    className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[30px]"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="key-issues-title" className="mb-16">
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Top findings
              </p>
              <h2
                id="key-issues-title"
                className="mt-2 text-[28px] font-semibold tracking-[-0.03em] text-[#0b0f1a] sm:text-[34px]"
              >
                Key Issues Found
              </h2>
            </div>

            {violations.length === 0 ? (
              <div className="rounded-[24px] border border-emerald-200 bg-[linear-gradient(180deg,#f0fdf4_0%,#ecfdf5_100%)] p-6 text-center shadow-[0_14px_34px_rgba(16,185,129,0.06)] sm:p-8">
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600"
                  aria-hidden="true"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12.5l4.2 4.2L19 7"
                      stroke="currentColor"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[20px] font-semibold tracking-[-0.02em] text-emerald-900">
                  No automated issues detected
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-emerald-800">
                  No issues were found in this automated pass. Manual testing is still recommended
                  for full WCAG confidence.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {violations.map((violation) => {
                  const impact = (violation.impact || "minor") as
                    | "critical"
                    | "serious"
                    | "moderate"
                    | "minor";
                  const style = IMPACT_STYLE[impact];

                  return (
                    <article
                      key={violation.id}
                      className="group overflow-hidden rounded-[20px] border bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                      style={{
                        borderColor: "#e8edf3",
                        borderLeft: `3px solid ${style.borderColor}`,
                      }}
                    >
                      <div className="px-4 py-4 sm:px-5">
                        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                          <div className="flex min-w-0 items-center gap-2">
                            <InfoCircleIcon color={style.iconColor} />
                            <h3 className="text-[15px] font-semibold text-[#0b0f1a]">
                              {violation.help || violation.id.replace(/-/g, " ")}
                            </h3>
                          </div>

                          <span
                            className="inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold leading-none shadow-[0_6px_14px_rgba(15,23,42,0.06)]"
                            style={{
                              background: style.badgeBg,
                              color: style.badgeText,
                            }}
                          >
                            {style.label}
                          </span>
                        </div>

                        <div
                          className="rounded-[16px] border px-4 py-3 transition-colors duration-300 group-hover:bg-white"
                          style={{
                            background: style.softBg,
                            borderColor: style.softBorder,
                          }}
                        >
                          <p className="text-[13px] leading-relaxed text-gray-600">
                            {violation.description}
                          </p>

                          {violation.helpUrl ? (
                            <a
                              href={violation.helpUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-sky-700 transition-colors hover:text-sky-800"
                            >
                              Learn more
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path
                                  d="M7 17L17 7M17 7H8M17 7V16"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>

          <section
            aria-labelledby="digital-laws-title"
            className="rounded-[26px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-6 md:p-8"
            style={{
              borderColor: "#7dd3fc",
              background:
                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,0.96) 100%)",
            }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, #5eead4, #60a5fa)",
                    boxShadow: "0 14px 30px rgba(96,165,250,0.18)",
                  }}
                  aria-hidden="true"
                >
                  <LawIcon />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Legal context
                  </p>
                  <h2
                    id="digital-laws-title"
                    className="mt-2 text-[28px] font-semibold tracking-[-0.03em] text-[#0b0f1a] sm:text-[34px]"
                  >
                    Digital accessibility laws
                  </h2>
                  <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-gray-500">
                    The main legal frameworks governing digital accessibility across public,
                    private, and regulated sectors.
                  </p>
                </div>
              </div>

              
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              {LAWS.map((law, index) => (
                <article
                  key={index}
                  className="overflow-hidden rounded-[20px] border bg-[linear-gradient(180deg,#f5f8fc_0%,#eef3f9_100%)] shadow-[0_10px_22px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_16px_30px_rgba(15,23,42,0.07)]"
                  style={{
                    borderColor: "#dbe5f0",
                    borderLeft: `3px solid ${law.borderColor}`,
                  }}
                >
                  <div className="p-4">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {law.showFlag ? <USFlagIcon /> : null}

                      {law.badges.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                          style={{
                            background: badge.bg,
                            color: badge.color,
                            border:
                              typeof badge.border === "string"
                                ? `1px solid ${badge.border}`
                                : "none",
                          }}
                        >
                          {badge.text}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-2 text-[14px] leading-snug text-[#0b0f1a]">{law.title}</h3>

                    <p className="mb-4 text-[13px] leading-relaxed text-gray-600">{law.desc}</p>

                    <a
                      href="/contact"
                      className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#3559b7] px-4 py-2 text-[12px] font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
                    >
                      <ChatIcon />
                      {law.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div
              className="rounded-[18px] px-4 py-4"
              style={{
                borderLeft: "3px solid #3b82f6",
                background: "#f1f5f9",
              }}
            >
              <p className="text-center text-[13px] leading-relaxed text-gray-600">
                <span className="font-medium text-[#0b0f1a]">Important:</span> Non-compliance can lead to fines, lawsuits, and significant damage to your brand.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}