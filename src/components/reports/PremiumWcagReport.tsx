"use client";

import Link from "next/link";
import { useId, type ReactNode } from "react";

type SummaryStat = {
  label: string;
  value: string;
  detail: string;
};

type SeverityItem = {
  label: string;
  count: number;
  width: string;
  tone: string;
  glow: string;
};

type ReadinessItem = {
  label: string;
  value: string;
  tone: string;
};

type ComplianceCheck = {
  label: string;
  status: string;
  color: string;
  dot: string;
};

type Finding = {
  id: string;
  title: string;
  severity: "Critical" | "Serious" | "Moderate" | "Minor";
  area: string;
  impact: string;
  evidence: string;
  remediation: string;
  status: "Open" | "In progress" | "Resolved";
};

type TimelineItem = {
  label: string;
  detail: string;
  state: "Complete" | "Pending";
};

export default function PremiumWcagReport() {
  const progressGradientId = useId();

  const summaryStats: SummaryStat[] = [
    {
      label: "Pages reviewed",
      value: "18",
      detail: "Templates, key flows, and conversion paths",
    },
    {
      label: "Issues found",
      value: "47",
      detail: "Validated across components and interactive states",
    },
    {
      label: "Critical",
      value: "6",
      detail: "Immediate blockers for accessibility and compliance",
    },
    {
      label: "WCAG target",
      value: "2.2 AA",
      detail: "Target standard for this audit scope",
    },
  ];

  const severityBreakdown: SeverityItem[] = [
    {
      label: "Critical",
      count: 6,
      width: "28%",
      tone: "bg-[#ff6b6b]",
      glow: "shadow-[0_0_22px_rgba(255,107,107,0.35)]",
    },
    {
      label: "Serious",
      count: 14,
      width: "62%",
      tone: "bg-[#ff9f43]",
      glow: "shadow-[0_0_22px_rgba(255,159,67,0.28)]",
    },
    {
      label: "Moderate",
      count: 17,
      width: "78%",
      tone: "bg-[#feca57]",
      glow: "shadow-[0_0_22px_rgba(254,202,87,0.22)]",
    },
    {
      label: "Minor",
      count: 10,
      width: "46%",
      tone: "bg-[#2dd4bf]",
      glow: "shadow-[0_0_22px_rgba(45,212,191,0.24)]",
    },
  ];

  const topIssues = [
    "Missing form labels in lead capture flow",
    "Insufficient visible focus states in header and CTA buttons",
    "Low text contrast in pricing and footer modules",
    "Modal focus order inconsistencies",
    "Heading hierarchy skips on content templates",
  ];

  const auditScope = [
    "Homepage, pricing, contact, and booking flow",
    "Primary navigation, footer, and global CTA patterns",
    "Forms, modals, alerts, and interactive components",
    "Key design system components across core templates",
  ];

  const testingMethods = [
    "Manual keyboard-only navigation",
    "NVDA and VoiceOver screen-reader validation",
    "Focus order and interactive state testing",
    "Color contrast and text hierarchy review",
    "Responsive layout and zoom behavior checks",
  ];

  const assistiveTech = [
    "NVDA",
    "JAWS",
    "VoiceOver",
    "Keyboard-only",
    "Zoom 200%",
  ];

  const readiness: ReadinessItem[] = [
    {
      label: "Audit status",
      value: "Not compliant",
      tone: "border-rose-400/30 bg-rose-400/10 text-rose-100",
    },
    {
      label: "Executive risk",
      value: "Elevated",
      tone: "border-amber-400/30 bg-amber-400/10 text-amber-100",
    },
    {
      label: "Remediation priority",
      value: "Immediate",
      tone: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    },
  ];

  const complianceChecks: ComplianceCheck[] = [
    {
      label: "Forms & labels",
      status: "Not compliant",
      color: "text-rose-200",
      dot: "bg-rose-400",
    },
    {
      label: "Keyboard navigation",
      status: "Needs remediation",
      color: "text-amber-200",
      dot: "bg-amber-400",
    },
    {
      label: "Focus visibility",
      status: "Needs remediation",
      color: "text-amber-200",
      dot: "bg-amber-400",
    },
    {
      label: "Color contrast",
      status: "Partially aligned",
      color: "text-cyan-200",
      dot: "bg-cyan-400",
    },
    {
      label: "Heading structure",
      status: "Partially aligned",
      color: "text-cyan-200",
      dot: "bg-cyan-400",
    },
    {
      label: "Landmarks & semantics",
      status: "Mostly aligned",
      color: "text-emerald-200",
      dot: "bg-emerald-400",
    },
  ];

  const findings: Finding[] = [
    {
      id: "1.3.1",
      title: "Form inputs are missing programmatic labels",
      severity: "Critical",
      area: "Contact form",
      impact: "Screen-reader users cannot identify field purpose reliably.",
      evidence:
        "Name, email, and message fields rely on placeholder text only. Labels are not consistently announced by assistive technologies.",
      remediation:
        "Associate visible labels with each input using htmlFor and id. Keep placeholder text optional rather than instructional.",
      status: "Open",
    },
    {
      id: "2.4.7",
      title: "Keyboard focus states are visually insufficient",
      severity: "Serious",
      area: "Primary navigation",
      impact:
        "Keyboard users may lose track of current position while navigating menus.",
      evidence:
        "Focus ring is removed on header links and primary CTA buttons. Hover styling does not translate into accessible focus indicators.",
      remediation:
        "Restore high-contrast focus styles with visible outline or ring treatment meeting contrast and persistence requirements.",
      status: "Open",
    },
    {
      id: "1.4.3",
      title: "Text contrast falls below minimum requirements",
      severity: "Moderate",
      area: "Pricing cards",
      impact:
        "Users with low vision may struggle to read secondary text and meta information.",
      evidence:
        "Muted gray text over soft cyan card backgrounds does not meet required contrast thresholds in multiple card footers.",
      remediation:
        "Darken body copy and metadata tokens or lighten card backgrounds to reach compliant contrast ratios.",
      status: "Open",
    },
    {
      id: "2.4.3",
      title: "Focus order becomes inconsistent in modal interactions",
      severity: "Serious",
      area: "Booking modal",
      impact:
        "Keyboard users may lose navigation context when dialogs open or close.",
      evidence:
        "Focus can land behind the modal in certain states, and the close action is not always reached in a predictable sequence.",
      remediation:
        "Trap focus within the modal, restore focus to the triggering control on close, and ensure a consistent tab sequence.",
      status: "Open",
    },
    {
      id: "1.3.2",
      title: "Heading order skips levels on content templates",
      severity: "Moderate",
      area: "Content pages",
      impact:
        "Screen-reader users may encounter reduced structural clarity when navigating by headings.",
      evidence:
        "Several content sections jump from H2 to H4 styling without preserving semantic heading order.",
      remediation:
        "Refactor heading structure to preserve a logical H1–H2–H3 sequence aligned to page hierarchy.",
      status: "Open",
    },
  ];

  const timeline: TimelineItem[] = [
    {
      label: "Discovery & scope",
      detail: "Pages, user flows, and design system components selected",
      state: "Complete",
    },
    {
      label: "Manual audit",
      detail:
        "Keyboard, screen-reader, contrast, and interaction testing completed",
      state: "Complete",
    },
    {
      label: "Engineering remediation",
      detail: "Critical and serious issues prioritized for implementation",
      state: "Pending",
    },
    {
      label: "Validation round",
      detail: "Retest after fixes and confirm status by issue",
      state: "Pending",
    },
  ];

  const statusTone = (status: Finding["status"]) => {
    if (status === "Resolved") {
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-100";
    }
    if (status === "In progress") {
      return "border-amber-400/20 bg-amber-400/10 text-amber-100";
    }
    return "border-rose-400/20 bg-rose-400/10 text-rose-100";
  };

  const severityTone = (severity: Finding["severity"]) => {
    if (severity === "Critical") {
      return "border-rose-400/20 bg-rose-400/10 text-rose-100";
    }
    if (severity === "Serious") {
      return "border-amber-400/20 bg-amber-400/10 text-amber-100";
    }
    if (severity === "Moderate") {
      return "border-yellow-400/20 bg-yellow-400/10 text-yellow-100";
    }
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-100";
  };

  return (
    <div className="min-h-screen bg-[#06101d] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, rgba(30,144,255,0.12), transparent 25%), radial-gradient(circle at 100% 10%, rgba(45,212,191,0.09), transparent 28%), linear-gradient(180deg, #06101d 0%, #07111f 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        <div className="mb-6">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 transition duration-200 hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeftIcon />
            Back to audit page
          </Link>
        </div>

        <header className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,#0b1930_0%,#112543_42%,#11746e_100%)] shadow-[0_36px_140px_rgba(0,0,0,0.42)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/16" />
          <div className="absolute bottom-[-120px] left-1/2 h-[240px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative px-6 py-9 lg:px-10 lg:py-11">
            <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/82 backdrop-blur-sm">
                  Verified WCAG report
                </div>

                <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[54px]">
                  Premium Accessibility
                  <br />
                  Audit Report
                </h1>

                <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/78">
                  Executive-ready summary, severity-based findings, reproducible
                  evidence, and engineering-aligned remediation guidance mapped to
                  WCAG 2.2 AA.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Human reviewed",
                    "Legal-ready structure",
                    "Engineering remediation",
                    "Sample report",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/14 bg-white/[0.07] px-3 py-2 text-xs font-medium text-white/82 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {readiness.map((item) => (
                    <div
                      key={item.label}
                      className="min-h-[134px] rounded-[22px] border border-white/10 bg-white/[0.05] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/48">
                        {item.label}
                      </p>
                      <div
                        className={`mt-4 inline-flex rounded-full border px-3 py-1.5 text-sm font-semibold ${item.tone}`}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {summaryStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group min-h-[198px] rounded-[24px] border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition duration-200 hover:bg-white/[0.08]"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/56">
                      {stat.label}
                    </p>
                    <p className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-[44px]">
                      {stat.value}
                    </p>
                    <p className="mt-4 max-w-[18ch] text-[15px] leading-7 text-white/66">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.43fr_0.57fr]">
              <div className="rounded-[28px] border border-white/10 bg-[#0b1830]/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/52">
                      Audit status
                    </p>
                    <h2 className="mt-2 text-[26px] font-semibold tracking-[-0.04em] text-white">
                      Compliance status
                    </h2>
                  </div>
                  <span className="rounded-full border border-rose-400/30 bg-rose-400/12 px-3 py-1.5 text-sm font-semibold text-rose-100">
                    Not compliant
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_60%,transparent_100%)]">
                    <div className="absolute inset-3 rounded-full border border-white/8" />
                    <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                      <circle
                        cx="60"
                        cy="60"
                        r="44"
                        stroke="rgba(255,255,255,0.10)"
                        strokeWidth="10"
                        fill="none"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="44"
                        stroke={`url(#${progressGradientId})`}
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="276"
                        strokeDashoffset="112"
                      />
                      <defs>
                        <linearGradient
                          id={progressGradientId}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#2dd4bf" />
                          <stop offset="100%" stopColor="#38bdf8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                        Score
                      </span>
                      <span className="mt-1 text-[34px] font-semibold leading-none tracking-[-0.05em] text-white">
                        59%
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] leading-7 text-white/76">
                      Current audit status indicates the site is{" "}
                      <span className="font-semibold text-white">not yet compliant</span>{" "}
                      with WCAG 2.2 AA due to unresolved blockers in form semantics,
                      focus visibility, and interaction patterns across critical user
                      flows.
                    </p>

                    <div className="mt-4">
                      <div className="h-2.5 rounded-full bg-white/10">
                        <div className="h-2.5 w-[59%] rounded-full bg-[linear-gradient(90deg,#2dd4bf_0%,#38bdf8_100%)] shadow-[0_0_20px_rgba(45,212,191,0.35)]" />
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-white/50">
                        <span>Estimated compliance readiness</span>
                        <span>59%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#0b1830]/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/52">
                  Status matrix
                </p>
                <h2 className="mt-2 text-[26px] font-semibold tracking-[-0.04em] text-white">
                  Compliance checkpoints
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {complianceChecks.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[18px] border border-white/8 bg-[#0c1630] px-4 py-4"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`} />
                        <p className="text-sm font-medium text-white">{item.label}</p>
                      </div>
                      <p className={`mt-2 text-sm font-semibold ${item.color}`}>
                        {item.status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <div className="space-y-8">
            <PremiumPanel>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/82">
                    Executive summary
                  </p>
                  <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.04em] text-white">
                    Audit overview
                  </h2>
                </div>
                <div className="inline-flex rounded-full border border-rose-400/20 bg-rose-400/10 px-4 py-2 text-sm font-medium text-rose-100">
                  Overall risk: Elevated
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <h3 className="text-lg font-semibold text-white">What this means</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    The site demonstrates a strong visual design system, but several
                    critical user flows contain accessibility blockers that increase
                    compliance risk and reduce task completion for keyboard and
                    assistive-technology users.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    Highest-priority issues affect forms, focus visibility, dialog
                    behavior, and content contrast in conversion-critical areas.
                    These should be resolved before broader design refinements.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <h3 className="text-lg font-semibold text-white">Severity breakdown</h3>
                  <div className="mt-5 space-y-4">
                    {severityBreakdown.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center justify-between text-sm text-white/72">
                          <span>{item.label}</span>
                          <span className="font-medium text-white/84">{item.count}</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-white/8">
                          <div
                            className={`h-2.5 rounded-full ${item.tone} ${item.glow}`}
                            style={{ width: item.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PremiumPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              <PremiumPanel>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/82">
                  Scope
                </p>
                <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.04em] text-white">
                  What was reviewed
                </h2>
                <div className="mt-5 space-y-3">
                  {auditScope.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/74"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </PremiumPanel>

              <PremiumPanel>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/82">
                  Methodology
                </p>
                <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.04em] text-white">
                  How it was tested
                </h2>
                <div className="mt-5 space-y-3">
                  {testingMethods.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/74"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {assistiveTech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/72"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </PremiumPanel>
            </div>

            <PremiumPanel>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/82">
                    Remediation timeline
                  </p>
                  <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.04em] text-white">
                    Recommended path
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {timeline.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                          item.state === "Complete"
                            ? "bg-emerald-400/12 text-emerald-200"
                            : "bg-amber-400/12 text-amber-200"
                        }`}
                      >
                        {item.state}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/68">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </PremiumPanel>

            <PremiumPanel>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/82">
                    Findings
                  </p>
                  <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.04em] text-white">
                    Priority issues
                  </h2>
                </div>
                <div className="text-sm text-white/55">
                  Sorted by severity and user impact
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {findings.map((finding) => (
                  <article
                    key={finding.id}
                    className="rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-cyan-400/18 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                            WCAG {finding.id}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] text-white/70">
                            {finding.area}
                          </span>
                          <span
                            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${severityTone(
                              finding.severity
                            )}`}
                          >
                            {finding.severity}
                          </span>
                          <span
                            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${statusTone(
                              finding.status
                            )}`}
                          >
                            {finding.status}
                          </span>
                        </div>

                        <h3 className="mt-4 text-[22px] font-semibold leading-[1.15] tracking-[-0.04em] text-white">
                          {finding.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4 lg:grid-cols-3">
                      <FindingBox title="User impact" text={finding.impact} />
                      <FindingBox title="Evidence" text={finding.evidence} />
                      <FindingBox title="Remediation" text={finding.remediation} />
                    </div>
                  </article>
                ))}
              </div>
            </PremiumPanel>
          </div>

          <aside className="space-y-8">
            <PremiumPanel>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/82">
                Key issues found
              </p>
              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.04em] text-white">
                At a glance
              </h2>
              <div className="mt-5 space-y-3">
                {topIssues.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/76"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </PremiumPanel>

            <section className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(135deg,#0b5b64_0%,#0b6d73_34%,#18836a_100%)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/72">
                  Recommended next step
                </p>
                <h2 className="mt-3 text-[30px] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                  Begin remediation sprint
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/82">
                  Address critical form labeling and keyboard focus blockers first,
                  then move into contrast and structural improvements across templates.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="button"
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b1a2a] shadow-[0_14px_38px_rgba(255,255,255,0.18)] transition hover:bg-white/95"
                  >
                    Book remediation call
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-white/18 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
                  >
                    Download PDF version
                  </button>
                </div>
              </div>
            </section>
          </aside>
        </section>
      </div>
    </div>
  );
}

function PremiumPanel({ children }: { children: ReactNode }) {
  return (
    <section className="rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,#0a1527_0%,#091321_100%)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      {children}
    </section>
  );
}

function FindingBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[18px] border border-white/8 bg-[#0d1a2d] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-white/74">{text}</p>
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}