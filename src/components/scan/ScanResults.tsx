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

// Impact → left border color, icon color, badge style, badge label
const IMPACT_STYLE: Record<string, { borderColor: string; iconColor: string; badgeBg: string; badgeText: string; label: string }> = {
  critical: { borderColor: "#ef4444", iconColor: "#ef4444", badgeBg: "#ef4444",   badgeText: "#fff",     label: "High priority" },
  serious:  { borderColor: "#f97316", iconColor: "#f97316", badgeBg: "#f97316",   badgeText: "#fff",     label: "High priority" },
  moderate: { borderColor: "#eab308", iconColor: "#eab308", badgeBg: "#eab308",   badgeText: "#fff",     label: "Medium priority" },
  minor:    { borderColor: "#3b82f6", iconColor: "#3b82f6", badgeBg: "#3b82f6",   badgeText: "#fff",     label: "Low priority" },
};

const LAWS = [
  {
    showFlag: true,
    borderColor: "#1e3a5f",
    badges: [{ text: "ADA", bg: "#1e3a5f", color: "#fff" }, { text: "Europe", bg: "transparent", color: "#1e3a5f", border: "#1e3a5f" }],
    title: <><span className="font-bold text-[#0b0f1a] text-[16px]">ADA</span>{" "}<span className="font-normal text-gray-500 text-[14px]">Americans with</span>{" "}<span className="font-bold text-[#0b0f1a] text-[16px]">Disabilities Act</span></>,
    desc: "Requires websites and apps of public and many private businesses to be accessible",
    cta: "Talk to an ADA expert",
  },
  {
    showFlag: true,
    borderColor: "#1e3a5f",
    badges: [{ text: "ADA", bg: "#1e3a5f", color: "#fff" }, { text: "Europe", bg: "transparent", color: "#1e3a5f", border: "#1e3a5f" }],
    title: <span className="font-bold text-[#0b0f1a] text-[16px]">Section 508</span>,
    desc: "Mandates that federal government websites and digital content be accessible",
    cta: "Contact a 508 specialist",
  },
  {
    showFlag: true,
    borderColor: "#1e3a5f",
    badges: [{ text: "ADA", bg: "#1e3a5f", color: "#fff" }, { text: "Europe", bg: "transparent", color: "#1e3a5f", border: "#1e3a5f" }],
    title: <><span className="font-bold text-[#0b0f1a] text-[16px]">ACA</span>{" "}<span className="font-normal text-gray-500 text-[14px]">Air Carrier Access</span>{" "}<span className="font-bold text-[#0b0f1a] text-[16px]">Act</span></>,
    desc: "Requires all airline websites, apps, and Kiosks to be accessible to passengers with disabilities",
    cta: "Contact a 508 specialist",
  },
  {
    showFlag: false,
    borderColor: "#1e3a5f",
    badges: [{ text: "State Laws", bg: "#1e3a5f", color: "#fff" }, { text: "Varies by state", bg: "transparent", color: "#ea580c", border: "#ea580c" }],
    title: <span className="font-bold text-[#0b0f1a] text-[16px]">Section 508</span>,
    desc: "Several states have their own digital accessibility requirements (e.g. California, New York, Colorado)",
    cta: "Find your state consultant",
  },
];

function InfoCircleIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M10 9v5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="0.75" fill={color} />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 2h10a1 1 0 011 1v6a1 1 0 01-1 1H5l-3 2V3a1 1 0 011-1z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function USFlagIcon() {
  const stripeH = 14 / 13;
  const stripes = Array.from({ length: 13 }, (_, i) => i);
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: 2, flexShrink: 0, display: "inline-block" }} aria-label="US flag">
      {stripes.map((i) => (
        <rect key={i} x="0" y={i * stripeH} width="20" height={stripeH} fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
      ))}
      <rect x="0" y="0" width="8" height={stripeH * 7} fill="#3C3B6E" />
      {[0,1,2].map((row) =>
        [0,1,2].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={1.3 + col * 2.7}
            cy={1.2 + row * 2.0}
            r="0.7"
            fill="white"
          />
        ))
      )}
    </svg>
  );
}

// --- Needs Improvement amber warning icon (inline SVG) ---
function NeedsImprovementIcon() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer glow circle */}
      <circle cx="50" cy="50" r="48" fill="rgba(234,179,8,0.08)" />
      {/* Inner circle */}
      <circle cx="50" cy="50" r="36" fill="rgba(234,179,8,0.15)" />
      {/* Warning triangle */}
      <path
        d="M50 28L73 68H27L50 28Z"
        fill="#eab308"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Exclamation mark */}
      <rect x="47.5" y="40" width="5" height="16" rx="2.5" fill="white" />
      <circle cx="50" cy="62" r="3" fill="white" />
    </svg>
  );
}

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

function getStatus(counts: ImpactCounts): StatusTier {
  if (counts.critical >= 1 || counts.serious > 5) {
    return {
      level: "HIGH_RISK",
      color: "#ef4444", colorEnd: "#f87171",
      label: "High ADA Compliance Risk",
      badge: "High Risk",
      badgeBg: "linear-gradient(135deg, #f87171, #ef4444)",
      desc: "Critical accessibility barriers detected. Your website may not comply with WCAG and ADA requirements.",
      cta: "Request a professional WCAG audit to reduce legal risk.",
    };
  }
  if (counts.critical === 0 && counts.serious === 0 && counts.moderate <= 3) {
    return {
      level: "EXCELLENT",
      color: "#00d4aa", colorEnd: "#0088cc",
      label: "Excellent",
      badge: "Excellent",
      badgeBg: "linear-gradient(135deg, #00d4aa, #0088cc)",
      desc: "No critical accessibility barriers detected. Your website passes many automated accessibility checks.",
      cta: "",
    };
  }
  return {
    level: "NEEDS_IMPROVEMENT",
    color: "#eab308", colorEnd: "#f59e0b",
    label: "Needs Improvement",
    badge: "Needs Improvement",
    badgeBg: "linear-gradient(135deg, #eab308, #f59e0b)",
    desc: "Accessibility issues were detected during automated testing. Some barriers may affect users with disabilities.",
    cta: "Fix issues or request a professional accessibility audit.",
  };
}

function ScoreDisplay({ status }: { status: StatusTier }) {
  const borderStyle = status.level === "HIGH_RISK"
    ? { border: "1px solid rgba(248,113,113,0.2)", background: "transparent" }
    : status.level === "EXCELLENT"
    ? { background: `linear-gradient(135deg, #00d4aa, #0088cc)`, border: "none" }
    : { background: `linear-gradient(135deg, #eab308, #f59e0b)`, border: "none" };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full rounded-2xl p-[1.5px] mb-5" style={borderStyle}>
        <div className="w-full rounded-2xl flex flex-col items-center py-8 px-6" style={{ background: "#0d1628" }}>
          {status.level === "HIGH_RISK" && (
            <Image
              src="/images/Frame 2147230107.png"
              alt="High risk alert"
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-contain mb-3"
            />
          )}
          {status.level === "EXCELLENT" && (
            <Image
              src="/images/Frame 2147230108.png"
              alt="Excellent"
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-contain mb-3"
            />
          )}
          {status.level === "NEEDS_IMPROVEMENT" && (
            <div className="mb-3">
              <NeedsImprovementIcon />
            </div>
          )}
          <p className="text-white text-[20px] font-bold text-center">{status.label}</p>
        </div>
      </div>

      {/* Badge */}
      <span
        className="text-white text-[13px] font-semibold px-6 py-2 rounded-full mb-4"
        style={{ background: status.badgeBg }}
      >
        {status.badge}
      </span>

      {/* Description */}
      <p className="text-gray-400 text-[13px] text-center leading-relaxed max-w-[280px]">{status.desc}</p>
    </div>
  );
}

function TrendDownIcon({ color }: { color: string }) {
  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: `${color}22` }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 5l5 6 3-3 6 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 15h3v-3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function ScanResults({ results, onRescan }: ScanResultsProps) {
  const { url, scannedAt, counts, violations, passes } = results;
  const status = getStatus(counts);

  const formattedDate = new Date(scannedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const formattedTime = new Date(scannedAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const visitorsImpacted = Math.round((violations.length * 1200 + 5000) / 100) * 100;

  const cardBg = status.level === "HIGH_RISK" ? "rgba(239,68,68,0.08)"
    : status.level === "NEEDS_IMPROVEMENT" ? "rgba(234,179,8,0.08)"
    : "rgba(0,212,170,0.08)";
  const cardBorder = status.level === "HIGH_RISK" ? "1px solid rgba(239,68,68,0.3)"
    : status.level === "NEEDS_IMPROVEMENT" ? "1px solid rgba(234,179,8,0.3)"
    : "1px solid rgba(0,212,170,0.3)";

  return (
    <div>
      {/* -- Dark top section -- */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pb-16 pt-[88px]">
        <AnimatedGradient />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "44px 44px", maskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 40%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 40%, transparent 80%)" }} />

        <div className="relative z-10 container mx-auto px-4">
          {/* Badge + meta */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-flex rounded-full p-[1px] mb-5" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full" style={{ background: "#080c18" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 3.5" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-white text-[13px] font-medium">Scan Complete</span>
              </div>
            </div>
            <p className="text-gray-300 text-[14px] mb-1">Scanning: <span className="text-white font-medium">{url}</span></p>
            <p className="text-gray-500 text-[13px] inline-flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="1" y="2" width="11" height="10" rx="1.5" stroke="#6b7280" strokeWidth="1.2" fill="none"/>
                <path d="M4 1v2M9 1v2" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M1 5h11" stroke="#6b7280" strokeWidth="1.2"/>
              </svg>
              Analyzed on {formattedDate} at {formattedTime}
            </p>
          </div>

          {/* Two-column cards */}
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-8">

            {/* Left card — unified, color driven by status */}
            <div className="rounded-2xl p-6 border border-white/10" style={{ background: "#0d1120" }}>
              <div className="flex items-center gap-3 mb-3">
                <TrendDownIcon color={status.color} />
                <h3 className="text-white text-[15px] font-semibold">The Invisible Costs</h3>
              </div>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
                Accessibility issues are not just about compliance, but also missed opportunities.
              </p>

              {/* Stat card */}
              <div className="rounded-xl p-4 mb-3" style={{ background: cardBg, border: cardBorder }}>
                <div className="mb-1">
                  <span className="text-[32px] font-bold" style={{ color: status.color }}>
                    {visitorsImpacted.toLocaleString()}
                  </span>
                  <span className="text-gray-400 text-[13px] ml-2">users lost/month</span>
                </div>
                <p className="text-gray-400 text-[12px] leading-relaxed">
                  With {(passes + violations.length).toLocaleString()} monthly visitors, you could be losing approximately {visitorsImpacted.toLocaleString()} users due to digital barriers.
                </p>
              </div>

              {/* Info card */}
              <div className="rounded-xl p-4 mb-5" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  Every excluded user means lost revenue, reduced engagement, and weakened brand trust. Barriers directly impact your bottom line.
                </p>
              </div>

              {/* CTA text */}
              {status.cta && (
                <p className="text-[13px] font-medium mb-4" style={{ color: status.color }}>
                  {status.cta}
                </p>
              )}

              {/* Buttons row: Scan again (always) + Solve the issue (red/yellow only) */}
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={onRescan}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7a6 6 0 0111.5-2.3M13 7a6 6 0 01-11.5 2.3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12.5 1.5v3.2h-3.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.5 12.5V9.3h3.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Scan again
                </button>

                {status.level !== "EXCELLENT" && (
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
                    style={{ background: status.level === "HIGH_RISK" ? "linear-gradient(135deg, #f87171, #ef4444)" : "linear-gradient(135deg, #eab308, #f59e0b)" }}
                  >
                    Solve the issue
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Right card — status display */}
            <div className="rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center" style={{ background: "#0d1120" }}>
              <ScoreDisplay status={status} />
            </div>
          </div>

        </div>
      </section>

      {/* -- White lower section -- */}
      <section className="relative bg-white pb-24" style={{ borderRadius: "24px 24px 0 0", marginTop: "-24px", zIndex: 2, position: "relative" }}>
        <div className="container mx-auto px-4 pt-16">

          {/* Issue Breakdown Summary */}
          <div className="mb-10">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0b0f1a] mb-6">Issue Breakdown</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { label: "Critical", count: counts.critical, color: "#ef4444" },
                { label: "Serious", count: counts.serious, color: "#f97316" },
                { label: "Moderate", count: counts.moderate, color: "#eab308" },
                { label: "Minor", count: counts.minor, color: "#3b82f6" },
                { label: "Total Issues", count: counts.total, color: "#6b7280" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-4 text-center"
                  style={{ border: `1px solid ${item.color}30`, background: `${item.color}08` }}
                >
                  <p className="text-[28px] font-bold" style={{ color: item.color }}>{item.count}</p>
                  <p className="text-gray-600 text-[13px] font-medium mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Issues Found */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0b0f1a] mb-8">{results.violations.length} Key Issues Found</h2>

            {violations.length === 0 ? (
              <div className="rounded-2xl p-8 border border-green-100 bg-green-50 text-center">
                <div className="text-4xl mb-3">&#10003;</div>
                <p className="text-green-700 font-semibold text-lg">No automated issues detected</p>
                <p className="text-green-600 text-[14px] mt-1">No issues were found during the automated scan. Manual testing is still recommended for full compliance.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {violations.map((v) => {
                  const impact = v.impact || "minor";
                  const s = IMPACT_STYLE[impact] || IMPACT_STYLE.minor;
                  return (
                    <div
                      key={v.id}
                      className="rounded-xl overflow-hidden"
                      style={{ border: "1px solid #e5e7eb", borderLeft: `4px solid ${s.borderColor}` }}
                    >
                      <div className="bg-white px-5 py-4">
                        {/* Title row */}
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <InfoCircleIcon color={s.iconColor} />
                          <span className="text-[#0b0f1a] text-[15px] font-semibold">
                            {v.help || v.id.replace(/-/g, " ")}
                          </span>
                          <span
                            className="text-[12px] font-semibold px-3 py-0.5 rounded-full"
                            style={{ background: s.badgeBg, color: s.badgeText }}
                          >
                            {s.label}
                          </span>
                        </div>
                        {/* Description */}
                        <p className="text-gray-500 text-[13px] leading-relaxed ml-8">
                          {v.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Mandatory Notice */}
          <div className="mb-16 rounded-xl p-5" style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderLeft: "4px solid #3b82f6" }}>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <span className="font-bold text-[#0b0f1a]">Important:</span>{" "}
              Automated scans detect approximately 30–40% of accessibility issues. Full WCAG 2.2 compliance requires manual expert testing.
            </p>
            {status.level === "EXCELLENT" && (
              <p className="text-[13px] text-gray-500 leading-relaxed mt-2">
                Automated scans detect only part of accessibility issues. Manual WCAG testing is recommended for full compliance.
              </p>
            )}
          </div>

          {/* Digital accessibility laws */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              border: "2px solid transparent",
              background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #00d4aa, #0088cc) border-box",
            }}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v18M3 8l4 8H3l4-8zM17 8l4 8h-8l4-8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 21h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-[24px] md:text-[28px] font-bold text-[#0b0f1a] leading-tight">Digital accessibility laws</h2>
                <p className="text-gray-500 text-[14px] mt-1">The main European laws governing digital accessibility:</p>
              </div>
            </div>

            {/* 2x2 law cards grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {LAWS.map((law, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ background: "#eff6ff", border: "1px solid #e5e7eb", borderLeft: `4px solid ${law.borderColor}` }}
                >
                  <div className="p-5">
                  {/* Flag + badges */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {law.showFlag && <USFlagIcon />}
                    {law.badges.map((b, bi) => (
                      <span
                        key={bi}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{
                          background: b.bg,
                          color: b.color,
                          border: b.border ? `1.5px solid ${b.border}` : "none",
                        }}
                      >
                        {b.text}
                      </span>
                    ))}
                  </div>
                  {/* Title */}
                  <h3 className="text-[#0b0f1a] text-[16px] mb-2">{law.title}</h3>
                  {/* Desc */}
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{law.desc}</p>
                  {/* CTA button */}
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[13px] font-medium hover:opacity-90 transition-opacity"
                    style={{ background: "#1e3a5f" }}
                  >
                    <ChatIcon />
                    {law.cta}
                  </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Important note */}
            <div
              className="rounded-lg px-5 py-4"
              style={{ borderLeft: "4px solid #3b82f6", background: "#eff6ff" }}
            >
              <p className="text-[13px] text-gray-600 leading-relaxed">
                <span className="font-bold text-[#0b0f1a]">Important:</span> Non-compliance with any of these laws can lead to lawsuits, fines, and damage to your brand.{" "}
                Deadlines and specific requirements vary by law and state.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}