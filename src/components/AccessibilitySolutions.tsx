"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const processSteps = ["Scan", "Audit", "Fix", "Monitor", "Certify"] as const;

const auditItems = [
  "WCAG 2.2 AA & ADA compliance verification",
  "Automated scans + expert manual audits",
  "Continuous monitoring & compliance reporting",
  "Detailed issue evidence with clear prioritization",
];

const legalItems = [
  "Legally defensible audit reports",
  "Verified by certified accessibility experts",
  "Complete documentation for legal compliance",
];

const fixItems = [
  "AI-detected issues with code-level insights",
  "WCAG-aligned fixes with developer guidance",
  "Prioritized remediation based on impact & risk",
  "Component-level fixes for faster implementation",
  "Retesting & certification readiness",
  "Ongoing validation for long-term compliance",
];

const trustedLogos = [
  { name: "Siemens", src: "/images/logos/siemens.svg", width: 118, height: 26 },
  { name: "Ford", src: "/images/logos/ford.svg", width: 92, height: 34 },
  { name: "Accenture", src: "/images/logos/accenture.svg", width: 126, height: 24 },
  { name: "Edgeward", src: "/images/logos/Logo_Edgeward_7384.png", width: 114, height: 24 },
  { name: "AccessIQ", src: "/images/logos/accessiq.svg", width: 112, height: 24 },
  { name: "Target", src: "/images/logos/target.svg", width: 102, height: 26 },
];

type CardIconType = "audit" | "legal" | "fix";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function ShieldMiniIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l6 2.5v4.7c0 4.1-2.6 7.7-6 9.3-3.4-1.6-6-5.2-6-9.3V6l6-2.5z"
        stroke="#16b89a"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#a9bdf8] bg-white px-4 py-2 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#dce7ff] bg-[#f7fbff]">
        <ShieldMiniIcon />
      </span>
      <span className="text-sm font-semibold text-[#243247]">
        Built for Enterprise Teams
      </span>
    </div>
  );
}

function ProcessIcon({ type }: { type: (typeof processSteps)[number] }) {
  const common = {
    stroke: "#1e293b",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "Scan") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" {...common} />
        <path d="M16 16l4 4" {...common} />
      </svg>
    );
  }

  if (type === "Audit") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 5h6l4 4v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
          {...common}
        />
        <path d="M14 5v4h4" {...common} />
      </svg>
    );
  }

  if (type === "Fix") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.5 6.5a4 4 0 0 0-5 5L5 16l3 3 4.5-4.5a4 4 0 0 0 5-5l-2.5 2.5-2-2 2.5-2.5z"
          {...common}
        />
      </svg>
    );
  }

  if (type === "Monitor") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" rx="2.5" {...common} />
        <path d="M9 19h6" {...common} />
        <path d="M12 16v3" {...common} />
      </svg>
    );
  }

  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" {...common} />
      <path d="M8.5 12l2.2 2.2 4.8-4.8" {...common} />
    </svg>
  );
}

function ProcessPill() {
  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#e3e8f0] bg-white px-5 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] md:gap-4 md:px-6">
      {processSteps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1c2635]">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#fbfcfe]">
              <ProcessIcon type={step} />
            </span>
            <span>{step}</span>
          </div>

          {index < processSteps.length - 1 && (
            <span className="hidden text-[#c8d0dc] md:inline">›</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function BulletCheck() {
  return (
    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5.5 12.5l4 4L18.5 7.5"
          stroke="#14c987"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <BulletCheck />
          <span className="text-[15px] leading-7 text-[#3e4b61]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ArrowRightMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GradientButton({
  href = "#",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#15d0b5] to-[#1f73ff] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(31,115,255,0.20)] transition-all duration-200 hover:-translate-y-0.5"
    >
      {children}
      <ArrowRightMini />
    </Link>
  );
}

function TextLink({
  href = "#",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#182334] transition-colors hover:text-[#1f73ff]"
    >
      {children}
      <ArrowRightMini />
    </Link>
  );
}

function CardIcon({ type }: { type: CardIconType }) {
  const common = {
    stroke: "#2a6df6",
    strokeWidth: 1.85,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#edf1f7] bg-white shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
      {type === "audit" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="5" width="10" height="14" rx="2" {...common} />
          <path d="M8 9h4M8 12h4M8 15h3" {...common} />
          <circle cx="18" cy="16" r="3" {...common} />
          <path d="M20.2 18.2 22 20" {...common} />
        </svg>
      )}

      {type === "legal" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4 18 6.5v4.8c0 4-2.5 7.4-6 8.9-3.5-1.5-6-4.9-6-8.9V6.5L12 4Z"
            {...common}
          />
          <path d="m9.3 12 1.8 1.8 3.8-3.8" {...common} />
        </svg>
      )}

      {type === "fix" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14.6 6.8a3.7 3.7 0 0 0-4.9 4.8L5 16.3 7.7 19l4.7-4.7a3.7 3.7 0 0 0 4.8-4.9l-2.4 2.4-2.6-2.6 2.4-2.4Z"
            {...common}
          />
          <path d="M7 7v2M7 3v2M3 7h2M9 7h2" {...common} />
        </svg>
      )}
    </div>
  );
}

function ComplianceChip({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[10px] border border-[#e6ebf3] bg-white px-3 py-2 text-[11px] font-semibold text-[#2d3850] shadow-[0_4px_12px_rgba(15,23,42,0.03)]">
      {icon}
      {label}
    </span>
  );
}

function ChipDocIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 5h7l3 3v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="#475569"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5v3h3"
        stroke="#475569"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChipGlobeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="#475569" strokeWidth="1.8" />
      <path
        d="M4 12h16M12 4c2.5 2.2 2.5 13.8 0 16M12 4c-2.5 2.2-2.5 13.8 0 16"
        stroke="#475569"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChipBadgeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="3" stroke="#475569" strokeWidth="1.8" />
      <path d="M9 12h6" stroke="#475569" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function WhiteCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-[30px] border border-[#edf1f6] bg-[#fbfbfc] p-7 shadow-[0_18px_44px_rgba(15,23,42,0.05)] md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}

function DarkImageCard({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-w-0 overflow-hidden rounded-[30px] border border-[#0a1a2d] bg-[#07111e] p-[3px]",
        className
      )}
      style={{
        boxShadow:
          "0 26px 62px rgba(13,31,61,0.22), 0 0 0 1px rgba(18,214,184,0.18)",
      }}
    >
      <div className="overflow-hidden rounded-[27px] bg-[#07111e]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}

function CardHeader({
  type,
  title,
  titleClassName,
}: {
  type: CardIconType;
  title: React.ReactNode;
  titleClassName?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <CardIcon type={type} />
      <div className="min-w-0 pt-1">
        <h3
          className={cn(
            "text-[28px] font-bold leading-[1.08] tracking-[-0.04em] text-[#0d1628] md:text-[36px]",
            titleClassName
          )}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { value: "20M+", label: "Pages Scanned" },
    { value: "120+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Uptime & Accuracy" },
    { value: "4.9 / 5", label: "Rated by Accessibility Teams", isRating: true },
  ];

  return (
    <div className="rounded-[28px] border border-[#e7ecf3] bg-[#f9fafb] px-5 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-[112px] flex-col justify-center"
            >
              {"isRating" in stat && stat.isRating ? (
                <div className="mb-2 flex items-center gap-1 text-[#f4b400]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 3.8l2.56 5.18 5.72.83-4.14 4.03.98 5.69L12 16.82 6.88 19.53l.98-5.69L3.72 9.81l5.72-.83L12 3.8z" />
                    </svg>
                  ))}
                </div>
              ) : (
                <div className="mb-2 h-[12px]" />
              )}

              <div className="text-[26px] font-bold leading-none tracking-[-0.03em] text-[#0c1526]">
                {stat.value}
              </div>

              <div className="mt-2 text-sm leading-6 text-[#69768b]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex min-h-[112px] flex-col justify-center border-t border-[#ebeff5] pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="mb-4 text-sm font-semibold text-[#202c3b]">
            Trusted by accessibility & compliance teams
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            {trustedLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-[28px] items-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-h-[26px] w-auto object-contain opacity-45 grayscale transition duration-200 hover:opacity-65"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccessibilitySolutions() {
  return (
    <section
      aria-labelledby="accessibility-solutions-heading"
      className="relative overflow-hidden bg-[#f5f7fb] py-16 md:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="mb-6 flex justify-center">
            <SectionBadge />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={80}>
          <div className="mx-auto max-w-[1280px] text-center">
            <h2
              id="accessibility-solutions-heading"
              className="font-bold leading-[1.02] tracking-[-0.045em] text-[#091223]"
            >
              <span className="mx-auto block max-w-[900px] whitespace-normal lg:whitespace-nowrap text-[34px] sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[74px]">
                Enterprise Accessibility.
              </span>
              <span className="mx-auto block max-w-[1180px] whitespace-normal lg:whitespace-nowrap bg-gradient-to-r from-[#15d2b6] to-[#1f73ff] bg-clip-text pb-1 text-[34px] text-transparent sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[74px]">
                Audit-Ready. Legally Protected.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-8 text-[#4c5870] md:text-[22px] md:leading-9">
              Automated scanning, expert audits, and AI-powered fixes — so you stay
              WCAG &amp; ADA compliant with confidence.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={140}>
          <div className="mt-8 flex justify-center md:mt-10">
            <ProcessPill />
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.35fr] xl:mt-14">
          <ScrollReveal animation="fade-in-left">
            <WhiteCard className="h-full">
              <CardHeader
                type="audit"
                title={
                  <>
                    Pass WCAG &amp; ADA
                    <br />
                    Audits Confidently
                  </>
                }
                titleClassName="max-w-[320px]"
              />

              <div className="mt-6">
                <FeatureList items={auditItems} />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <GradientButton href="#">Start Free Scan</GradientButton>
                <TextLink href="#">View Compliance Report</TextLink>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <ComplianceChip label="WCAG 2.2" icon={<ChipDocIcon />} />
                <ComplianceChip label="ADA" icon={<ChipGlobeIcon />} />
                <ComplianceChip label="EN 301 549" icon={<ChipBadgeIcon />} />
                <ComplianceChip label="508" icon={<ChipBadgeIcon />} />
              </div>
            </WhiteCard>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-right" delay={100}>
            <DarkImageCard
              src="/images/image-158.png"
              alt="Accessibility dashboard showing compliance score and issues"
              width={1200}
              height={760}
              className="h-full"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-in-left" delay={140}>
            <DarkImageCard
              src="/images/dashboard-risk.png"
              alt="ADA risk level dashboard with audit status"
              width={900}
              height={620}
              className="h-full"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-in-right" delay={180}>
            <WhiteCard className="h-full">
              <CardHeader
                type="legal"
                title={
                  <>
                    Avoid Lawsuits &amp; Stay
                    <br />
                    Legally Protected
                  </>
                }
                titleClassName="max-w-[390px]"
              />

              <div className="mt-6">
                <FeatureList items={legalItems} />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <GradientButton href="#">Get Your Audit Report</GradientButton>
                <TextLink href="#">Learn About Compliance</TextLink>
              </div>
            </WhiteCard>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-left" delay={220}>
            <WhiteCard className="h-full">
              <CardHeader
                type="fix"
                title={
                  <>
                    Expert-Guided
                    <br />
                    Accessibility Fixes
                  </>
                }
                titleClassName="max-w-[280px] text-[24px] leading-[1.06] md:text-[30px]"
              />

              <div className="mt-6">
                <FeatureList items={fixItems} />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <GradientButton href="#">View Accessibility Score</GradientButton>
                <TextLink href="#">See How It Works</TextLink>
              </div>
            </WhiteCard>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-right" delay={260}>
            <div className="relative h-full min-w-0">
              <DarkImageCard
                src="/images/fixes-chart.png"
                alt="Accessibility issues trend dashboard"
                width={1200}
                height={760}
                className="h-full"
              />

              <div className="absolute bottom-5 right-5 w-[185px] rounded-[20px] border border-white/10 bg-[#121a27]/95 p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur">
                <div className="text-sm font-semibold">AI Suggestions</div>

                <ul className="mt-3 space-y-2 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#18d5b5]" />
                    Missing alt text
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#18d5b5]" />
                    Color contrast issues
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#18d5b5]" />
                    Keyboard navigation
                  </li>
                </ul>

                <div className="mt-4 rounded-full bg-gradient-to-r from-[#13d1b5] to-[#1f73ff] px-3 py-2 text-center text-[11px] font-semibold text-white">
                  Auto-Fix Available
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-in-up" delay={300}>
          <div className="mt-8 md:mt-10">
            <StatsBar />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}