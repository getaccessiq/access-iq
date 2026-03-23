"use client";

import React from "react";
import Link from "next/link";
import AnimatedGradient from "@/components/AnimatedGradient";
import ScrollReveal from "@/components/ScrollReveal";

type Job = {
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
  level: string;
};

type PrincipleIconType = "shield" | "spark" | "users";

const jobs: Job[] = [
  {
    title: "Accessibility Auditor",
    location: "Remote · US",
    type: "Full-time",
    department: "Audit & Compliance",
    level: "Mid–Senior",
    summary:
      "Lead manual WCAG audits, document accessibility issues, and help clients reduce compliance risk with clear, developer-ready findings.",
  },
  {
    title: "Frontend Accessibility Engineer",
    location: "Remote · US",
    type: "Full-time",
    department: "Engineering",
    level: "Senior",
    summary:
      "Fix accessibility issues in modern React applications, improve semantic structure, keyboard access, and screen reader support across client projects.",
  },
  {
    title: "Accessibility Project Manager",
    location: "Remote · US",
    type: "Full-time",
    department: "Client Delivery",
    level: "Mid–Senior",
    summary:
      "Coordinate audits, remediation workflows, client communication, and timelines across multiple accessibility engagements.",
  },
  {
    title: "Technical Support Specialist",
    location: "Remote · US",
    type: "Full-time",
    department: "Support",
    level: "Mid",
    summary:
      "Help customers understand reports, platform workflows, and accessibility priorities while ensuring a premium support experience.",
  },
  {
    title: "Content & Compliance Writer",
    location: "Remote · US",
    type: "Contract",
    department: "Content",
    level: "Mid",
    summary:
      "Create clear accessibility documentation, help-center content, summaries, and legal-ready reporting language for clients and internal teams.",
  },
  {
    title: "Business Development Representative",
    location: "Remote · US",
    type: "Full-time",
    department: "Growth",
    level: "Mid",
    summary:
      "Connect with organizations that need WCAG and ADA support, qualify leads, and help build trusted relationships in the accessibility space.",
  },
];

const highlights = [
  "Work on real accessibility audits and remediation",
  "Help reduce legal and compliance risk for clients",
  "Join a focused, high-trust remote team",
] as const;

const principles: ReadonlyArray<{
  title: string;
  text: string;
  icon: PrincipleIconType;
}> = [
  {
    title: "Real accessibility impact",
    text: "Work on live audits, real remediation, and measurable improvements that help people use digital products with confidence.",
    icon: "shield",
  },
  {
    title: "High standards, no shortcuts",
    text: "We care about semantic structure, keyboard support, clear reporting, and premium execution—not checkbox compliance.",
    icon: "spark",
  },
  {
    title: "Strong ownership, clear communication",
    text: "We value thoughtful collaboration, fast iteration, and team members who take responsibility for excellent outcomes.",
    icon: "users",
  },
] as const;

const whyAccessIQItems = [
  "Manual WCAG audits",
  "Developer-ready remediation guidance",
  "Premium client delivery",
  "Clear standards and strong execution",
] as const;

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

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
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/90 sm:text-sm">
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
        "rounded-[28px] border border-white/10",
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
    <article className="h-full rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06] sm:p-7">
      <div className="mb-5 inline-flex rounded-2xl border border-cyan-300/15 bg-cyan-400/10 p-3 text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <PrincipleIcon type={icon} />
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-[22px]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/76 sm:text-[15px]">{text}</p>
    </article>
  );
}

function JobMetaPill({
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

function JobCard({ job }: { job: Job }) {
  const titleId = `${slugify(job.title)}-title`;

  return (
    <article
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06] sm:p-6 lg:p-7"
      aria-labelledby={titleId}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.28),transparent)]"
      />

      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <JobMetaPill tone="accent">{job.department}</JobMetaPill>
            <JobMetaPill>{job.level}</JobMetaPill>
            <JobMetaPill>{job.type}</JobMetaPill>
            <JobMetaPill>{job.location}</JobMetaPill>
          </div>

          <h3
            id={titleId}
            className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-[28px]"
          >
            {job.title}
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/76 sm:text-[15px]">
            {job.summary}
          </p>
        </div>

        <div className="flex shrink-0 items-start xl:pt-1">
          <Link
            href="/contact"
            className="group/btn inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/25 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
            aria-label={`Apply for ${job.title}`}
          >
            Apply now
            <span className="transition-transform duration-200 group-hover/btn:translate-x-0.5">
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </article>
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

export default function CareersPageContent() {
  return (
    <>
      <a
        href="#open-roles"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950 focus:outline-none"
      >
        Skip to open roles
      </a>

      <main className="relative isolate overflow-hidden bg-[#06111f] text-white">
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
          <div className="mx-auto max-w-7xl px-5 pt-20 pb-14 sm:px-8 sm:pt-24 sm:pb-16 lg:px-10 lg:pt-28 lg:pb-20">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,420px)] xl:items-end xl:gap-8">
              <ScrollReveal>
                <div className="max-w-5xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <UsersIcon className="h-4 w-4" />
                    Careers at AccessIQ
                  </div>

                  <h1 className="max-w-5xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02] xl:text-[68px]">
                    Help make the web truly accessible
                  </h1>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
                    Join a team delivering real WCAG audits, real remediation, and real
                    accessibility outcomes. We help organizations reduce compliance risk,
                    improve usability, and create digital experiences that work for more
                    people.
                  </p>

                  <ul className="mt-8 grid gap-3 md:max-w-2xl" aria-label="Why join AccessIQ">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white/82"
                      >
                        <span className="mt-0.5 inline-flex rounded-full bg-cyan-400/12 p-1.5 text-cyan-200">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/80">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
                      Remote-first
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
                      Accessibility-focused
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
                      High-trust team
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
                      Real client impact
                    </span>
                  </div>

                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
                      Apply without a listed role
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
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
                    <SectionEyebrow>Why AccessIQ</SectionEyebrow>

                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-[30px] sm:leading-[1.15]">
                      Accessibility work that actually matters
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/76 sm:text-[15px]">
                      This is not generic agency work. Our team helps clients move from
                      uncertainty to real compliance progress through audits, fixes,
                      monitoring, and documentation they can trust.
                    </p>

                    <div className="mt-6 space-y-3">
                      {whyAccessIQItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/82"
                        >
                          <span className="inline-flex rounded-full bg-cyan-400/12 p-1.5 text-cyan-200">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>

            <div className="mt-10 sm:mt-12">
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
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-18">
            <ScrollReveal>
              <div className="mb-8 max-w-3xl sm:mb-10">
                <SectionEyebrow>Open roles</SectionEyebrow>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Current opportunities
                </h2>

                <p className="mt-4 text-base leading-8 text-white/76 sm:text-lg">
                  We are building a team that combines accessibility expertise,
                  technical depth, and premium client delivery. Explore the roles below.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5">
              {jobs.map((job) => (
                <ScrollReveal key={job.title}>
                  <JobCard job={job} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-4">
          <DividerGlow />
        </section>

        <section className="relative">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.14),rgba(37,99,235,0.12),rgba(15,23,42,0.48))] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-8 lg:p-10">
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

                    <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[52px] lg:leading-[1.04]">
                      We’re always looking for top accessibility talent
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                      If you have experience in accessibility audits, remediation,
                      frontend engineering, technical writing, client delivery, or
                      support, send us your profile and tell us how you could contribute.
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
    </>
  );
}