"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import AnimatedGradient from "@/components/AnimatedGradient";
import ScrollReveal from "@/components/ScrollReveal";

type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  level: string;
  summary: string;
  salary: string;
  workModel: string;
  team: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  process: string[];
};

type PrincipleIconType = "shield" | "spark" | "users";

const jobs: Job[] = [
  {
    id: "accessibility-auditor",
    title: "Accessibility Auditor",
    location: "Remote · United States",
    type: "Full-time",
    department: "Audit & Compliance",
    level: "Mid–Senior",
    salary: "Competitive compensation based on experience",
    workModel: "Remote-first · US-based",
    team: "Audit & Compliance",
    summary:
      "Lead manual WCAG audits, document accessibility issues, and help clients reduce compliance risk with clear, developer-ready findings.",
    responsibilities: [
      "Perform manual WCAG 2.2 AA audits across web experiences and digital workflows.",
      "Validate accessibility issues with structured testing and clear evidence.",
      "Write findings that engineering and product teams can implement with confidence.",
      "Support remediation reviews and help prioritize risk across client engagements.",
    ],
    requirements: [
      "Strong knowledge of WCAG, semantic HTML, keyboard accessibility, and screen reader behavior.",
      "Experience documenting accessibility issues in a clear, implementation-ready format.",
      "Ability to communicate professionally with internal teams and client stakeholders.",
      "Experience with accessibility testing tools is helpful, but manual validation skills are essential.",
    ],
    benefits: [
      "High-trust remote team",
      "Meaningful accessibility work",
      "Flexible, focused environment",
      "Opportunity to influence delivery standards",
    ],
    process: [
      "Intro conversation",
      "Role-focused interview",
      "Practical review or sample discussion",
      "Final team conversation",
    ],
  },
  {
    id: "frontend-accessibility-engineer",
    title: "Frontend Accessibility Engineer",
    location: "Remote · United States",
    type: "Full-time",
    department: "Engineering",
    level: "Senior",
    salary: "Competitive compensation based on experience",
    workModel: "Remote-first · US-based",
    team: "Engineering",
    summary:
      "Fix accessibility issues in modern React applications, improve semantic structure, keyboard access, and screen reader support across client projects.",
    responsibilities: [
      "Resolve accessibility issues in production-grade React and Next.js applications.",
      "Improve semantic structure, focus management, forms, dialogs, and navigation patterns.",
      "Partner with auditors and project leads to implement practical remediation.",
      "Help raise frontend quality across accessibility, responsiveness, and usability.",
    ],
    requirements: [
      "Strong React and modern frontend engineering experience.",
      "Deep understanding of semantic HTML, ARIA, keyboard interaction, and assistive technology behavior.",
      "Ability to translate audit findings into polished, maintainable code.",
      "Strong communication and ownership in a remote environment.",
    ],
    benefits: [
      "Hands-on product and client impact",
      "Accessibility-first engineering culture",
      "Remote-first collaboration",
      "High-quality design and delivery standards",
    ],
    process: [
      "Intro conversation",
      "Technical interview",
      "Code or remediation discussion",
      "Final team conversation",
    ],
  },
  {
    id: "accessibility-project-manager",
    title: "Accessibility Project Manager",
    location: "Remote · United States",
    type: "Full-time",
    department: "Client Delivery",
    level: "Mid–Senior",
    salary: "Competitive compensation based on experience",
    workModel: "Remote-first · US-based",
    team: "Client Delivery",
    summary:
      "Coordinate audits, remediation workflows, client communication, and timelines across multiple accessibility engagements.",
    responsibilities: [
      "Manage timelines, stakeholder communication, and delivery milestones across accessibility engagements.",
      "Coordinate between auditors, engineers, and clients to keep work moving clearly.",
      "Help structure remediation priorities and maintain delivery confidence.",
      "Improve the quality and predictability of project communication.",
    ],
    requirements: [
      "Experience managing digital delivery projects with multiple stakeholders.",
      "Strong written communication and clear follow-through.",
      "Ability to organize technical and compliance-related workflows.",
      "Accessibility experience is a plus, but ownership and clarity are critical.",
    ],
    benefits: [
      "Direct client impact",
      "High-trust ownership",
      "Remote-first collaboration",
      "Mission-driven delivery work",
    ],
    process: [
      "Intro conversation",
      "Project delivery interview",
      "Scenario discussion",
      "Final team conversation",
    ],
  },
  {
    id: "technical-support-specialist",
    title: "Technical Support Specialist",
    location: "Remote · United States",
    type: "Full-time",
    department: "Support",
    level: "Mid",
    salary: "Competitive compensation based on experience",
    workModel: "Remote-first · US-based",
    team: "Support",
    summary:
      "Help customers understand reports, platform workflows, and accessibility priorities while ensuring a premium support experience.",
    responsibilities: [
      "Support customers with report interpretation, workflows, and next-step guidance.",
      "Communicate clearly and professionally across support conversations.",
      "Escalate issues thoughtfully and help maintain a premium service experience.",
      "Identify recurring friction points and help improve support quality over time.",
    ],
    requirements: [
      "Strong communication and customer support instincts.",
      "Ability to explain technical or compliance-related topics clearly.",
      "High attention to detail and follow-through.",
      "Accessibility familiarity is a plus.",
    ],
    benefits: [
      "Meaningful customer impact",
      "Premium support culture",
      "Remote-first team",
      "Opportunity to shape support quality",
    ],
    process: [
      "Intro conversation",
      "Support interview",
      "Scenario-based discussion",
      "Final team conversation",
    ],
  },
  {
    id: "content-compliance-writer",
    title: "Content & Compliance Writer",
    location: "Remote · United States",
    type: "Contract",
    department: "Content",
    level: "Mid",
    salary: "Project-based or contract compensation depending on scope",
    workModel: "Remote-first · US-based preferred",
    team: "Content & Compliance",
    summary:
      "Create clear accessibility documentation, help-center content, summaries, and legal-ready reporting language for clients and internal teams.",
    responsibilities: [
      "Write structured accessibility and compliance-focused content for clients and internal workflows.",
      "Translate technical findings into clear, polished documentation.",
      "Help improve tone, consistency, and credibility across client-facing materials.",
      "Support reports, knowledge base content, and implementation guidance.",
    ],
    requirements: [
      "Excellent writing and editing skills.",
      "Comfort working with technical, legal-adjacent, or compliance-oriented material.",
      "Ability to simplify complexity without losing accuracy.",
      "Accessibility or digital compliance experience is highly valuable.",
    ],
    benefits: [
      "Flexible contract work",
      "Mission-driven writing",
      "Clear scope and quality expectations",
      "High-value client-facing impact",
    ],
    process: [
      "Intro conversation",
      "Writing sample review",
      "Role discussion",
      "Final decision conversation",
    ],
  },
  {
    id: "business-development-representative",
    title: "Business Development Representative",
    location: "Remote · United States",
    type: "Full-time",
    department: "Growth",
    level: "Mid",
    salary: "Base + performance-based upside depending on experience",
    workModel: "Remote-first · US-based",
    team: "Growth",
    summary:
      "Connect with organizations that need WCAG and ADA support, qualify leads, and help build trusted relationships in the accessibility space.",
    responsibilities: [
      "Identify and qualify organizations that need accessibility support.",
      "Run thoughtful outreach and early conversations with a trust-first approach.",
      "Help position Accessive clearly across audits, remediation, and monitoring.",
      "Partner closely with leadership to improve messaging and sales process quality.",
    ],
    requirements: [
      "Experience in B2B outreach, sales development, or consultative lead qualification.",
      "Strong communication and professional presence.",
      "Ability to explain complex service offerings in a simple, credible way.",
      "Interest in accessibility, compliance, or trust-driven digital services.",
    ],
    benefits: [
      "Meaningful market",
      "Premium positioning",
      "High-trust environment",
      "Direct growth impact",
    ],
    process: [
      "Intro conversation",
      "Role interview",
      "Messaging or outreach discussion",
      "Final team conversation",
    ],
  },
];

const highlights = [
  "Real accessibility audits and measurable remediation work",
  "Remote-first team with high standards and strong ownership",
  "Clear client impact across compliance, usability, and delivery quality",
] as const;

const principles: ReadonlyArray<{
  title: string;
  text: string;
  icon: PrincipleIconType;
}> = [
  {
    title: "Real accessibility impact",
    text: "You will work on live audits, real remediation, and measurable improvements that help people use digital products with more confidence.",
    icon: "shield",
  },
  {
    title: "High standards, no shortcuts",
    text: "We care about semantic structure, keyboard support, clear reporting, and premium execution—not checkbox compliance.",
    icon: "spark",
  },
  {
    title: "Strong ownership, clear communication",
    text: "We value thoughtful collaboration, fast iteration, and people who take responsibility for excellent outcomes.",
    icon: "users",
  },
] as const;

const hiringSignals = [
  "Remote-first",
  "US-based roles",
  "Competitive compensation",
  "Accessibility-focused",
] as const;

const whyAccessiveRows = [
  "Manual WCAG audits and expert validation",
  "Developer-ready remediation guidance",
  "High-trust remote collaboration",
] as const;

function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
    </svg>
  );
}

function UsersIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a3.5 3.5 0 0 1 0 6.74" />
    </svg>
  );
}

function SparkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4L12 3z" />
      <path d="M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16z" />
      <path d="M5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16z" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

function ChevronDownIcon({ className = "h-4 w-4" }: { className?: string }) {
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
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
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/90 sm:text-sm">
      {children}
    </p>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[24px] sm:rounded-[28px] border border-white/10",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.065),rgba(255,255,255,0.03))]",
        "shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function PrincipleIcon({ type }: { type: PrincipleIconType }) {
  if (type === "shield") return <ShieldIcon />;
  if (type === "spark") return <SparkIcon />;
  return <UsersIcon />;
}

function PrincipleCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: PrincipleIconType;
}) {
  return (
    <article className="h-full rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/[0.045] p-5 sm:p-7 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06]">
      <div className="mb-5 inline-flex rounded-2xl border border-cyan-300/15 bg-cyan-400/10 p-3 text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <PrincipleIcon type={icon} />
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-[22px]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/76">{text}</p>
    </article>
  );
}

function MetaPill({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "accent";
}) {
  const toneClasses =
    tone === "accent"
      ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
      : "border-white/10 bg-white/[0.045] text-white/78";

  return (
    <span
      className={`inline-flex min-h-[32px] items-center rounded-full border px-3 py-1 text-xs font-medium ${toneClasses}`}
    >
      {children}
    </span>
  );
}

function DividerGlow() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-px w-full max-w-7xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),rgba(103,232,249,0.28),rgba(255,255,255,0.08),transparent)]"
    />
  );
}

function WhyAccessiveCard({ totalOpenRoles }: { totalOpenRoles: number }) {
  return (
    <GlassCard className="relative overflow-hidden p-5 sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top, rgba(103,232,249,0.10), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,0.035), transparent 55%)
          `,
        }}
      />

      <div className="relative">
        <SectionEyebrow>Why Accessive</SectionEyebrow>

        <h2 className="mt-3 max-w-[14ch] text-[1.9rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[2.1rem]">
          Accessibility work with real ownership and real impact
        </h2>

        <p className="mt-4 max-w-[34rem] text-sm leading-7 text-white/76">
          This is not generic agency work. We help clients move from uncertainty to real compliance progress through audits, fixes, and documentation they can trust.
        </p>

        <div className="mt-6 space-y-3">
          {whyAccessiveRows.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/82"
            >
              <span className="mt-0.5 inline-flex rounded-full bg-cyan-400/12 p-1.5 text-cyan-200">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span className="leading-6">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-cyan-200">
              {totalOpenRoles}
            </p>
            <p className="mt-1 text-sm text-white/72">Open roles</p>
          </div>

          <div className="h-10 w-px bg-white/10" aria-hidden="true" />

          <div>
            <p className="text-2xl font-semibold tracking-tight text-cyan-200">Remote</p>
            <p className="mt-1 text-sm text-white/72">US-based hiring focus</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function JobAccordionCard({
  job,
  isOpen,
  onToggle,
}: {
  job: Job;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const buttonId = `${job.id}-button`;
  const panelId = `${job.id}-panel`;
  const titleId = `${job.id}-title`;

  return (
    <article
      className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_18px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.06]"
      aria-labelledby={titleId}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.28),transparent)]"
      />

      <div className="p-5 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <MetaPill tone="accent">{job.department}</MetaPill>
              <MetaPill>{job.level}</MetaPill>
              <MetaPill>{job.type}</MetaPill>
              <MetaPill>{job.location}</MetaPill>
            </div>

            <h3
              id={titleId}
              className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-[28px]"
            >
              {job.title}
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/76">
              {job.summary}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                {job.workModel}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                {job.salary}
              </span>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 xl:items-end">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={onToggle}
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/25 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
            >
              {isOpen ? "Hide details" : "View details"}
              <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                <ChevronDownIcon />
              </span>
            </button>

            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_36px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
              aria-label={`Apply for ${job.title}`}
            >
              Apply now
              <ArrowRightIcon />
            </Link>
          </div>
        </div>

        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className={`grid transition-all duration-500 ease-out ${
            isOpen ? "mt-7 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 pt-7">
              <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
                <GlassCard className="p-5 sm:p-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
                        Work model
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/78">{job.workModel}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
                        Compensation
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/78">{job.salary}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
                        Team
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/78">{job.team}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
                        Role level
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/78">{job.level}</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
                    Hiring process
                  </p>
                  <ol className="mt-4 grid gap-3">
                    {job.process.map((step, index) => (
                      <li key={step} className="flex items-start gap-3 text-sm leading-7 text-white/78">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-xs font-semibold text-cyan-200">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </GlassCard>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-3">
                <GlassCard className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
                    Key responsibilities
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/78">
                        <span className="mt-1 inline-flex rounded-full bg-cyan-400/12 p-1.5 text-cyan-200">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
                    What we&apos;re looking for
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {job.requirements.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/78">
                        <span className="mt-1 inline-flex rounded-full bg-cyan-400/12 p-1.5 text-cyan-200">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
                    Why people join
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {job.benefits.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/78">
                        <span className="mt-1 inline-flex rounded-full bg-cyan-400/12 p-1.5 text-cyan-200">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CareersPageContent() {
  const [openJobId, setOpenJobId] = useState<string | null>(jobs[0].id);
  const totalOpenRoles = useMemo(() => jobs.length, []);

  return (
    <div className="min-h-screen bg-[#06111f] text-white">
      <Header />

      <a
        href="#open-roles"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950 focus:outline-none"
      >
        Skip to open roles
      </a>

      <main id="main-content" className="relative isolate overflow-hidden">
        <AnimatedGradient />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 12% 12%, rgba(34, 211, 238, 0.10), transparent 24%),
              radial-gradient(circle at 84% 10%, rgba(59, 130, 246, 0.12), transparent 26%),
              radial-gradient(circle at 45% 20%, rgba(255, 255, 255, 0.03), transparent 18%),
              linear-gradient(180deg, rgba(7, 16, 31, 0.12) 0%, rgba(5, 12, 24, 0.28) 40%, rgba(3, 8, 18, 0.72) 78%, rgba(2, 6, 14, 0.96) 100%)
            `,
          }}
        />

        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-14 lg:px-10 lg:pt-36 lg:pb-16">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.16fr)_minmax(320px,380px)] xl:items-start xl:gap-8">
              <ScrollReveal>
                <div className="max-w-5xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <UsersIcon className="h-4 w-4" />
                    Careers at Accessive
                  </div>

                  <h1 className="max-w-5xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.02] xl:text-[60px]">
                    Build accessibility work that matters.
                  </h1>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
                    Join a team delivering expert WCAG audits, practical remediation,
                    and premium client service. We help organizations reduce compliance
                    risk, improve usability, and build digital experiences that work for more people.
                  </p>

                  <ul
                    className="mt-7 grid gap-3 md:max-w-3xl md:grid-cols-2"
                    aria-label="Why join Accessive"
                  >
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm leading-6 text-white/82"
                      >
                        <span className="mt-0.5 inline-flex rounded-full bg-cyan-400/12 p-1.5 text-cyan-200">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="#open-roles"
                      className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_36px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
                    >
                      Explore open roles
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRightIcon />
                      </span>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
                    >
                      General application
                    </Link>
                  </div>

                  <ul
                    className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/80"
                    aria-label="Career highlights"
                  >
                    {hiringSignals.map((item) => (
                      <li key={item}>
                        <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <WhyAccessiveCard totalOpenRoles={totalOpenRoles} />
              </ScrollReveal>
            </div>

            <div className="mt-6 sm:mt-8">
              <ScrollReveal>
                <div className="grid gap-4 md:grid-cols-3 md:gap-5">
                  {principles.map((principle) => (
                    <PrincipleCard
                      key={principle.title}
                      title={principle.title}
                      text={principle.text}
                      icon={principle.icon}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="relative py-4">
          <DividerGlow />
        </section>

        <section id="open-roles" className="relative scroll-mt-28">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
            <ScrollReveal>
              <div className="mb-8 max-w-3xl sm:mb-10">
                <SectionEyebrow>Open roles</SectionEyebrow>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Current opportunities
                </h2>

                <p className="mt-4 text-base leading-8 text-white/76 sm:text-lg">
                  Explore responsibilities, expectations, work model, and hiring process before you apply.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5">
              {jobs.map((job) => (
                <ScrollReveal key={job.id}>
                  <JobAccordionCard
                    job={job}
                    isOpen={openJobId === job.id}
                    onToggle={() => setOpenJobId((prev) => (prev === job.id ? null : job.id))}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-4">
          <DividerGlow />
        </section>

        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-18">
            <ScrollReveal>
              <GlassCard className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div>
                    <SectionEyebrow>How we hire</SectionEyebrow>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      A clearer hiring experience for thoughtful candidates
                    </h2>
                    <p className="mt-4 text-base leading-8 text-white/78 sm:text-lg">
                      We aim to make the process clear, respectful, and useful. That means
                      role transparency, focused conversations, and practical evaluation instead of unnecessary complexity.
                    </p>
                  </div>

                  <ol className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Intro call to understand fit and motivation",
                      "Role-specific interview with relevant team members",
                      "Practical review or scenario discussion where relevant",
                      "Final conversation with clear next steps",
                    ].map((step, index) => (
                      <li
                        key={step}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                      >
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                          {index + 1}
                        </div>
                        <p className="mt-4 text-sm leading-7 text-white/78">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.14),rgba(37,99,235,0.12),rgba(15,23,42,0.48))] p-6 sm:p-8 lg:p-10 shadow-[0_24px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(circle at top right, rgba(103,232,249,0.12), transparent 28%),
                      linear-gradient(180deg, rgba(255,255,255,0.035), transparent 58%)
                    `,
                  }}
                />

                <div className="relative flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
                  <div className="max-w-3xl">
                    <SectionEyebrow>Don’t see the right fit?</SectionEyebrow>

                    <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.04]">
                      We’re always looking for top accessibility talent
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                      If you have experience in accessibility audits, remediation,
                      frontend engineering, technical writing, client delivery, or support,
                      reach out and tell us how you could contribute.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:self-end lg:justify-end lg:pt-10">
                    <Link
                      href="/contact"
                      className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_36px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
                    >
                      Contact hiring team
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRightIcon />
                      </span>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
                    >
                      General application
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      
    </div>
  );
}